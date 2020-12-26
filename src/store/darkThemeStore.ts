import { createGlobalState } from 'react-hooks-global-state'

interface DarkThemeData {
  isDarkMode: boolean
}

const initialState: DarkThemeData = {
  isDarkMode: false
}

export const { useGlobalState } = createGlobalState(initialState)
