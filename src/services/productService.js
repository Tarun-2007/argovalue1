import { authService } from './authService';

export const productService = {
  getAllProducts: async () => {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    return products;
  },

  getProductById: async (id) => {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    return products.find(p => p.id === id);
  },

  createProduct: async (productData) => {
    const user = authService.getCurrentUser();
    if (!user) {
      throw new Error('User not authenticated');
    }
    
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const newProduct = {
      id: Date.now(),
      ...productData,
      userId: user.id,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    return newProduct;
  },

  updateProduct: async (id, productData) => {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...productData };
      localStorage.setItem('products', JSON.stringify(products));
      return products[index];
    }
    throw new Error('Product not found');
  },

  deleteProduct: async (id) => {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const filtered = products.filter(p => p.id !== id);
    localStorage.setItem('products', JSON.stringify(filtered));
    return { success: true };
  },

  approveProduct: async (id) => {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index].status = 'approved';
      localStorage.setItem('products', JSON.stringify(products));
      return products[index];
    }
    throw new Error('Product not found');
  },

  rejectProduct: async (id) => {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index].status = 'rejected';
      localStorage.setItem('products', JSON.stringify(products));
      return products[index];
    }
    throw new Error('Product not found');
  },
};
