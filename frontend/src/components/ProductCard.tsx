import { Product } from "../types/product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-indigo-50 hover:bg-indigo-100 transition rounded-2xl shadow-md p-5 border border-indigo-100 flex flex-col">
      {/* Placeholder image */}
      <img
        src="https://content.jdmagicbox.com/quickquotes/images_main/hp-laptops-16-11-2022-06-272322557-74rakdnb.png?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
        className="rounded-lg mb-4 object-cover w-full h-40"
      />

      <h2 className="text-xl font-semibold text-indigo-700 mb-2">{product.name}</h2>
      <p className="text-gray-800 font-medium mb-1">
        Price: <span className="text-green-600">${product.price.toFixed(2)}</span>
      </p>
      <p className="text-gray-800 mb-1">Quantity: {product.quantity}</p>
      <p className="text-gray-700 text-sm">Category: {product.category}</p>

    </div>
  );
};

export default ProductCard;