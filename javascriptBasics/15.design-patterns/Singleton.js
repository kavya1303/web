// function DBConnection(){
//     console.log('Connection is created')
// }

// var dbCon1 = new DBConnection()
// var dbCon2 = new DBConnection()
// var dbCon3 = new DBConnection()
// var dbCon4 = new DBConnection()

var DBConnection = (function(){
    var connection = null

    var createConnection = function(){
        var obj = Object.create(null)
        console.log('Connection is created')
        return obj
    }

    var getConnection = function(){
        if(!connection){
            connection = createConnection()
        }
        return connection
    }

    return {
        getConnection: getConnection
    }
})()

console.log(DBConnection)
var dbCon1 = DBConnection.getConnection()
console.log(dbCon1)

var dbCon2 = DBConnection.getConnection()
console.log(dbCon2)

var dbCon3 = DBConnection.getConnection()
console.log(dbCon3)

var dbCon4 = DBConnection.getConnection()
console.log(dbCon4)