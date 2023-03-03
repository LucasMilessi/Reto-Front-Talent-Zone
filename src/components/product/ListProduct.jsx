import React, { useState, useEffect } from 'react'
import '../../style/components/product/listProduct.css'
import delet from '../../images/delete.png'

const URL_API = process.env.REACT_APP_API_URL_1;

export const ListProduct = ({ clickProd, setClickProd }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        allProduct();
    }, [])
    

    const allProduct = () => {
        fetch(URL_API+'/list')
            .then(response => response.json())
            .then(prod => {
                setProducts(prod);
            });
    }

    const cleanFields = () => {
        setClickProd(false)
    }

  return (
    <>
        <div className='overlay-lis'>

            <div className='contenedorModal-lis'>

                <div className='encabezado-lis'>
                    <h4>Lista de Productos:</h4>
                    <div className='botonCerrar-lis' onClick={ () => cleanFields() } >
                        X
                    </div>
                </div>
                    <table hidden className="table" id="tablaExcel">
                        <thead className="table-danger">
                            <tr>
                                <th>Nombre</th>
                                <th>Stock en Inventario</th>
                                <th>Disponible</th>
                                <th>Minimo</th>
                                <th>Maximo</th>
                            </tr> 
                        </thead>
                        <tbody>
                            { products.map((list) => 
                                <tr key={list.id}>
                                    <td>{list.name}</td>
                                    <td>{list.inInventory}</td>
                                    <td>{list.enable}</td>
                                    <td>{list.min}</td>
                                    <td>{list.max}</td>
                                    <button><img alt='' src={delet} /></button>
                                </tr>
                            )}
                        </tbody>
                    </table>

            </div>
        </div>
    </>
  )
}
