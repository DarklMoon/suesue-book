import { float } from "aws-sdk/clients/cloudfront";

// types.ts
export type Cart = {
  cart_id?: string;
  book_id?: string;
  book_title?: string;
  book_author?: string;
  book_image?: string;
  book_price?: float; // Adjusted to number based on previous discussions
  category_name?: string;
  book_quantity?: number;
  cart_quantity?: string;
  total_price?: float;
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

export type Shipping = {
  shipment_id: string;
  receiver_name: string;
  receiver_phone: string;
  street_address: string;
  province: string;
  district: string;
  sub_district: string;
  postal_code: string;
  customer_id: string;  
}