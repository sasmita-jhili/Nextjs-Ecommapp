import products from "@/utils/products";
import ProductItem from "./ProductItem";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
      {products.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </div>
  );
};

export default HomePage;
