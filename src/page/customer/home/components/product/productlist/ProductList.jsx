import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../../../../../stores/slices/product.slice";

import ProductItem from "../productitem/ProductItem";


function ProductList(props) {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const { activeCategory } = props;

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <div class="row h-100 align-items-center g-2">
      {productState.data.map((item) => (
        <ProductItem product={item} />
      ))}
    </div>
  );
}

export default ProductList;