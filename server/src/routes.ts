import { Router } from "express";
import { createCommentController } from "./useCases/CreateComment";
import { listCommentController } from "./useCases/ListComment";

const router = Router();

router.post("/comments", (request, response) => {
  return createCommentController.handle(request, response);
});

router.get("/comments", (request, response) => {
  return listCommentController.handle(request, response);
});

export { router };