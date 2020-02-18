const db = require('../database/db-config.js');


module.exports = {
    findAll,
    register,
    findById,
    findBy
}

//returns all users
function findAll(){
    return db('users').select('id', 'username');
}

function register(user){
    return db('users')
        .insert(user,'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        })
}

function findById(id){
    return db('users')
        .select('id', 'username')
        .where({id})
        .first();
}


function findBy(filter){
    return db('users')
    .select('id','username', 'password')
    .where(filter)
}
