import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'

import logo from '../../assets/logo.svg'

import Button from '../../components/Button'
import Input from '../../components/Input'

import { Container, Content, Background } from './styles'

const SignUp = () => {

  function handleSubmit(data: object): void {
    console.log(data)
  }


  return(

    <Container>

    <Background/>

    <Content>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <h1>Faça seu logon</h1>

        <Input name="name" icon={FiUser} placeholder="Nome"/>

        <Input name="email" icon={FiMail} placeholder="E-mail"/>

        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </Form>

      <a href="login">
        <FiArrowLeft/>
        Voltar para Logon
      </a>

    </Content>

  </Container>
  )
}

export default SignUp;
