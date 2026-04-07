# Todo Backend

Node.js + Express 기반 Todo 앱 백엔드 서버

## 기술 스택

- **Node.js** v24+
- **Express** v5
- **nodemon** (개발용)

## 시작하기

### 패키지 설치

```bash
npm install
```

### 서버 실행

```bash
# 일반 실행
npm start

# 개발 모드 (파일 변경 시 자동 재시작)
npm run dev
```

서버는 `http://localhost:3000` 에서 실행됩니다.

## API 엔드포인트

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/` | 서버 상태 확인 |

## 프로젝트 구조

```
todo-backend/
├── index.js        # 서버 진입점
├── package.json    # 프로젝트 설정 및 의존성
├── .gitignore      # Git 제외 파일 목록
└── README.md       # 프로젝트 문서
```
