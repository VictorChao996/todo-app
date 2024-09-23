# todo-app
- [todo-app](#todo-app)
  - [Description](#description)
    - [Intro](#intro)
    - [tech stacks](#tech-stacks)
  - [installation](#installation)
    - [prerequistie](#prerequistie)
    - [install](#install)
    - [local dev](#local-dev)
    - [build](#build)
  - [Records](#records)
    - [2024/9/14](#2024914)
    - [2024/9/15](#2024915)
    - [2024/9/17](#2024917)
  - [Target](#target)
  - [About](#about)
    - [Author](#author)
    - [Collaboration](#collaboration)
    - [License](#license)

---
## Description

### Intro
A simple todo app.
This is a warm up practice for another personal project.
I'm trying something new here first.

### tech stacks
- Frontened: Vue 3
- Backend: node.js, Express.js

---
## installation

### prerequistie
- git
- node
- docker (optional)

### install
```
git clone <<this-repo-link>>
```

### local dev
- frontend
```
cd frontend
npm install
npm run dev
```
- backend
```
cd backend
npm install
npm run dev
```
- Database
  - Native MySQL DB
    1. run `mysql -u <<username>> -p <<password>> <<database_name>> < setUp.sql` to setup database for backend
    2. Change the "user" , "password", "database" in the connectionConfig in `database-test-connections.js`
    3. Run command: `npm run db` to test the connections
 - Docker
    1. Run `docker run --name todo-app-db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:8` on local PC terminal
    2. Run `docker cp ./databases todo-app-db:databases` on local PC terminal
    3. Run `docker exec -it todo-app-db bash` on local PC terminal to connect to the docker container
    4. Run `cd databases` in docker container bash
    5. Run `mysql -u <<username>> -p mysql < setUp.sql` to setup the database & tables
    6. Enter the password
    7. Optional step （contain additional install）
       1. Run `npm install`
       2. Run `npm run db` to test the connection

### build
- frontend
```
npm run build
npm run gh-pages
```

> for more executions see the package.json file
---
## Records
### 2024/9/14
- project start !
- complete basic todo app functionality
- add github pages for demo (functions without server)
### 2024/9/15
- add localStorage functionality

### 2024/9/17
- add user DB logic

### 2024/9/18
- complete user login/register api


## Target
Targets & Improvements for this todo app (without order).
- [x] basic todo app functionality (basic frontend/backend func)
- [ ] better looking style on todo-app
- [X] add localStorage on webpage
- [ ] account system (Basic login/logout, create account)
- [ ] store todo data in database (for multiple users)
- [ ] account management System (manage multiple account)
- [ ] Developers can setup frontend & backend service with docker
- [ ] add testing for this project (api test / e2e test)


---
## About
### Author
- Name: Victor Chao
- Current Job Title: QA Engineer
- Location: Taipei, Taiwan
- Contact me at: 
  - email: 96094victor@gmail.com
  - LinkedIn: https://www.linkedin.com/in/victorchao996/

### Collaboration
For personal practice & learning, there are no plans for cooperation at this stage.
But you can still contact me if you encounter any problem on this project.

### License
MIT License

Copyright (c) 2024 VictorChao996 (Victor Chao)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
