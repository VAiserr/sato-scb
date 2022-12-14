import { Schema, model, Types } from "mongoose";

interface IUser {
  username: string;
//   accessKey: string;
  password: string;
  profs?: Types.ObjectId[];
  avatar?: string;
  isAdmin: boolean;
  projects: Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: false, unique: true },
//   accessKey: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profs: [{type: Schema.Types.ObjectId, ref: "Prof"}],
  avatar: {type: String},
  isAdmin: {type: Boolean, default: false},
  projects: [{type: Schema.Types.ObjectId, ref: "Project"}]
},
{timestamps: true}
);

const User = model<IUser>("User", userSchema);

export {User, IUser};