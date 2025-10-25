import { Router } from 'express';
import { body } from 'express-validator';
import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getTaskStats,
} from '../controllers/taskController';
import { authMiddleware } from '../middleware/auth';

const router = Router();

// All routes are protected
router.use(authMiddleware);

// Get task statistics
router.get('/stats', getTaskStats);

// Get all tasks
router.get('/', getTasks);

// Get single task
router.get('/:id', getTaskById);

// Create task
router.post(
  '/',
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('status').optional().isIn(['pending', 'in-progress', 'completed']).withMessage('Invalid status'),
    body('priority').optional().isIn(['low', 'medium', 'high']).withMessage('Invalid priority'),
  ],
  createTask
);

// Update task
router.put(
  '/:id',
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('status').isIn(['pending', 'in-progress', 'completed']).withMessage('Invalid status'),
    body('priority').isIn(['low', 'medium', 'high']).withMessage('Invalid priority'),
  ],
  updateTask
);

// Delete task
router.delete('/:id', deleteTask);

export default router;
