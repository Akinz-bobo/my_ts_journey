import { Router } from "express";
import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todos'
const router = Router();

router.route('/')
    .post(createTodo)
    .get(getTodos);

router.route('/:id')
    .patch(updateTodo)
    .delete(deleteTodo)

export default router;
