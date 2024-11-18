// components/Hero.tsx
"use client"

import { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import { Calendar, Clock, Star, Sparkles } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const features = [
  {
    icon: Calendar,
    title: {
      fr: "Réservation instantanée",
      ar: "حجز فوري",
      en: "Instant Booking"
    },
    description: {
      fr: "Prenez rendez-vous 24/7",
      ar: "احجز موعدك على مدار الساعة",
      en: "Book appointments 24/7"
    }
  },
  {
    icon: Clock,
    title: {
      fr: "Gain de temps",
      ar: "توفير الوقت",
      en: "Save Time"
    },
    description: {
      fr: "Confirmation immédiate",
      ar: "تأكيد فوري",
      en: "Immediate confirmation"
    }
  },
  {
    icon: Star,
    title: {
      fr: "Professionnels vérifiés",
      ar: "محترفون موثوقون",
      en: "Verified Professionals"
    },
    description: {
      fr: "Service de qualité garanti",
      ar: "خدمة عالية الجودة مضمونة",
      en: "Quality service guaranteed"
    }
  }
]

const services = [
  { name: "Coiffure", image: "/hair.jpg", count: "2,500+" },
  { name: "Massage", image: "/massage.jpg", count: "1,800+" },
  { name: "Manucure", image: "/nails.jpg", count: "1,200+" },
  { name: "Maquillage", image: "/makeup.jpg", count: "900+" }
]

interface HeroProps {
  language?: "fr" | "ar" | "en"
}

export default function Hero({ language = "fr" }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Main heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-600 to-gray-600 text-transparent bg-clip-text">
              {language === "fr" ? "La beauté à portée de clic" :
               language === "ar" ? "الجمال بنقرة واحدة" :
               "Beauty at Your Fingertips"}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "fr" ? "Trouvez et réservez vos services beauté auprès des meilleurs professionnels" :
               language === "ar" ? "ابحث واحجز خدمات التجميل مع أفضل المحترفين" :
               "Find and book beauty services with top professionals"}
            </p>
          </motion.div>

          {/* Search bar */}
          <motion.div variants={itemVariants} className="mb-16">
            <SearchBar language={language} />
          </motion.div>

          {/* Features */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-3 bg-gray-100 rounded-full mb-4">
                  <feature.icon className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title[language]}</h3>
                <p className="text-gray-600">{feature.description[language]}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Popular services */}
          <motion.div variants={itemVariants} className="text-left">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {language === "fr" ? "Services populaires" :
                 language === "ar" ? "الخدمات الشائعة" :
                 "Popular Services"}
              </h2>
              <Sparkles className="w-5 h-5 text-gray-600" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-medium">{service.name}</p>
                      <p className="text-sm opacity-90">{service.count} prestataires</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white/80 backdrop-blur-sm border-t border-gray-100 py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <span>★ 4.8/5 (10,000+ avis)</span>
            <span>100,000+ réservations</span>
            <span>5,000+ professionnels</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}