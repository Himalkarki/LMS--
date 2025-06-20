import express from "express";
import {
  getBooksController,
  createBookController,
  updateBookController,
  deleteBookController,
} from "../controllers/bookController.js";
import { checkAuthorization } from "../middleware/checkAuthorization.js";
import { checkstaffLevelpermission } from "../middleware/checkpermission.js";
const bookRouter = express.Router();

bookRouter
  .route("/")
  .get(checkAuthorization, getBooksController)
  .post(checkAuthorization,checkstaffLevelpermission,createBookController);

bookRouter.route("/:id").put(updateBookController)
.delete(checkAuthorization, deleteBookController);

///bookRouter.route("/").get(getBooksController).post(createBookController);

///bookRouter.route("/:id").put(updateBookController).delete(deleteBookController);

export default bookRouter;
