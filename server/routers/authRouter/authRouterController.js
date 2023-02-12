const User = require("../../db/models/user.model");
const bcrypt = require("bcryptjs");
const generateToken = require("./generateToken")
class AuthController {
  async registration(req, res) {
    try {
      const { password, login } = req.body;
      const hashPassword = bcrypt.hashSync(password, 5);
      const user = new User({ password: hashPassword, login });
      user.save();
      res.json({message: "registration success"})
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Something went wrong" });
    }
  }

  async login(req, res) {
    try {
        const { password, login } = req.body;
        const user = await User.findOne({login});
        if (!user){
            res.status(400).json({ message: "Пользователя не существует" });
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword){
            res.status(400).json({ message: "Неверный пароль" });
        }
        const token = generateToken(user._id, user.login);
        res.json({token})
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Something went wrong" });
    }
  }
}

module.exports = new AuthController();
