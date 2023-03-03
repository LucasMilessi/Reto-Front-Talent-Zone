import React, { useState } from 'react'
import { AddProduct } from '../components/product/AddProduct';
import { ListProduct } from '../components/product/ListProduct';
import '../style/pages/principal.css'
import shop from '../images/shop.png'
import { ListCart } from '../components/shop/ListCart';
import { HistoryShop } from '../components/shop/HistoryShop';

const Principal = () => {

    const [clickProd, setClickProd] = useState(false);
    const [clickCart, setClickCart] = useState(false);
    const [clickHist, setClickHist] = useState(false);
    const [listCart, setLisCart] = useState([]);


  return (
    <div id='body'>
        <header id='head'>
            <nav id='nav'>
              <div>
                <button onClick={() => setClickProd(true)}>Lista de productos</button>
                <button onClick={() => setClickHist(true)}>Historial de compras</button>
              </div>  
              <div>
                <button onClick={() => setClickCart(true)}><img alt='CARRITO' src={shop} /></button>
                { clickCart && <ListCart listCart={listCart} setClickCart={setClickCart} /> }
              </div>
            </nav>
        </header>
        <main id='main'>
          <AddProduct />
          { clickProd && <ListProduct clickProd={clickProd} setClickProd={setClickProd} listCart={listCart} setLisCart={setLisCart}  />}
          { clickHist && <HistoryShop setClickHist={setClickHist} />}
        </main>
        <footer id='footer'>

        </footer>
    </div>
  )
}

export default Principal;
