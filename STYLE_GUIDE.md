# 스타일 가이드

## 스타일 구조 개요

이 프로젝트는 **계층화된 스타일 구조**를 사용하여 스타일 관리의 명확성과 유지보수성을 높였습니다.

```
src/styles/
├── tokens/              # 디자인 토큰 (색상, 폰트, 간격 등)
├── primitives/          # 기본 빌딩 블록
├── compositions/        # 조합된 재사용 컴포넌트
├── layout/              # 레이아웃 전용 스타일
├── theme/               # 테마 설정
├── AnimationStyles.js   # 애니메이션
├── IconStyles.js        # 아이콘
├── ImageStyles.js       # 이미지
└── GlobalStyle.js       # 전역 스타일
```

---

## 1. Tokens (디자인 토큰)

**목적**: 프로젝트 전체에서 사용되는 기본 디자인 값들을 중앙 관리

### 파일 구조

```
tokens/
├── colors.js         # 색상 팔레트
├── typography.js     # 폰트, 폰트 크기, 폰트 굵기
├── breakpoints.js    # 반응형 breakpoint
├── spacing.js        # 간격, border radius
└── index.js          # 통합 export
```

### 사용 예시

```javascript
import { colors, fontSizes, breakpoints } from '@styles/tokens';

const MyComponent = styled.div`
  color: ${colors.primary};
  font-size: ${fontSizes.lg};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${fontSizes.base};
  }
`;
```

---

## 2. Primitives (기본 빌딩 블록)

**목적**: 재사용 가능한 기본 스타일 컴포넌트

### 파일 구조

```
primitives/
├── Box.styles.js      # FlexContainer, GridContainer, Container
├── Button.styles.js   # 기본 Button
└── Image.styles.js    # ResponsiveImage
```

### 특징

- **단순하고 범용적**: 복잡한 비즈니스 로직 없음
- **조합 가능**: 다른 컴포넌트의 기반으로 사용
- **props 기반 커스터마이징**: 다양한 상황에 대응

### 사용 예시

```javascript
import { FlexContainer } from '@styles/primitives/Box.styles';
import { Button } from '@styles/primitives/Button.styles';

function MyPage() {
  return (
    <FlexContainer direction="column" gap="20px">
      <Button variant="primary">저장</Button>
      <Button variant="secondary">취소</Button>
    </FlexContainer>
  );
}
```

---

## 3. Compositions (조합된 컴포넌트)

**목적**: 특정 용도를 가진 복잡한 스타일 컴포넌트

### 파일 구조

```
compositions/
├── Card.styles.js       # Card, HistoryCard, CardList
├── Project.styles.js    # ProjectCard, ProjectList, ProjectImageContainer
├── Section.styles.js    # Section, SectionTitle, AboutContent
├── Skill.styles.js      # SkillCardList
└── Film.styles.js       # FilmTrack, ThumbnailWrapper
```

### 특징

- **목적 지향적**: 특정 비즈니스 요구사항에 맞춤
- **복합적**: 여러 primitives를 조합
- **도메인 특화**: 프로젝트, 스킬, 히스토리 등 도메인별 분리

### 사용 예시

```javascript
import { ProjectList, ProjectCard } from '@styles/compositions/Project.styles';
import { SkillCardList } from '@styles/compositions/Skill.styles';

function UserPage() {
  return (
    <>
      <ProjectList>
        <ProjectCard>...</ProjectCard>
      </ProjectList>

      <SkillCardList>...</SkillCardList>
    </>
  );
}
```

---

## 4. 컴포넌트 내부 스타일

**언제 사용하는가?**

- 해당 컴포넌트에서만 사용되는 스타일
- 재사용 가능성이 낮은 특수한 스타일
- 로직과 밀접하게 결합된 스타일

### 예시 (Card.js)

```javascript
// Card.js
import styled from 'styled-components';
import { HistoryCard } from '@styles/compositions/Card.styles';

// 이 스타일은 TechCard에서만 사용되므로 파일 내부에 정의
const StyledTechCard = styled.div`
  background-color: white;
  border-radius: 16px;
  // ...
`;

export const TechCard = ({ url, name, level }) => {
  return <StyledTechCard>...</StyledTechCard>;
};
```

---

## 스타일 작성 규칙

