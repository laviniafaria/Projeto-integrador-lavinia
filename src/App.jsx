import { useEffect, useState } from 'react'
import DestinoForm from './DestinoForm.jsx'
import DestinoList from './DestinoList.jsx'

const URL_API = 'http://localhost:8080/destinos'

function App() {
  const [destinos, setDestinos] = useState([])
  const [carregandoLista, setCarregandoLista] = useState(true)
  const [erro, setErro] = useState('')
  const [carregandoForm, setCarregandoForm] = useState(false)

  function buscarDestinos() {
    setCarregandoLista(true)
    setErro('')

    fetch(URL_API)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setDestinos(dados)
        setCarregandoLista(false)
      })
      .catch(() => {
        setErro('Erro ao carregar os destinos. A API esta rodando?')
        setCarregandoLista(false)
      })
  }

  useEffect(() => {
    buscarDestinos()
  }, [])

  function cadastrarDestino(novoDestino) {
    setCarregandoForm(true)

    fetch(URL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoDestino),
    })
      .then((resposta) => resposta.json())
      .then(() => {
        setCarregandoForm(false)
        buscarDestinos()
      })
      .catch(() => {
        setCarregandoForm(false)
        alert('Erro ao cadastrar o destino.')
      })
  }

  return (
    <div style={{ padding: '20px', display: 'flex', gap: '30px' }}>
      <DestinoForm onCadastrar={cadastrarDestino} carregando={carregandoForm} />
      <DestinoList destinos={destinos} carregando={carregandoLista} erro={erro} />
    </div>
  )
}

export default App