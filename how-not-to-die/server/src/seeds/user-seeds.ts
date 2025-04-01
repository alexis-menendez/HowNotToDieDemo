import User from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'password1' },
  ]);
};

seedUsers().then(() => console.log('Users seeded'));

export { seedUsers }; // Exporting the seedUsers function for use in other files