### ✅ 좋은 예

```javascript
// 1. tokens 사용
import { colors, breakpoints } from '@styles/tokens';

const Title = styled.h1`
  color: ${colors.primary};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

// 2. primitives로 기본 레이아웃 구성
import { FlexContainer } from '@styles/primitives/Box.styles';

<FlexContainer justify="space-between" gap="20px">
  <ChildComponent1 />
  <ChildComponent2 />
</FlexContainer>;

// 3. compositions로 도메인 컴포넌트 구성
import { ProjectCard, ProjectList } from '@styles/compositions/Project.styles';

<ProjectList>
  {projects.map((p) => (
    <ProjectCard key={p.id} {...p} />
  ))}
</ProjectList>;
```

### ❌ 나쁜 예

```javascript
// 1. 하드코딩된 색상, breakpoint
const Title = styled.h1`
  color: #333333; // ❌ colors.primary 사용해야 함

  @media (max-width: 480px) {
    // ❌ breakpoints.mobile 사용해야 함
    font-size: 1.2rem;
  }
`;

// 2. 인라인 스타일 남발
<div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
  {/* ❌ FlexContainer 사용해야 함 */}
</div>;

// 3. 여러 파일에서 중복된 스타일 정의
// PageA.js
const Card = styled.div`...`; // ❌

// PageB.js
const Card = styled.div`...`; // ❌ compositions/Card.styles.js 사용
```

---

## 새로운 스타일 추가 가이드

### 1단계: 어디에 넣어야 할지 판단

```
질문 1: 이것은 색상, 간격, 폰트 같은 디자인 값인가?
  → YES: tokens/에 추가

질문 2: 이것은 여러 곳에서 재사용 가능한 단순한 컴포넌트인가?
  (예: Grid, Flex, Button)
  → YES: primitives/에 추가

질문 3: 이것은 특정 도메인(프로젝트, 스킬 등)에 특화된 복잡한 컴포넌트인가?
  → YES: compositions/에 추가

질문 4: 이것은 하나의 컴포넌트에서만 사용되는가?
  → YES: 컴포넌트 파일 내부에 정의
```

### 예시

**시나리오**: "프로필 카드에 그림자를 추가하고 싶다"

```javascript
// 1. tokens/spacing.js에 shadow 정의
export const shadows = {
  sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
  md: '0 4px 8px rgba(0, 0, 0, 0.1)',
  lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
};

// 2. Card.js에서 사용
import { shadows } from '@styles/tokens/spacing';

const StyledProfileCard = styled.div`
  box-shadow: ${shadows.md};
`;
```

---

## 마이그레이션 완료

### 변경 사항 요약

**삭제됨**:

- ❌ `CommonStyles.js` (413줄) → 분해됨
- ❌ `SectionStyles.js` → `compositions/Section.styles.js`로 이동

**추가됨**:

- ✅ `tokens/` 디렉토리 (4개 파일)
- ✅ `primitives/` 디렉토리 (3개 파일)
- ✅ `compositions/` 디렉토리 (5개 파일)

### 영향받은 파일

- `src/components/Card.js` ✅
- `src/components/Section.js` ✅
- `src/components/FilmSection.js` ✅
- `src/pages/UserPage.js` ✅
- `src/pages/PostPage.js` ✅

### 빌드 상태

✅ **빌드 성공** (2025-10-15)

---

## FAQ

**Q: 기존 인라인 스타일은 어떻게 하나요?**
A: 점진적으로 styled-components로 전환하세요. 긴급하지 않습니다.

**Q: 새 페이지를 만들 때 어떤 방식을 따라야 하나요?**
A: primitives와 compositions를 최대한 활용하고, 페이지 특화 스타일만 내부에 정의하세요.

**Q: theme.js는 어떻게 되나요?**
A: theme.js는 tokens를 import하여 재구성되었습니다. 기존 코드는 영향 없습니다.

---

## 다음 단계 (선택사항)

1. **인라인 스타일 제거**: 60개의 인라인 스타일을 점진적으로 제거
2. **Container 통일**: `Container.js` 컴포넌트를 `primitives/Box.styles.js`의 `Container`로 통합
3. **반응형 breakpoint 통일**: 480px과 576px이 혼재 → `breakpoints.mobile` (480px)로 통일
