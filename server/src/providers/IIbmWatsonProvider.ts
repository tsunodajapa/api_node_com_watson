import { Comment } from './../entities/Comment';


export interface IIBMWatsonProvider {
    createSpeech(text: string): Promise<string>;
  }
  