import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";

const CustomerTable = () => {
    const [rows, setRows] = useState([]);// Almacenar datos

    useEffect(() => { // Obtener datos en cada render
        const fetchData = async () => {
             const response = await axios.get("http://localhost:3000/productos");
             setRows(response.data);
         };
         fetchData();
     }, []);

     interface Row {
        id: number;
        codigo : string
        nombre : string
        descripcion : string
        precio_costo : number
        precio_unitario : number
        stock_actual : number
        stock_minimo : number
        unidad_de_medida :string
     }

    
    const columns = [
        {
            name: "ID",
            selector: (row: Row) => row.id
        },
        {
            name: "Nombre",
            selector: (row: Row)  => row.nombre
        },
        {
            name: "Código",
            selector: (row: Row)  => row.codigo
        },
        {
            name: "Descripcion",
            selector: (row: Row)  => row.descripcion
        },
        {
            name: "Precio Costo",
            selector: (row: Row)  => row.precio_costo
        },
        {
            name: "Precio Unitario",
            selector: (row: Row)  => row.precio_unitario
        },
        {
            name: "Stock",
            selector: (row: Row)  => row.stock_actual
        },
        {
            name: "Minimo",
            selector: (row: Row)  => row.stock_minimo
        },
        {
            name: "U. Medida ",
            selector: (row: Row)  => row.unidad_de_medida
        },
    ];

  return (
    <div className="container my-5">
        <DataTable columns={columns} data={rows} pagination selectableRows />
    </div>
  )
}

export default CustomerTable