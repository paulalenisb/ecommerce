import { React, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector, connect } from "react-redux";
import _ from "lodash";
import { FetchProducts } from "../redux/actions/productActions";
import "../style/productList.css";
import { addToCart } from "../redux/actions/shoppingActions";
import ShopCart from "./ShopCart";


const ProductList = ({ addToCart }) => {

  const dispatch = useDispatch();
  const productList = useSelector(state => state.ProductList);

  useEffect(() => {
    FetchData()
  }, [])

  const FetchData = () => {
    dispatch(FetchProducts())
  }

  const settings = {
    dots: false,
    bool: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 962,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 569,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const ShowData = () => {

    const dataProduct = productList.data;
    console.log(dataProduct);

    if (!_.isEmpty(dataProduct)) {
      return (
        <Container className="slider-content">
          <Slider {...settings}>
            {dataProduct.map((product, index) => {
              let price = product.price_real

              let priceDots = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

              return (
                <>
                  <Card key={index + 'p'} className="card-product">
                    <div className="card-img">
                      <Card.Img className="product-img" src={product.image} />
                    </div>
                    <Card.Body>
                      <div className="stroke">
                        <Card.Text className="brand-name">
                          {product.supplier}
                        </Card.Text>
                        <div className="number-content">
                          <Card.Text className="num_net">
                            {product.net_content}
                          </Card.Text>
                        </div>
                      </div>

                      <Card.Text className="product-title">{product.title}</Card.Text>

                      <div className="price">
                        <p className="cop">$</p>
                        <p className="num-price">{priceDots}</p>
                        <p className="units"> x{product.units_sf} unids</p>
                      </div>
                      
                    </Card.Body>
                    <div className="btn-content">
                      <Button
                        onClick={() => addToCart(product.id)} className="btn" variant="success">Agregar al carrito</Button>
                    </div>
                  </Card>

                </>
              )
            })}
          </Slider>
        </Container>
      )
    }

    if (productList.loading) {
      return <p> loading... </p>
    }

    if (productList.errorMsg !== "") {
      return <p>{productList.errorMsg}</p>
    }

    return <p>Unable to get data</p>
  }


  return (
    <>
      <div className="new_products">
        <p className="new_txt">Nuevo en SuperFuds</p>
        <p className="see_more"> Ver más</p>
      </div>
      <div>
        {ShowData()}
      </div>
      <div>
        <ShopCart />
      </div>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  }
}
export default connect(null, mapDispatchToProps)(ProductList);