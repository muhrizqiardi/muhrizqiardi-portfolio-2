import { createContext } from "react"

export const defaultLocale = "en"
export const locales = ["en", "id", "jp"]
export const LanguageContext = createContext([])

export default function LanguageProvider({children }) {
  const [locale, setLocale] = useState('en');
  return (
    <LanguageContext.Provider value={{locale, setLocale}}>
      {children}
    </LanguageContext.Provider>
  )
}