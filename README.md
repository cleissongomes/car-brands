# **Marcas de Carro**
Este projeto é uma API REST e tem como objetivos acessar o arquivo JSON "lista-de-carros.json" e retornar:

a) O nome da marca que mais possui modelos.
b) O nome da marca que menos possui modelos.
c) Receber como parâmetro um número X e retornar as X marcas que mais possuem modelos, seguidas da quantidade, em ordem decrescente.
d) Receber como parâmetro um número X e retornar as X marcas que menos possuem modelos, seguidas da quantidade, em ordem crescente.
e) Receber como parâmetro o nome de uma marca e retornar a lista de seus modelos. Caso o nome da marca informada não exista no arquivo JSON, um array vazio será retornado. A busca desconsidera diferenças entre caracteres maiúsculos e minúsculos.

## **Instalação**
Para instalar as dependências necessárias, execute o seguinte comando no seu terminal:

npm install

## **Uso**
Após instalar as dependências, para utilizar o Marcas de Carros, siga os passos abaixo:

Para rodar o projeto, execulte o seguinte comando no seu terminal:

node index.js

Em seguida, utilize uma ferramenta de endpoints como Insomnia ou Postman para testar as rotas da API.
As seguintes rotas estão disponíveis:
GET /marcas/maisModelos - Retorna a marca com mais modelos.
GET /marcas/menosModelos - Retorna a marca com menos modelos.
GET /marcas/listaMaisModelos/:X - Retorna as X marcas com mais modelos, em ordem decrescente.
GET /marcas/listaMenosModelos/:X - Retorna as X marcas com menos modelos, em ordem crescente.
POST /marcas/listaModelos - Retorna a lista de modelos de uma marca especificada.

## **Status do Projeto**
Este projeto está atualmente ativo e em desenvolvimento contínuo.

## **Licença**
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

## **Agradecimentos**
Obrigado a todos os colaboradores que tornaram este projeto possível.

## **Contato**
Se você tiver alguma dúvida ou sugestão sobre este projeto, sinta-se à vontade para entrar em contato pelo e-mail: cleissongomes777@gmail.com.
