import { Request, Response } from "express";
import { CreateCommentUseCase } from "./CreateCommentUseCase";
import { container } from 'tsyringe';

export default class CreateCommentController {


  public async handle(request: Request, response: Response): Promise<Response> {

    const { text } = request.body;

    const createCommentUseCase = container.resolve(CreateCommentUseCase);
    
    try {
      const comment = await createCommentUseCase.execute({
        text,
      });

      return response.status(201).json(comment);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}