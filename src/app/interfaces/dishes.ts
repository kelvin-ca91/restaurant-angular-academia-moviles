export interface IDish {
  _id?: string;
  category_id: string;
  category?: {
    name: string;
    _id: string;
  };
  name: string;
  price: number;
  description?: string;
  avatar?: string;
}
