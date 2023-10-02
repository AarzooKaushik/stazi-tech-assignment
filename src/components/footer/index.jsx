import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

const Footer = () => {
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const navigate = useNavigate();
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= 10) {
      navigate(`/products/${newPage}`);
    }
  };

  return (
    <div className="footer">
      <div className="product-number">6 from 30</div>
      <div className="page-number">
        <div
          onClick={() => handlePageChange(currentPage - 1)}
          className={currentPage <= 1 ? "disabled" : ""}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        {pageNumbers.map((pageNumber) => (
          <div
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={pageNumber === currentPage ? "active" : ""}
          >
            {pageNumber}
          </div>
        ))}
        <div
          onClick={() => handlePageChange(currentPage + 1)}
          className={currentPage >= 10 ? "disabled" : ""}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
