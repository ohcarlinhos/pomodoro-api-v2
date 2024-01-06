# Configurações

## Banco de dados

Criação do container do banco de dados para aplicação:

```powershell
docker run --name pomodoro_pg -e POSTGRES_PASSWORD=1234 -p 65432:5432 -d postgres
```
