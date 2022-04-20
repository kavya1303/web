try {
    // code that may or may not throws error
    eval("console.log('This is try block)")
}
catch (exception) {
    // code to be executed if an error occurs
    console.log('This is catch block')
}
finally {
    // code to be executed regardless of an error occurs or not
    console.log('This is finally block')
}

try {
    var jsCode = "alert('hello)"
    eval(jsCode)
    var output = getMessage("Hello", "Uma")
} catch (ex){
    console.log(ex)
    console.log(ex.name)
    console.log(ex.message)
} finally {
    console.log('Finally - This block will always get executed')
}

try {
    var studentCount = 2

    if(studentCount >1){
        throw {
            id: 101,
            message : 'Duplicate records found'
        }
    }
} catch (ex){
    console.log(ex)
    console.log(ex.id)
    console.log(ex.message)
}