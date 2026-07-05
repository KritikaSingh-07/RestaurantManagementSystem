import { StartersGallary } from "../assets/images.js";
import {
  PastaPizzaGallary,
  BiryaniGallary,
  DessertGallary,
  MainCourseGallary,
  SaladsGallary,
} from "../assets/images";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  isAvailable: boolean;
  isVeg: boolean;
  ingredients?: string[];
}

export const categories = [
  "Starters",
  "Main Course",
  "Pizza & Pasta",
  "Desserts",
  "Salads",
  "Biryani",
];

// NOTE:
// This is used as a frontend fallback when backend menu fetch fails / returns empty.
// Categories must match Backend/src/utils/constants.js menuCategoryEnums.
export const menuItems: MenuItem[] = [
  // ------------------------- Starters -------------------------
  {
    id: "s-1",
    name: "Masala Papad",
    description: "Crispy roasted papad tempered with spices and tangy masala.",
    category: "Starters",
    price: 79,
    image: StartersGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["papad", "cumin", "chilli", "lime", "coriander"],
  },
  {
    id: "s-2",
    name: "Pani Puri (Gol Gappe)",
    description: "Crisp puris filled with spicy tangy pani and mashed potato.",
    category: "Starters",
    price: 129,
    image: StartersGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["puri", "potato", "tamarind", "mint", "chaat masala"],
  },
  {
    id: "s-3",
    name: "Samosa with Green Chutney",
    description: "Golden fried potato-spinach filling samosa with mint chutney.",
    category: "Starters",
    price: 119,
    image: StartersGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["samosa", "potato", "peas", "mint", "coriander"],
  },
  {
    id: "s-4",
    name: "Paneer Tikka",
    description: "Char-grilled paneer cubes marinated in smoky tandoor masala.",
    category: "Starters",
    price: 219,
    image: StartersGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["paneer", "yogurt", "tandoor spices", "bell pepper"],
  },
  {
    id: "s-5",
    name: "Veg Manchurian Dry",
    description: "Crisp veg bites tossed in a bold Indo-Chinese manchurian sauce.",
    category: "Starters",
    price: 189,
    image: StartersGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["cauliflower", "soy sauce", "garlic", "spring onion"],
  },

  // ------------------------- Main Course -------------------------
  {
    id: "m-1",
    name: "Dal Makhani",
    description: "Creamy black lentils simmered with butter, cream & warm spices.",
    category: "Main Course",
    price: 249,
    image: MainCourseGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["urad dal", "butter", "cream", "kasuri methi"],
  },
  {
    id: "m-2",
    name: "Chana Masala",
    description: "Chickpeas cooked in spicy tomato-onion gravy with garam masala.",
    category: "Main Course",
    price: 229,
    image: MainCourseGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["chickpeas", "tomato", "onion", "garam masala"],
  },
  {
    id: "m-3",
    name: "Baingan Bharta",
    description: "Smoky roasted eggplant blended with spices and garlic tadka.",
    category: "Main Course",
    price: 209,
    image: MainCourseGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["eggplant", "garlic", "oil", "spices"],
  },
  {
    id: "m-4",
    name: "Matar Paneer",
    description: "Paneer & peas in a rich North Indian gravy.",
    category: "Main Course",
    price: 269,
    image: MainCourseGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["paneer", "peas", "tomato gravy", "cream"],
  },
  {
    id: "m-5",
    name: "Chicken Curry",
    description: "Tender chicken cooked in aromatic Indian curry with herbs.",
    category: "Main Course",
    price: 329,
    image: MainCourseGallary,
    isAvailable: true,
    isVeg: false,
    ingredients: ["chicken", "curry spices", "onion", "tomato"],
  },

  // ------------------------- Pizza & Pasta -------------------------
  {
    id: "p-1",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella & basil.",
    category: "Pizza & Pasta",
    price: 349,
    image: PastaPizzaGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["tomato sauce", "mozzarella", "basil"],
  },
  {
    id: "p-2",
    name: "Mexican Veg Loaded Pizza",
    description: "Spicy veg toppings with cheese and Mexican salsa notes.",
    category: "Pizza & Pasta",
    price: 399,
    image: PastaPizzaGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["mixed veggies", "jalapenos", "cheese"],
  },
  {
    id: "p-3",
    name: "Paneer Alfredo Pasta",
    description: "Creamy alfredo sauce with paneer and herbs.",
    category: "Pizza & Pasta",
    price: 319,
    image: PastaPizzaGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["paneer", "alfredo sauce", "garlic", "parmesan"],
  },
  {
    id: "p-4",
    name: "Spicy Arrabbiata Pasta",
    description: "Tangy tomato sauce with chilli and Italian herbs.",
    category: "Pizza & Pasta",
    price: 299,
    image: PastaPizzaGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["tomato", "chilli flakes", "basil", "garlic"],
  },
  {
    id: "p-5",
    name: "Chicken Pesto Pasta",
    description: "Herby pesto pasta with grilled chicken and parmesan.",
    category: "Pizza & Pasta",
    price: 379,
    image: PastaPizzaGallary,
    isAvailable: true,
    isVeg: false,
    ingredients: ["chicken", "pesto", "parmesan", "garlic"],
  },

  // ------------------------- Desserts -------------------------
  {
    id: "d-1",
    name: "Gulab Jamun",
    description: "Soft khoya dumplings soaked in fragrant sugar syrup.",
    category: "Desserts",
    price: 169,
    image: DessertGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["khoya", "saffron", "cardamom"],
  },
  {
    id: "d-2",
    name: "Rasgulla",
    description: "Spongy cottage-cheese balls in chilled syrup.",
    category: "Desserts",
    price: 159,
    image: DessertGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["chenna", "sugar syrup", "rose"],
  },
  {
    id: "d-3",
    name: "Kesar Rabri",
    description: "Thick sweet rabri with saffron and traditional flavours.",
    category: "Desserts",
    price: 189,
    image: DessertGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["milk", "saffron", "cardamom"],
  },
  {
    id: "d-4",
    name: "Chocolate Brownie",
    description: "Fudgy chocolate brownie with a warm gooey center.",
    category: "Desserts",
    price: 219,
    image: DessertGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["cocoa", "chocolate", "butter"],
  },

  // ------------------------- Salads -------------------------
  {
    id: "sa-1",
    name: "Greek Salad",
    description: "Fresh cucumber, tomato, olives & feta with light dressing.",
    category: "Salads",
    price: 199,
    image: SaladsGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["cucumber", "tomato", "olives", "feta"],
  },
  {
    id: "sa-2",
    name: "Kachumber Salad",
    description: "Crunchy chopped salad with onion, cucumber, tomato & lemon.",
    category: "Salads",
    price: 149,
    image: SaladsGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["cucumber", "onion", "tomato", "lemon"],
  },
  {
    id: "sa-3",
    name: "Corn & Bean Salad",
    description: "Sweet corn and beans tossed with herbs and tangy dressing.",
    category: "Salads",
    price: 179,
    image: SaladsGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["corn", "beans", "herbs", "lemon"],
  },

  // ------------------------- Biryani -------------------------
  {
    id: "b-1",
    name: "Hyderabadi Chicken Biryani",
    description: "Aromatic basmati layered with chicken, fried onions & biryani spices.",
    category: "Biryani",
    price: 429,
    image: BiryaniGallary,
    isAvailable: true,
    isVeg: false,
    ingredients: ["basmati", "chicken", "whole spices", "fried onions"],
  },
  {
    id: "b-2",
    name: "Veg Dum Biryani",
    description: "Veg dum biryani cooked with saffron, herbs & fragrant rice.",
    category: "Biryani",
    price: 359,
    image: BiryaniGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["basmati", "mixed vegetables", "saffron"],
  },
  {
    id: "b-3",
    name: "Paneer Biryani",
    description: "Soft paneer pieces layered with aromatic spices and biryani rice.",
    category: "Biryani",
    price: 379,
    image: BiryaniGallary,
    isAvailable: true,
    isVeg: true,
    ingredients: ["paneer", "basmati", "biryani spices"],
  },
  {
    id: "b-4",
    name: "Mutton Dum Biryani",
    description: "Slow-cooked mutton dum biryani with rich spices and tenderness.",
    category: "Biryani",
    price: 529,
    image: BiryaniGallary,
    isAvailable: true,
    isVeg: false,
    ingredients: ["mutton", "basmati", "garam masala"],
  },
];

