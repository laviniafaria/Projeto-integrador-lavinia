import { useState } from 'react'
import styles from './DestinoForm.module.css'

function DestinoForm({ aoCadastrar }) {
  const [nome, setNome] = useState('')
  const [cidade, setCidade] = useState('')
  const [pais, setPais] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState('')
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')

  function aoClicarCadastrar() {
    if (!nome || !cidade || !pais || !preco) {
      setErro('Preencha nome, cidade, pais e preco medio.')
      setSucesso('')
      return
    }

    if (Number(preco) <= 0) {
      setErro('O preco tem que ser maior que zero.')
      setSucesso('')
      return
    }

    setErro('')

    aoCadastrar({ nome, cidade, pais, descricao, preco: Number(preco) })

    setSucesso('Destino cadastrado com sucesso!')

    setNome('')
    setCidade('')
    setPais('')
    setDescricao('')
    setPreco('')
  }

  return (
    <div className={styles.formulario}>
      <h2>Cadastrar destino</h2>

      {erro && <p className={styles.erro}>{erro}</p>}
      {sucesso && <p className={styles.sucesso}>{sucesso}</p>}

      <label>Nome</label>
      <input value={nome} onChange={(evento) => { setNome(evento.target.value); setSucesso('') }} />

      <label>Cidade</label>
      <input value={cidade} onChange={(evento) => { setCidade(evento.target.value); setSucesso('') }} />

      <label>Pais</label>
      <input value={pais} onChange={(evento) => { setPais(evento.target.value); setSucesso('') }} />

      <label>Preco medio (R$)</label>
      <input type="number" value={preco} onChange={(evento) => { setPreco(evento.target.value); setSucesso('') }} />

      <label>Descricao</label>
      <textarea value={descricao} onChange={(evento) => { setDescricao(evento.target.value); setSucesso('') }} />

      <button onClick={aoClicarCadastrar}>Cadastrar</button>
    </div>
  )
}

export default DestinoForm