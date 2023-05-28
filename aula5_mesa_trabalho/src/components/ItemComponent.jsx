import styles from "./ItemComponent.module.css";

function ItemComponent({nome, image, preco}) {
    return (
        <table>
            <td className={styles.h1}>
            <h2>{nome}</h2>
            <img src={image} className={styles.img} />
            <h3 className={styles.h3}>{preco}</h3>
            </td>
        </table>
    );
}

export default ItemComponent;