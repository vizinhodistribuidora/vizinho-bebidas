import beer from "@/assets/beer.jpg";
import energy from "@/assets/energy.jpg";
import spirit from "@/assets/spirit.jpg";
import snack from "@/assets/snack.jpg";

export type Category = "Cervejas" | "Energéticos" | "Destilados" | "Conveniência";
export const categories: Category[] = ["Cervejas", "Energéticos", "Destilados", "Conveniência"];

export type Product = {
  id: string;
  name: string;
  description: string;
  category: Category;
  price: number;
  oldPrice?: number;
  tags: ("Gelada" | "Retornável")[];
  image: string;
};

export const products: Product[] = [
  { id: "p1", name: "Cerveja Pilsen Long Neck", description: "355ml · Puro malte, leve e refrescante", category: "Cervejas", price: 6.9, oldPrice: 8.5, tags: ["Gelada"], image: beer },
  { id: "p2", name: "Cerveja Lager 600ml", description: "Garrafa 600ml · Ideal para dividir", category: "Cervejas", price: 9.5, tags: ["Gelada", "Retornável"], image: beer },
  { id: "p3", name: "Engradado 24 Long Necks", description: "24 x 355ml · Para a resenha toda", category: "Cervejas", price: 139.9, oldPrice: 159.9, tags: ["Gelada"], image: beer },
  { id: "p4", name: "Energético Gold 473ml", description: "Lata 473ml · Sabor tradicional", category: "Energéticos", price: 11.9, tags: ["Gelada"], image: energy },
  { id: "p5", name: "Energético Tropical 269ml", description: "Lata 269ml · Frutas tropicais", category: "Energéticos", price: 8.9, oldPrice: 10.5, tags: ["Gelada"], image: energy },
  { id: "p6", name: "Whisky 12 Anos 1L", description: "Garrafa 1L · Blended escocês", category: "Destilados", price: 189.9, tags: [], image: spirit },
  { id: "p7", name: "Gin Premium 750ml", description: "Garrafa 750ml · Notas cítricas", category: "Destilados", price: 129.9, oldPrice: 149.9, tags: [], image: spirit },
  { id: "p8", name: "Gelo em Cubos 5kg", description: "Saco 5kg · Filtrado", category: "Conveniência", price: 14.9, tags: ["Gelada"], image: snack },
  { id: "p9", name: "Batata Chips 120g", description: "Pacote 120g · Sal marinho", category: "Conveniência", price: 9.9, tags: [], image: snack },
];

export type Combo = { id: string; name: string; items: string; price: number; oldPrice: number; image: string; tag?: string };
export const combos: Combo[] = [
  { id: "c1", name: "Combo Resenha", items: "12 long necks + gelo 5kg + chips", price: 99.9, oldPrice: 119.9, image: beer, tag: "Mais pedido" },
  { id: "c2", name: "Combo Balada", items: "Gin 750ml + 4 energéticos + gelo", price: 169.9, oldPrice: 199.9, image: spirit, tag: "Premium" },
  { id: "c3", name: "Combo Virada", items: "Whisky 1L + 6 energéticos + gelo", price: 239.9, oldPrice: 279.9, image: energy },
  { id: "c4", name: "Combo Futebol", items: "Engradado 600ml + 2 chips", price: 129.9, oldPrice: 149.9, image: snack },
];

export const weeklyPromos = products.filter((p) => p.oldPrice);
export const newArrivals = [products[4], products[6], products[1], products[8]].filter((p): p is Product => !!p);

export const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
