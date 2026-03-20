// src/components/HabitCard.jsx

import { Link } from 'react-router-dom'

function HabitCard({ id, nome, descricao, meta, ativo = true, diasFeitos = 0, categoria = 'Geral', onRemover }) {
  const metaAtingida = diasFeitos >= meta

  return (
    <div className="habit-card">
      <div className="habit-card-header">
        <h3>{nome}</h3>
        <span style={{ color: ativo ? '#16a34a' : '#9ca3af' }}>
          {ativo ? '✅ Ativo' : '⏸️ Pausado'}
        </span>
      </div>

      <p>{descricao}</p>
      <small>Categoria: {categoria}</small>

      <p>
        {metaAtingida
          ? '🏆 Meta da semana atingida!'
          : `${diasFeitos} de ${meta} dias concluídos`}
      </p>

      {metaAtingida && <p>⭐ Parabéns! Você manteve a sequência essa semana!</p>}

      <div className="habit-card-acoes">
        {/* Link para a página de detalhes — usa o id do hábito na URL */}
        <Link to={`/habito/${id}`} className="btn-detalhes">
          Ver detalhes
        </Link>

        {onRemover && (
          <button onClick={onRemover} className="btn-remover-card">
            Remover
          </button>
        )}
      </div>
    </div>
  )
}

export default HabitCard
