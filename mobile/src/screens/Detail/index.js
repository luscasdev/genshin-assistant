import React from 'react'
import { ScreenScrollContainer, Hero, GoBack, Text } from '~/components'
import { useDataStore } from '~/services/stores'

export const Detail = () => {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <Text ml={24} fontFamily="black" size={20}>
        Descrição
      </Text>
      <Text mt={20} ml={24} mr={24} size={18} lh={20}>
        {selectedData.description}
      </Text>

      <GoBack />
    </ScreenScrollContainer>
  )
}
