import { rem } from '@/theme/utils';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${rem(16)};
  font-family: 'Pretendard Variable', Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  margin: ${rem(50)} auto 0 auto;
  margin-left: auto;
  margin-right: auto;
  width: ${rem(400)};
  @media (min-width: 768px) {
    width: ${rem(600)};
  }
`;

const StTitle = styled.h1`
  font-size: ${rem(40)};
  @media (min-width: 768px) {
    font-size: ${rem(50)};
  }
`;

const StImg = styled.img`
  width: ${rem(150)};
  height: ${rem(150)};
`;

const Layout = () => {
  return (
    <StLayout>
      <StTitle>메뉴 골라줘, 와-와</StTitle>
      <StImg
        src="/assets/robot.png"
        alt="메인화면 검은색 로봇"
        width={150}
        height={150}
      />
      <Outlet />
    </StLayout>
  );
};

export default Layout;
