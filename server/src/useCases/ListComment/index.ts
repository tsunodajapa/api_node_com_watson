import { ListCommentController } from "./ListCommentController";
import { ListCommentUseCase } from "./ListCommentUseCase";
import  MysqlCommentsRepository  from "./../../repositories/implementations/MysqlCommentsRepository";

const mysqlCommentRepository = new MysqlCommentsRepository();

const listCommentUseCase = new ListCommentUseCase(mysqlCommentRepository);

const listCommentController = new ListCommentController(
    listCommentUseCase
);

export { listCommentUseCase, listCommentController };