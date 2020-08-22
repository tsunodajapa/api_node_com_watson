import  ICommentsRepository from "../../repositories/ICommentsRepository";
import { classToClass } from 'class-transformer';
export class ListCommentUseCase {
  constructor(
    private commentRepository: ICommentsRepository,
  ) {}

  async execute(){

    const comments = await this.commentRepository.findAll();

    return classToClass(comments);
    
  }
}