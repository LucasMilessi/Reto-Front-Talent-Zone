import React, { useState } from 'react'
import arrow from '../../images/arrow.png'
import '../../style/components/shop/addQuantity.css'

export const AddQuantity = ({ listCart, id, setLisCart, setClickQuant, product }) => {

    const [quantity, setQuantity] = useState()

    const addQuant = (e) => {
        e.preventDefault();
        setLisCart(...listCart, [{id: id, quantity: quantity}])
        setClickQuant(false)
    }
    

  return (
    <>
        <div className='overlay-lis'>
            <div className='contenedorModal-lis'>

                <div className='encabezado-lis'>
                    <h4>Agregar Cantidad:</h4>
                    <div className='botonCerrar-lis' onClick={() => setClickQuant(false)}>
                        X
                    </div>
                </div>
                
                <div className='divFormQ'>
                    <form onSubmit={(e) => addQuant(e)}>
                        <center><h3>{product.name}</h3></center>
                            <div className='divLabelQ'>
                                <div className='columna1'>
                                    <label>Stock: {product.inInventory}</label>
                                    <label>Cantidad minima a comprar: {product.min}</label>
                                    <label>Cantidad minima a comprar: {product.max}</label>
                                </div>
                                <div className='column2'>
                                    <label>
                                        Cantidad: <img alt='' src={arrow} />
                                        <input type='number' placeholder='Ingrese Cantidad' 
                                        onChange={(e) => setQuantity(e.target.value)} />
                                    </label>

                                    <button id='addProduct' type="submit" className='btn btn-success' >Agregar Producto</button>
                                </div>

                            </div>
                    </form>
                </div>

            </div>
        </div>
    </>
  )
}
