import React, { useState } from 'react'
import '../../style/components/shop/listCart.css'
import arrow from '../../images/arrow.png'

const URL_API_SHOP = process.env.REACT_APP_API_URL_2;

export const ListCart = ({ listCart, setClickCart }) => {

    const [type, setType] = useState('');
    const [clientName, setClientName] = useState('');
    const [listProd, setListProd] = useState([]);

    const addShop = (e) => {
        
        e.preventDefault();

        let request = {
            "type": type,
            "clientName": clientName,
            "shopList": listProd,
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        }

        fetch(URL_API_SHOP+"/add", requestOptions)
        .then(response => response.json(response))
        .catch(err => console.error(err))
    }

    console.log(listCart);

  return (
    <>
        <div className='overlay-cart'>

            <div className='contenedorModal-cart'>

                <div className='encabezado-cart'>
                    <h4>Lista de Productos:</h4>
                    <div className='botonCerrar-cart' onClick={ () => setClickCart(false) } >
                        X
                    </div>
                </div>

                <form onSubmit={(e) => addShop(e)}>

                        <div>
                            <label>
                                Nombre de Cliente: <img alt='' src={arrow} />
                                <input type='text' placeholder='Ingrese Nombre del Cliente' onChange={(e) => setClientName(e.target.value)} />
                            </label>
                            <label>
                                Tipo: <img alt='' src={arrow} />
                                <input type='number' placeholder='Ingrese Tipo' onChange={(e) => setType(e.target.value)} />
                            </label>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Cantidad</th>
                                    </tr> 
                                </thead>
                                <tbody>
                                    { listCart.map((list) => 
                                        <tr key={list.id}>
                                            <td>{list.id}</td>
                                            <td>{list.quantity}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </form>
            </div>
        </div>
    </>
  )
}
