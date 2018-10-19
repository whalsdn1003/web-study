const express = require('express')
const app = express.Router()

function newMember(name, phone) {
    return {
        name : name,
        phone : phone,
    }
}

app.get('/members', (req, res) => {
    res.json({
        members : [
            newMember('고명석', '01048146109'),
            newMember('손덕진', '01012345678'),
            newMember('권석휘', '01076671097'),
            newMember('배필주', '01073032301'),
            newMember('조민우', '01033554836'),
        ]
    })
})

module.exports = app