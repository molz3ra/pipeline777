const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function somar(a, b) {
    return a + b;
}

// Rota principal (Home)
app.get('/', (req, res) => {
    res.send('<h1>Servidor Ativo!</h1><p>Use a rota <strong>/somar?a=10&b=20</strong> para calcular.</p>');
});

// Rota Dinâmica de Soma
app.get('/somar', (req, res) => {
    // 1. Pegamos os valores da URL (Ex: ?a=10&b=20)
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // 2. Validação Sênior: E se o usuário não mandar números?
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send('<h1>Erro!</h1><p>Por favor, envie dois números válidos na URL. Exemplo: <strong>/somar?a=50&b=30</strong></p>');
    }

    // 3. Executamos a lógica
    const resultado = somar(a, b);

    // 4. Respondemos ao usuário
    res.send(`
        <body style="font-family: sans-serif; text-align: center; padding: 50px;">
            <h1 style="color: #3498db;">🔢 Resultado da Soma</h1>
            <div style="font-size: 24px; background: #ecf0f1; padding: 20px; display: inline-block; border-radius: 10px;">
                ${a} + ${b} = <strong>${resultado}</strong>
            </div>
            <br><br>
            <a href="/">Voltar</a>
        </body>
    `);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = somar;