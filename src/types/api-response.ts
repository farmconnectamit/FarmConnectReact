/**
 * API Response Interfaces
 * These interfaces define the structure of API responses for the FarmConnect application
 */

/**
 * Base API response interface
 */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
  timestamp?: string;
}

/**
 * Product interface
 */
export interface Product {
  id: string;
  title?: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: string;
  merchant: string;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
  quantity?:number;
}

export interface FarmItemModel {
  "id": string,
  "name": string,
  "address": string,
  "location": string,
  "image_url": string,
  "id_proof": string,
  "contact_num": string,
  "email": string
}

/**
 * Product list response interface
 */
export interface ProductListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
}

/**
 * Authentication token interface
 */
export interface AuthTokens {
  access: string;
  refresh: string;
}

/**
 * Authentication response interface
 */
export interface AuthResponse {
  tokens: AuthTokens;
  user: {
    id: number;
    username: string;
    email: string;
    first_name?: string;
    last_name?: string;
  };
}

/**
 * Error response interface
 */
export interface ErrorResponse {
  detail?: string;
  errors?: Record<string, string[]>;
  message?: string;
  status_code?: number;
}