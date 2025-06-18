
export interface PreOrderData {
  businessName: string;
  fullName: string;
  roleTitle: string;
  email: string;
  phone: string;
  venueType: string;
  location: string;
  dinnerNapkins: {
    quantity: string;
    customAmount: string;
  };
  kitchenRolls: {
    quantity: string;
    customAmount: string;
  };
  compressedTowels: {
    quantity: string;
    customAmount: string;
  };
  notes: string;
}
