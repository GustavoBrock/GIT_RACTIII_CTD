/* Importando o módulo CSS */
import style from './Home.module.css';

/* Componente do tipo funcional */
function City({ id, color, city, country, population }) {

    return (
        <div
            style={{ border: `2px solid ${color}` }}
            className={style.div}
        >

            <h2>ID {id}</h2>
            <h1 style={{ color: color }}>{city}</h1>
            <h3>{country}</h3>

            {/* CSS Module */}
            <p className={style.fonte}>{population}</p>

        </div>
    );
    
}
export default City;