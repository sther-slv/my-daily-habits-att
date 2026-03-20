// src/pages/PaginaDetalhes.jsx

import { useParams, useNavigate } from 'react-router-dom'
import { useHabits } from '../contexts/HabitsContext'

function PaginaDetalhes() {
  const { id } = useParams()
  const { habits, removerHabit } = useHabits()
  const navigate = useNavigate()

  // useParams retorna string — comparar com === exige conversão
  const habitId = Number(id)
  const habit = habits.find(h =>
    (typeof h.id === 'number' && h.id === habitId) ||
    (typeof h.id === 'string' && h.id === id)
  )

  if (!habit) {
    return (
      <main className="pagina-detalhes">
        <h1>Hábito não encontrado</h1>
        <button onClick={() => navigate('/habitos')}>
          ← Voltar para a lista
        </button>
      </main>
    )
  }

  const metaAtingida = habit.diasFeitos >= habit.meta

  const handleRemover = () => {
    removerHabit(habit.id)
    navigate('/habitos')
  }

  return (
    <main className="pagina-detalhes">
      <button onClick={() => navigate(-1)} className="btn-voltar">
        ← Voltar
      </button>

      <div className="detalhe-card">
        <h1>{habit.nome}</h1>
        <p>{habit.descricao}</p>

        <ul className="detalhe-info">
          <li><strong>Categoria:</strong> {habit.categoria || 'Geral'}</li>
          <li><strong>Meta semanal:</strong> {habit.meta} dias</li>
          <li><strong>Dias feitos:</strong> {habit.diasFeitos}</li>
          <li>
            <strong>Status:</strong>{' '}
            <span style={{ color: habit.ativo ? '#16a34a' : '#9ca3af' }}>
              {habit.ativo ? '✅ Ativo' : '⏸️ Pausado'}
            </span>
          </li>
          {metaAtingida && (
            <li>🏆 Meta da semana atingida!</li>
          )}
        </ul>

        <button onClick={handleRemover} className="btn-remover">
          Remover hábito
        </button>
      </div>
    </main>
  )
}

export default PaginaDetalhes
