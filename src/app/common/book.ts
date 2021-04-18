import {BookCategory} from './BookCategory';

export class Book {
  id: number;
  sku: string;
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  imageUrl: string;
  active: boolean;
  unitsInStock: number;
  createdOn: Date;
  updatedOn: any;
  bookCategory: BookCategory;
}
