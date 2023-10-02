import data from "../../data.json";
import Card from "../card/index";
import "./style.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Products = () => {
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;
  const productsPerPage = 6;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const searchQuery = useSelector((state) => state.searchQuery);

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
  return (
    <>
      {productsToDisplay.length !== 0 ? (
        <div className="products">
          {productsToDisplay.map((product) => {
            return <Card key={product.id} product={product}></Card>;
          })}
        </div>
      ) : (
        <div className="noProduct">No more products</div>
      )}
    </>
  );
};
export default Products;
