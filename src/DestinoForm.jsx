import { useState } from 'react'
import styles from './DestinoForm.module.css'

function DestinoForm({ onCadastrar, carregando }) {
  const [nome, setNome] = useState('')
  const [cidade, setCidade] = useState('')
  const [pais, setPais] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!nome || !cidade || !pais || !preco) {
      alert('Preencha nome, cidade, pais e preco.')
      return
    }

    const novoDestino = {
      nome,
      cidade,
      pais,
      descricao,
      preco: Number(preco),
    }

    onCadastrar(novoDestino)

    setNome('')
    setCidade('')
    setPais('')
    setDescricao('')
    setPreco('')
  }

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <h2>Cadastrar destino</h2>

      <label>Nome</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

      <label>Cidade</label>
      <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />

      <label>Pais</label>
      <input type="text" value={pais} onChange={(e) => setPais(e.target.value)} />

      <label>Preco medio (R$)</label>
      <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />

      <label>Descricao</label>
      <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />

      <button type="submit" disabled={carregando}>
        {carregando ? 'Cadastrando...' : 'Cadastrar'}
      </button>
    </form>
  )
}

export default DestinoForm