export interface IOrdersDashboard {
  label: string[];
  data: [
    {
      data: number[];
      label: string;
    }
  ];
}

export interface IOrder {
  date: Date;
  _id: string;
  pos: number;
  client: {
    _id: string;
    nombres: string;
    apellidos: string;
  };
  dishes: [
    {
      dish_id: string;
      price: number;
      cant: number;
    }
  ];
  cant_dishes: number;
  price_total: number;
}
