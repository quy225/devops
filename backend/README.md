# DevOps Backend

Backend API server cho DevOps Mini Project.

## Features
- REST API với Express.js
- MongoDB integration với Mongoose
- CORS enabled
- Environment variable support
- Health check endpoint
- Student info endpoint

## Development

```bash
npm install
npm start
```

Server chạy trên port từ environment variable PORT (default: 5000)

## API Endpoints

- GET /health - Health check
- GET /about - Student info
- GET /tasks - Lấy danh sách tasks
- POST /tasks - Tạo task mới
