/* 
Mesa aula de trbalho aula 7
Gustavo F. Brock
*/

import './App.css';
import ItemComponent from "./components/ItemComponent";
import { useState } from 'react';

function App() {

  /// utilizando o hook do use state
  const [itens, setItens] = useState([]);

  const handleButtonAddElement = () => {

    /// para solucionar o problema dos elementos ea dicionar um a mais na lista

    const copyItemsList = [...itens]; /// Copia do elemento mais recente
    copyItemsList.push(`O item ${itens.length + 1} foi adicionado à lista`); ///para adicionar um elemento novo 
    setItens(copyItemsList) /// atualizando a lsita
  }

  /* Extra: parte copiada da atividade do professor */
  const handleButtonRemoveElement = () => {
    const copyItemsList = [...itens]; /// Copiamos o estado mais recente da lista, antes de remover o elemento que desejamos
    copyItemsList.splice(-1); /// Removemos o último elemento da lista
    setItens(copyItemsList) /// Setamos o novo estado da lista (usando o objeto de cópia)
  }

  return (
    <>
      <h2>Lista ({itens.length} itens)</h2>
      {
        itens.length > 0 ? /// Se, a lista não estiver vazia...

          itens.map((descricao) => {
            return <ItemComponent
              key={descricao}
              descricao={descricao}
            />
          })
          : /// Se não, a lista está vazia...
          <h4>Nenhum item a ser exibido</h4>
      }
      <button
        onClick={handleButtonAddElement}>
        Add Item
      </button>

      <button
        onClick={handleButtonRemoveElement}
        disabled={itens.length == 0} ///Se, a lista estiver vazia, desabilita o botão
      >
        Remove Item
      </button>
    </>
  )
}

export default App