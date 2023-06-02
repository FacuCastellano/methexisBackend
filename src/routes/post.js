const {Router} = require('express')
const router = Router()
const {createProgram} = require('../DB/crud/create')

router.post('/create-program',async (req,res)=>{
    try{
        const{name,levels}=await req.body
        await createProgram(name,levels)
        res.end()
    } catch {
        res.send(null)
        res.end()
    } 
})

module.exports = router