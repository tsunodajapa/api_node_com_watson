import { IbmWatsonProvider } from './implementations/IbmWatsonProvider';
import { container } from 'tsyringe';

container.registerSingleton('IbmWatsonProvider', IbmWatsonProvider);