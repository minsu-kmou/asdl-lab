asdl-lab/
 .github/workflows/
 deploy.yml — 자동 배포 설정

 public/images/ — 연구실 사진, 연구원 사진
 src/data/
 publications.json — 논문
 [
  {
    "id": "paper-2026-001",
    "title": "Atomic-step-guided growth of high-uniformity InAs/GaAs QDIPs on 4° off-axis Si via all-MOCVD",
    "authors": [],
    "journal": "Applied Surface Science",
    "year": 2026,
    "volume": "",
    "pages": "",
    "doi": "",
    "status": "Accepted",
    "featured": true
  }
]
 members.json — 연구실 구성원
 [
  {
    "id": "student-001",
    "name": {
      "ko": "홍길동",
      "en": "Gil-Dong Hong"
    },
    "role": "MS Student",
    "research": "GaN Power Semiconductor Devices",
    "photo": "/images/members/student-001.jpg",
    "email": "",
    "status": "current"
  }
]
 news.json — 연구실 소식

 src/pages/ — 실제 홈페이지 화면
 astro.config.mjs — 홈페이지 설정
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://asdl-lab.github.io',
  base: '/asdl-lab',
  output: 'static',
});

 AGENTS.md — Codex 작업 규칙
