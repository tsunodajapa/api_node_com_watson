import { Comment } from "./../../entities/Comment";
import  ICommentsRepository  from "./../../repositories/ICommentsRepository";
import { ICreateCommentRequestDTO } from "./CreateCommentDTO";

export class CreateCommentUseCase {
  constructor(
    private commentRepository: ICommentsRepository,

  ) {}

  async execute(data: ICreateCommentRequestDTO) {

    const comment = new Comment();
    comment.text = data.text;


    await this.commentRepository.save(comment);

  }
}