export interface IIBMWatsonProvider {
    createSpeech(text: string): Promise<string>;
}
  