const skills = [
    {
        icon: 'card-icon fas fa-pills',
        title: 'O que é o Fidelius?',
        subtitle: 'Fidelius é um sistema de semiologia farmacêutica leve e de fácil uso. Ele foi criado com ajuda de profissionais da área de farmácia para oferecer o necessário para o usuário.'
    },
    {
        icon: 'card-icon fas fa-laptop-medical',
        title: 'Fidelius como produto',
        subtitle: 'A licença do Fidelius é vendida apenas uma vez; Correções de bugs e de qualidade não tem custos adicionais; É cobrado uma taxa de instalação por máquina.'
    },
    {
        icon: 'card-icon fas fa-flask',
        title: 'Diferenciais',
        subtitle: 'Leve, simples acesso e mutável. Basta abrir o seu navegador e já está pronto pra uso. Funcionalidades podem ser adicionadas com a preferência do usuário.'
    }
]
    const Habilidades = ()=>{
    return (
        <>
    <section className="section-container">
        <div className="section-content">
            <div className="card-container">
            {skills.map((skill, index) => (
                <div className="card-section" key={index}>
                 <div className="card-content">
                     <i className={skill.icon}></i>
                     <h2 className="card-title">{skill.title}</h2>
                     <p className="card-text">{skill.subtitle}</p>
                 </div>
                </div>
        ))}
            </div>
        </div>
    </section>
        </>
    )
}
export default Habilidades;