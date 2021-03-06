import "reflect-metadata";
import { app } from "./app";

import './providers';
import './repositories';

app.listen(3333, () => {
  console.log(`Server running on ${process.env.APP_API_URL}`);
});
