import { Comment } from "../entities/Comment";

export default interface ICommentsRepository {
  findAll(): Promise<Comment[]>;
  findByText(text:string): Promise<Comment>;
  save(comment: Comment): Promise<void>;
}