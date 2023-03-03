import React from 'react'
import { AddProduct } from '../components/product/AddProduct';
import '../style/pages/principal.css'

const Principal = () => {

    


  return (
    <div id='body'>
        <header id='head'>
            <nav id='nav'>

            </nav>
        </header>
        <main id='main'>
          <AddProduct />
        </main>
        <footer id='footer'>

        </footer>
    </div>
  )
}

export default Principal;
