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

        if (AnimeName.length >= 2 && AnimeImageUrl.length > 0) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }

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