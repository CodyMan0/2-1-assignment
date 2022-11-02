export interface Car {
  payload: Payload[];
}

export interface Payload {
  additionalProducts: [
    {
      name: string;
      amount: number;
    }
  ];
  amount: number;
  attribute: {
    brand: string;
    fuelType: string;
    imageUrl: string;
    name: string;
    segment: string;
  };
  createdAt: string;
  id: number;
  insurance: [
    {
      name: string;
      description: string;
    }
  ];
  startDate: string;
}
