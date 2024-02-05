# PM2 Monitoramento Web

> Plataforma Web para monitoramento PM2 em tempo real.

> Botões de iniciar, reiniciar e parar o serviço.

> Uso de RAM e CPU atualizando em tempo real.

> Console Log dos serviços atualizando em tempo real.

# 🛠️ Instalar

- :arrow_down: Baixar os arquivos `git clone https://github.com/vidagostini1998/pm2-monit-web.git`
- Adicionar o nome dos serviços no arquivo `src\pm2Lib.ts` na linha 18 `private readonly MINERS = ['NOME_DO_SERVIÇO_PM2','NOME_DO_SERVIÇO_PM2_2','PM2-Monit-Web'];`:

![image](https://user-images.githubusercontent.com/94183727/212323879-f78c453c-27eb-47e8-b8eb-65ea15522a9d.png)

- Instalar NodeJS https://nodejs.org/en/
- Instalar dependencias:

```shell
npm ci
```

- Criar .env com base .env.example

```shell
PORT = `PORTA`
HOST = `HOSTNAME`
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
