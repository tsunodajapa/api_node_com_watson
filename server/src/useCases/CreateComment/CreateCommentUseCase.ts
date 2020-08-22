import { injectable, inject } from 'tsyringe';
import { classToClass } from 'class-transformer';

import { Comment } from "./../../entities/Comment";
import  ICommentsRepository  from "./../../repositories/ICommentsRepository";
import { ICreateCommentRequestDTO } from "./CreateCommentDTO";
import { IIBMWatsonProvider } from "../../providers/IIbmWatsonProvider";

@injectable()
export class CreateCommentUseCase {
  constructor(
    @inject('MysqlCommentsRepository')
    private commentRepository: ICommentsRepository,

    @inject('IbmWatsonProvider')
    private ibmWatsonProvider: IIBMWatsonProvider

  ) {}

  async execute(data: ICreateCommentRequestDTO) {

    const commentAlreadyExists = await this.commentRepository.findByText(data.text);

    if(commentAlreadyExists){
      throw new Error("Comment already exists.");
    }

    // first try to create the audio file
    const fileName = await this.ibmWatsonProvider.createSpeech(data.text);
  
    const comment = new Comment();

    comment.text = data.text;
    comment.filename = fileName

    await this.commentRepository.save(comment);

    return classToClass(comment);;
  }
}