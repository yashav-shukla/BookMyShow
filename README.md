<p align="center">
  <img src="front-end/logo.svg" width="200">

<p align="center"><i>Your one-stop destination for booking movies! 🎬🍿</i></p></p><hr>


A **full-stack movie booking application** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. Users can browse available movies, select show timings, choose seats, and book tickets easily.

---
![Home Page](bookmyshow.png)

## 🚀 Features

### 🎭 **User Features**
✅ Browse movies and their details  
✅ Select movie show timings  
✅ Choose seats and book tickets  
✅ View last booked tickets  
✅ Responsive UI (Mobile + Desktop)

### 🔧 **Admin Features**
✅ Manage movie listings  
✅ Update show timings  
✅ Manage seat bookings  
✅ View all user bookings  

---

## 📌 API Endpoints

| Method  | Endpoint          | Description                     | Request Body |
|---------|------------------|---------------------------------|--------------|
| **GET**  | `/api/movies`     | Fetch all available movies      | None         |
| **GET**  | `/api/bookings`   | Fetch all user bookings         | None         |
| **POST** | `/api/book`       | Book a movie ticket             | `{ "movie": "Spider-Man", "slot": "7:00 PM", "seats": { "A1": 1, "A2": 1 } }` |
| **DELETE** | `/api/book/:id` | Cancel a booking                | None         |

---
## 🛠️ **Tech Stack**
### Frontend - **React.js**
- ⚡ State Management: **Context API**
- 🎨 UI Components: **CSS & ShadCN**
- 🔍 Routing: **React Router**

### Backend - **Node.js & Express.js**
- ⚡ API Development: **Express.js**
- 🗄️ Database: **MongoDB & Mongoose**
- 🔐 Authentication: **(JWT - Optional)**

---

## 📂 **Project Structure**

## 📂 Project Structure

| Folder / File         | Description                         |
|-----------------------|-------------------------------------|
| **BookMyShow/**       | Root directory of the project      |
| ├── **.vscode/**      | VS Code settings                   |
| ├── **back-end/**     | Backend code                       |
| │   ├── dbConnection.js | Database connection             |
| │   ├── routes.js     | API routes                         |
| │   ├── schema.js     | MongoDB Schema (Movies, Bookings)  |
| │   ├── server.js     | Main backend server file           |
| ├── **front-end/**    | Frontend code                      |
| │   ├── **src/**      | Source code directory              |
| │   │   ├── **Components/** | React components           |
| │   │   ├── **Context/** | Global state management       |
| │   │   ├── **Css/**   | Stylesheets                       |
| │   │   ├── **Pages/** | Page components (e.g., Home.js)  |
| │   │   ├── data.js    | Movie & seat data                 |
| │   │   ├── App.js     | Main React file                   |
| │   │   ├── index.js   | React entry point                 |
| │   │   ├── index.css  | Global styles                     |
| │   ├── **public/**    | Static assets                     |
| ├── package.json      | Project dependencies               |
| ├── README.md         | Project documentation              |
| ├── .gitignore        | Git ignore file                    |


---

## 🛠 **Installation & Setup**

### 🔹 **1. Clone the Repository**
```
git clone https://github.com/YOUR_GITHUB/BookMyShow.git

cd BookMyShow
```

### 🔹 **2. Install Dependencies**
```
Frontend:
cd front-end
npm install

Backend:
cd ../back-end
npm install
```

### 🔹 **3. Start the Project**

```
Run Backend:
cd back-end
npm start

Run Frontend:
cd ../front-end
npm start
```
----- 
### 🔹 **Example API Request**

```
POST http://localhost:8080/api/book
Content-Type: application/json

{
  "movie": "Spider-Man",
  "slot": "7:00 PM",
  "seats": { "A1": 1, "A2": 1 }
}
```


---
### 🚀 Developed by Yashav Shuklsa
### 📧 Contact : yashavshukla1@gmail.com
---
### Live Preview : [  ]
---
### **📜** **License** : This project is licensed under the MIT License.


