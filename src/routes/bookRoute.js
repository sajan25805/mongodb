import express from "express";
import multer from "multer";
import { BookController } from "../controller/bookController.js";

const router = express.Router();
const bookController = new BookController();

let imageName;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    imageName =
      Date.now() +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname.trim(); //Removes the leading and trailing white space and line terminator characters from a string.
    cb(null, imageName);
  },
});

const upload = multer({ storage: storage });
//Add book
router.post("/", upload.single("image"), (req, res) => {
  bookController.addBook(req, res, imageName);
});

//get book
router.get("/", bookController.getBook);

//update book

router.put("/:id", bookController.updateBook);

export default router;
