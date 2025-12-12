import { products } from "./products";

const baseOrders = [
  {
    id: "INV-2025-011",
    customer: "Budi Santoso",
    status: "Menunggu",
    date: "2025-12-08",
    items: [
      { productId: 1, qty: 2 },
      { productId: 5, qty: 1 },
    ],
  },
  {
    id: "INV-2025-012",
    customer: "Sinta Dewi",
    status: "Diproses",
    date: "2025-12-09",
    items: [
      { productId: 11, qty: 1 },
      { productId: 3, qty: 1 },
    ],
  },
  {
    id: "INV-2025-013",
    customer: "Rama Wijaya",
    status: "Dikirim",
    date: "2025-12-10",
    items: [
      { productId: 7, qty: 1 },
      { productId: 2, qty: 1 },
      { productId: 8, qty: 2 },
    ],
  },
  {
    id: "INV-2025-014",
    customer: "Tasya Nur",
    status: "Selesai",
    date: "2025-12-10",
    items: [
      { productId: 4, qty: 1 },
      { productId: 10, qty: 1 },
    ],
  },
  {
    id: "INV-2025-015",
    customer: "Dimas Putra",
    status: "Selesai",
    date: "2025-12-11",
    items: [
      { productId: 6, qty: 2 },
      { productId: 9, qty: 1 },
    ],
  },
];

const findProduct = (productId) => products.find((p) => p.id === productId);

export const ordersData = baseOrders.map((order) => {
  const lineItems = order.items.map((item) => {
    const product = findProduct(item.productId);
    return {
      ...item,
      productName: product?.name || "Produk tidak ditemukan",
      price: product?.price || 0,
    };
  });

  const total = lineItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemsCount = lineItems.reduce((sum, item) => sum + item.qty, 0);

  return { ...order, lineItems, total, itemsCount };
});

export const topProductsData = (() => {
  const totals = new Map();

  ordersData.forEach((order) => {
    order.lineItems.forEach((item) => {
      const current = totals.get(item.productId) || {
        productId: item.productId,
        name: item.productName,
        sold: 0,
        revenue: 0,
      };
      current.sold += item.qty;
      current.revenue += item.qty * item.price;
      totals.set(item.productId, current);
    });
  });

  return Array.from(totals.values()).sort((a, b) => b.revenue - a.revenue);
})();

export const weeklyVolume = (() => {
  const days = [];
  const start = new Date("2025-12-05");
  for (let i = 0; i < 7; i += 1) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const label = d.toISOString().slice(5, 10); // MM-DD
    days.push({ label, date: d.toISOString().slice(0, 10), value: 0 });
  }

  ordersData.forEach((order) => {
    const target = days.find((d) => d.date === order.date);
    if (target) {
      target.value += 1; // count per order
    }
  });

  return days;
})();
