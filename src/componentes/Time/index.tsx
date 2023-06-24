import { IPersonagem } from '../../compartilhado/interfaces/IPersonagem'
import Personagem from '../Personagem'
import './Time.css'

interface TimeProps {
    corDoCard: string
    corDoFundo: string
    nome: string
    personagens: IPersonagem[]
}

const Time = (props: TimeProps) => {
    const estilo = { backgroundColor: props.corDoFundo }

    return (
        (props.personagens.length > 0) && <section className='time' style={estilo}>
            <h3 style={{ borderColor: props.corDoCard }}>{props.nome}</h3>
            <div className='personagens'>
                {props.personagens.map( personagem => <Personagem corDoCard={props.corDoCard} key={personagem.nome} nome={personagem.nome} classe={personagem.classe} imagem={personagem.imagem} /> )}
            </div>
        </section>
    )
}

export default Time