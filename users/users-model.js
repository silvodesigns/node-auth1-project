const db = require('../database/db-config.js');


module.exports = {
    findAll,
    register,
    findById
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

