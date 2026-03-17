const BemVindo = ({ nomeUsuario, totalHabitos }) => {
    const nomeFormatado = nomeUsuario.toUpperCase();

    const mensagem = totalHabitos > 0
        ? `Você tem ${totalHabitos} habitos(s) cadastrado(s).`
        : `Nenhum hábito cadastrado ainda. Que tal começar?`;

    return (
        <div>
            <h2>Olá, {nomeFormatado}!</h2>
            <p>{mensagem}</p>
        </div>
    )
}

export default BemVindo
