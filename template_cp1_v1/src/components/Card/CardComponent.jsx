import style from "./CardComponent.module.css";

function CardComponent(props) {

    const imgUrlDefault = "";

    return (
        <div className={style.div}>
            <h2 className={style.title}>{props.title ?? "Indefinido"}</h2>
            <img className={style.img} src={props.imgUrl ?? imgUrlDefault} alt="img" />
        </div>
    );
}

export default CardComponent;