import { Router } from "express";
import CreateCommentController  from "./useCases/CreateComment/CreateCommentController";
import  ListCommentController from "./useCases/ListComment/ListCommentController";

const routes = Router();
const createCommentController = new CreateCommentController();
const listCommentController = new ListCommentController();

routes.post("/comments", (request, response) => {
  createCommentController.handle(request, response);
});

routes.get("/comments", (request, response) => {
  listCommentController.handle(request, response);
});

export { routes };