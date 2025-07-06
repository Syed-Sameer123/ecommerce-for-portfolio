import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'all', name: 'All Products', count: 12 },
  { id: 'watches', name: 'Luxury Watches', count: 4 },
  { id: 'jewelry', name: 'Fine Jewelry', count: 3 },
  { id: 'bags', name: 'Designer Bags', count: 3 },
  { id: 'accessories', name: 'Accessories', count: 2 },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Chronograph Master Elite",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "watches",
    description: "A masterpiece of Swiss engineering, this chronograph features a precision automatic movement with 42-hour power reserve. The elegant design combines classic aesthetics with modern functionality.",
    features: ["Swiss Automatic Movement", "42-Hour Power Reserve", "Sapphire Crystal", "Water Resistant 100m", "Chronograph Function"],
    inStock: true,
    rating: 4.9,
    reviews: 89,
    isNew: true,
    isFeatured: true
  },
  {
    id: 2,
    name: "Diamond Eternity Ring",
    price: 1899,
    image: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1456691/pexels-photo-1456691.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "jewelry",
    description: "Exquisite diamond eternity ring crafted from premium 18k white gold. Each diamond is carefully selected for optimal brilliance and fire.",
    features: ["18k White Gold", "VS1 Clarity Diamonds", "Conflict-Free Certified", "Lifetime Warranty", "Custom Sizing Available"],
    inStock: true,
    rating: 4.8,
    reviews: 156,
    isFeatured: true
  },
  {
    id: 3,
    name: "Heritage Leather Handbag",
    price: 899,
    originalPrice: 1199,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1058911/pexels-photo-1058911.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "bags",
    description: "Timeless elegance meets modern functionality in this heritage leather handbag. Handcrafted from the finest Italian leather with meticulous attention to detail.",
    features: ["Italian Leather", "Handcrafted", "Multiple Compartments", "Adjustable Strap", "Dust Bag Included"],
    inStock: true,
    rating: 4.7,
    reviews: 203,
    isFeatured: true
  },
  {
    id: 4,
    name: "Sapphire Elegance Watch",
    price: 3299,
    image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "watches",
    description: "Sophisticated timepiece featuring a stunning sapphire crystal and premium Swiss movement. The perfect combination of luxury and precision.",
    features: ["Swiss Movement", "Sapphire Crystal", "Leather Strap", "Water Resistant", "Limited Edition"],
    inStock: true,
    rating: 4.9,
    reviews: 67,
    isNew: true
  },
  {
    id: 5,
    name: "Pearl Necklace Collection",
    price: 1299,
    image: "https://images.pexels.com/photos/1456691/pexels-photo-1456691.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1456691/pexels-photo-1456691.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "jewelry",
    description: "Lustrous cultured pearl necklace featuring perfectly matched pearls with exceptional nacre quality. A timeless piece for any jewelry collection.",
    features: ["Cultured Pearls", "14k Gold Clasp", "Silk Thread", "Certificate of Authenticity", "Jewelry Box Included"],
    inStock: true,
    rating: 4.8,
    reviews: 124,
    isFeatured: true
  },
  {
    id: 6,
    name: "Executive Briefcase",
    price: 1599,
    image: "https://images.pexels.com/photos/1058911/pexels-photo-1058911.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1058911/pexels-photo-1058911.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "bags",
    description: "Professional executive briefcase crafted from premium leather. Features organized compartments and secure locking mechanisms for the discerning professional.",
    features: ["Premium Leather", "Combination Lock", "Laptop Compartment", "Document Organizer", "Lifetime Warranty"],
    inStock: true,
    rating: 4.6,
    reviews: 89,
    isNew: true
  },
  {
    id: 7,
    name: "Vintage Classic Timepiece",
    price: 1799,
    originalPrice: 2199,
    image: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "watches",
    description: "Vintage-inspired timepiece with modern reliability. This classic design captures the essence of timeless elegance with contemporary precision.",
    features: ["Vintage Design", "Modern Movement", "Leather Strap", "Scratch Resistant", "Water Resistant"],
    inStock: true,
    rating: 4.7,
    reviews: 145,
    isFeatured: true
  },
  {
    id: 8,
    name: "Emerald Statement Ring",
    price: 2799,
    image: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1456691/pexels-photo-1456691.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "jewelry",
    description: "Stunning emerald statement ring featuring a rare Colombian emerald surrounded by brilliant diamonds. A true masterpiece of jewelry artistry.",
    features: ["Colombian Emerald", "Diamond Accents", "18k Gold Setting", "GIA Certified", "Custom Design"],
    inStock: false,
    rating: 4.9,
    reviews: 34,
    isNew: true
  },
  {
    id: 9,
    name: "Crossbody Luxury Bag",
    price: 699,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1058911/pexels-photo-1058911.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "bags",
    description: "Versatile crossbody bag that transitions effortlessly from day to night. Crafted from supple leather with thoughtful design details.",
    features: ["Supple Leather", "Adjustable Strap", "Multiple Pockets", "Magnetic Closure", "Compact Design"],
    inStock: true,
    rating: 4.5,
    reviews: 178,
    isFeatured: true
  },
  {
    id: 10,
    name: "Luxury Sunglasses",
    price: 399,
    originalPrice: 499,
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "accessories",
    description: "Premium sunglasses with polarized lenses and titanium frames. Combines style and functionality for the ultimate luxury accessory.",
    features: ["Polarized Lenses", "Titanium Frame", "UV Protection", "Scratch Resistant", "Case Included"],
    inStock: true,
    rating: 4.4,
    reviews: 267,
    isNew: true
  },
  {
    id: 11,
    name: "Gold Cufflinks Set",
    price: 299,
    image: "https://images.pexels.com/photos/1456691/pexels-photo-1456691.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1456691/pexels-photo-1456691.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "accessories",
    description: "Elegant gold cufflinks featuring intricate design details. Perfect for formal occasions and professional settings.",
    features: ["14k Gold", "Handcrafted", "Gift Box", "Engraving Available", "Lifetime Warranty"],
    inStock: true,
    rating: 4.6,
    reviews: 94,
    isFeatured: true
  },
  {
    id: 12,
    name: "Sports Chronograph",
    price: 1999,
    image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "watches",
    description: "Professional sports chronograph built for performance and precision. Features advanced timing capabilities and robust construction.",
    features: ["Sport Movement", "Tachymeter", "Stainless Steel", "Water Resistant 200m", "Luminous Hands"],
    inStock: true,
    rating: 4.8,
    reviews: 112,
    isNew: true
  }
];