import type { Property } from "@/components/PropertyCard";

const baseImages = {
  cityLoft:
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
  modernLiving:
    "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1200",
  skylinePenthouse:
    "https://images.pexels.com/photos/6434631/pexels-photo-6434631.jpeg?auto=compress&cs=tinysrgb&w=1200",
  gardenTownhouse:
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
  minimalistStudio:
    "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1200",
  waterfrontVilla:
    "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
  luxuryPenthouse:
    "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
  modernMansion:
    "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200",
  beachHouse:
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
  urbanLoft:
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
  hillsideEstate:
    "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200"
};

export const allProperties: (Property & {
  images: string[];
  description: string;
  secondaryDescription: string;
})[] = [
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse with Panoramic City Views",
    location: "Central District, Aurora City",
    priceFormatted: "$2,150,000",
    image: baseImages.skylinePenthouse,
    images: [
      baseImages.skylinePenthouse,
      baseImages.modernLiving,
      baseImages.cityLoft,
      baseImages.minimalistStudio
    ],
    beds: 3,
    baths: 3,
    size: 210,
    status: "For sale",
    description:
      "A light-filled penthouse perched high above the city skyline, featuring floor-to-ceiling windows, a private wraparound terrace, and custom-crafted interiors.",
    secondaryDescription:
      "Located in a discreet, full-service residence with 24/7 concierge, this home is steps away from galleries, restaurants, and boutique shopping."
  },
  {
    id: "garden-townhouse",
    title: "Garden Townhouse with Private Courtyard",
    location: "Elmwood Quarter, Aurora City",
    priceFormatted: "$1,480,000",
    image: baseImages.gardenTownhouse,
    images: [
      baseImages.gardenTownhouse,
      baseImages.modernLiving,
      baseImages.waterfrontVilla,
      baseImages.cityLoft
    ],
    beds: 4,
    baths: 3,
    size: 185,
    status: "For sale",
    description:
      "A calm, family-friendly townhouse designed around a lush inner courtyard, blending indoor comfort with outdoor living.",
    secondaryDescription:
      "Generous ceiling heights, warm oak finishes, and integrated storage create a home that feels both grounded and refined."
  },
  {
    id: "minimalist-studio",
    title: "Minimalist Studio Near Riverfront Promenade",
    location: "Harborfront, Aurora City",
    priceFormatted: "$540,000",
    image: baseImages.minimalistStudio,
    images: [
      baseImages.minimalistStudio,
      baseImages.cityLoft,
      baseImages.modernLiving,
      baseImages.waterfrontVilla
    ],
    beds: 1,
    baths: 1,
    size: 54,
    status: "For sale",
    description:
      "An elegantly efficient studio crafted for modern city living, bathed in natural light from oversized windows.",
    secondaryDescription:
      "Clever zoning, built-in joinery, and a soft material palette make the space feel generous despite its compact footprint."
  },
  {
    id: "waterfront-villa",
    title: "Waterfront Villa with Infinity Pool",
    location: "Aurora Bay, Coastal Region",
    priceFormatted: "$3,250,000",
    image: baseImages.waterfrontVilla,
    images: [
      baseImages.waterfrontVilla,
      baseImages.modernLiving,
      baseImages.skylinePenthouse,
      baseImages.gardenTownhouse
    ],
    beds: 5,
    baths: 4,
    size: 320,
    status: "For sale",
    description:
      "A sculptural villa positioned at the water’s edge, with seamless transitions between interior spaces and the surrounding landscape.",
    secondaryDescription:
      "Expansive terraces, an infinity pool, and framed ocean views create a retreat-like atmosphere for everyday living."
  },
  {
    id: "city-loft",
    title: "Converted Warehouse Loft with Exposed Brick",
    location: "Foundry District, Aurora City",
    priceFormatted: "$990,000",
    image: baseImages.cityLoft,
    images: [
      baseImages.cityLoft,
      baseImages.minimalistStudio,
      baseImages.modernLiving,
      baseImages.gardenTownhouse
    ],
    beds: 2,
    baths: 2,
    size: 132,
    status: "For sale",
    description:
      "A characterful loft blending original warehouse textures with contemporary comforts, ideal for creative professionals.",
    secondaryDescription:
      "Industrial windows, exposed beams, and polished concrete floors contrast with soft furnishings and curated lighting."
  },
  {
    id: "modern-living-residence",
    title: "Modern Residence Overlooking City Park",
    location: "Parkside Avenue, Aurora City",
    priceFormatted: "$1,280,000",
    image: baseImages.modernLiving,
    images: [
      baseImages.modernLiving,
      baseImages.skylinePenthouse,
      baseImages.gardenTownhouse,
      baseImages.minimalistStudio
    ],
    beds: 3,
    baths: 2,
    size: 168,
    status: "For sale",
    description:
      "A refined residence with large picture windows framing the greenery of the adjacent city park.",
    secondaryDescription:
      "Thoughtful planning separates social and private zones, with generous storage, a flexible study, and soft, timeless finishes."
  },
  {
    id: "luxury-penthouse-suite",
    title: "Luxury Penthouse Suite with Private Elevator",
    location: "Downtown Heights, Aurora City",
    priceFormatted: "$4,500,000",
    image: baseImages.luxuryPenthouse,
    images: [
      baseImages.luxuryPenthouse,
      baseImages.skylinePenthouse,
      baseImages.modernLiving,
      baseImages.cityLoft
    ],
    beds: 4,
    baths: 4,
    size: 380,
    status: "For sale",
    description:
      "An extraordinary penthouse suite featuring a private elevator entrance, panoramic city views, and a rooftop terrace with infinity pool.",
    secondaryDescription:
      "Designed by renowned architects, this residence includes a private wine cellar, home theater, and 24/7 concierge service in a landmark building."
  },
  {
    id: "modern-mansion-estate",
    title: "Modern Mansion Estate with Private Gardens",
    location: "Hillside District, Aurora City",
    priceFormatted: "$5,800,000",
    image: baseImages.modernMansion,
    images: [
      baseImages.modernMansion,
      baseImages.gardenTownhouse,
      baseImages.waterfrontVilla,
      baseImages.luxuryPenthouse
    ],
    beds: 6,
    baths: 5,
    size: 520,
    status: "For sale",
    description:
      "A stunning contemporary mansion set on expansive grounds, featuring floor-to-ceiling glass walls and seamless indoor-outdoor living.",
    secondaryDescription:
      "The property includes a tennis court, private spa, guest house, and meticulously landscaped gardens with water features and mature trees."
  },
  {
    id: "beach-house-retreat",
    title: "Beach House Retreat with Ocean Access",
    location: "Coastal Bay, Aurora City",
    priceFormatted: "$2,950,000",
    image: baseImages.beachHouse,
    images: [
      baseImages.beachHouse,
      baseImages.waterfrontVilla,
      baseImages.modernLiving,
      baseImages.gardenTownhouse
    ],
    beds: 4,
    baths: 3,
    size: 280,
    status: "For sale",
    description:
      "A serene beachfront property with direct access to pristine sandy beaches, featuring open-plan living spaces and wraparound decks.",
    secondaryDescription:
      "Designed for coastal living, the home includes a private boardwalk, outdoor shower, and panoramic ocean views from every room."
  },
  {
    id: "urban-loft-penthouse",
    title: "Urban Loft Penthouse in Historic Building",
    location: "Arts Quarter, Aurora City",
    priceFormatted: "$1,750,000",
    image: baseImages.urbanLoft,
    images: [
      baseImages.urbanLoft,
      baseImages.cityLoft,
      baseImages.minimalistStudio,
      baseImages.modernLiving
    ],
    beds: 3,
    baths: 2,
    size: 195,
    status: "For sale",
    description:
      "A converted industrial building transformed into a stunning loft penthouse, preserving original architectural details while adding modern luxury.",
    secondaryDescription:
      "High ceilings, exposed brick walls, and large factory windows create a unique living space in the heart of the city's cultural district."
  },
  {
    id: "hillside-estate-villa",
    title: "Hillside Estate Villa with Mountain Views",
    location: "Summit Ridge, Aurora City",
    priceFormatted: "$3,650,000",
    image: baseImages.hillsideEstate,
    images: [
      baseImages.hillsideEstate,
      baseImages.modernMansion,
      baseImages.gardenTownhouse,
      baseImages.luxuryPenthouse
    ],
    beds: 5,
    baths: 4,
    size: 420,
    status: "For sale",
    description:
      "A magnificent hillside villa offering breathtaking mountain and valley views, with multiple terraces and infinity-edge pool.",
    secondaryDescription:
      "The property features a private vineyard, guest quarters, and a state-of-the-art home automation system, all set on 2.5 acres of landscaped grounds."
  }
];

export const featuredProperties = allProperties.slice(0, 3);

