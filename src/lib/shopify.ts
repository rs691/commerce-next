import type { Product } from '@/lib/types';

const mockProducts: Product[] = [
  {
    id: '1',
    handle: 'classic-leather-tote',
    title: 'Classic Leather Tote',
    description: 'A timeless and versatile tote bag crafted from genuine full-grain leather. Its spacious interior and minimalist design make it the perfect accessory for both work and weekend outings. Features sturdy handles and a secure zip closure.',
    price: 189.99,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Classic Leather Tote held by model', 'data-ai-hint': 'leather tote' },
      { src: 'https://placehold.co/800x800.png', altText: 'Detailed shot of the tote\'s texture', 'data-ai-hint': 'leather bag' },
      { src: 'https://placehold.co/800x800.png', altText: 'Interior view of the tote bag', 'data-ai-hint': 'bag interior' },
    ],
  },
  {
    id: '2',
    handle: 'minimalist-watch',
    title: 'Minimalist Watch',
    description: 'Embrace simplicity with this elegant minimalist watch. Featuring a clean, numberless dial, a slim case, and a comfortable leather strap, it’s a sophisticated timepiece for any occasion. Water-resistant and built to last.',
    price: 129.00,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Minimalist Watch on a wrist', 'data-ai-hint': 'watch wrist' },
      { src: 'https://placehold.co/800x800.png', altText: 'Close-up of the watch face', 'data-ai-hint': 'watch face' },
    ],
  },
  {
    id: '3',
    handle: 'organic-cotton-tee',
    title: 'Organic Cotton Tee',
    description: 'Experience ultimate comfort with our super-soft organic cotton t-shirt. Ethically sourced and sustainably made, this tee offers a relaxed fit and a durable construction. A perfect staple for a conscious wardrobe.',
    price: 39.50,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Model wearing the Organic Cotton Tee', 'data-ai-hint': 'tshirt model' },
      { src: 'https://placehold.co/800x800.png', altText: 'Fabric detail of the organic cotton', 'data-ai-hint': 'cotton fabric' },
    ],
  },
  {
    id: '4',
    handle: 'modern-ceramic-planter',
    title: 'Modern Ceramic Planter',
    description: 'Elevate your home decor with this sleek, modern ceramic planter. Its clean lines and matte finish complement any interior style. Includes a drainage hole and optional saucer. Ideal for small to medium-sized houseplants.',
    price: 55.00,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Modern Ceramic Planter with a plant', 'data-ai-hint': 'ceramic planter' },
      { src: 'https://placehold.co/800x800.png', altText: 'Set of ceramic planters', 'data-ai-hint': 'house plants' },
    ],
  },
  {
    id: '5',
    handle: 'silk-blend-scarf',
    title: 'Silk-Blend Scarf',
    description: 'Add a touch of luxury to your outfit with this beautiful silk-blend scarf. Featuring a subtle, elegant pattern and a lightweight feel, it can be styled in numerous ways. The perfect accessory for year-round elegance.',
    price: 75.00,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Model wearing the silk-blend scarf', 'data-ai-hint': 'woman scarf' },
      { src: 'https://placehold.co/800x800.png', altText: 'Folded scarf showing pattern detail', 'data-ai-hint': 'fabric pattern' },
    ],
  },
  {
    id: '6',
    handle: 'rechargeable-desk-lamp',
    title: 'Rechargeable Desk Lamp',
    description: 'Illuminate your workspace with this minimalist, rechargeable LED desk lamp. It offers three brightness levels, a flexible gooseneck design, and a long-lasting battery. Its compact, wireless design saves space and reduces clutter.',
    price: 89.99,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Desk lamp on a modern desk', 'data-ai-hint': 'desk lamp' },
      { src: 'https://placehold.co/800x800.png', altText: 'Lamp showing adjustable brightness', 'data-ai-hint': 'modern lamp' },
    ],
  },
  {
    id: '7',
    handle: 'insulated-water-bottle',
    title: 'Insulated Water Bottle',
    description: 'Stay hydrated in style with our stainless steel insulated water bottle. It keeps drinks cold for 24 hours or hot for 12. The leak-proof lid and durable, powder-coated finish make it ideal for travel, gym, or daily use.',
    price: 34.00,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Insulated Water Bottle next to a gym bag', 'data-ai-hint': 'water bottle' },
      { src: 'https://placehold.co/800x800.png', altText: 'Person drinking from the bottle', 'data-ai-hint': 'person drinking' },
    ],
  },
  {
    id: '8',
    handle: 'premium-yoga-mat',
    title: 'Premium Yoga Mat',
    description: 'Find your flow with our premium, non-slip yoga mat. Made from eco-friendly, high-density material, it provides excellent cushioning and support for your joints. Lightweight and easy to clean, it comes with a convenient carrying strap.',
    price: 95.00,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Premium Yoga Mat rolled out', 'data-ai-hint': 'yoga mat' },
      { src: 'https://placehold.co/800x800.png', altText: 'Person doing yoga on the mat', 'data-ai-hint': 'person yoga' },
    ],
  },
];


export async function getProducts(): Promise<Product[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockProducts;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockProducts.find(product => product.id === id);
}

export async function getProductByHandle(handle: string): Promise<Product | undefined> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockProducts.find(product => product.handle === handle);
}
