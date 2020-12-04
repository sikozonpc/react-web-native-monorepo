import React, { ReactNode } from 'react'

interface ButtonProps {
  children: (greet: () => string) => ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {

  const greet = () => 'hello there'

  return (
    <>
      {children(greet)}
    </>
  )
}

export default Button