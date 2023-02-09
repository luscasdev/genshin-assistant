import React from 'react'
import { LogoImage } from './styles'
import logoImage from '../../../../assets/logo.png'

const sizes = {
  small: 50,
  large: 100,
}

export const Logo = ({ size }) => {
  return <LogoImage source={logoImage} size={sizes[size || 'large']} />
}
