import { useCallback, useRef } from 'react'
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import getValidationErrors from '../../utils/getValidationErrors'

import * as Yup from 'yup'

import logo from '../../assets/logo.svg'

import Button from '../../components/Button'
import Input from '../../components/Input'

import { Container, Content, Background } from './styles'

const SignUp = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback( async (data: object) => {
    try {
      // formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos')
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


  return(

    <Container>

    <Background/>

    <Content>
      <img src={logo} alt="GoBarber" />

      <Form ref={formRef} onSubmit={handleSubmit}>
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
