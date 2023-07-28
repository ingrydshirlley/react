import '../style.css'

interface user{
    nome : string,
    idade : number,
    ativo? : boolean;
}

export const TesteDois = ({nome,idade,ativo} : user ) => {
    return(
        <div>
            <h1 className="titulo">
                 {nome}
                 {idade}
                 {ativo}
            </h1>
        </div>
    )
}
