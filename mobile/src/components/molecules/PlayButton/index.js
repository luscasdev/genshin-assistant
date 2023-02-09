import React from 'react'
import { PlayButtonContainer } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { Text } from '~/components/atoms'
import { theme } from '~/styles/theme'

export const PlayButton = () => {
  return (
    <PlayButtonContainer>
      <Ionicons
        name="logo-google-playstore"
        size={theme.metrics.px(16)}
        color={theme.colors.black}
      />
      <Text color="black" fontFamily="bold" size={14}>
        Jogar
      </Text>
    </PlayButtonContainer>
  )
}
