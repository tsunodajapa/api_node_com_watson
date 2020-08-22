import { Request, Response } from "express";
import { ListCommentUseCase } from "./ListCommentUseCase";

export class ListCommentController {
  constructor(private listCommentUseCase: ListCommentUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const listComments = await this.listCommentUseCase.execute();

      return response.json(listComments);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
    
  }
}
