import axios from 'axios';
import React from 'react';
import './listado.css';

export default function BookList() {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        
        const fetchData = async () => {

            try {
                    const response = await axios.get('http://localhost:3000/libro/');
                    if (response.status === 200) {
                        setData(...response)
                    }
            }
            catch (e) {
                return []
            }
        }
        fetchData()
    }, []);

        const Libros = () => {
            return (
                data.map(libro => {
                    return <li keys='libro.id'>{libro.id + libro.nombre}</li>
            })
        )
    }
        return (
            <div className="container">
                <h1>Libros disponibles</h1>
                    <ul>
                        <Libros />
                    </ul>
            </div>
        )
}