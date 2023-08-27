import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

UserSchema.pre("save", async function (next) {
  const email = this.email;
  const user = await UserModel.findOne({ email });
  try {
    if (user) {
      const emailExists = new Error("Email is already in use");
      return next(emailExists);
    }
    next();
  } catch (error) {
    console.log(error);
  }
  // UserModel.findOne({ email }, (err, user) => {
  //   if (user) {
  //     const emailExists = new Error("Email is already in use");
  //     return next(emailExists);
  //   }
  //   next();
  // });
});

const UserModel = mongoose.model("user", UserSchema);
export default UserModel;
