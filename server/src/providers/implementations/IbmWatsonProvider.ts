import { Comment } from "./../../entities/Comment";
import { IIBMWatsonProvider } from "../IIbmWatsonProvider";

import TextToSpeechV1 from "ibm-watson/text-to-speech/v1";
import { IamAuthenticator } from "ibm-watson/auth";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { Readable } from "stream";

export class IbmWatsonProvider implements IIBMWatsonProvider {
  private textToSpeech: TextToSpeechV1;

  constructor() {

    this.textToSpeech = new TextToSpeechV1({
      authenticator: new IamAuthenticator({
        apikey: process.env.API_IBM_KEY,
      }),
      url: process.env.API_IBM_URL,
    });
    
  }

  async createSpeech(text: string): Promise<string> {

    
    const fileName = `${this.generateHash()}_speech.wav`;

    const synthesizeParams = {
      text: text,
      accept: "audio/wav",
      voice: "en-US_AllisonV3Voice",
    };

    try {
      const response = await this.textToSpeech.synthesize(synthesizeParams);

      const wavFileStream = response.result as Readable;

      const buffer = await this.textToSpeech.repairWavHeaderStream(
        wavFileStream
      );

      await this.createFile(buffer, fileName);

      return fileName;
    } catch (error) {
      throw new Error(error);
    }
  }

  private generateHash(): string {
    const hash = crypto.randomBytes(6).toString("hex");

    return hash;
  }

  private async createFile(buffer: Buffer, fileName: string){
    try {
      const pathSave = path.resolve(__dirname,"..","..","..","uploads",fileName);

      fs.writeFileSync(pathSave, buffer);

    } catch (error) {
      throw new Error(error);
    }
  }
}
