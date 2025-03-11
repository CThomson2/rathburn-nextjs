export interface MaterialStock {
  material: string;
  count: number;
}

export interface DailyChange {
  day: string;
  netChange: number;
}

export interface StockLevels {
  totalStock: number;
  lowStockCount: number;
  lowStockMaterials: MaterialStock[];
  topMaterials: MaterialStock[];
}

export interface InventoryOverview extends StockLevels {
  weeklyStockChanges: DailyChange[];
}

export interface Material {
  id: number;
  name: string;
  stock: number;
  casNumber: string;
}

export interface MaterialGroup {
  chemicalGroup: string;
  totalStock: number;
  materialCount: number;
  percentage: string;
  materials: Material[];
}

export interface MaterialGroupsResponse {
  groups: MaterialGroup[];
  totalStock: number;
}

export interface GroupStock {
  chemicalGroup: string;
  totalStock: number;
  materialCount: number;
  materials: {
    id: number;
    name: string;
    stock: number;
    casNumber: string;
  }[];
}

export interface Order {
  order_id: string;
  supplier: string;
  material: string;
  quantity: number;
  quantity_received: number;
  status: "pending" | "partial" | "complete";
  date_ordered: string;
  po_number: string;
}

export interface RecentOrdersResponse {
  orders: Order[];
  message: string;
}
