const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message : 'Get goals'})
})

const setGoal = asyncHandler(async (req, res) => {
   // console.log(req.body)
    if(!req.body.password){
        res.status(400)

        throw new Error('Please Enter a password')
    }
    res.status(200).json({message : 'Set goal'})
})


module.exports = {
    getGoals,
    setGoal,
}