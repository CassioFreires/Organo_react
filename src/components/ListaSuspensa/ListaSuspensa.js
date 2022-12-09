
import './ListaSuspensa.css'
const ListaSuspensa = (props) => {

    const selectAlterado = (evento) => {
        props.alterado(evento.target.value)
    }

    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={selectAlterado}>
                <option value="">Selecione</option>
                {   
                    props.items.map((item) => <option key={item}>{item}</option>)
                }
            </select>
        </div>
    )
}

export default ListaSuspensa;