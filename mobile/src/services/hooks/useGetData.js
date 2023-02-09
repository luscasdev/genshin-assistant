import { api } from '../api/index'

export const useGetData = () => {
  const getPersonagens = async () => {
    try {
      const response = await api.get('/feeds')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }
  const getPersonagensLore = async () => {
    try {
      const response = await api.get('/feeds')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  return {
    getPersonagens,
    getPersonagensLore
  }
}