import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = (props) => {
  const [loader, setLoader] = useState(false)

  const value = {
    setLoader,
    loader
  }
  return <AppContext.Provider value={value} {...props} />
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    console.log('error context')
  }
  return context
}
