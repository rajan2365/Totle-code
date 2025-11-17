# 📚 Topics API – Express.js

A simple, fast, and modular **REST API built with Node.js & Express.js** that provides a list of topics with optional **search** and **sorting** features. The project follows best practices with a separated router structure.

## 🚀 Features

* Fetch all topics
* Search topics by name using `?search=`
* Sort topics alphabetically using `?sort=name`
* Clean folder structure with Express Router
* JSON-based data storage

## 📁 Project Structure

```
project/
│
├── server.js
├── routes/
│   └── topics.js
└── topics.json
```

## 🛠️ Technologies Used

* Node.js
* Express.js
* JavaScript
* JSON

## 📌 API Endpoints

### GET /api/topics

Returns all topics.

### GET /api/topics?search=react

Returns topics matching the search keyword.

### GET /api/topics?sort=name

Returns topics sorted alphabetically by name.

## ▶️ Run the Project Locally

### 1. Clone the repository

```bash
git clone <your-repo-url>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node server.js
```

### 4. Open the API

```
http://localhost:4000/api/topics
```

## 🤝 Contributing

Feel free to open issues or submit pull requests.

## 📜 License

Licensed under the MIT License.
