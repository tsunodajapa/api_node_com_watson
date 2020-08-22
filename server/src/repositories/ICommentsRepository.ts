import { Comment } from "../entities/Comment";

export default interface ICommentsRepository {
  findAll(): Promise<Comment[]>;
  save(comment: Comment): Promise<void>;
}