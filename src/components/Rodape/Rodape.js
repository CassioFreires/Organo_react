import './Rodape.css';

const Rodape = () => {
    return(
        <footer className='rodape'>
            <div className='lista-icones-rodape'>
                <ul>
                    <li><a href="#"><img src='/imagens/fb.png'/></a></li>
                    <li><a href="#"><img src='/imagens/ig.png'/></a></li>
                    <li><a href="#"><img src='/imagens/tw.png'/></a></li>
                </ul>
            </div>

            <div className='logo-rodape'>
                <img src='/imagens/logo.png'/>
            </div>

            <div className='descricao-rodape'>
                <span>Desenvolvido por Cassio junto ao curso da Alura.</span>
            </div>
        </footer>
    )
}

export default Rodape;