function Site({titulo, autor, descricao, imagem, avaliacao}){
    return(
            <div className="card">
                <div>
                    <img src={imagem} width={500}/>
                </div>
                <div>
                    <h1>{titulo}</h1>
                    <p>{autor}</p>
                    <p className="descri">{descricao}</p>
                    <p>{avaliacao}</p>
                </div>
            </div>
    );    
};

export default Site;