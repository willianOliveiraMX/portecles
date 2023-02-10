import { user } from '../interfaces/user.interface';

export const userGet = (): user => {
  return {
    name: 'will de oliveira',
    email: 'will@alves.com.br',
    password: '123jh%$fdl',
    isActive: true,
  };
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const userPost = () => {};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const userUpdate = () => {};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const userDelete = () => {};
