import "./style.css";

const Card = ({ product }) => {
  return (
    <>
      <div className="card-container">
        <div className="card-img">
          <img src={product.img} alt="" />
        </div>
        <div className="card-details">
          <div className="card-name flex">
            <span className="name">{product.name} </span>{" "}
            <span className="modal"> {product.modal}</span>
          </div>
          <div className="card-specs">
            <div>
              <i className="fa-solid fa-users"></i>
              {product.seats} People
            </div>
            <div>
              <i className="fa-solid fa-gas-pump"></i>
              {product.fuelType}
            </div>
            <div>
              <i className="fa-solid fa-gauge"></i>
              {product.drive}
            </div>
            <div>
              <i className="fa-solid fa-star"></i>
              {product.rating}
            </div>
          </div>
          <div className="card-footer flex">
            <div className="card-price">
              <span>${product.price}</span>/month
            </div>
            <div className="card-button flex">
              <div>
                <i className="fa-regular fa-heart"></i>
              </div>
              <button>Rent Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
