import style from "../Form/FormComponent.module.css";
import CardComponent from "../Cards/CardComponent";
import InputComponent from "../Input/InputComponent";
import CardsListComponent from "../Cards/CardsListComponent";
import { useState } from "react";

function FormComponent() {

    /// Definindo os estados dos elementos do formulário
    const [AnimeName, setAnimeName] = useState("");
    const [AnimeImageUrl, setAnimeImageUrl] = useState("");
    // const [Anime, setAnime] = useState({});
    const [formIsValid, setFormIsValid] = useState(false);

    const [AnimeList, setAnimeList] = useState([]);

    /// Funções que atualizam os estados do formulário
    const handleChangeAnimeName = (event) => {
        setAnimeName(event.target.value);
        //formValidator();
    }

    const handleChangeAnimeImageUrl = (event) => {
        setAnimeImageUrl(event.target.value);
        //formValidator();
    }

    const handleButtonClick = () => {
        setAnimeList(
            [
                ...AnimeList, /// Capturando o estado anterior do array
                { /// Adicionando o novo elemento
                    name: AnimeName,
                    image: AnimeImageUrl
                }
            ]
        )

        /// Limpando os valores do input
        setAnimeName("");
        setAnimeImageUrl("");
        setFormIsValid(false);
    }

    /// Função que valida os campos do formulário
    const formValidator = () => {
        const numberRegex = /\d/; // Expressão regular para verificar se há pelo menos um número
        const trimmedAnimeName = AnimeName.trim(); // Remover espaços em branco no inicio e final

        for (let i = 0; i < AnimeImageUrl.length; i++) {
            if (trimmedAnimeName.length >= 3 && AnimeImageUrl.length > 5 && numberRegex.test(AnimeImageUrl[i])) {
                setFormIsValid(true);
                return; // Se encontrar um elemento válido, define formIsValid como true e retorna
            }
        }

        setFormIsValid(false); // Se não encontrar nenhum elemento válido, define formIsValid como false
    };

    return (
        <>

            {/* Card com os campos do formulário */}
            <div className={style.container}>

                <InputComponent
                    label="Insira seu Anime"
                    type="text"
                    value={AnimeName}
                    fnOnChange={handleChangeAnimeName}
                    onKeyUp={formValidator}
                />

                <InputComponent
                    label="Imagem URL do Anime"
                    type="url"
                    value={AnimeImageUrl}
                    fnOnChange={handleChangeAnimeImageUrl}
                    onKeyUp={formValidator}
                />


                <button
                    onClick={handleButtonClick}
                    disabled={!formIsValid}
                >Salvar</button>
            </div>
            <br></br>
            <CardsListComponent>
                {
                    AnimeList.map(AnimeCard => {
                        return (
                            <CardComponent
                                key={AnimeCard.name}
                                name={AnimeCard.name}
                                imageUrl={AnimeCard.image}
                            />
                        );
                    })
                }
            </CardsListComponent>
        </>
    );
}

export default FormComponent;