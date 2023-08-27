import UserModel from "../model/Users.model.js";

const createUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.create({ email });
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};

export default createUser;
