const express = require('express')
const { OperatorsDB } = require('./OperatorsDB')
const app = express()
const bodyParser = require('body-parser')

repository = new OperatorsDB()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


const cursor =  repository.save('Usuario',{nome:"maria",idade:"35"})
//const cursor =  repository.find('Usuario',{nome:"maria"})
//const cursor =  repository.updateOne('Usuario','5f698463c59eaa439c1d4808',{nome:"Andre",idade:"35"})
//const cursor =  repository.deleteOne('Usuario',{})


console.log(cursor)

                

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
