import './Colaborador.css'

const Colaborador = (props) => {


    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: props.corDeFundo }}>
                {
                    props.imagem.length > 0 &&
                    <img src={props.imagem}/> 
                } 
            </div>
            <div className='rodape'>
                <h4><span>Nome: </span>{props.nome}</h4>
                <h5><span>Cargo: </span>{props.cargo}</h5>
                <h6><span>Skills: </span>{props.habilidade}</h6>
            </div>
        </div>
    )
}

export default Colaborador