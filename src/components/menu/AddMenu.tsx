import { SelectedMenu, getSelectedMenu } from '@/api/getSelectedMenu';
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import FormButton from '@/components/button/FormButton';
import LoadingSpinner from '@/components/loading/LoadingSpinner';
import { rem } from '@/theme/utils';

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StUl = styled.ul`
  width: ${rem(300)};
  @media (min-width: 768px) {
    width: ${rem(400)};
  }
`;

const StLi = styled.li`
  border: 1px solid;
  padding: ${rem(15)};
  font-size: ${rem(20)};
  margin: ${rem(10)};
  background-color: var(--primary100);
  border-radius: 3px;
  border: none;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.9);
  @media (min-width: 768px) {
    font-size: ${rem(25)};
  }
`;

const StInput = styled.input`
  border: 1px solid white;
  padding: ${rem(5)};
  font-size: ${rem(20)};
  background-color: var(--primary100);
  border: none;
  border-bottom: 1px solid;
  outline: none;
  width: ${rem(140)};
  @media (min-width: 768px) {
    font-size: ${rem(25)};
    width: ${rem(200)};
  }
`;

const StDialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

const StDialog = styled.dialog`
  border: none;
  border-radius: 15px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.9);
  padding: ${rem(20)};
  font-size: ${rem(17)};
  width: ${rem(300)};
  z-index: 999;
  @media (min-width: 768px) {
    font-size: ${rem(25)};
    width: ${rem(500)};
  }
`;

const StCloseButton = styled.button`
  position: absolute;
  top: ${rem(10)};
  right: ${rem(10)};
  border: none;
  background-color: transparent;
  font-size: ${rem(24)};
  cursor: pointer;
`;

const StModalForm = styled.form`
  margin: ${rem(0)} ${rem(30)};
  margin-top: ${rem(30)};
`;

const StInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StImg = styled.img`
  width: ${rem(150)};
  height: ${rem(150)};
`;

const StMenutitle = styled.div`
  text-align: left;
  font-size: ${rem(20)};
  font-weight: 600;
  margin-top: ${rem(20)};
  height: ${rem(50)};

  background-color: var(--primary100);
  border: var(--primary200) solid 1px;
  border-radius: 10px;
  color: var(--primary400);

  height: auto;
  letter-spacing: -0.25px;
  margin-top: ${rem(7)};
  padding: ${rem(10)} ${rem(10)};
  position: relative;
  width: fit-content;
  z-index: 100;

  @media (min-width: 768px) {
    font-size: ${rem(30)};
    padding: ${rem(20)} ${rem(20)};
  }
`;

const StMenuDescription = styled.p`
  text-align: left;
  font-size: ${rem(18)};
  font-weight: 600;
  margin-top: ${rem(30)};
  margin-bottom: ${rem(30)};
  @media (min-width: 768px) {
    font-size: ${rem(22)};
  }
`;

const AddMenu = () => {
  const [menuList, setMenuList] = useState<string[]>(['']);
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenu | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleMenuListSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const selectedMenu = await getSelectedMenu(
        menuList.filter((menu) => menu.trim() !== '')
      );
      setSelectedMenu(selectedMenu);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMenuListChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.slice(0, 15);
    const newMenuList = [...menuList];
    newMenuList[index] = value;
    setMenuList(newMenuList);

    if (e.target.value.length > 15) {
      alert('15글자 이하로 입력해주세요!');
    }
  };

  const handleAddMenuInput = () => {
    if (menuList.length === 1 && menuList[0] === '') {
      alert('1번째 메뉴를 입력해주세요!');
    } else {
      setMenuList([...menuList, '']);
    }
  };

  const handleClose = () => {
    setSelectedMenu(undefined);
  };

  const handleReset = () => {
    setSelectedMenu(undefined);
    setMenuList(['']);
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <StForm onSubmit={handleMenuListSubmit}>
        <FormButton
          type="button"
          mainText="메뉴 추가"
          subText="추가!"
          onClick={handleAddMenuInput}
        />
        {menuList.length < 2 ? (
          <FormButton type="submit" mainText="랜덤 추천" subText="추천!" />
        ) : (
          <FormButton type="submit" mainText="결과 보기" subText="보기!" />
        )}

        <StUl>
          {menuList.map((menu, index) => (
            <StLi key={`menu-${index}`}>
              <label htmlFor={`menu-input-${index}`}>
                {index + 1}번째 메뉴 : {}
                <StInput
                  id={`menu-input-${index}`}
                  value={menu}
                  onChange={(e) => handleMenuListChange(e, index)}
                />
              </label>
            </StLi>
          ))}
        </StUl>
      </StForm>
      <StContainer>
        {selectedMenu && (
          <>
            <StDialogOverlay>
              <StDialog open>
                <StCloseButton onClick={() => handleClose()}>X</StCloseButton>
                <StModalForm method="dialog">
                  <StInner>
                    <StImg
                      src="/assets/robot1.png"
                      alt="답변하는 주황색 로봇"
                    />
                    <StMenutitle>{`"${selectedMenu.menu}"`}</StMenutitle>
                  </StInner>
                  <StMenuDescription>{selectedMenu.reason}</StMenuDescription>
                  <FormButton
                    type="button"
                    mainText="다시 하기"
                    subText="다시!"
                    onClick={handleReset}
                  />
                </StModalForm>
              </StDialog>
            </StDialogOverlay>
          </>
        )}
      </StContainer>
    </>
  );
};

export default AddMenu;
