import axios from 'axios';
import React from 'react';
import './listado.css';

export default function Listado() {

    const [data, setData] = React.useState([]);

    const fetchData = async () => {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/comments');
        if (respuesta.status === 200) {
          console.log(respuesta.data);
          setData(respuesta.data);
        }
      };
    
      React.useEffect(() => {
        fetchData();
      }, []);


        const lista = data.map((libro)=>{
            return (
                <div className="card" key={libro.id}>
                    <div className="cardLibro">{libro.name}</div>
                 </div>
            )
            })

        return (
            <div className = 'container'>
              <h1 >Libros disponibles</h1>
              {lista}
            </div>
        )
    }