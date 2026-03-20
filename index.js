const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function somar(a, b) {
    return a + b;
}

// Rota principal (Agora com Interface Visual)
app.get('/', (req, res) => {
    res.send(`
        <body style="font-family: sans-serif; text-align: center; padding: 50px; background-color: #f0f2f5;">
            <h1 style="color: #2c3e50;">🚀 Calculadora do Pipeline</h1>
            <p>Digite os números abaixo para realizar a soma via API.</p>
            
            <form action="/somar" method="GET" style="background: white; padding: 30px; display: inline-block; border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <input type="number" name="a" placeholder="Número 1" required 
                    style="padding: 10px; border: 1px solid #ddd; border-radius: 5px; width: 80px;">
                
                <span style="font-size: 20px; font-weight: bold; margin: 0 10px;"> + </span>
                
                <input type="number" name="b" placeholder="Número 2" required 
                    style="padding: 10px; border: 1px solid #ddd; border-radius: 5px; width: 80px;">
                
                <br><br>
                
                <button type="submit" 
                    style="padding: 10px 25px; background-color: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
                    Calcular Resultado
                </button>
            </form>

            <footer style="margin-top: 30px; color: #7f8c8d; font-size: 0.8em;">
                Build verificado por GitHub Actions ✅ | Deploy via Docker 🐳
            </footer>
        </body>
    `);
});

// Rota de Cálculo (Mantemos igual, ela recebe os dados do formulário)
app.get('/somar', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send('<h1>Erro!</h1><p>Números inválidos.</p><a href="/">Voltar</a>');
    }

    const resultado = somar(a, b);

    res.send(`
        <body style="font-family: sans-serif; text-align: center; padding: 50px; background-color: #f0f2f5;">
            <h1 style="color: #2c3e50;">🔢 Resultado Encontrado</h1>
            <div style="font-size: 30px; background: white; padding: 40px; display: inline-block; border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                ${a} + ${b} = <strong style="color: #27ae60;">${resultado}</strong>
            </div>
            <br><br>
            <a href="/" style="text-decoration: none; color: #3498db; font-weight: bold;">← Fazer outra conta</a>
        </body>
    `);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = somar;