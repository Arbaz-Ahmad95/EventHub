const router = require("express").Router();
const Event = require("../models/Event");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

// ================= CREATE EVENT =================
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const { title, description, dateTime, location, capacity } = req.body;

    if (!title || !description || !dateTime || !location || !capacity) {
      return res.status(400).json({ msg: "All fields required" });
    }

    const event = await Event.create({
      title,
      description,
      dateTime,
      location,
      capacity: Number(capacity), // ✅ ensure number
      image: req.file ? req.file.filename : "",
      createdBy: req.user.id,
      attendees: [],
    });

    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// ================= GET EVENTS =================
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// ================= JOIN EVENT (SAFE RSVP) =================
router.post("/:id/join", auth, async (req, res) => {
  try {
    const event = await Event.findOneAndUpdate(
      {
        _id: req.params.id,
        attendees: { $ne: req.user.id },
        $expr: { $lt: [{ $size: "$attendees" }, "$capacity"] },
      },
      { $push: { attendees: req.user.id } },
      { new: true }
    );

    if (!event) {
      return res.status(400).json({
        msg: "Event full or already joined",
      });
    }

    res.json({ msg: "Joined successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// ================= LEAVE EVENT =================
router.post("/:id/leave", auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ msg: "Event not found" });
    }

    event.attendees = event.attendees.filter(
      (u) => u.toString() !== req.user.id
    );

    await event.save();
    res.json({ msg: "Left event" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// ================= DELETE EVENT =================
router.delete("/:id", auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ msg: "Event not found" });
    }

    if (event.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not allowed" });
    }

    await event.deleteOne();
    res.json({ msg: "Event deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
