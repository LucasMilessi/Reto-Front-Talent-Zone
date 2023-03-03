import React, { useState } from 'react'
import '../../style/components/product/addProduct.css'
import arrow from '../../images/arrow.png'

const URL_API = process.env.REACT_APP_API_URL_1;

export const AddProduct = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState();
    const [enable, setEnable] = useState(false);
    const [min, setMin] = useState();
    const [max, setMax] = useState()

    const addProduct = (e) => {
        e.preventDefault();

        let request = {
            "name": name,
            "quantity": quantity,
            "enable": enable,
            "min": min,
            "max": max
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        }

        fetch(URL_API+"/add", requestOptions)
        .then(response => response.json(response))
        .catch(err => console.error(err))
    }

  return (
    <div className='divForm'>
        <h1>AGREGAR PRODUCTO</h1>
        <form onSubmit={(e) => addProduct(e)}>

                <div className='divLabel'>
                    <label>
                        Nombre: <img alt='' src={arrow} />
                        <input type='text' placeholder='Ingrese Nombre del Producto' onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Cantidad: <img alt='' src={arrow} />
                        <input type='text' placeholder='Ingrese la cantidad' onChange={(e) => setQuantity(e.target.value)} />
                    </label>
                    <label>
                        Habilitado: <img alt='' src={arrow} />
                        <input type='text' placeholder='Ingrese la cantidad' onChange={(e) => setEnable(e.target.value)} />
                    </label>
                    <label>
                        Cantidad minima a comprar: <img alt='' src={arrow} />
                        <input type='text' placeholder='Ingrese la cantidad minima' onChange={(e) => setMin(e.target.value)} />
                    </label>
                    <label>
                        Cantidad maxima a comprar: <img alt='' src={arrow} />
                        <input type='text' placeholder='Ingrese la cantidad maxima' onChange={(e) => setMax(e.target.value)} />
                    </label>

                    <button id='addProduct' type="submit" className='btn btn-success' >Agregar Producto</button>
                </div>
        </form>
    </div>
  )
}
