# DevOps Mini Project

## GIỚI THIỆU
Dự án DevOps Mini - Áp dụng các kiến thức cơ bản về DevOps: Git, Environment Variables, Docker, Docker Compose để triển khai hệ thống gồm Backend + Frontend + Database.

## THÔNG TIN SINH VIÊN
- **Họ tên:** Văn Quý
- **Mã số sinh viên:** 2251220090
- **Lớp:** 22CT1

## TÍNH NĂNG ỨNG DỤNG

### 1. Task Management System
- **Trang chủ:** Quản lý danh sách công việc (Tasks)
  - Hiển thị danh sách tasks từ backend
  - Thêm task mới qua form input
  - Dữ liệu được lưu trữ trong MongoDB

### 2. Trang thông tin cá nhân (/about)
- Hiển thị thông tin sinh viên từ backend
- Bao gồm: Họ tên, Mã số sinh viên, Lớp

### 3. Health Check (/health)
- Kiểm tra trạng thái server
- Response: `{ "status": "ok" }`

## TECHNOLOGIES USED

### Frontend
- React 19.2.4
- TypeScript
- React Router DOM 6.26.1
- Vite 8.0.1

### Backend
- Node.js 18
- Express.js 5.2.1
- MongoDB with Mongoose 8.23.0
- CORS 2.8.6
- dotenv 17.4.0

### Database
- MongoDB (container)

### DevOps
- Docker
- Docker Compose

## STRUCTURE
```
devops/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   ├── .env
│   └── node_modules/
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── src/
│   │   ├── App.tsx
│   │   ├── About.tsx
│   │   ├── main.tsx
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   └── node_modules/
├── docker-compose.yml
└── README.md
```

## ENVIRONMENT VARIABLES

### Backend (.env)
```
PORT=5000
DB_URL=mongodb://mongo:27017/devops
APP_NAME=DevOps App
```

## API ENDPOINTS

### GET /health
- **Description:** Health check endpoint
- **Response:** `{ "status": "ok" }`

### GET /about
- **Description:** Lấy thông tin cá nhân sinh viên
- **Response:** 
```json
{
  "name": "Văn Quý",
  "studentId": "2251220090",
  "class": "22CT1"
}
```

### GET /tasks
- **Description:** Lấy danh sách tất cả tasks
- **Response:** Array of tasks

### POST /tasks
- **Description:** Thêm task mới
- **Body:** `{ "name": "task name" }`
- **Response:** Newly created task

## DOCKER SETUP

### Run with Docker Compose
```bash
docker-compose up --build
```

### Services
1. **mongo** - MongoDB database (port 27017)
2. **backend** - Node.js server (port 5000)
3. **frontend** - React app (port 5173)

### Access
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- About page: http://localhost:5173/about
- Health check: http://localhost:5000/health

## DOCKER HUB
- Backend Image: [your-dockerhub-username/backend](https://hub.docker.com)
- Frontend Image: [your-dockerhub-username/frontend](https://hub.docker.com)

## GIT BRANCHES
- **main** - Production branch
- **develop** - Development branch
- **feature/*** - Feature branches

## INSTALLATION & SETUP

### Local Development
```bash
# Backend
cd backend
npm install
npm start

# Frontend (in another terminal)
cd frontend
npm install
npm run dev
# Thêm --host flag để chạy trên tất cả network interfaces
npm run dev -- --host
```

## COMMITS
Tất cả commits có message rõ ràng theo quy tắc:
- Initial setup: Khởi tạo project
- Add feature: Thêm tính năng
- Fix bug: Sửa lỗi
- Update: Cập nhật
- Refactor: Tái cấu trúc

## CHECKLIST
- [x] Có commit history (ít nhất 5 commits)
- [x] Có BE + FE + DB
- [x] Có /about endpoint
- [x] Có /health endpoint
- [x] Có .env files
- [x] Có Dockerfile cho backend và frontend
- [x] Có docker-compose.yml
- [x] Push Docker Hub
- [x] Có 3 branches: main, develop, feature

## NOTES
- Ứng dụng sử dụng MongoDB cho lưu trữ dữ liệu thực (không hard-code)
- Frontend fetch dữ liệu từ backend thông qua HTTP requests
- Tất cả services chạy trong Docker containers
- Environment variables được quản lý qua .env files
