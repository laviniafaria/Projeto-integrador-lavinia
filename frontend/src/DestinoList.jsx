import styles from './DestinoList.module.css'

function DestinoList({ destinos, carregando, erro }) {
  if (carregando) {
    return <p>Carregando destinos.</p>
  }

  if (erro) {
    return <p className={styles.erro}>{erro}</p>
  }

  if (destinos.length === 0) {
    return <p>Nenhum destino cadastrado ainda.</p>
  }

  return (
    <div>
      <h2>Destinos cadastrados</h2>
      <ul className={styles.lista}>
        {destinos.map((destino) => (
          <li key={destino.id} className={styles.item}>
            <strong>{destino.nome}</strong> - {destino.cidade}, {destino.pais}
            <br />
            <span>{destino.descricao}</span>
            <br />
            <span>R$ {destino.preco}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DestinoList