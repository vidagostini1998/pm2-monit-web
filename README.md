# PM2 Monitoramento Web

> Plataforma Web para monitoramento PM2 em tempo real.

> Botões de iniciar, reiniciar e parar o serviço.

> Uso de RAM e CPU atualizando em tempo real.

> Console Log dos serviços atualizando em tempo real.

# 🛠️ Instalar

- :arrow_down: Baixar os arquivos `git clone https://github.com/vidagostini1998/pm2-monit-web.git`

- Instalar NodeJS https://nodejs.org/en/
- Instalar dependencias:

```shell
npm ci
```

- Criar .env a partir do .env.example

```shell
PORT = PORTA
HOST = HOST
MINERS = "NOME_SERVIÇO_1, NOME_SERVIÇO_2, PM2-Monit-Web"
```

- Build

```shell
npm run build
```

- Rodar PM2

```shell
pm2 start public/dist/app.js --name PM2-Monit-Web
```

ou

- Start server

```shell
npm start
```

- Acessar no link `localhost:3000` ou `HOST:PORTA`
