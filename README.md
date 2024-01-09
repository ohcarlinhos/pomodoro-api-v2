# Sobre o Projeto
Esse projeto esta sendo desenvovlido para ser a API responsável por manter e gerenciar os dados de outro projeto pessoal chamado [Pomodoro - Timer Online](https://timer.caarlos.com/).

Ao mesmo tempo que está sendo desenvolvido para ser um "produto" pessoal, também é uma experiência para a aplicação de conceitos de desenvolvimento de API, TypeScript, SQL e Orientação a Objetos.

É bem provável que a estrutura dos arquivos, nomeclaturas e alguns detalhes de implementação se modifiquem a medida que o projeto evolui.

## Banco de dados

É preciso levantar um container com a imagem do PostgresSQL para servir como banco de dados da aplicação.

Por padrão, o banco utilizando é "api", porem pode ser personalizado nas variáveis do `.env` como mostra o arquivo exemplo `.env.example`

```powershell
docker run --name pomodoro_pg -e POSTGRES_PASSWORD=1234 -p 65432:5432 -d postgres
```
