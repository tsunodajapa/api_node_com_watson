import { Request, Response } from "express";
import { CreateCommentUseCase } from "./CreateCommentUseCase";

export class CreateCommentController {
  constructor(private createCommentUseCase: CreateCommentUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { text } = request.body;

    try {
      await this.createCommentUseCase.execute({
        text,
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}