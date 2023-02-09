import React, { useEffect, useState } from 'react'
import { ScreenScrollContainer, HomeList, Hero, Loader } from '~/components'
import { useGetData } from '~/services/hooks'



export const Home = () => {
  const { getPersonagens, getPersonagensLore } = useGetData()
  const [loading, setLoading] = useState(true)
  const [films, setPersonagens] = useState([])
  const [characters, setPersonagensLore] = useState([])

  const callGetData = async () => {
    const personagensResponse = await getPersonagens()
    const personagensLoreResponse = await getPersonagensLore()

    if (!personagensResponse.error && !personagensLoreResponse.error) {
      setPersonagens(personagensResponse)
      setPersonagensLore(personagensLoreResponse)
      setLoading(false)
    }
  }

  useEffect(() => {
    callGetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <ScreenScrollContainer>

      </ScreenScrollContainer>
    )
  }

  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          title: 'Genshin Impact',
          subtitle: 'Versão 3.0',
          type: 'Game',
          image_url: 'https://i.ytimg.com/vi/PVAxAY5repw/maxresdefault.jpg',
        }}
      />
      <HomeList title="Visão Geral Personagens" data={films} />
      <HomeList title="Lore Personagens" data={characters} />
    </ScreenScrollContainer>
  )
}
