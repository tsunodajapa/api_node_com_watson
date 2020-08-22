import { Comment } from "./../../entities/Comment";
import ICommentsRepository from "./../ICommentsRepository";
import { getRepository, Repository } from "typeorm";

class MysqlCommentsRepository implements ICommentsRepository {

  private commentRepository: Repository<Comment>

  constructor(){
    this.commentRepository = getRepository(Comment);
  }

  public async save(comment: Comment): Promise<void> {
    await this.commentRepository.save(comment);
  }

  public async findAll(): Promise<Comment[]> {
    const comments = await this.commentRepository.find();

    return comments;
  }
}

export default MysqlCommentsRepository;
