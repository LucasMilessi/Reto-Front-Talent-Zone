import React, { useState } from 'react'

const URL_API = process.env.REACT_APP_API_URL_1;

export const AddProduct = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState();
    const [enable, setEnable] = useState(false);
    const [min, setMin] = useState();
    const [max, setMax] = useState(second)

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
    <form onSubmit={(e) => addProduct(e)}>

        <div className='contenido-ag'>
            <div className='columna1'>
                <label>
                    Nombre:
                    <input type='text' placeholder='Ingrese Nombre del Producto' onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Cantidad:
                    <input type='text' placeholder='Ingrese la cantidad' onChange={(e) => set(e.target.value)} />
                </label>

                <center><button id='agregarPast' disabled={clickBoton} type="submit" className='btn btn-success' >Agregar Producto</button></center>
            </div>
        </div>
    </form>
  )
}
