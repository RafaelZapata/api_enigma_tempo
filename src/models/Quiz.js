import mongoose, { Schema } from "mongoose";

const quizSchema = Schema({
    theme: {type: String},
    question: {type: String},
    options: {type: String},
    answer: {type: Number}
});

const Quiz = mongoose.model('quizzes', quizSchema);

export default Quiz;
