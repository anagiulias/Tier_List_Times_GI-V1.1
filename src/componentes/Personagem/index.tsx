import './Personagem.css'

interface PersonagemProps {
    nome: string
    imagem: string
    classe: string
    corDoCard: string
}

const Personagem = ({ nome, imagem, classe, corDoCard }: PersonagemProps) => {
    return (<div className='personagem'>
        <div className='cabecalho' style={{ backgroundColor: corDoCard }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{classe}</h5>
        </div>
    </div>)
}

export default Personagem