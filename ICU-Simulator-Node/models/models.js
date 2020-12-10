const mongoose = require('mongoose')

const conditionSchema = new mongoose.Schema({
    description: { type: String }
})
const Condition = mongoose.model('Condition', conditionSchema)

const symptomSchema = new mongoose.Schema({
    description: { type: String }
})
const Symptom = mongoose.model('Symptom', symptomSchema)

const inputSchema = new mongoose.Schema({
    description: { type: String }
})
const Input = mongoose.model('Input', inputSchema)

const Scenario = mongoose.model('Scenario', new mongoose.Schema({
    age: {type: Number},
    conditions: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Condition'
    },
    symptoms: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Symptoms'
    },
    input: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Input'
    },
    briefDescription: {
        type: String,
        trim: true,
        maxlength: 100
    },
    detailedDescription: {
        type: String,
        trim: true,
        maxlength: 255
    }    
}))

exports  = {
    Condition,
    Symptom,
    Input,
    Scenario,
    mongoose
}