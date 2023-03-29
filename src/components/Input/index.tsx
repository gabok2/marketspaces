import { Container, ContainerInput } from "./styles";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps{
    placeholder: string;
}

export function Input({placeholder, ...rest}: InputProps){
    return(
        <Container>
            <ContainerInput placeholder={placeholder} {...rest}/>

        </Container>
    )
}



