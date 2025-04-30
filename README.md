# 🧠 BackEnd-API.RESTful

## 📘 Descrição do Projeto

Este projeto é uma API RESTful desenvolvida com Node.js e Express, utilizando PostgreSQL como banco de dados. A aplicação possui duas entidades principais: **Heróis** e **Editoras**, permitindo operações CRUD completas, filtros específicos, upload de fotos, geração de relatórios e segurança via API Key.

## 🎯 Funcionalidades

- CRUD completo para as entidades Heróis e Editoras.
- Filtro de Heróis por nome.
- Upload de fotos para Heróis.
- Geração de relatórios em CSV ou PDF.
- Segurança de rotas com API Key.
- Documentação da API utilizando Postman.

## ⚙️ Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Sequelize (ORM)
- Multer (Upload de arquivos)
- PDFKit ou Fast-CSV (Geração de relatórios)
- Postman (Documentação)
- Dotenv (Variáveis de ambiente)

## 🗂️ Estrutura de Diretórios

## 🗂️ Estrutura de Diretórios

```
├── src/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── models/
│   └── routes/
├── uploads/
├── .env
├── server.js
└── package.json
```

## 🚀 Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/turco-vic/BackEnd-API.RESTful.git

## 👨‍💻 Configure as variáveis de ambiente no arquivo

1. Clone o repositório:

   ```bash
    PORT=3000
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=seu_banco
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    API_KEY=sua_api_key

## 🔐 Segurança com API Key

As rotas protegidas requerem a inclusão de um cabeçalho **x-api-key** com a chave definida no arquivo **.env**.

## 📄 Documentação da API
A documentação completa da API está disponível no arquivo Postman Collection incluído no repositório. Para utilizá-la:

1. Abra o Postman.

2. Importe o arquivo BackEnd-API.RESTful.postman_collection.json.

3. Utilize as rotas conforme descrito na coleção.

## 📦 Geração de Relatórios
A API permite a geração de relatórios em formato CSV ou PDF para as entidades. As rotas específicas para geração de relatórios estão documentadas na coleção do Postman.

## 🖼️ Upload de Fotos
A entidade Herói permite o upload de uma foto. Utilize a rota correspondente com o método POST e envie o arquivo no campo foto do formulário.

## 📚 Temas

- Entidades: Heróis e Editoras
- Filtro disponível: Busca de Heróis por nome.
