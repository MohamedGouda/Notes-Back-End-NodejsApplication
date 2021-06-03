var memoryStorage = require('memorystorage');

var store = new memoryStorage('note-app');


exports.getKeys = ()=>{
    var keys= [];

    for(var index = 0 ; index<  store.length ; index++)
    {
        var key = store.key(index);
        keys.push(key);
    }

    return keys;
}

exports.getValues = () =>{
    var values = [];

    for(var index= 0 ; index < store.length ; index++)
        values.push(store.getItem(store.key(index)));

    return values ;
}


exports.store = store;