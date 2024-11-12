![Vector 11M logo](https://github.com/Martenelias/Small-projects/assets/124877606/b4005eff-cfa4-4bae-b81a-2d6f8f390906) 

# User Registration and Sign-In Application 

- **Klooni repositoorium**

```bash
git clone https://github.com/yourusername/yourrepository.git
```

- Installi sõltuvused

```bash
npm install
```

- Lisa config.ts fail config.sample.ts asemel
- Lisa mysql script queries.sql, dockerisse
- Pane server käima

```bash
npm start
```

| ID  | Name        | Type    | Description               |
| --- | ----------- | ------- | ------------------------- |
| 1   | Salary      | income  | Income from job           |
| 2   | Groceries   | expense | Money spent on groceries  |
| 3   | Rent        | expense | Monthly rent payment      |
| 4   | Investments | income  | Income from investments   |
| 5   | Utilities   | expense | Monthly utility bills     |
| 32   | Dining Out  | expense | Money spent on dining out |
| 33   | Freelance   | income  | Earnings from freelance   |


> [!IMPORTANT]
> CategoryId saab võtta eelmisest kategooriate peatükis olevast tabelist.

#### Lisa sissetulek

Method: `POST`, URL: `http://localhost:3000/incomes`

```json
{
  "userId": 1,
  "categoryId": 33,
  "amount": 3000.00,
  "transactionDate": "2024-01-15",
  "description": "From freelance",
  "type": "income"
}
```

## Introduction 
Welcome to the User Registration and Sign-In Application! This project is a mobile-friendly web application designed for user registration and authentication. The application features a sleek, modern design with responsive layouts and a user-friendly interface. It allows users to register, sign in, and view a list of registered members, complete with unique user profiles. 

## Technologies Used 
- ***HTML:*** For structuring the content and layout of the web pages. 
- ***CSS (Sass):*** For styling the application with modern, responsive designs and color schemes. 
- ***JavaScript:*** For implementing client-side interactivity and form handling. 
- ***Node.js:*** For server-side operations and handling HTTP requests. 
- ***Express:*** A web framework for Node.js to build robust API endpoints. 
- ***bcrypt:*** For securely hashing passwords. 
- ***jsonwebtoken:*** For managing JSON Web Tokens used in authentication.

## Features 
- ***Responsive Design:*** The application is fully responsive and optimized for mobile devices. 
- ***User Registration:*** Allows users to create a new account with a secure password. 
- ***User Sign-In:*** Enables users to log in to their accounts. 
- ***Member List:*** Displays a list of registered members with unique IDs and profile images. 
- ***Member Details:*** Shows detailed information for each member.

## TODO 
- Add MongoDB database to this project
- Add user power: admin, regular user etc... 

## Installation and Usage

- Clone
 `git clone <repository-url>` 
- Navigate to project directory 
`cd <project-directory>` 
- Install dependencies  
`npm install`
- Run application
`npm run dev`
- Open application at: ***http://localhost:3000*** 
