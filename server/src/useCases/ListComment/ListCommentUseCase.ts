import { injectable, inject } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ICommentsRepository from "../../repositories/ICommentsRepository";

@injectable()
export class ListCommentUseCase {
  constructor(
    @inject('MysqlCommentsRepository')
    private commentRepository: ICommentsRepository

  ) {}

  async execute(){

    const comments = await this.commentRepository.findAll();

    return classToClass(comments);
    
  }
}