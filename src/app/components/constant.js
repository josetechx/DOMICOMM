import { heroBg, newArrival1, newArrival2, newArrival3, newArrival4, gucci, calvin, versache, prada, zara, topSelling1, topSelling2, topSelling3, topSelling4 } from "../assest/images";

// Navbar Links with Submenus
export const navbar = [
  {
    label: "On Shop",
    submenu: ["All Products", "Categories", "Collections"]
  },
  {
    label: "On Sale",
    submenu: null
  },
  {
    label: "New Arrivals",
    submenu: null
  },
  {
    label: "Brands",
    submenu: ["Nike", "Adidas", "Puma"]
  }
];

export const navigationMap =[
  {
    label: "Home >",
    submenu: null
  },
  {
    label: "Shop > ",
    submenu: ["All Products", "Categories", "Collections"]
  },
  {
    label: "Brands",
    submenu: ["Nike", "Adidas", "Puma"]
  }
] 
export const dropdown = [
  "Mens's wear",
  "Women's wear",
  "Kids wear",
]
   
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
    price: "120",
    categories: "fashion"
  },
  {
    id: 2,
    thumbnail: newArrival2,
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: "240",
    categories: "party"
  },
  {
    id: 3,
    thumbnail: newArrival3,
    title: "Checkered Shirt",
    rating: 4.7,
    price: "80",
    categories: "fashion"
  },
  {
    id: 4,
    thumbnail: newArrival4,
    title: "Sleeve Stripped T-shirt",
    rating: 4.6,
    price: "260",
    categories:"fashion"
  }
];

export const topSelling = [
  {
    id: 1, 
    thumbnail: topSelling1,  // Corrected the typo from `thubnail` to `thumbnail`
    title: "T-shirt With Tape Details",
    rating: 4.5,
    price: "120",
    categories: "casual"
  },
  {
    id: 2,
    thumbnail: topSelling2,
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: "240",
    categories: "casual"
  },
  {
    id: 3,
    thumbnail: topSelling3,
    title: "Checkered Shirt",
    rating: 4.7,
    price: "80",
    categories: "fashion"
  },
  {
    id: 4,
    thumbnail: topSelling4,
    title: "Sleeve Stripped T-shirt",
    rating: 4.6,
    price: "260",
    categories: "fashion"
  }
]

export const brands = [gucci, versache, prada, calvin, zara]

export const reviews = [
  {
    id: 1,
    reviewerName: "Jane Doe",
    rating: 4.5,
    comment: "Great product! It exceeded my expectations. The quality is amazing.",
    date: "2023-08-25",
    likes: 20,
  },
  {
    id: 2,
    reviewerName: "John Smith",
    rating: 3.0,
    comment: "The product is okay, but the delivery was slow. Could be better.",
    date: "2023-08-28",
    likes: 12,
  },
  {
    id: 3,
    reviewerName: "Alice Johnson",
    rating: 5.0,
    comment: "Absolutely fantastic! The design is beautiful and works perfectly.",
    date: "2023-09-01",
    likes: 35,
  },
  {
    id: 4,
    reviewerName: "Michael Brown",
    rating: 2.5,
    comment: "Not what I expected. The product feels flimsy and the customer support is slow.",
    date: "2023-09-05",
    likes: 5,
  },
  {
    id: 5,
    reviewerName: "Emily Davis",
    rating: 4.0,
    comment: "Good product, decent value for the price. I would buy it again.",
    date: "2023-09-07",
    likes: 18,
  },
  {
    id: 6,
    reviewerName: "Robert Wilson",
    rating: 4.8,
    comment: "Exceeded all my expectations. Highly recommend this to everyone!",
    date: "2023-09-10",
    likes: 40,
  },
  {
    id: 7,
    reviewerName: "Sarah Thompson",
    rating: 3.8,
    comment: "The product is good, but packaging could be improved.",
    date: "2023-09-12",
    likes: 22,
  },
  {
    id: 8,
    reviewerName: "David Martin",
    rating: 4.2,
    comment: "Good value for money. It works as expected and looks great.",
    date: "2023-09-15",
    likes: 30,
  },
  {
    id: 9,
    reviewerName: "Laura White",
    rating: 5.0,
    comment: "I'm very happy with this purchase! Fast delivery and excellent product.",
    date: "2023-09-17",
    likes: 50,
  },
  {
    id: 10,
    reviewerName: "James Green",
    rating: 2.0,
    comment: "Very disappointed. The product broke within a week of use.",
    date: "2023-09-20",
    likes: 3,
  }
];

// footer links

export const company = [
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Features",
    link: "/features"
  },
  {
    name: "Works",
    link: "/works"
  },
  {
    name: "Career",
    link: "/career"
  }
];

export const help = [
  {
    name: "Customer Support",
    link: "/customer-support"
  },
  {
    name: "Delivery Details",
    link: "/delivery-details"
  },
  {
    name: "Terms & Conditions",
    link: "/terms-conditions"
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy"
  }
];

export const faq = [
  {
    name: "Account",
    link: "/faq/account"
  },
  {
    name: "Manage Deliveries",
    link: "/faq/manage-deliveries"
  },
  {
    name: "Orders",
    link: "/faq/orders"
  },
  {
    name: "Payments",
    link: "/faq/payments"
  }
];

export const resources = [
  {
    name: "Free eBooks",
    link: "/resources/free-ebooks"
  },
  {
    name: "Development Tutorial",
    link: "/resources/development-tutorial"
  },
  {
    name: "How to - Blog",
    link: "/resources/how-to-blog"
  },
  {
    name: "Youtube Playlist",
    link: "/resources/youtube-playlist"
  }
]