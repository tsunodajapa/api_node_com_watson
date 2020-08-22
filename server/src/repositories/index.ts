import  MysqlCommentsRepository  from './implementations/MysqlCommentsRepository';
import { container } from 'tsyringe';

container.registerSingleton('MysqlCommentsRepository', MysqlCommentsRepository);