import Image from "next/image"

const professionals = [
  {
    name: "Sarah Johnson",
    role: "Hair Stylist",
    rating: 5.0,
    reviews: 128,
    image: "/placeholder.jpg"
  },
  {
    name: "Michael Chen",
    role: "Massage Therapist",
    rating: 4.9,
    reviews: 95,
    image: "/placeholder.jpg"
  },
  {
    name: "Emma Davis",
    role: "Nail Artist",
    rating: 4.8,
    reviews: 156,
    image: "/placeholder.jpg"
  }
]

export default function TopProfessionals() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Top-Rated Professionals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionals.map((professional, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={professional.image}
                    alt={professional.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{professional.name}</h3>
                  <p className="text-gray-600">{professional.role}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">★★★★★</div>
                <span className="ml-2 text-gray-600">
                  {professional.rating} ({professional.reviews} reviews)
                </span>
              </div>
              <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 mt-4">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
