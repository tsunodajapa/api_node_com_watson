import  ICommentsRepository from "../../repositories/ICommentsRepository";

export class ListCommentUseCase {
  constructor(
    private commentRepository: ICommentsRepository,

  ) {}

  async execute(){

    const users = await this.commentRepository.findAll();

    return users;
    
  }
}