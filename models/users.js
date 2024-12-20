const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    imagem: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        required: true,
        default: Date.now,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['solicitado', 'coletado'], 
        default: 'solicitado'
    },
    dataHoraSolicitacao: {  
        type: Date,
        default: Date.now,  
    },
    dataHoraColeta: {  
        type: Date,
        default: null,   
    },
    endereco: { 
        type: String, 
        required: true 
    },
});

module.exports = mongoose.model("User", userSchema);
