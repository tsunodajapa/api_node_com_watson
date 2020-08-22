import { Comment } from "./../../entities/Comment";
import ICommentsRepository from "./../ICommentsRepository";
import { getRepository } from "typeorm";

class MysqlCommentsRepository implements ICommentsRepository {

  public async save(comment: Comment): Promise<void> {
    const commentRepository = getRepository(Comment);
    await commentRepository.save(comment);
  }

  public async findAll(): Promise<Comment[]> {
    const commentRepository = getRepository(Comment);
    const comments = await commentRepository.find();

    return comments;
  }
}

export default MysqlCommentsRepository;
