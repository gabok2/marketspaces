import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const Container = styled(TouchableOpacity)`
   
    width: 100%;
    height: 42px;
    border-radius: 6px;
    padding: 12px;
`;

export const Title = styled.Text`
    font-size: 14px;
    font-weight: 700;
    
    text-align: center;

    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;