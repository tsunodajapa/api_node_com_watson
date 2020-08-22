# API node com watson

![npm](https://img.shields.io/npm/v/typeorm?label=typeorm)
[![node version](https://img.shields.io/node/v/react)](https://img.shields.io/node/v/react)
![npm](https://img.shields.io/npm/v/react?label=react)
![npm](https://img.shields.io/npm/v/mysql?label=mysql)
<img src="https://img.shields.io/github/languages/top/tsunodajapa/api_node_com_watson">

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=api_node_com_watson&uri=https%3A%2F%2Fgithub.com%2Ftsunodajapa%2Fapi_node_com_watson%2Fblob%2Fmaster%2FInsomnia.json)


#### Este projeto tem como objetivo criar áudios através da API da IBM
Foi utilizado arquitetura SOLID no back-end

## Requisitos de instalação

- npm >= 6.0.0
- node >= 10
- mysql

## Configurações

 1. Primeiramente, é necessário criar um conta (gratuita) em <a href="https://www.ibm.com/cloud/watson-text-to-speech" > ibm.com/cloud/watson-text-to-speech </a>.

 2. Após a confirmação do cadastro, você terá acesso a <b>API_KEY</b> e <b>API_URL</b> que estarão disponíveis no painel da IBM. Na raiz da pasta server (cd server) crie um arquivo '.env' seguindo os parâmetros do arquivo .env.example.

 3. Crie um arquivo 'ormconfig.json' na raiz da pasta server (cd server) e insira os dados referente ao seu banco de dados seguindo os parâmetros do arquivo ormconfig.exemple.json
> É importante que todos os parâmetros informados acima estejem corretos, para que a tabela do banco seja criado e para que a API funcione.

## Como utilizar

### Servidor

#### Acesse o diretório do servidor
```
cd server
```

#### Execute o comando para instalações de dependências do servidor:

```
yarn install
```

#### Iniciar o servidor:
> É necessário manter o servidor ativo, para que o site web consiga processar as informações.
<br>
Esse comando já irá criar a tabela no banco com base na pasta entities.

```
yarn start
```

### Web

#### Acesse o diretório Web
```
cd web
```

#### Execute o comando para instalações de dependências da web:
> Altere a baseURL em ./src/services/api.ts 
```
yarn install
```

#### Iniciar o web:

```
yarn start
```
