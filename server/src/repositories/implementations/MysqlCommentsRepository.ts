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
    const comments = await this.commentRepository.find({
      order: {
        id: "DESC"
      }
    });

    return comments;
  }

  public async findByText(text: string): Promise<Comment> {
    const comment = await this.commentRepository.findOne({text});

    return comment;
  }
}

export default MysqlCommentsRepository;
