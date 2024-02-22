import { useState } from 'react'
import './App.css'

function App() {
   
  const [cep,setCEP] = useState('')
  const [endereco,setEndereco] = useState(null);

  const handleBuscaCep = async (event) => {
    try{
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);//crase
      if (!response.ok) {
        throw new Error('Cep não encontrado.');
      }
      setEndereco(await response.json() );
    }catch(error){
      console.error(error);
    }

  }
 
  return (
    <>
      
      <div className= 'container'>
        <h1>Busca de endereço</h1>
        <input 
        type = "number"
        placeholder='Digite o seu CEP'
        value={cep}
        onChange={(e) => setCEP(e.target.value)}
      

        />
        <button onClick={handleBuscaCep}>
          Buscar
        </button>
        <div className='endereco'>
          {endereco ?(<>
          <p> Cep:{JSON.stringify(endereco.cep)} </p>
          <p> {JSON.stringify(endereco)} </p>
          </>): null}
        </div>
         
      </div>
    </>
  )
}

export default App
