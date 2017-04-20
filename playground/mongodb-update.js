// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('58f816a31e8e7f6e2a400612')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({name: 'Abdan'}, {
        $set: {name: 'Syakuron'},
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });

    // db.close();
});
