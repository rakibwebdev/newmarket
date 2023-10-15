import { type } from "os";

// create a type Product
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  amount: number;
  tag: string;
  category: string[];
};

export type Review = {
  id: number;
  name: string;
  title: string;
  content: string;
  rating: number;
  date: string;
};
// Create a type product details
export type ProductDetails = {
  id: number;
  name: string;
  price: number;
  image: string;
  thumbnailImages: string[];
  quantity: number;
  category: string[];
  shortDescription: string;
  description: string;
  information: string;
  shippingInfo: string;
  reviews: Review[];
};