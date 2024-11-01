# 빌드 환경 설정
FROM node:18 AS builder

# 작업 디렉토리 생성 및 설정
WORKDIR /app

# 패키지 파일 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# 소스 파일 복사
COPY . .

# Vite 빌드 실행
RUN npm run build

# Nginx 기반 이미지 설정
FROM nginx:alpine

# 빌드된 정적 파일을 Nginx 경로로 복사
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 포트 공개
EXPOSE 80

# Step 10: Nginx 시작
CMD ["nginx", "-g", "daemon off;"]
