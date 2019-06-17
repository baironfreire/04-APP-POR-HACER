const fs = require('fs');

let listByDo = [];

const saveDB = () => {
    let data = JSON.stringify(listByDo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error("No se pudo grabar");
    })
}

const loadDB = () => {
    try {
        listByDo = require('../db/data.json');
    } catch (error) {
        listByDo = [];
    }

}
const crear = (descripcion) => {
    loadDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listByDo.push(porHacer);
    saveDB();
    return porHacer;

}

const findAll = () => {
    loadDB();
    return listByDo;
}

const update = (description, completed = true) => {
    loadDB();
    let index = listByDo.findIndex(task => task.descripcion === description);
    if (index >= 0) {
        listByDo[index].completado = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (description) => {
    loadDB();
    let newList = listByDo.filter(task => task.descripcion != description)
    if (newList.length === listByDo.length) {
        return false;
    } else {
        listByDo = newList;
        saveDB();
        return true;
    }
}

module.exports = {
    crear,
    findAll,
    update,
    borrar
}