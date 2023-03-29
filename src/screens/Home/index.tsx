
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import theme from '@theme/index';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



import { Container, ContainerButton, ContainerInput, Imagem, Main,SubTitulo,Titulo, Footer, FooterTitulo } from './styles';
export function Home() {
  return (

   <>
    <StatusBar
     style="dark"
      backgroundColor={theme.COLORS.GRAY_600}
      translucent
     
    />
     <Container>
     <Main>
      <Imagem source={require('../../assets/logo.png')} />
      <Titulo>marketspace</Titulo>
      <SubTitulo>Seu espaço de compra e venda</SubTitulo>

      <ContainerInput>
        <SubTitulo>Acesse sua conta</SubTitulo>
        <Input  placeholderTextColor={theme.COLORS.GRAY_300} placeholder="E-mail" />
        <Input placeholderTextColor={theme.COLORS.GRAY_300} placeholder="Senha" />
      </ContainerInput>

      <ContainerButton>
        <Button color={theme.COLORS.BLUE_LIGHT} title="Entrar"
        titleColor={theme.COLORS.GRAY_700} />
      </ContainerButton>

     </Main>
      <Footer>
        <FooterTitulo>Ainda não tem acesso?</FooterTitulo>
        <Button color={theme.COLORS.GRAY_500} title="Criar uma conta" titleColor={theme.COLORS.GRAY_200} />
      </Footer>
     </Container>

  </>

   
  )
}