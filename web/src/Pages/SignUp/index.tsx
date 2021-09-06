import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'

import logo from '../../assets/logo.svg'

import Button from '../../components/Button'
import Input from '../../components/Input'

import { Container, Content, Background } from './styles'

const SignUp = () => (
  <Container>

    <Background/>

    <Content>
      <img src={logo} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="name" icon={FiUser} placeholder="Nome"/>

        <Input name="email" icon={FiMail} placeholder="E-mail"/>

        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiArrowLeft/>
        Voltar para Logon
      </a>

    </Content>

  </Container>
)

export default SignUp;
