//file path: HowNotToDieDemo/how-not-to-die/server/src/models/index.ts

//import sequelize from '../config/connection.js'
import UserFactory from './user.js';

const User = new UserFactory();

export { User };
