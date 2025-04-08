# HOW NOT TO DIE

## **Description**

**How Not To Die** is a full-stack, collaborative storytelling game disguised as a survival console for interstellar explorers. Built with React, Node.js, Express, and PostgreSQL, the app is designed to showcase real-time user interactivity, clean UI/UX, and narrative-driven data flow within a stylized space-console interface.

Players assume the role of deep-space explorers sent to document the conditions of unknown planets. Each player contributes to a shared mystery by writing detailed explorer logs—some humorous, some harrowing, and some that hint at something far more ominous beneath the surface.

Users can:

- Explore planets and uncover immersive, interactive landscapes
- Write personal logs and submit public entries for review
- Read logs submitted by others and vote on which should be added to the official Survival Guide
- Interact with a galaxy map and travel via shuttle to discover new worlds
- Use malfunctioning tools like a “weather scanner” that pulls real Earth data as if it were planetary weather
- Experience unexpected system failures, hidden transmissions, and narrative surprises as they piece together clues

At its core, How Not To Die is a collaborative mystery game. Players work together to build the lore, expand the survival guide, and slowly uncover the truth behind strange signals, vanishing explorers, and the increasingly unstable AI known as VERA. Every log shapes the world, every vote builds the canon, and every clue brings players closer to the central mystery.

Deployed via Render and styled with responsive, atmospheric detail, How Not To Die invites you not just to survive, but to contribute to the mythos of those who do.

| **Key Features**                                  | **Technology Stack**                                                                                                                                       |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Interactive, intuitive UI built with React        | **Languages:** [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (client), [TypeScript](https://www.typescriptlang.org/docs/) (server) |
| Responsive layout for mobile and desktop          | **Front-End:** [React](https://react.dev/)                                                                                                                 |
| Reusable component architecture with CSS modules  | **Styling:** [CSS Modules](https://github.com/css-modules/css-modules), [Responsive Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)                                                                                                                                                           |
| Client-side routing with protected routes         | **State Management:** [React Context API](https://react.dev/reference/react/useContext)                                                                    |
| Private user logs with full CRUD capabilities     | **Routing:** [React Router](https://reactrouter.com/)                                                                                                      |
| In-app messaging system with persistent threads   | **Back-End:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)                                                                         |
| Voting system with upvote threshold gating        | **Database:** [PostgreSQL](https://www.npmjs.com/package/pg), [Sequelize ORM](https://sequelize.org/)                                                      |
| RESTful API endpoints (GET and POST)              | **Authentication:** [JWT](https://jwt.io/)                                                                                                                 |
| Integration with server-side APIs                 | **Security:** [bcrypt](https://www.npmjs.com/package/bcrypt), [.env](https://medium.com/@oadaramola/a-pitfall-i-almost-fell-into-d1d3461b2fb8) (for API key protection)                                                                                                                                                                                                      |
| Secure user authentication using JWT              | **Build Tools:** [Vite](https://vite.dev/)                                                                                                                 |
| Secure handling of API keys and env variables     | **Deployment:** [Render](https://render.com/)                                                                                                              |
| PostgreSQL database with Sequelize ORM            | **Version Control:** [Git](https://git-scm.com/), [GitHub](https://github.com/)                                                                            |

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Walkthrough Video](#walkthrough-video)
- [Live Demo](#live-demo)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [Future Development](#future-development)
- [Tests](#tests)
- [Documentation](#documentation)
- [Contact](#contact)

## Installation

This app is deployed on Render and can be [accessed here.](https://hownottodie.onrender.com/) To run the app locally:

**1. Ensure you have the following installed:**
   - [Express.js](https://expressjs.com/)
   - [Node.js](https://nodejs.org/)
   - [npm](https://www.npmjs.com/) (Comes bundled with Node.js)
   - [PostgreSQL](https://www.postgresql.org/)
     
**2. Clone the Repository**

   - bash:
     >  git clone https://github.com/alexis-menendez/how-not-to-die-demo.git  
     >  cd project-name  

**3. Install Client Dependencies**

   - **Open an Integrated terminal in /client:**
   - bash:
     >  cd how-not-to-die/client  
     >  npm install  

**4. Install Server Dependencies**
   - **Open an Integrated terminal in /server:**
   - bash:
     >  cd ../server  
     >  npm install  


**5. Create a .env file in the root directory with the following:**

   - **.env:**
     >  DB_NAME=your_db  
     >  DB_USER=your_user  
     >  DB_PASSWORD=your_password  
     >  JWT_SECRET=your_secret  
     >  API_KEY_1=xxxx  

**6. Ensure PostgreSQL is running. Then create your database and apply any migrations/seeds:**

   - **Open an Integrated terminal in /server:**
   - bash:
     >  npx sequelize-cli db:create  
     >  npx sequelize-cli db:migrate  
     >  npx sequelize-cli db:seed:all  


**7. Start the Server**
   - **Open an Integrated terminal in /server:**
   - bash:
     >  cd how-not-to-die/server  
     >  npm run dev  

**8. Start the Client**
   - **Open an Integrated terminal in /client:**
   - bash:
     >  cd how-not-to-die/client  
     >  npm run dev  


## Usage

1. Once the server is running, navigate to the link that starts with “http://localhost:” found in your terminal after starting the client

2. From there, users can:
   - Register or sign in through the console-style login screen
   - Navigate a sci-fi command dashboard powered by VERA
   - Submit, edit, and manage personal explorer logs
   - Vote on public log entries submitted by others
   - View/send messages from/to other players and story NPC’s
   - Travel to alien planets and interact with environment tools


## Screenshots

![projectscreenshot](https://github.com/user-attachments/assets/5802859f-20c6-4e7c-967c-5d6735b57fd6)

## Walkthrough Video

- Currently unavailable (Coming soon!)

## Live Demo

- [Client](https://hownottodie.onrender.com/)
- [Server](https://hownottodiedemo.onrender.com) 

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes and create a pull request.

## Tests

There are currently no automated tests for this project

## Documentation

> **Note:** The original repository ran out of free Git LFS space, so the project was migrated to a new team repository under a paid account with additional storage.

- [Current Repository](https://github.com/HowNotToDieTeam/HowNotToDieDemo) 
- [Original Repository](https://github.com/zomblic/HowNottoDie) 
- [Google Slides](https://docs.google.com/presentation/d/13Oqs7l09W7mch0W5Edy-X467CzWSoOtFeIJcjjSoi7U/edit?usp=sharing)
- [Google Doc](https://docs.google.com/document/d/1lG3wGpQglw6aqWl2WG_FtDNSuud-BfDb08JUTFICkO8/edit?tab=t.0#heading=h.sp7vjy6pkvd4)

## Acknowledgements

1. Thomas Brittain
2. Diego Mars

## Contact

If you have any questions, feel free to contact the team:

Blake Brittain, Project Lead

- **GitHub**: [Blakenb](https://github.com/Blakenb)
- **Email**: Blakenb87@gmail.com

Alex Menendez, Frontend Lead

- **GitHub**: [alexis-menendez](https://github.com/alexis-menendez)
- **Email**: alexis.menendez@austincc.edu

Constance Robin, Backend Lead

- **GitHub**: [zomblic](https://github.com/zomblic) 
- **Email**: zomblic@hotmail.com 

Joeseph Goodwin, Frontend Developer

- **GitHub**: [Joseph-Goodwin001](https://github.com/Joseph-Goodwin001)
- **Email**: josephgoodwin001@gmail.com

Johnny, Backend Developer

- **GitHub**: [NFToonz](https://github.com/NFToonz) 
- **Email**:  Johnnyt3.2014@gmail.com

