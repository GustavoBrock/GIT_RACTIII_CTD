import './App.css';
import SaudacoesComponent from "./components/SaudacoesComponent";
import WhatsUpComponent from "./components/WhatsUpComponent";
import InputComponent from './components/InputComponent';

function App() {

  return (
    <>
      <SaudacoesComponent >
        <WhatsUpComponent
          nome="Gustavo F. Brock"
          profissao="(Chemestry Professor)" />

        <br />
        <br />

        <InputComponent
          label="Age (years)"
          type="number"
        />

        <br />
        <br />

        <button>Save User</button>
      </SaudacoesComponent>
    </>
  )
}

export default App