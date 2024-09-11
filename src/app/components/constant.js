import { heroBg, newArrival1, newArrival2, newArrival3, newArrival4, gucci, calvin, versache, prada, zara } from "../assest/images";

// Navbar Links
export const navbar = [
  "On Shop", 
  "On Sale", 
  "New Arrivals", 
  "Brands"
];

// Statistics Data
export const statistics = [
  { id: 1, heading: "200+", description: "International Brands" },
  { id: 2, heading: "2,000+", description: "High-Quality Products" },
  { id: 3, heading: "30,000+", description: "Happy Customers" },
];

// New Arrivals Data
export const newArrivals = [
  {
    id: 1, 
    thumbnail: newArrival1,  // Corrected the typo from `thubnail` to `thumbnail`
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: 4.5,
    price: "120"
  },
  {
    id: 2,
    thumbnail: newArrival2,
    title: "SKINNY FIT JEANS",
    rating: 3.5,
    price: "240"
  },
  {
    id: 3,
    thumbnail: newArrival3,
    title: "CHECKERED SHIRT",
    rating: 4.7,
    price: "80"
  },
  {
    id: 4,
    thumbnail: newArrival4,
    title: "SLEEVE STRIPED T-SHIRT",
    rating: 4.6,
    price: "$260"
  }
];

export const brands = [gucci, versache, prada, calvin, zara]
