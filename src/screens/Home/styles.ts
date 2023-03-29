import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const Main = styled.View`
  align-items: center;
  height: 556px;
  width: 100%;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
  padding: 0 24px;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
`;

export const Imagem = styled.Image`
  margin-top:50px;

`;

export const Titulo = styled.Text`
  font-size: 34px;
  color: ${(props) => props.theme.COLORS.GRAY_100};
  font-weight: 800;
  margin-top: 15px;
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
`;

export const SubTitulo = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.COLORS.GRAY_300};
  text-align: center;
  margin-top: 2px;
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
`;

export const ContainerInput = styled.View`
  margin-top:76px;
  width: 279px;
  
`;

export const Input = styled.TextInput`
  margin-top: 16px;
  width: 100%;
  height: 45px;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
  
  border-radius: 6px;
  padding: 0 16px;
  margin-bottom: 16px;
`;

export const ContainerButton = styled.View`
  margin-top: 16px;
  width: 279px;
`;

export const Footer = styled.View`
  margin-top: 56px;
  width: 279px;
  align-items: center;
  
`;

export const FooterTitulo = styled.Text`
    font-size: 14px;
  color: ${(props) => props.theme.COLORS.GRAY_300};
  text-align: center;
  margin-top: 2px;
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  margin-bottom: 16px;
`;