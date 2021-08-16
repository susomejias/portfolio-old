import { createGlobalState } from 'react-hooks-global-state'

interface DarkThemeData {
  isDarkMode: boolean
}

const initialState: DarkThemeData = {
  isDarkMode: true
}

export const { useGlobalState } = createGlobalState(initialState)
