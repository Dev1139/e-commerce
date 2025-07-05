import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
    default:{}
  },
},{minimize:false});  // ==> it will create a cartData with empty object by default mongoose neglect empty data

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;