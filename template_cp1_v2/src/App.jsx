import './App.css';
import FormComponent from "./components/Form/FormComponent";

function App() {
  return (

    <>
      <div>
        <h4>Bem  Vindo ao <i>Anime Card Generator</i>, aqui você insere o nome dos seus 
        animes preferidos e uma Url-Image e pode listar os animes que mais gostar!
          <br></br>楽しんでください
        </h4>
      </div>

      <h2>Meus Animes Favoritos </h2>
      <FormComponent />

    </>
  )
}

export default App