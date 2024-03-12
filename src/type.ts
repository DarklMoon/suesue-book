import { float } from "aws-sdk/clients/cloudfront";

// types.ts
export type Cart = {
  cart_id?: string;
  book_id?: string;
  book_title?: string;
  book_author?: string;
  book_image?: string;
  book_price?: number; // Adjusted to number based on previous discussions
  category_name?: string;
  book_quantity?: string;
  cart_quantity?: string;
};

export type Book = {
  book_id?: string;
  book_title?: string;
  book_author?: string;
  book_info?: string;
  book_image?: string;
  book_price?: float;
  category_name?: string;
  book_quantity?: string;
  book_seller?: string;
};


export type User = {
  // Define the user object structure here
  user_id?: string;
  first_name?: string;
  last_name?: string;
  email: string;
  username?: string;
  phone?: string;
  role?: string;
  user_img?: string;
  // Add other user properties as needed
};

export type Project =  {
  orderId: string;
  date: string;
  totalItems: number;
  totalPrice: string;
}