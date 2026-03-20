const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sua lógica de soma continua aqui (o 'Cérebro' do app)
function somar(a, b) {
    return a + b;
}

// Essa é a "página inicial" do seu site
app.get('/', (req, res) => {
    const resultado = somar(10, 5); // Testando com 10 + 5
    res.send(`
        <body style="font-family: sans-serif; text-align: center; padding: 50px;">
            <h1 style="color: #5515a8;">🚀 Pipeline de Sucesso!</h1>
            <p>Seu servidor Node.js está rodando no Render.</p>
            <div style="background: #f4f4f4; padding: 20px; display: inline-block; border-radius: 10px;">
                <strong>Teste da Função Soma:</strong> 10 + 5 = ${resultado}
            </div>
        </body>
    `);
});

// Liga o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// IMPORTANTE: Mantemos isso para o JEST (o robô de teste) não quebrar!
module.exports = somar;