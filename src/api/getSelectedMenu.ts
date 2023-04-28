import getChatCompletion from './getChatCompletion';

export interface SelectedMenu {
  menu: string;
  reason: string | undefined;
}

export const getSelectedMenu = async (
  menuList: string[]
): Promise<SelectedMenu> => {
  const prompt =
    menuList.length === 0
      ? `먹을만한 메뉴를 랜덤하게 골라주세요. 그리고 선택한 음식에 대한 이유도 함께 알려주세요. 다음과 같은 조건에 맞춰 답변해주세요. 조건1: 입력하신 내용은 마침표와 함께 올바르게 끝나야 합니다.`
      : `${menuList.join(
          ' 와(과) '
        )} 중 어떤 음식을 선택할지 골라주세요. 그리고 선택한 음식에 대한 이유도 함께 알려주세요. 다음과 같은 조건에 맞춰 답변해주세요. 조건1: 입력하신 내용은 마침표와 함께 올바르게 끝나야 합니다.`;

  const message = await getChatCompletion(prompt);
  const sentences = message?.split('.');
  const menu = sentences?.shift()?.trim() || '';
  const reason = sentences?.join('. ');
  return { menu, reason };
};
