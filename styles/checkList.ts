import styled, { keyframes } from "styled-components";
import { colors } from "../assets/colors";
import { slideInUp } from "react-animations";
const slideAnimation = keyframes`${slideInUp}`;

export const ChecklistContainer = styled.div`
  background-color: ${colors.colorBeige};
  padding: 5%;
  border-radius: 4%;
  margin-top: 10%;
`;

export const SlideContainer = styled.div`
  animation: 0.3s ${slideAnimation};
  position: absolute;
  z-index: 1;
  background-color: ${colors.colorLightGrey};
  left: 18px;
  top: 200px;
  width: 90%;
  height: 50%;
  padding: 5%;
  border-radius: 4%;
  border: 2px solid ${colors.colorDarkGrey};
`;

export const TaskItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5%;
`;
export const CheckboxContainer = styled.div`
  padding-right: 5%;
`;

export const CurrentTaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  h1 {
    font-size: 1.5rem;
  }
`;

export const PrevTaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  h1 {
    font-size: 1.5rem;
  }
`;
