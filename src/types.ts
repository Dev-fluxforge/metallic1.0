export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  discount?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
