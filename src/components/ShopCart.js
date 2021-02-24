import React from 'react';
import "../style/shopCart.css"
import { FiChevronLeft, FiPlusCircle, FiTrash2, FiMinusCircle } from "react-icons/fi";

export default function ShopCart({ showModal, setShowModal }) {
    return (
        <>
            {showModal ? (
                <div className='overlay'>
                    <div className='modal'>
                        <div>
                      <FiChevronLeft/>
                            <p>Volver a la tienda</p>
                        </div>
                        <div>
                            <h1>Carrito de compras</h1>
                            <div>
                            <span>0</span> <p>items</p>
                            </div>
                        </div>
                        <div>
                            <p>item</p>
                            <p>Cantidad</p>
                            <p>Precio</p>
                        </div>
                        <div>
                        <div>
                            <img/>
                            <p>title</p>
                            <p>unids and gr</p>
                            <p>supplier</p>
                        </div>
                        <div>
                        <FiPlusCircle/>
                        <p>0</p>
                        <FiMinusCircle/>
                        </div>
                        <div>
                        <span>$</span>
                        <p>price</p>
                        </div>
                        <FiTrash2/>
                        </div>
                        {/* <button
                      className='Btn-cancel'
                      onClick={() => setShowModal(close => !close)}>
                      <IoIosArrowBack/>
                      
                    </button> */}
                    </div>
                </div>
            ) : null
            }
        </>
    )
}
