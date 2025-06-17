import express from "express";
import {
  getBooksController,
  createBookController,
  updateBookController,
  deleteBookController,
} from "../controllers/bookController.js";
import { checkAuthorization } from "../middleware/checkAuthorization.js";

const bookRouter = express.Router();
 bookRouter =express.Router();
 bookRouter.route("/")
 .get(checkAuthorization,getBooksController)
 .post(createBookscontroller)

bookRouter.route("/:id")
put(updateBooksController)
 
 .delete(checkAuthorization,deleteBookController)





///bookRouter.route("/").get(getBooksController).post(createBookController);

///bookRouter.route("/:id").put(updateBookController).delete(deleteBookController);

export default bookRouter;
