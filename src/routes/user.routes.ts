import express from 'express';
import { userGet, userPost, userUpdate, userDelete } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  try {
    const user = userGet();
    res.send(user);
  } catch (error) {
    res.send({ err: 'this error' });
  }
});

userRouter.post('/', (req, res) => {
  try {
    const user = userPost();
    res.send(user);
  } catch (error) {
    res.send({ err: 'this error' });
  }
});

userRouter.put('/', (req, res) => {
  try {
    const user = userUpdate();
    res.send(user);
  } catch (error) {
    res.send({ err: 'this error' });
  }
});

userRouter.delete('/', (req, res) => {
  try {
    const user = userDelete();
    res.send(user);
  } catch (error) {
    res.send({ err: 'this error' });
  }
});

export default userRouter;
