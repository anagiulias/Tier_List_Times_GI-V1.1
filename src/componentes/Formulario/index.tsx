import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { IPersonagem } from '../../compartilhado/interfaces/IPersonagem'

interface FormularioProps {
    aoPersonagemCadastrado: (personagem: IPersonagem) => void
    times: string[]
}

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState('') 
    const [classe, setClasse] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) =>{
        evento.preventDefault()
        props.aoPersonagemCadastrado({
            nome,
            classe,
            imagem,
            time
        })
        setNome('')
        setClasse('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o seu card</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Classe" 
                    placeholder="Digite sua classe"
                    valor={classe}
                    aoAlterado={valor => setClasse(valor)} 
                />
                <CampoTexto
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Elemento" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card   
                </Botao>
            </form>
        </section>
    )
}

export default Formulario