import { useEffect, useState } from 'react'
import DestinoForm from './DestinoForm.jsx'
import DestinoList from './DestinoList.jsx'

const URL_API = 'http://localhost:8080/destinos'

function App() {
  const [destinos, setDestinos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  function buscarDestinos() {
    setCarregando(true)
    fetch(URL_API)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setDestinos(dados)
        setCarregando(false)
      })
      .catch(() => {
        setErro('Erro ao carregar os destinos.')
        setCarregando(false)
      })
  }

  useEffect(() => {
    buscarDestinos()
  }, [])

  function cadastrarDestino(novoDestino) {
    fetch(URL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoDestino),
    }).then(() => buscarDestinos())
  }

  return (
    <div style={{ padding: '20px', display: 'flex', gap: '30px' }}>
      <DestinoForm aoCadastrar={cadastrarDestino} />
      <DestinoList destinos={destinos} carregando={carregando} erro={erro} />
    </div>
  )
}

export default App