import React, { useEffect, useState } from 'react'
import '../../style/components/product/listProduct.css'

const URL_API_SHOP = process.env.REACT_APP_API_URL_2;

export const HistoryShop = ({ setClickHist }) => {

    const [buys, setBuys] = useState([])

    useEffect(() => {
        allShop();
    }, [])
    

    const allShop = () => {
        fetch(URL_API_SHOP+'/get')
            .then(response => response.json())
            .then(buys => {
                setBuys(buys);
            });
    }

  return (
    <>
        <div className='overlay-lis'>

            <div className='contenedorModal-lis'>

                <div className='encabezado-lis'>
                    <h4>Lista de Productos:</h4>
                    <div className='botonCerrar-lis' onClick={() => setClickHist(false) } >
                        X
                    </div>
                </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre Cliente</th>
                                <th>Fecha de la compra</th>
                                <th>Typo</th>
                                <th>Lista de Compra</th>
                            </tr> 
                        </thead>
                        <tbody>
                            { buys.map((list) => 
                                <tr key={list.id}>
                                    <td>{list.clientName}</td>
                                    <td>{list.dateTime}</td>
                                    <td>{list.type}</td>
                                    <td>{list.shopList.quantity}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
            </div>
        </div>
    </>
  )
}
