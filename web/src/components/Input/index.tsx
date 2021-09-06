import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  // Type para receber um component
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({icon: Icon, ...rest}) => {
  return (
    <Container>
      { Icon && <Icon size={20} /> }
      <input {...rest} />
    </Container>
  )
}

export default Input;
