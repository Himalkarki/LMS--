import { BookModel } from "../models/bookModel.js";
import{decodeJWT}  from "../utils/generateToken.js";
//Named export
export const getBooksController = async (req, res) => {
  try {
    const token =req?.body?.token;
 
     const foundUser =await decodeJWT(jwtToken);

     console.log(foundUser);

       if(!foundUser){
        return req.json({
          success:false,
          messege: "you are not authorized!!!",
        });
       }



    const books = await BookModel.find();
    res.json({
      success: true,
      data: books,
    });

  } catch (error) {
    console.log(error);
    res.json({
      success: true,
      message: error.message,
    });
  }
};

export const createBookController = async (req, res) => {
  try {
    const reqBody = req.body;
    const book = await BookModel.create(reqBody);
    res.json({
      success: true,
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: true,
      message: error.message,
    });
  }
};

export const updateBookController = async (req, res) => {
  try {
    const { id: bookId } = req.params;

    const reqBody = req.body;

    const foundBook = await BookModel.findById(bookId);

    if (foundBook) {
      const updatedBook = await BookModel.findByIdAndUpdate(bookId, reqBody, {
        new: true,
      });

      return res.json({
        success: true,
        data: updatedBook,
      });
    }

    res.json({
      success: false,
      message: "book with id:${BookIdnot found",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      messege: error.messege,
    });
  }
};

export const deleteBookController = async (req, res) => {
  try {
    const { id: bookId } = req.params;

    const reqBody = req.body;

    const foundBook = await BookModel.findById(bookId);
    if (foundBook) {
      const updateBook = await BookModel.findByIdAndDelete(bookId);
      console.log(updateBook);

      return res.json({
        success: true,
        messege: "$(foundBook.title}hasbeen deteted sucessfully!",
      });
    }
    res.json({
      success: false,
      messege: "Book with id:${BookId}not found",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      messege: error,
      messege,
    });
  }
};

