import { useRef, useCallback } from 'react'
import * as Yup from 'yup'

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import logo from '../../assets/logo.svg'
import getValidationErrors from '../../utils/getValidationErrors'
import Button from '../../components/Button'
import Input from '../../components/Input'

import { Container, Content, Background } from './styles'

const SignIn = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback( async (data: object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória.')
      })

      await schema.validate(data, {
        abortEarly: false
      })

    } catch(err) {
      if (err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
    }
  },[])

 return (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Faça seu logon</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </Form>
      <a href="login">
      <FiLogIn/>
      Criar conta
      </a>
    </Content>
  <Background/>
  </Container>
  )
}
export default SignIn;
