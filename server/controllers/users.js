const UserSchema = require("../database/modules/userSchema");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserSchema.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "The user already exists." });
    }
    const newUser = new UserSchema({
      name,
      email,
      password,
    });
    await newUser.save();
    res.status(201).json({ msg: "Register Success!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  register,
};
