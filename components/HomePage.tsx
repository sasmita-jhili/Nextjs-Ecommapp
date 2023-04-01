import { useEffect, useState } from "react";
import { products } from "../utils/products";
const HomePage = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    setData(products);
  }, []);

  console.log("data", data);

  return (
    <div>
      {data.map((product: any) => {
        return <div>{product.image}</div>;
      })}
    </div>
  );
};

export default HomePage;
