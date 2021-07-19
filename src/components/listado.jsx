import axios from 'axios';
import React from 'react';
import './listado.css';

export default function Listado() {

    const [data, setData] = React.useState([]);

    const fetchData = async () => {
        const respuesta = await axios.get('http://localhost:4000/libro');
        if (respuesta.status === 200) {
          console.log(respuesta.data);
          setData(respuesta.data.response);
        }
      };
    
      React.useEffect(() => {
        fetchData();
      }, []);


        const lista = data.map((libro)=>{
            return (
                <div className="cardLibro" key={libro.id}>
                    <div className="cardTitulo">{libro.titulo}</div> 
                    <div className="cardDescripcion">{libro.descripcion}</div>
                </div>
            )
            })

        return (
          <div className = 'container'>
            {lista}
          </div>
        )
    }