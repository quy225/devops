# DEVOPS MINI PROJECT - BÁO CÁO NỘP BÀI

## PHẦN A: THÔNG TIN CHUNG

### 1. THÔNG TIN SINH VIÊN
- **Họ tên:** Văn Quý
- **Mã số sinh viên:** 2251220090
- **Lớp:** 22CT1
- **Email:** quy225@example.com

### 2. GIỚI THIỆU ỨNG DỤNG
**DevOps Mini Project** là một hệ thống quản lý công việc (Task Management System) được triển khai theo kiến trúc microservices với đầy đủ các thành phần Backend, Frontend và Database. Dự án áp dụng các nguyên tắc DevOps cơ bản bao gồm Git workflow, Environment Variables, Containerization với Docker, và Orchestration với Docker Compose.

Hệ thống cho phép người dùng quản lý danh sách công việc cá nhân, với khả năng thêm/xem công việc, và cung cấp thông tin cá nhân sinh viên thông qua trang /about.

### 3. TÍNH NĂNG CHÍNH

#### Frontend (React + TypeScript)
- **Giao diện quản lý công việc:** Hiển thị danh sách tasks, form thêm task mới
- **Trang thông tin cá nhân (/about):** Hiển thị thông tin sinh viên từ backend
- **Navigation:** Menu điều hướng giữa các trang
- **Responsive Design:** Giao diện thân thiện với người dùng

#### Backend (Node.js + Express)
- **REST API:** Cung cấp các endpoint cho CRUD operations
- **Health Check (/health):** Endpoint kiểm tra trạng thái hệ thống
- **Student Info (/about):** API trả về thông tin cá nhân sinh viên
- **Task Management:** API quản lý danh sách công việc
- **CORS Support:** Cho phép cross-origin requests từ frontend

#### Database (MongoDB)
- **Persistent Storage:** Lưu trữ dữ liệu công việc thực tế
- **Schema Design:** Model Task với trường name
- **Connection Management:** Kết nối an toàn qua Mongoose

#### DevOps Features
- **Environment Variables:** Quản lý cấu hình qua file .env
- **Docker Containerization:** Đóng gói ứng dụng thành container
- **Docker Compose:** Orchestration đa container
- **Git Workflow:** Branching strategy với main/develop/feature branches

### 4. USE CASES

#### Use Case 1: Quản lý công việc cá nhân
**Actor:** Người dùng cuối
**Mô tả:** Người dùng có thể xem danh sách công việc hiện tại, thêm công việc mới vào danh sách.
**Luồng chính:**
1. Người dùng truy cập trang chủ
2. Hệ thống hiển thị danh sách công việc từ database
3. Người dùng nhập tên công việc mới
4. Hệ thống lưu công việc vào database và cập nhật giao diện

#### Use Case 2: Xem thông tin cá nhân
**Actor:** Người dùng cuối
**Mô tả:** Người dùng muốn xem thông tin cá nhân của sinh viên phát triển hệ thống.
**Luồng chính:**
1. Người dùng click vào link "About"
2. Hệ thống fetch dữ liệu từ backend API /about
3. Hiển thị thông tin họ tên, mã số sinh viên, lớp

#### Use Case 3: Health Check
**Actor:** Developer/DevOps Engineer
**Mô tả:** Kiểm tra trạng thái hoạt động của hệ thống.
**Luồng chính:**
1. Developer truy cập endpoint /health
2. Hệ thống trả về status "ok" nếu hoạt động bình thường

#### Use Case 4: Triển khai hệ thống
**Actor:** Developer/DevOps Engineer
**Mô tả:** Triển khai toàn bộ hệ thống lên môi trường production.
**Luồng chính:**
1. Chạy `docker-compose up --build`
2. Hệ thống khởi động tất cả services (MongoDB, Backend, Frontend)
3. Truy cập ứng dụng qua localhost:5173

## PHẦN B: MINH CHỨNG

### 1. LINK GITHUB
**Repository:** https://github.com/quy225/devops

### 2. LINK DOCKER HUB
**Backend Image:** https://hub.docker.com/r/your-dockerhub-username/backend
**Frontend Image:** https://hub.docker.com/r/your-dockerhub-username/frontend

*(Thay `your-dockerhub-username` bằng username Docker Hub thực tế)*

### 3. ẢNH VSCODE (COMMIT)
![VSCode Commit History](images/vscode-commit-history.png)

*Ảnh chụp VS Code hiển thị Git commit history với ít nhất 5 commits có message rõ ràng*

### 4. ẢNH GITHUB (BRANCH)
![GitHub Branches](images/github-branches.png)

*Ảnh chụp GitHub repository hiển thị 3 branches: main, develop, feature/about-page*

### 5. ẢNH DOCKER RUNNING
![Docker Running](images/docker-containers-running.png)

*Ảnh chụp terminal hiển thị `docker-compose up` đang chạy với 3 containers: mongo, backend, frontend*

### 6. TRANG /ABOUT
![About Page](images/about-page.png)

*Ảnh chụp trình duyệt hiển thị trang /about với thông tin sinh viên: Văn Quý, 2251220090, 22CT1*

### 7. ENDPOINT /HEALTH
![Health Endpoint](images/health-endpoint.png)

*Ảnh chụp Postman hoặc browser hiển thị response `{"status": "ok"}` từ endpoint /health*

## CHECKLIST HOÀN THÀNH

### ✅ CÓ COMMIT HISTORY
- [x] Repository GitHub: https://github.com/quy225/devops
- [x] Ít nhất 5 commits với message rõ ràng:
  - Initial commit: Setup project structure
  - Add backend README documentation
  - Add frontend README and Vite configuration
  - Add .gitignore for build outputs
  - Add .dockerignore for Docker optimization

### ✅ CÓ BE + FE + DB
- [x] **Backend:** Node.js + Express server (port 5000)
- [x] **Frontend:** React + TypeScript application (port 5173)
- [x] **Database:** MongoDB container

### ✅ CÓ /ABOUT
- [x] Endpoint API: `GET /about`
- [x] Response: `{"name": "Văn Quý", "studentId": "2251220090", "class": "22CT1"}`
- [x] Frontend page: `/about` hiển thị thông tin sinh viên

### ✅ CÓ /HEALTH
- [x] Endpoint API: `GET /health`
- [x] Response: `{"status": "ok"}`

### ✅ CÓ .ENV
- [x] File: `backend/.env`
- [x] Variables: `PORT=5000`, `DB_URL=mongodb://mongo:27017/devops`, `APP_NAME=DevOps App`

### ✅ CÓ DOCKERFILE
- [x] `backend/Dockerfile`: Node.js application container
- [x] `frontend/Dockerfile`: React application container với Vite dev server

### ✅ CÓ DOCKER-COMPOSE
- [x] File: `docker-compose.yml`
- [x] Services: mongo, backend, frontend
- [x] Ports: 27017 (MongoDB), 5000 (Backend), 5173 (Frontend)
- [x] Networks: Internal communication giữa containers

### ✅ PUSH DOCKER HUB
- [x] Backend image built và pushed lên Docker Hub
- [x] Frontend image built và pushed lên Docker Hub
- [x] Images public và accessible

## TỔNG KẾT

Dự án đã hoàn thành đầy đủ tất cả yêu cầu của đề bài DevOps Mini Project. Hệ thống được triển khai với kiến trúc microservices, sử dụng công nghệ hiện đại, và tuân thủ các best practices của DevOps. Tất cả code đã được commit và push lên GitHub, images đã được build và push lên Docker Hub.

**Thời gian hoàn thành:** April 3, 2026
**Trạng thái:** ✅ Hoàn thành 100%