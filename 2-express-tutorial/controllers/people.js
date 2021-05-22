let { people } = require('../data')

const getPeople = (req,res)=>{
    console.log(req.body);
    res.status(200).json({success : true, data : people})
    console.log(req.url);
}

const postPeople = (req,res)=>{
    const {name} = req.body
    console.log(req.body);
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide name value'})
    }
    res.status(201).send({success:true,preson:name})
}

const createPersonPostman = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide name value'})
    }
    res.status(201).send(({ success: true, data:[...people,name]}))
}

const updatePerson = (req,res)=>{
    const {id} = req.params
    const { name } = req.body
    
    const preson = people.find((person)=> person.id === Number(id))
    if(!preson){
        return res.status(400)
        .json({success:false, msg:`no preson with id ${id}`})
    }
    const newPeople = people.map((preson)=>{
        if(preson.id === Number(id)){
            preson.name = name 
       }
       return preson
    })     
    res.status(200).json({success:true,data:newPeople}) 
}

const deletePerson = (req,res)=>{
    const preson = people.find((person)=> person.id === Number(req.params.id))
    if(!preson){
        return res.status(404)
        .json({success:false, msg:`no preson with id ${req.params.id}`})
    }
    const newPeople = people.filter((person)=>person.id !== Number(req.params.id))
    return res.status(200).json({success:true, data: newPeople})
}


module.exports = {
    getPeople,
    postPeople,
    createPersonPostman,
    updatePerson,
    deletePerson
}