// Gallery
export interface GalleryItem {
  image: string;
  title: string;
  category: string;
}

export const galleryCategories = [
  "Starters",
  "Main Course",
  "Pizza & Pasta",
  "Desserts",
  "Salads",
  "Biryani",
];

export const galleryItems: GalleryItem[] = [
  { image: PastaPizzaGallary, title: "Artisan Pasta", category: "Pizza & Pasta" },
  { image: BiryaniGallary, title: "Fragrant Heritage", category: "Biryani" },
  { image: SaladsGallary, title: "Fresh & Green", category: "Salads" },
  { image: DessertGallary, title: "Sweet Indulgence", category: "Desserts" },
  { image: StartersGallary, title: "Chef's Greeting", category: "Starters" },
  { image: MainCourseGallary, title: "Culinary Craft", category: "Main Course" },
];

// Legacy flat gallery
export const galleryImages = [
  StartersGallary,
  PastaPizzaGallary,
  BiryaniGallary,
  SaladsGallary,
  DessertGallary,
  StartersGallary,
  StartersGallary,
  MainCourseGallary,
];

// Featured items used as offline fallback (kept compatible with existing code)
export const featuredMenuItems = menuItems.filter((item) =>
  // previous logic referenced ids like "1","4","6","7"; update to deterministic pick
  ["s-1", "b-1", "d-1", "m-1"].includes(item.id)
);

