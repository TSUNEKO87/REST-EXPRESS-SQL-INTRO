const create = (req, res, next) => {
    console.log(req.body)
    let message = `A ${req.method} Request Has been made, with this data in BODY ${JSON.stringify(req.body)}`
    console.log(message);
    res.status(500).json(message);
}


const show = (req, res, next) => {
    const { id } = req.params
    let message = `A GET request for ressource MANGAS has been made, with ID in Params ${id}`
    console.log(message)
    res.json(message)
};



const index = (req, res, next) => {
    let message = `A GET request for resource MANGAS has been made. Unfortunately database is not connected yet, so please come back later`
    console.log(message);

    // TODO: connect toi a la base,va chercher les mangas, mets le resultat dans une variable, et res.json cette variable.
    res.json(message)
};


const update =  (req, res, next) =>{
    console.log(req.body)
    console.log(req.params.id)
    let message = `A PUT request for ressource MANGAS has been made, with ID in Params ${req.params.id}, with data in body ${JSON.stringify(req.body)}`
     console.log(message)
    res.json(message)
};


const destroy =(req, res, next) =>{
    const { id } = req.params;
    let message = `A DELETE request for ressource MANGAS has been made, with ID in Params ${id}`
    console.log(message)
    res.json(message)
}

module.exports = {
    create,
    show,
    index,
    update,
    destroy
}