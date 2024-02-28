function Site({titulo, autor, descricao, imagem, avaliacao}){
    return(
            <div className="card">
                <div>
                    <img src={imagem} width={300}/>
                </div>
                <div className='card-text'>
                    <h1 className='title'>{titulo}</h1>
                    <p className='author'>{autor}</p>
                    <p className="description">{descricao}</p>
                    <p>{avaliacao}</p>
                </div>
            </div>
    );    
};

export default Site;