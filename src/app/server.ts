import express from 'express'
import cors from 'cors'
import { router } from "./routes"

import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../../swagger.json'

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(express.json());

app.use(router);


app.listen(3333, () => console.log('server started: http://localhost:3333'))
