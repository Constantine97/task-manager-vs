//CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-managerVS'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) =>{
  if(error){
    return console.log('Unable to connect to Database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: 'Konstantinos',
  //   age: 23
  // })

//   db.collection('users').insertMany([{
//     name: ' Vasiliki',
//     age : 33,
//   },
//   {
//     name: 'Alkisti',
//     age: 31}
//   ],  (error, result) =>{
//   if(error){
//     return console.log('Unable to insert users.')
//   }
//
//   console.log(result.ops)
// })

db.collection('tasks').insertMany([{
  description: 'clean the house',
  completed: true
},
{
  description: 'gardening',
  completed: false
},
{
  description: 'clean the boat',
  completed : false
}
], (error, result)=>{
  if(error){
    return console.log('Unable to insert tasks.')
  }

  console.log(result.ops)
})
})
