const express = require('express');
const xio = require('axios');
const { default: axios } = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/index', (req, res) => {
    res.send('index');
});

app.get('/consulta-cep/:cep', async (req, res) => {
    const cep = req.params.cep; //obtendo o cep da url
if(cepRegex.test(cep)){
    try {
        //Fazendo a requisição para a api viaCEP
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data); // Retorna os dados da resposta
    } catch (error){
        console.error('Erro ao fazer requisição:', error);
        res.status(500).send('Erro ao consultar CEP')
    }
} else{
    res.status(400).send("Cep Invalido");
}
})
    

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
