# Upload AI API

## Descrição

Projeto desenvolvido para conversão de video em áudio, para realização da sua transcrição e geração de dados com base em prompts com IA da OpenAI.

## Requisitos

Antes de iniciar a instalação e configuração do projeto, verifique se o seu sistema atende aos seguintes requisitos:

- pnpm

## Instalação

Siga os passos abaixo para instalar e configurar o projeto em sua máquina local:

1. **Clone o repositório**:
    
    ```bash
    git clone https://github.com/brenersrosa/upload-ai-api.git
    ```
    
2. **Acesse o diretório do projeto**:
    
    ```bash
    cd upload-ai-api
    ```
    
3. **Instale as dependências**:
    
    ```bash
    pnpm i
    ```
    

## Configuração

1. **Crie um arquivo de configuração**:
    
    No diretório raiz do projeto, crie um arquivo chamado `.env` seguindo o modelo de `.env.example` e defina as variáveis de ambiente necessárias para o projeto. Exemplo:
    
    ```
    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/<DATABASE_NAME>"
    
    PORT=""

    OPENAI_KEY=""
    ```
    
    Obs.:
    
    `USER:PASSWORD`: credenciais de acesso ao banco de dados local.
    
    `HOST:PORT` : IP e porta de acesso configuradas no MySQL.
    
    `DATABASE_NAME` : nome do banco que deseja criar.


2. **Criar banco de dados com o Prisma**:

    Após a configuração do `.env`, é necessário criar o banco de dados usando o seguinte comando:

    ```bash
    pnpm prisma migrate dev
    ```
    
    Este comando irá criar a base de dados e executar o arquivo `seed.ts` para popular o banco com os dados de usuários.

3. **Visualizar o banco de dados com o Prisma**:

    Após a criação do banco de dados, é possível visualizar os dados e tabelas a partir do seguinte comando:

    ```bash
    pnpm prisma studio
    ```

## Execução

Após a instalação e configuração do projeto, você pode executá-lo usando o seguinte comando:

```bash
pnpm run dev
```

Isso iniciará o servidor e o projeto estará acessível no seu navegador no endereço `http://localhost:3333` (ou a porta definida na variável de ambiente `PORT`).

## Licença

Este projeto está licenciado sob a **[MIT License](https://opensource.org/license/mit/).**