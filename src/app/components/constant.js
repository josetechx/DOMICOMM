import { heroBg, newArrival1, newArrival2, newArrival3, newArrival4, gucci, calvin, versache, prada, zara, topSelling1, topSelling2, topSelling3, topSelling4 } from "../assest/images";

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
    title: "T-shirt With Tape Details",
    rating: 4.5,
    price: "120"
  },
  {
    id: 2,
    thumbnail: newArrival2,
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: "240"
  },
  {
    id: 3,
    thumbnail: newArrival3,
    title: "Checkered Shirt",
    rating: 4.7,
    price: "80"
  },
  {
    id: 4,
    thumbnail: newArrival4,
    title: "Sleeve Stripped T-shirt",
    rating: 4.6,
    price: "260"
  }
];

export const topSelling = [
  {
    id: 1, 
    thumbnail: topSelling1,  // Corrected the typo from `thubnail` to `thumbnail`
    title: "T-shirt With Tape Details",
    rating: 4.5,
    price: "120"
  },
  {
    id: 2,
    thumbnail: topSelling2,
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: "240"
  },
  {
    id: 3,
    thumbnail: topSelling3,
    title: "Checkered Shirt",
    rating: 4.7,
    price: "80"
  },
  {
    id: 4,
    thumbnail: topSelling4,
    title: "Sleeve Stripped T-shirt",
    rating: 4.6,
    price: "260"
  }
]

export const brands = [gucci, versache, prada, calvin, zara]
