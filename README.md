# Projeto Node.js com MySQL e Nginx como Proxy Reverso

Este projeto é uma aplicação simples em Node.js que utiliza o Nginx como proxy reverso e um banco de dados MySQL para armazenar dados. 
O objetivo é demonstrar o uso de Nginx para redirecionar requisições HTTP para uma aplicação Node.js e conectar a aplicação a um banco de dados MySQL.

## Estrutura do Projeto

- **Nginx**: Atua como um proxy reverso, redirecionando as requisições da porta `8080` para o serviço Node.js.
- **Node.js**: A aplicação Node.js registra nomes no banco de dados e exibe uma lista de registros.
- **MySQL**: Banco de dados que armazena os registros dos nomes na tabela `people`.

## Funcionalidades

A aplicação Node.js possui uma rota (`/`) que:
1. Insere um novo nome no banco de dados.
2. Retorna uma página HTML com a mensagem `Full Cycle Rocks!` e a lista de todos os nomes registrados na tabela `people`.

## Pré-requisitos

- **Docker** e **Docker Compose** instalados no sistema.

## Configuração e Execução

1. Clone este repositório:

   ```bash
   git clone <URL-do-repositorio>
   cd <nome-do-repositorio>
