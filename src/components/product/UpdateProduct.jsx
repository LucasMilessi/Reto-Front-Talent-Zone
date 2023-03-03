import React, { useState } from 'react'
import '../../style/components/product/updateProduct.css'
import arrow from '../../images/arrow.png'

const URL_API = process.env.REACT_APP_API_URL_1;

export const UpdateProduct = ({product, setProduct, clickUpd, setClickUpd }) => {

    const [name, setName] = useState(product.name);
    const [quantity, setQuantity] = useState(product.inInventory);
    const [enable, setEnable] = useState(product.enable);
    const [min, setMin] = useState(product.min);
    const [max, setMax] = useState(product.max);

    const updateProduct = (e) => {
        
        e.preventDefault();

        let request = {
            "name": name,
            "inInventory": quantity,
            "enable": enable,
            "min": min,
            "max": max
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        }

        fetch(URL_API+"/update/"+product.id, requestOptions)
        .then(response => response.json(response))
        .catch(err => console.error(err))

        setClickUpd(false)
    }

    const choice = (val) => {
        setEnable(val)
    }

    console.log(enable);

  return (
    <>
        <div className='overlay-lis'>
            <div className='contenedorModal-lis'>

                <div className='encabezado-lis'>
                    <h4>Actualizar Producto:</h4>
                    <div className='botonCerrar-lis' onClick={() => setClickUpd(false)}>
                        X
                    </div>
                </div>
                <div className='divForm'>
                    <form onSubmit={(e) => updateProduct(e)}>

                            <div className='divLabel'>
                                <div className='column1'>
                                    <label>
                                        Nombre: <img alt='' src={arrow} />
                                        <input type='text' defaultValue={product.name} placeholder='Ingrese Nombre del Producto' onChange={(e) => setName(e.target.value)} />
                                    </label>
                                    <label>
                                        Cantidad: <img alt='' src={arrow} />
                                        <input type='number' defaultValue={product.inInventory} placeholder='Ingrese la cantidad' onChange={(e) => setQuantity(e.target.value)} />
                                    </label>
                                    <label>
                                        Habilitado: Estado actual <b>{product.enable ? 'Habilitado' : 'Desabilitado'}</b>
                                            <img alt='' src={arrow} />
                                        <select onChange={(e) => choice(e.target.value)}>
                                            <option>Seleccione una Opción</option>
                                            <option key={1}  value={true} >Habilitado</option>
                                            <option key={2}  value={false} >Desabilitado</option>
                                        </select>
                                    </label>
                                </div>
                                <div className='column2'>
                                    <label>
                                        Cantidad minima a comprar: <img alt='' src={arrow} />
                                        <input type='number' defaultValue={product.min} placeholder='Ingrese la cantidad minima' onChange={(e) => setMin(e.target.value)} />
                                    </label>
                                    <label>
                                        Cantidad maxima a comprar: <img alt='' src={arrow} />
                                        <input type='number' defaultValue={product.max} placeholder='Ingrese la cantidad maxima' onChange={(e) => setMax(e.target.value)} />
                                    </label>

                                    <button id='addProduct' type="submit" className='btn btn-success' >Actualizar Producto</button>
                                </div>

                            </div>
                    </form>
                </div>

            </div>
        </div>
    </>
  )
}
