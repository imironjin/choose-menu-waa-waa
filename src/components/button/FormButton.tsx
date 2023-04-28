import { rem } from '@/theme/utils';
import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components/macro';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mainText?: string;
  subText?: string;
}

const StButton = styled.button`
  position: relative;
  background: var(--primary200);
  margin: ${rem(25)} auto;
  width: ${rem(200)};
  height: ${rem(50)};
  overflow: hidden;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.9);
  @media (min-width: 768px) {
    width: ${rem(250)};
    height: ${rem(60)};
    font-size: ${rem(20)};
  }
  .subBtn {
    position: absolute;
    width: ${rem(200)};
    height: ${rem(200)};
    margin-top: -100px;
    padding-top: ${rem(20)};
    background: var(--primary400);
    left: -250px;
    transition: 0.3s;
    @media (min-width: 768px) {
      margin-top: ${rem(-108)};
    }
  }
  .mainText {
    color: black;
    font-weight: 700;
    transition: 0.3s;
  }
  .subText {
    margin-top: 62px;
    margin-right: -130px;
    font-weight: 700;
    color: black;
    @media (min-width: 768px) {
      margin-right: -110px;
    }
  }
  :hover .subBtn {
    left: -130px;
    @media (min-width: 768px) {
      left: -110px;
    }
  }
  :hover .mainText {
    margin-left: 65px;
  }
  :active {
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.8);
  }
`;

export const FormButton = ({
  type = 'submit',
  disabled,
  mainText = '제목',
  subText = '서브 제목',
  ...restProps
}: IButtonProps) => {
  return (
    <>
      <StButton type={type} disabled={disabled} {...restProps}>
        <p className="mainText">{mainText}</p>
        <div className="subBtn">
          <p className="subText">{subText}</p>
        </div>
      </StButton>
    </>
  );
};

export default FormButton;
