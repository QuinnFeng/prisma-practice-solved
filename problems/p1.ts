import { Prisma, PrismaClient } from '@prisma/client'
import { error } from 'console';

const prisma = new PrismaClient();

// Hint: look up "orderBy"
// get an array of all users

export const getAllUsers = async () => {
    const users = await prisma.user.findMany({ orderBy: [
        {
          username: 'asc',
        }
      ]});
    return users;
};

// getAllUsers().then(result=>console.log(result)).catch(error=>console.error(error));