export interface Farm {
    id: number;
    name: string;
    description: string;
    latitude: string;
    longitude: string;
    address: string;
    tags: Tag[];
    created_at?: string;
    updated_at?: string;
    image_url: string;
    is_active: boolean;
    is_approved: boolean;
    rating:string | number;
    reviews: string | number;
    distance: string | number;
}

export interface Tag {
    id: number;
    name: string;
}

// For creating/updating farms
export interface CreateFarmRequest {
    name: string;
    description?: string;
    latitude?: string;
    longitude?: string;
    address?: string;
    tags?: number[];
    image_url?: string;
    is_active?: boolean;
}

export interface UpdateFarmRequest extends Partial<CreateFarmRequest> {
    id: number |string;
}

// For query parameters
export interface FarmQueryParams {
    search?: string;
    is_active?: boolean;
    is_approved?: boolean;
    tags?: number[];
    page?: number;
    page_size?: number;
}