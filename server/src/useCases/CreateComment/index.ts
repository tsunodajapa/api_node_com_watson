import { IbmWatsonProvider } from './../../providers/implementations/IbmWatsonProvider';
import { CreateCommentController } from "./CreateCommentController";
import { CreateCommentUseCase } from "./CreateCommentUseCase";
import MysqlCommentsRepository from "./../../repositories/implementations/MysqlCommentsRepository";

const mysqlCommentsRepository = new MysqlCommentsRepository();
const ibmWatsonProvider = new IbmWatsonProvider();

const createCommentUseCase = new CreateCommentUseCase(mysqlCommentsRepository,ibmWatsonProvider);

const createCommentController = new CreateCommentController(
  createCommentUseCase
);

export { createCommentUseCase, createCommentController };
