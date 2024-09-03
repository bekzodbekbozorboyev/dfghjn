import React from "react";
import "./Products.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiStar } from "react-icons/hi";
import { FaChevronRight, FaHeart } from "react-icons/fa";
import { productData } from "./tools/productData";
import { removeLike } from "./tools/removeLike";
import { markLike } from "./tools/likeButton";

function Products() {
  return (
    <div className="products">
      <div className="title">
        <h2>Mashhur</h2>
        <FaChevronRight className="title_icon" />
      </div>
      <div className="products_container">
        {productData?.map((product) => (
          <div className="product_item">
            <div className="product_image">
              <IoMdHeartEmpty
                id="notliked"
                className="notliked"
                onClick={markLike}
              />
              <FaHeart id="liked" className="liked" onClick={removeLike} />
              <img src={product.img} alt="" />
              <div className="aksiya_container">
                { product.aksiya && <span id="aksiya" className="aksiya">
                  {product.aksiya ? "Aksiya" : ""}
                </span>}
                { product.productType && <span id="product_type" className="product_type">
                  {product.productType ? "Oroginal" : ""}
                </span> }
              </div>
            </div>
            <div className="product_info">
              <p className="info_product">{product.description}</p>
              <span id="rate">
                <HiStar className="rate_star_icon" />
                {product.rate}
              </span>
              <div className="installed_price">
                <span id="term_price">{product.termPrice} so'm/oyiga</span>
              </div>
              <div className="product_price">
                <div className="price">
                  <s className="old_price">{product.oldPrice}</s>
                  <span className="present_price">
                    {product.presentPrice} so'm
                  </span>
                </div>

                <a href="/" className="add_cart_icon">
                  <svg
                    data-v-cee4be4c=""
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ui-icon  add-cart-icon"
                  >
                    <path
                      d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                      fill="black"
                    ></path>
                    <path
                      d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="show_more">
        <button>
          <a href="/">Yana ko'rsatish 10</a>
        </button>
      </div>
    </div>
  );
}

export default Products;
