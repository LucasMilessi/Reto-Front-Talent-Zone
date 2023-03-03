import React, { useState, useEffect } from 'react'
import '../../style/components/product/listProduct.css'
import delet from '../../images/delete.gif'
import updateGif from '../../images/update.gif'
import cartGif from '../../images/cart.gif'
import { UpdateProduct } from './UpdateProduct';
import { AddQuantity } from '../shop/AddQuantity'

const URL_API = process.env.REACT_APP_API_URL_1;

export const ListProduct = ({ clickProd, setClickProd, listCart, setLisCart }) => {

    const [products, setProducts] = useState([]);
    const [clickUpd, setClickUpd] = useState(false);
    const [product, setProduct] = useState({});
    const [clickQuant, setClickQuant] = useState(false);

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

    const deleteProduct = async(id) => {
        await fetch(URL_API+"/delete/"+id, {
            method: "DELETE"
        });
        allProduct();
    }

    const productById = (id) => {
        fetch(URL_API+'/get/'+id)
            .then(response => response.json())
            .then(prod => {
                setProduct(prod);
            });
        setClickUpd(true);
    }

    const cleanFields = () => {
        setClickProd(false)
    }

    console.log(listCart);

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
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Stock en Inventario</th>
                                <th>Disponible</th>
                                <th>Minimo</th>
                                <th>Maximo</th>
                                <th>Acción</th>
                            </tr> 
                        </thead>
                        <tbody>
                            { products.map((list) => 
                                <tr key={list.id}>
                                    <td>{list.name}</td>
                                    <td>{list.inInventory}</td>
                                    <td>{list.enable ? 'SI' : 'NO'}</td>
                                    <td>{list.min}</td>
                                    <td>{list.max}</td>
                                    <td>
                                        { list.enable && <button className='buttonCart' onClick={() => setClickQuant(true)}><img alt='' src={cartGif} /></button>}
                                        <button className='buttonUpd' onClick={() => productById(list.id)}><img alt='' src={updateGif} /></button>
                                        <button className='buttonDelet' onClick={() => deleteProduct(list.id)}><img alt='' src={delet} /></button>
                                        { clickUpd && <UpdateProduct product={product} setProduct={setProduct} clickUpd={clickUpd} setClickUpd={setClickUpd} /> }
                                        { clickQuant && <AddQuantity setLisCart={setLisCart} id={list.id} listCart={listCart} setClickQuant={setClickQuant} product={list} /> }
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
            </div>
        </div>
    </>
  )
}
