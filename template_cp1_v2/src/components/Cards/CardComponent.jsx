import style from "./CardComponent.module.css";

function CardComponent({name, imageUrl}) {

    const imageUrlDefault = "";
    return (
        <div className={style.container}>
            <div className={style.title}>{name ?? "Não informado"}</div>
            <img
                src={imageUrl ?? imageUrlDefault}
                alt="anime-image"
                className={style.img}
            />
        </div>
    );
}

export default CardComponent;