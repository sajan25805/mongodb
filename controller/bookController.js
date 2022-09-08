import bookModel from "../models/bookModel.js";

export class BookController {
  async addBook(req, res, imageName) {
    try {
      const response = await bookModel.create({
        ...req.body,
        image: imageName,
      });
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      res.send("Unable", error.message);
    }
  }
  async getBook(req, res) {
    try {
      const response = await bookModel.find({});
      res.json(response);
    } catch (error) {
      res
        .status(404)
        .json({ message: `Unable ${error.message}`, success: false });
    }
  }
  async updateBook(req, res) {
    const { id } = req.params;
    try {
      if (id) {
        const response = await bookModel.updateOne(
          { _id: id },
          { ...req.body }
        );

        return res.json({ message: "Successfully Updated", success: true });
      }
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .json({ message: `Unable ${error.message}`, success: false });
    }
  }
}
