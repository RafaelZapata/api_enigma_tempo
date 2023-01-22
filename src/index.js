import express from 'express';
import cors from 'cors';
import applyRoutes from './routes/ApplyRoutes';

const app = express();

app.use(express.json());
app.use(cors());

applyRoutes(app);

app.listen(8080, console.log(`Servidor iniciado na porta 8080`));