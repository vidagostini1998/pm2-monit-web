# PM2 Monitoramento Web

>Plataforma Web para monitoramento PM2 em tempo real.

>Botões de iniciar, reiniciar e parar o serviço.

>Uso de RAM e CPU atualizando em tempo real.

>Console Log dos serviços atualizando em tempo real.

# 🛠️ Instalar
- :arrow_down: Baixar os arquivos ```git clone https://github.com/vidagostini1998/pm2-monit-web.git```
- Adicionar o nome dos serviços no arquivo ```src\pm2Lib.ts``` na linha 18 ```private readonly MINERS = ['NOME_DO_SERVIÇO_PM2','NOME_DO_SERVIÇO_PM2_2'];```:

![image](https://user-images.githubusercontent.com/94183727/212323879-f78c453c-27eb-47e8-b8eb-65ea15522a9d.png)

- Instalar NodeJS https://nodejs.org/en/
- Instalar dependencias:

```shell
npm ci
```

- Build

```shell
npm run build
```

- Start server

```shell
npm start
```

- Acessar no link ```localhost:3000``` ou ```IP_DA_MAQUINA:3000```
