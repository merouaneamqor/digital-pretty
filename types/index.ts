// types.ts
type Language = "fr" | "ar" | "en"

interface Service {
  value: string
  label: {
    fr: string
    ar: string
    en: string
  }
  category: {
    fr: string
    ar: string
    en: string
  }
}

interface City {
  value: string
  label: {
    fr: string
    ar: string
    en: string
  }
  region: {
    fr: string
    ar: string
    en: string
  }
}
