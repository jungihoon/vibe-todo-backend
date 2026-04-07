const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// 전체 할일 조회
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: '서버 오류', error: err.message });
  }
});

// 할일 단건 조회
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: '할일을 찾을 수 없습니다.' });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: '서버 오류', error: err.message });
  }
});

// 할일 생성
router.post('/', async (req, res) => {
  try {
    const todo = new Todo({ title: req.body.title });
    const saved = await todo.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: '생성 실패', error: err.message });
  }
});

// 할일 수정 (제목 or 완료 여부)
router.patch('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!todo) return res.status(404).json({ message: '할일을 찾을 수 없습니다.' });
    res.json(todo);
  } catch (err) {
    res.status(400).json({ message: '수정 실패', error: err.message });
  }
});

// 할일 삭제
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ message: '할일을 찾을 수 없습니다.' });
    res.json({ message: '삭제 완료' });
  } catch (err) {
    res.status(500).json({ message: '서버 오류', error: err.message });
  }
});

module.exports = router;
