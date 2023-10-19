// 기본적인 테마를 설정할 수 있는 파일이며, styled.d.ts에서 정의한 interface 객체에 존재하는 항목의 테마를 정해줄 수 있음

import { DefaultTheme } from "styled-components";

// DefaultTheme은 styled.d.ts에서 정의한 interface
export const darkTheme: DefaultTheme = {
  bgColor: "#3F8CF2",
  cardColor: "white",
  boardColor: "#DADFE9",
};
