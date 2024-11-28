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
        enum: ['solicitado', 'coletado'], // Valores permitidos
        default: 'solicitado'
    },
    dataHoraSolicitacao: {  // Campo para data de solicitação
        type: Date,
        default: Date.now,   // Define a data atual como padrão
    },
    dataHoraColeta: {  // Campo para data de coleta
        type: Date,
        default: null,   // Inicia como null, atualizado quando coletado
    },
});

module.exports = mongoose.model("User", userSchema);
