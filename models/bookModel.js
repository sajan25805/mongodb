import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  // image: {
  //   data: Buffer,
  //   contentType: String,
  // },
});

export default mongoose.model("books", bookSchema);
