import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-gray-800 relative">
         {/* Image Overlay for Tint */}
        <div className="absolute inset-0 bg-charcoal-900/10 group-hover:bg-transparent transition-colors z-10" />
        
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
        />
        
        {/* Quick Add Button */}
        <button className="absolute bottom-4 right-4 z-20 bg-white text-charcoal-900 p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-gold-400">
          <Plus size={20} />
        </button>
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-serif text-white group-hover:text-gold-400 transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-lg font-medium text-gold-200">${product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;