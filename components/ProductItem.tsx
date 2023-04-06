import Link from "next/link";

type ProductProps = {
  product: any;
};

const ProductItem = ({ product }: ProductProps) => {
  return (
    <div className="card">
      <Link href={`/product/${product._id}`} className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="img_size"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5 mt-3">
        <Link href={`/product/${product._id}`}>
          <h2 className="text-center">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <h5>{product.price}</h5>
      </div>
    </div>
  );
};

export default ProductItem;
