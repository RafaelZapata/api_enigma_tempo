import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import applyRoutes from './routes/ApplyRoutes.js';
import mongoose from 'mongoose';
import bodyParse from 'body-parser';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(bodyParse.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(process.env.DATABASE_URI || '');

applyRoutes(app);

app.listen(PORT, console.log(`Servidor iniciado na porta ${PORT}`));