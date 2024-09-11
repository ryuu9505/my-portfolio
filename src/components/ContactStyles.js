import styled from 'styled-components';

// 섹션 전체 컨테이너 스타일
export const ContactSection = styled.section`
  width: 100%;
  padding: 300px 20px;
//   background-image: url('/star-textures/Atmo_Fstar.png'); // 배경 이미지 경로 설정
//   background-size: cover; // 배경 이미지가 섹션을 덮도록 설정
//   background-position: center; // 배경 이미지 위치 조정
//   background-repeat: no-repeat; // 배경 이미지가 반복되지 않도록 설정
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.textDark};
  text-align: center;
`;

// 섹션 제목 스타일
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 40px;
`;

// 연락처 폼 스타일
export const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// 입력 필드 스타일
export const InputField = styled.input`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 1rem;
`;

// 텍스트 에어리어 스타일
export const TextArea = styled.textarea`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
`;

// 제출 버튼 스타일
export const SubmitButton = styled.button`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

// 소셜 링크 스타일
export const SocialLinks = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

// 소셜 아이콘 스타일
export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;