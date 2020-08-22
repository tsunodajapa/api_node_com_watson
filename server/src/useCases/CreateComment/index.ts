import { CreateCommentController } from "./CreateCommentController";
import { CreateCommentUseCase } from "./CreateCommentUseCase";
import MysqlCommentsRepository from "./../../repositories/implementations/MysqlCommentsRepository";

const mysqlCommentsRepository = new MysqlCommentsRepository();

const createCommentUseCase = new CreateCommentUseCase(mysqlCommentsRepository);

const createCommentController = new CreateCommentController(
  createCommentUseCase
);

export { createCommentUseCase, createCommentController };
