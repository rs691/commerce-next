import type { Product } from '@/lib/types';

const mockProducts: Product[] = [
  {
    id: '1',
    handle: 'custom-engraved-cutting-board',
    title: 'Custom Engraved Cutting Board',
    description: 'A beautiful and functional cutting board, crafted from solid maple wood. Personalize it with a name, date, or message to create a one-of-a-kind gift for weddings, anniversaries, or housewarmings. Perfect for both chopping and serving.',
    price: 65.00,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Custom engraved cutting board on a kitchen counter', 'data-ai-hint': 'cutting board' },
      { src: 'https://placehold.co/800x800.png', altText: 'Detail of the laser engraving on the wood', 'data-ai-hint': 'wood engraving' },
      { src: 'https://placehold.co/800x800.png', altText: 'Cutting board with cheese and grapes', 'data-ai-hint': 'charcuterie board' },
    ],
  },
  {
    id: '2',
    handle: 'live-edge-walnut-coffee-table',
    title: 'Live Edge Walnut Coffee Table',
    description: 'Make a statement with this stunning live edge coffee table. Made from a single slab of black walnut, it showcases the natural beauty and grain of the wood. Mounted on sleek, black metal legs for a modern industrial look.',
    price: 850.00,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Live edge walnut coffee table in a living room', 'data-ai-hint': 'wood table' },
      { src: 'https://placehold.co/800x800.png', altText: 'Close-up of the live edge and wood grain', 'data-ai-hint': 'wood grain' },
    ],
  },
  {
    id: '3',
    handle: 'personalized-wooden-coasters',
    title: 'Personalized Wooden Coasters',
    description: 'Protect your surfaces in style with a set of four personalized wooden coasters. Made from acacia wood, each coaster can be engraved with a different initial or design. A thoughtful and practical gift for any home.',
    price: 35.00,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Set of personalized wooden coasters', 'data-ai-hint': 'wood coasters' },
      { src: 'https://placehold.co/800x800.png', altText: 'A single coaster with a drink on it', 'data-ai-hint': 'coaster drink' },
    ],
  },
  {
    id: '4',
    handle: 'handcrafted-wooden-bowl',
    title: 'Handcrafted Wooden Bowl',
    description: 'A beautifully turned bowl made from cherry wood, perfect for serving salads, fruits, or as a decorative centerpiece. The food-safe finish highlights the natural warmth and color of the cherry wood. Each bowl is unique.',
    price: 120.00,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Handcrafted wooden bowl on a dining table', 'data-ai-hint': 'wooden bowl' },
      { src: 'https://placehold.co/800x800.png', altText: 'Empty wooden bowl showing the interior grain', 'data-ai-hint': 'wood texture' },
    ],
  },
  {
    id: '5',
    handle: 'wooden-wall-art',
    title: 'Geometric Wooden Wall Art',
    description: 'Add a touch of modern, rustic charm to your walls with this geometric wood art piece. Created from reclaimed wood pieces arranged in a striking pattern, it brings texture and warmth to any room.',
    price: 250.00,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Geometric wooden wall art hanging on a wall', 'data-ai-hint': 'wood art' },
      { src: 'https://placehold.co/800x800.png', altText: 'Detail of the different wood tones and textures', 'data-ai-hint': 'reclaimed wood' },
    ],
  },
  {
    id: '6',
    handle: 'custom-family-name-sign',
    title: 'Custom Family Name Sign',
    description: 'A beautiful, rustic sign personalized with your family name and established date. Carved from solid pine, this sign is perfect for an entryway, living room, or as a gallery wall centerpiece. A cherished family keepsake.',
    price: 95.00,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Custom family name sign hanging in a home', 'data-ai-hint': 'wood sign' },
      { src: 'https://placehold.co/800x800.png', altText: 'Close-up of the carved lettering', 'data-ai-hint': 'wood carving' },
    ],
  },
  {
    id: '7',
    handle: 'oak-bookshelf',
    title: 'Floating Oak Bookshelf',
    description: 'Minimalist and functional, these floating bookshelves are made from solid oak. They provide a clean, contemporary way to display your favorite books and decor items. Available in various lengths to fit your space.',
    price: 79.00,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Floating oak bookshelf with books on it', 'data-ai-hint': 'wood shelf' },
      { src: 'https://placehold.co/800x800.png', altText: 'A set of three floating shelves on a wall', 'data-ai-hint': 'wall shelves' },
    ],
  },
  {
    id: '8',
    handle: 'wooden-watch-box',
    title: 'Engraved Wooden Watch Box',
    description: 'A sophisticated storage solution for the watch collector. This glass-topped box is made from dark walnut wood and can be personalized with an engraved monogram. Lined with soft velvet to protect your timepieces.',
    price: 150.00,
    images: [
      { src: 'https://placehold.co/800x800.png', altText: 'Engraved wooden watch box holding several watches', 'data-ai-hint': 'watch box' },
      { src: 'https://placehold.co/800x800.png', altText: 'Detail of the engraving on the watch box lid', 'data-ai-hint': 'engraved box' },
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
