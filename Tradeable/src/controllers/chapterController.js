const Chapter = require('../models/Chapter');

const chapters = (req, res) => {
    // Return the list of chapters
    const chapters = ['Chapter 1', 'Chapter 2', 'Chapter 3'];
    res.json(chapters);
  }

const chapterId = (req, res) => {
    const chapterId = req.params.chapterId;
    // Return the details of the specified chapter
    const chapter = {
      id: chapterId,
      title: `Chapter ${chapterId}`,
      content: 'Chapter content goes here',
    };
    res.json(chapter);
  }

const quiz = (req, res) => {
    const chapterId = req.params.chapterId;
    // Return the quiz for the specified chapter
    const quiz = {
      chapterId,
      questions: [
        { question: 'Question 1', choices: ['Choice 1', 'Choice 2', 'Choice 3'] },
        { question: 'Question 2', choices: ['Choice 1', 'Choice 2', 'Choice 3'] },
      ],
    };
    res.json(quiz);
  }

  module.exports = { chapters, chapterId, quiz }