export interface Banner {
    id: string;
    label: string;
    imageURL: string;
}


export interface Category {
    id: string;
    name: string;
    banner: Banner;
}

export interface Product {
    id : string;
    category: Category;
    name: string;
    price:string;
    isFeatured: boolean;
    images: Image[];
}

export interface Image {
    id: string;
    url: string;
}