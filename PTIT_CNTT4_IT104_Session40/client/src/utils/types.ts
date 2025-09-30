export type Category = {
  id?: number | string;
  name: string;
  describe?: string;
  status: "active" | "inactive" | "all";
};
export type Product = {
  id?: number;
  name: string;
  image: string;
  price: number;
  status: string;
  categoryId: number | string;
};
