import mongoose, { Schema } from "mongoose";

const quizSchema = Schema({
    theme: {type: String},
    question: {type: String},
    options: {type: String},
    answer: {type: String}
});

const Quiz = mongoose.model('quizzes', quizSchema);

export default Quiz;