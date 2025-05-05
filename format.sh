#!/bin/bash

# 스크립트 실행 중 에러 발생 시 중단
set -e

echo "🔍 Running ESLint (with --fix)..."
npx eslint . --fix

echo "🎨 Running Prettier..."
npx prettier --write .

echo "✅ Formatting complete!"