import { Comment } from "./../../entities/Comment";
import  ICommentsRepository  from "./../../repositories/ICommentsRepository";
import { ICreateCommentRequestDTO } from "./CreateCommentDTO";
import { IIBMWatsonProvider } from "../../providers/IIbmWatsonProvider";

export class CreateCommentUseCase {
  constructor(
    private commentRepository: ICommentsRepository,
    private ibmWatsonProvider: IIBMWatsonProvider

  ) {}

  async execute(data: ICreateCommentRequestDTO) {

    // first try to create the audio file
    const fileName = await this.ibmWatsonProvider.createSpeech(data.text);
  
    const comment = new Comment();

    comment.text = data.text;
    comment.filename = fileName

    await this.commentRepository.save(comment);

    return comment;

  }
}