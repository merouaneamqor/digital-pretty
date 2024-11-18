// components/PopularServices.tsx
import { Star, Clock, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Haircuts & Styling",
    description: "Professional haircuts, styling, and hair treatments",
    price: "From 200 MAD",
    avgDuration: "45 min",
    professionals: "1.2k+",
    rating: 4.8,
    reviews: 2500,
    categories: ["Women", "Men", "Children"],
    popularTreatments: ["Haircut", "Coloring", "Balayage"],
    svg: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M100,20 C120,20 140,35 140,60 C140,75 130,85 120,90 L120,180 L80,180 L80,90 C70,85 60,75 60,60 C60,35 80,20 100,20z" fill="#4F46E5"/>
        <circle cx="100" cy="50" r="20" fill="#818CF8"/>
      </svg>
    `
  },
  {
    title: "Massage & Wellness",
    description: "Relaxing massages and wellness treatments",
    price: "From 300 MAD",
    avgDuration: "60 min",
    professionals: "800+",
    rating: 4.9,
    reviews: 1800,
    categories: ["Relaxation", "Sports", "Therapeutic"],
    popularTreatments: ["Swedish", "Deep Tissue", "Hot Stone"],
    svg: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="60" width="120" height="80" rx="10" fill="#4F46E5"/>
        <circle cx="70" cy="100" r="10" fill="#818CF8"/>
        <circle cx="100" cy="100" r="10" fill="#818CF8"/>
        <circle cx="130" cy="100" r="10" fill="#818CF8"/>
      </svg>
    `
  },
  {
    title: "Manicure & Pedicure",
    description: "Nail care and artistic nail designs",
    price: "From 150 MAD",
    avgDuration: "45 min",
    professionals: "950+",
    rating: 4.7,
    reviews: 2100,
    categories: ["Classic", "Gel", "Art"],
    popularTreatments: ["Gel Polish", "French", "Nail Art"],
    svg: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,100 C50,60 80,40 100,40 C120,40 150,60 150,100 C150,140 120,160 100,160 C80,160 50,140 50,100" fill="#4F46E5"/>
        <path d="M80,100 L120,100 M100,80 L100,120" stroke="#818CF8" stroke-width="8"/>
      </svg>
    `
  },
  {
    title: "Facial & Skincare",
    description: "Advanced skincare treatments and facials",
    price: "From 250 MAD",
    avgDuration: "60 min",
    professionals: "600+",
    rating: 4.9,
    reviews: 1500,
    categories: ["Classic", "Anti-aging", "Deep cleansing"],
    popularTreatments: ["Hydrafacial", "Chemical Peel", "LED Therapy"],
    svg: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="60" fill="#4F46E5"/>
        <path d="M70,90 Q100,120 130,90" stroke="#818CF8" stroke-width="8" fill="none"/>
      </svg>
    `
  }
]

export default function PopularServices() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-600 to-gray-600 text-transparent bg-clip-text mb-4">
              Popular Services
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our most booked beauty and wellness services, trusted by thousands of clients across Morocco
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex items-center gap-2">
            View all services <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="aspect-square relative bg-gray-50 p-8">
                <div 
                  dangerouslySetInnerHTML={{ __html: service.svg }}
                  className="w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <Badge variant="secondary">{service.price}</Badge>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {service.avgDuration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {service.professionals}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {service.rating}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Popular treatments</p>
                    <div className="flex flex-wrap gap-2">
                      {service.popularTreatments.map((treatment, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {treatment}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6" variant="outline">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center space-y-4">
          <div className="flex justify-center gap-8 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              {services.reduce((acc, s) => acc + s.reviews, 0)}+ Reviews
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {services.reduce((acc, s) => acc + parseInt(s.professionals), 0)}+ Professionals
            </span>
          </div>
          <Button variant="outline" className="sm:hidden">
            View all services
          </Button>
        </div>
      </div>
    </section>
  )
}