# GitHub Actions 실패 수정

2026-10-11 확인한 공개 저장소 `minsu-kmou/asdl-lab`에는 README.md와 .github/workflows만 있습니다. README에 파일 이름과 코드를 써 놓아도 실제 프로젝트 파일이 생기지는 않습니다. 현재 실행은 build 단계에서 실패했고 deploy 단계는 실행되지 않았습니다. 상세 로그는 로그인 사용자만 볼 수 있습니다.

## 필요한 수정

1. 준비된 전체 프로젝트 ZIP을 압축 해제합니다. package.json, pnpm-lock.yaml, pnpm-workspace.yaml, astro.config.mjs, tsconfig.json, AGENTS.md, scripts, src, public 및 .github가 실제 파일/폴더로 있어야 합니다.
2. **업로드/푸시 승인을 한 뒤** 압축을 푼 프로젝트의 내용을 저장소 최상위에 올립니다. 추가 상위 폴더 안에 넣거나 README에 코드를 붙여 넣지 않습니다. src/pages/[lang]/[...page].astro 같은 이름도 그대로 보존합니다.
3. 기존 .github/workflows/deploy.yml을 ZIP의 파일로 교체합니다. 프로젝트 전체가 필요하므로 워크플로만 수정하는 것으로는 해결되지 않습니다. ZIP의 워크플로는 수동 실행만 지원합니다.
4. GitHub Settings → Pages → Build and deployment → Source를 GitHub Actions로 설정합니다.
5. **배포 승인을 한 뒤** Actions → Deploy Astro to GitHub Pages → Run workflow를 누릅니다.
6. 성공하면 주소는 https://minsu-kmou.github.io/asdl-lab/ 입니다. 영문/국문 경로는 각각 /asdl-lab/en/ 및 /asdl-lab/ko/ 입니다.

워크플로는 SITE_URL=https://minsu-kmou.github.io 및 BASE_PATH=/asdl-lab을 저장소 정보에서 자동으로 구성합니다. README에 있던 https://asdl-lab.github.io 는 이 계정의 프로젝트 Pages 주소가 아닙니다.

## 업로드 전 로컬 검증

Node.js 22 LTS와 pnpm 11.25.0을 설치한 터미널에서:

```powershell
pnpm install --frozen-lockfile
$env:SITE_URL = 'https://minsu-kmou.github.io'
$env:BASE_PATH = '/asdl-lab'
pnpm build
pnpm verify
```

구성원, 논문, 교수, 시설 및 연락처의 예시/미등록 정보는 공개 전 실제 확인된 정보로 교체해야 합니다.

이번 작업에서는 원격 저장소 변경, 커밋, 푸시 및 배포를 수행하지 않았습니다.
