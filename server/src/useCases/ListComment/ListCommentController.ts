import { Request, Response } from "express";
import { ListCommentUseCase } from "./ListCommentUseCase";
import { container } from 'tsyringe';

export default class ListCommentController {

  async handle(request: Request, response: Response): Promise<Response> {

    const listCommentUseCase = container.resolve(ListCommentUseCase);

    try {
      const listComments = await listCommentUseCase.execute();

      return response.json(listComments);
      
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
    
  }
}
