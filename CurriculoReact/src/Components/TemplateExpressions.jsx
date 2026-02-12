const Cargo = " Dev. Júnior"

const Cidade = "Bariri-SP"

const Email = "Leo@senai.com.br"

const dados = {
    idade: 17,

}

//console.log(dados.idade)

//Array de strings
const skills = ["C#", "JS", "HTML", "React"];

const projects = [
    { name: "Desenvolvedor Júnior", tech: "em busca de esperiência" },
    { name: "Desenvolvedor Front-End ", tech: "em busca de esperiência " },
];

const linguas = ["English", "Portuguese"];

const TemplateExpression = () => {

    return (
        <div>
            <p><strong>Cargo:</strong>{Cargo}</p>

            <p><strong>Cidade:</strong> {Cidade}</p>

            <p>
                Daqui 5 anos sua idade será {dados.idade + 5}
            </p>

            <p>{Email}</p>

            {/*  Usando o lenght que informa quantos itens tem */}

            <h2>Habilidades</h2>
            <ul>
                {skills.map((skill) => (
                    <li key={skill}>
                        {skill}
                    </li>
                ))}
            </ul>

            <h4>Projetos</h4>
            <ul>
                {projects.map((project) => (
                    <li key={project.name}>
                        {project.name} - {project.tech} 
                    </li>
                ))}
            </ul>

            <h2>Línguas</h2>
               <ul>
                {linguas.map((skill) => (
                    <li key={skill}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TemplateExpression