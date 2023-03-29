import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View``;

export const ContainerInput = styled(TextInput)`
margin-top: 16px;
  width: 100%;
  height: 45px;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
  
  border-radius: 6px;
  padding: 0 16px;
  margin-bottom: 16px;
`;