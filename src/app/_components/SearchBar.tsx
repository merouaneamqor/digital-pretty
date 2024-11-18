
"use client"

import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SetStateAction, useState } from "react"

const popularServices: Service[] = [
  {
    value: "haircut",
    label: {
      fr: "Coupe de cheveux",
      ar: "قص الشعر",
      en: "Haircut"
    },
    category: {
      fr: "Coiffure",
      ar: "تصفيف الشعر",
      en: "Hair"
    }
  },
  {
    value: "coloring",
    label: {
      fr: "Coloration",
      ar: "صباغة الشعر",
      en: "Hair Coloring"
    },
    category: {
      fr: "Coiffure",
      ar: "تصفيف الشعر",
      en: "Hair"
    }
  },
  {
    value: "manicure",
    label: {
      fr: "Manucure",
      ar: "العناية بالأظافر",
      en: "Manicure"
    },
    category: {
      fr: "Ongles",
      ar: "العناية بالأظافر",
      en: "Nails"
    }
  },
  {
    value: "hammam",
    label: {
      fr: "Hammam",
      ar: "حمام",
      en: "Hammam"
    },
    category: {
      fr: "Bien-être",
      ar: "الرفاهية",
      en: "Wellness"
    }
  },
  {
    value: "facial",
    label: {
      fr: "Soin du visage",
      ar: "العناية بالوجه",
      en: "Facial"
    },
    category: {
      fr: "Soins",
      ar: "العناية",
      en: "Skincare"
    }
  },
  {
    value: "makeup",
    label: {
      fr: "Maquillage",
      ar: "مكياج",
      en: "Makeup"
    },
    category: {
      fr: "Beauté",
      ar: "التجميل",
      en: "Beauty"
    }
  }
]

const moroccanCities: City[] = [
  {
    value: "casablanca",
    label: {
      fr: "Casablanca",
      ar: "الدار البيضاء",
      en: "Casablanca"
    },
    region: {
      fr: "Casablanca-Settat",
      ar: "الدار البيضاء-سطات",
      en: "Casablanca-Settat"
    }
  },
  {
    value: "rabat",
    label: {
      fr: "Rabat",
      ar: "الرباط",
      en: "Rabat"
    },
    region: {
      fr: "Rabat-Salé-Kénitra",
      ar: "الرباط-سلا-القنيطرة",
      en: "Rabat-Sale-Kenitra"
    }
  },
  {
    value: "marrakech",
    label: {
      fr: "Marrakech",
      ar: "مراكش",
      en: "Marrakech"
    },
    region: {
      fr: "Marrakech-Safi",
      ar: "مراكش-آسفي",
      en: "Marrakech-Safi"
    }
  },
  {
    value: "fes",
    label: {
      fr: "Fès",
      ar: "فاس",
      en: "Fes"
    },
    region: {
      fr: "Fès-Meknès",
      ar: "فاس-مكناس",
      en: "Fes-Meknes"
    }
  },
  {
    value: "tanger",
    label: {
      fr: "Tanger",
      ar: "طنجة",
      en: "Tangier"
    },
    region: {
      fr: "Tanger-Tétouan-Al Hoceïma",
      ar: "طنجة-تطوان-الحسيمة",
      en: "Tangier-Tetouan-Al Hoceima"
    }
  },
  {
    value: "agadir",
    label: {
      fr: "Agadir",
      ar: "أكادير",
      en: "Agadir"
    },
    region: {
      fr: "Souss-Massa",
      ar: "سوس-ماسة",
      en: "Souss-Massa"
    }
  }
]

export default function SearchBar() {
  const [openService, setOpenService] = useState(false)
  const [openLocation, setOpenLocation] = useState(false)
  const [service, setService] = useState("")
  const [location, setLocation] = useState("")
  const [language, setLanguage] = useState<Language>("fr")

  const handleSearch = () => {
    console.log("Searching for:", { service, location })
  }

  const getPlaceholder = (type: "service" | "location") => {
    if (type === "service") {
      return {
        fr: "Rechercher un service...",
        ar: "ابحث عن خدمة...",
        en: "Search for a service..."
      }[language]
    }
    return {
      fr: "Entrez une ville...",
      ar: "أدخل المدينة...",
      en: "Enter a city..."
    }[language]
  }

  const getEmptyMessage = (type: "service" | "location") => {
    if (type === "service") {
      return {
        fr: "Aucun service trouvé.",
        ar: "لم يتم العثور على خدمات.",
        en: "No services found."
      }[language]
    }
    return {
      fr: "Aucune ville trouvée.",
      ar: "لم يتم العثور على مدن.",
      en: "No cities found."
    }[language]
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-end mb-2 space-x-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setLanguage("fr")}
            className={language === "fr" ? "bg-gray-100" : ""}
          >
            FR
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setLanguage("ar")}
            className={language === "ar" ? "bg-gray-100" : ""}
          >
            عربي
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setLanguage("en")}
            className={language === "en" ? "bg-gray-100" : ""}
          >
            EN
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Service Search */}
          <Popover open={openService} onOpenChange={setOpenService}>
            <PopoverTrigger asChild>
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder={getPlaceholder("service")}
                  value={service}
                  onChange={(e: { target: { value: SetStateAction<string> } }) => setService(e.target.value)}
                  className="w-full pl-10 pr-4 py-6"
                  dir={language === "ar" ? "rtl" : "ltr"}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] p-0" align="start">
              <Command>
                <CommandInput placeholder={getPlaceholder("service")} />
                <CommandList>
                  <CommandEmpty>{getEmptyMessage("service")}</CommandEmpty>
                  {Object.entries(
                    popularServices.reduce((acc, service) => {
                      const category = service.category[language]
                      if (!acc[category]) {
                        acc[category] = []
                      }
                      acc[category].push(service)
                      return acc
                    }, {} as Record<string, typeof popularServices>)
                  ).map(([category, services]) => (
                    <CommandGroup key={category} heading={category}>
                      {services.map((service) => (
                        <CommandItem
                          key={service.value}
                          onSelect={() => {
                            setService(service.label[language])
                            setOpenService(false)
                          }}
                        >
                          {service.label[language]}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ))}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          {/* Location Search */}
          <Popover open={openLocation} onOpenChange={setOpenLocation}>
            <PopoverTrigger asChild>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder={getPlaceholder("location")}
                  value={location}
                  onChange={(e: { target: { value: SetStateAction<string> } }) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-6"
                  dir={language === "ar" ? "rtl" : "ltr"}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] p-0" align="start">
              <Command>
                <CommandInput placeholder={getPlaceholder("location")} />
                <CommandList>
                  <CommandEmpty>{getEmptyMessage("location")}</CommandEmpty>
                  {Object.entries(
                    moroccanCities.reduce((acc, city) => {
                      const region = city.region[language]
                      if (!acc[region]) {
                        acc[region] = []
                      }
                      acc[region].push(city)
                      return acc
                    }, {} as Record<string, typeof moroccanCities>)
                  ).map(([region, cities]) => (
                    <CommandGroup key={region} heading={region}>
                      {cities.map((city) => (
                        <CommandItem
                          key={city.value}
                          onSelect={() => {
                            setLocation(city.label[language])
                            setOpenLocation(false)
                          }}
                        >
                          <MapPin className="mr-2 h-4 w-4" />
                          {city.label[language]}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ))}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Button 
            onClick={handleSearch}
            className="h-12 px-8"
          >
            {
              {
                fr: "Rechercher",
                ar: "بحث",
                en: "Search"
              }[language]
            }
          </Button>
        </div>
      </div>
    </div>
  )
}