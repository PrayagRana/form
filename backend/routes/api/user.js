const User = require("../../models/User");

const router = require("express").Router();

//@GET Route
//@DESC Get all the Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    console.log(error.message);
  }
});

//@POST Route
//@DESC Create User
router.post("/", async (req, res) => {
  const { name, email, number, designation, city } = req.body;
  const userFields = {};
  try {
    if (name) userFields.name = name;
    if (email) userFields.email = email;
    if (number) userFields.number = number;
    if (designation) userFields.designation = designation;
    if (city) userFields.city = city;
    let user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "User Already Exists" });
    }
    user = new User(userFields);
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error.message);
  }
});

//@PUT Route
//@DESC Update user by ID
router.put("/:id", async (req, res) => {
  const { name, email, number, designation, city } = req.body;
  const userFields = {};
  try {
    if (name) userFields.name = name;
    if (email) userFields.email = email;
    if (number) userFields.number = number;
    if (designation) userFields.designation = designation;
    if (city) userFields.city = city;
    let user = await User.findById(req.params.id);
    if (user) {
      user = await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: userFields,
        },
        {
          new: true,
        }
      );
      return res.json(user);
    }
    res.json({ msg: "Enter a Valid ID" });
  } catch (error) {
    console.log(error.message);
  }
});

//@DELETE Route
//@DESC Delete user by ID
router.delete("/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (user) {
      user = await User.findOneAndRemove({ _id: req.params.id });
      return res.json({ msg: "User Removed" });
    }
    res.json({ msg: "Enter a Valid ID" });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
