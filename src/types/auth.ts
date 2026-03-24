export interface User {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    image_url: string;
    address: string;
}

export interface AuthResponse {
    access: string;
    refresh: string;
    user: User;
}

// Optional: For login request payload
export interface LoginRequest {
    username: string;
    password: string;
}

// Optional: For registration request
export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
}