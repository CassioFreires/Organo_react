import { useState } from 'react'
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
   

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [skills, setSkills] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault()
        props.colaboradorCadastrador({
            nome,
            cargo,
            imagem,
            time,
            skills
        })

        setNome('');
        setCargo('');
        setImagem('')
        setTime('');
        setSkills('');
        
    }
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Monte sua EQUIPE!</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor ={nome}
                    alterado = {setNome}
                 />
                <CampoTexto
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor ={cargo}
                    alterado = {setCargo}
                  />
                <CampoTexto
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite a url da imagem"
                    valor ={imagem}
                    alterado = {setImagem}
                  />
                <CampoTexto
                    obrigatorio={true} 
                    label="Skills" 
                    placeholder="Digite suas skills"
                    valor={skills}
                    alterado = {setSkills}
                  />
                <ListaSuspensa 
                    label="Time"
                    items={props.times}
                    valor={time}
                    alterado={setTime}
                />

                <Botao obrigatorio={true}>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario