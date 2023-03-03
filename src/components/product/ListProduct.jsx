import React from 'react'
import delet from '../../images/delete.png'

const URL_API = process.env.REACT_APP_API_URL_1;

export const ListProduct = () => {

    const [products, setProducts] = useState([])

    const allProduct = () => {
        fetch(URL_API+'/list')
            .then(response => response.json())
            .then(prod => {
                setProducts(prod);
            });
    }

  return (
    <>
        <div>
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
                            <button><img src={delet} /></button>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </>
  )
}
