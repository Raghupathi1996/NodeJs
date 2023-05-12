let {people} = require('../data')

const person = (req, res) => {
    res.status(200).json({success:true, data:people})
}

const createPerson = (req,res) =>{
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({success:false, msg:'Please provide name value'})
    }
    console.log("data sent from the backend - and printing at the backend", name)
    res.status(201).json({success:true, person:name})
}

const createPersonPostman = (req,res) => {
    const {name} = req.body
    if(!name) {
       return res
        .status(400)
        .json({success:false, msg:'Please provide name value'}) 
    }
    res.status(201).json({success:true, data:[...people, name]})
}

const updatePerson = (req,res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people
    .find((person) => person.id === Number(id))
    if(!person) {
        return res
        .status(404)
        .json({ success: false, msg: `No person with id:${id} was found`})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    return res.status(200).json({ success: true, people: newPeople})
}

const deletePerson = (req,res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person) {
        return res
        .status(404)
        .json({success: false, msg: `No person with id:${req.params.id} was found`})
    }
    const newPeople = people.filter((person) => person.id != Number(req.params.id))
    return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
    person,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}