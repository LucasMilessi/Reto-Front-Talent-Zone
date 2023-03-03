import React, { useState } from 'react'
import { AddProduct } from '../components/product/AddProduct';
import { ListProduct } from '../components/product/ListProduct';
import '../style/pages/principal.css'

const Principal = () => {

    const [clickProd, setClickProd] = useState(false);


  return (
    <div id='body'>
        <header id='head'>
            <nav id='nav'>
              <button onClick={() => setClickProd(true)}>Lista de productos</button>
              <button>Historial de compras</button>
            </nav>
        </header>
        <main id='main'>
          <AddProduct />
          { clickProd && <ListProduct clickProd={clickProd} setClickProd={setClickProd} />}
        </main>
        <footer id='footer'>

        </footer>
    </div>
  )
}

export default Principal;
