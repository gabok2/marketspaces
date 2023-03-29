import { Container, Title } from "./styles";
import { ButtonProps } from "react-native";

interface ButtonProp  extends ButtonProps{
    title: string;
    color?: string;
    titleColor?: string;
}


export function Button({titleColor,color,title, ...rest}: ButtonProp){
    return(
        <Container
        style={{backgroundColor: color}}
            {...rest}
        >
            <Title
            style={{color: titleColor}}
            >
                {title}
                </Title>

        </Container>
    )
}