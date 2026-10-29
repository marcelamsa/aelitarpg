# Metanoia

Metanoia é uma aplicação web desenvolvida com Ionic e React. O projeto está a ser construído para criar uma experiência de comunidade ligada ao Discord, com autenticação e perfis de utilizador.

> O projeto encontra-se em desenvolvimento. As funcionalidades descritas abaixo correspondem ao estado atual do código.

## Funcionalidades atuais

- Página inicial com opção de autenticação através do Discord.
- Autenticação OAuth gerida pelo Supabase.
- Página de perfil que apresenta o nome, o nome de utilizador e o avatar devolvidos pelo Discord.
- Opção para terminar sessão.
- Interface construída com Ionic e React.

## Tecnologias

- React 19
- TypeScript
- Ionic React
- React Router
- Supabase Auth
- Vite
- Capacitor

## Requisitos

- Node.js e npm
- Uma aplicação Supabase
- Uma aplicação OAuth criada no Discord Developer Portal

## Configuração local

1. Clona o repositório e entra na pasta do projeto:

   ```bash
   git clone https://github.com/marcelamsa/aelitarpg.git
   cd aelitarpg
   ```

2. Instala as dependências:

   ```bash
   npm install
   ```

3. Cria um ficheiro `.env.local` na raiz do projeto:

   ```env
   VITE_SUPABASE_URL=https://teu-projeto.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=a_tua_chave_publica
   ```

   Substitui os valores pelos dados do teu projeto Supabase. Não publiques chaves secretas ou credenciais. A chave publishable é usada no cliente e as políticas de acesso do Supabase (RLS) devem proteger os dados.

4. No Supabase, ativa o provider Discord em **Authentication → Providers** e configura as credenciais OAuth da aplicação Discord.

5. Configura os URLs de callback permitidos no Supabase e no Discord para os endereços que vais usar no desenvolvimento e na publicação. O login redireciona para `/perfil`.

6. Inicia a aplicação:

   ```bash
   npm run dev
   ```

   Abre no navegador o endereço indicado pelo Vite (normalmente `http://localhost:5173`).

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Verifica os tipos TypeScript e cria a versão de produção em `dist` |
| `npm run preview` | Serve localmente a versão de produção |
| `npm run lint` | Executa o ESLint |
| `npm run test.unit` | Executa os testes unitários com Vitest |
| `npm run test.e2e` | Executa os testes end-to-end com Cypress |

## Estrutura principal

```
src/
├── components/
├── pages/
│   ├── Home.tsx
│   ├── Perfil.tsx
│   └── HistoriaEditor.tsx
├── services/
│   └── supabase.ts
├── theme/
└── App.tsx
```

## Estado do desenvolvimento

A aplicação já inclui o fluxo de login com Discord e a apresentação dos dados básicos do perfil. O repositório também contém um editor de história e estilos associados em desenvolvimento.

Ideias planeadas para evolução incluem personalização do perfil, funcionalidades de comunidade e ferramentas de administração. Estas partes ainda podem não estar implementadas ou ligadas à interface atual.

## Contribuição

Sugestões e melhorias são bem-vindas. Para propor uma alteração, cria uma branch, faz as alterações e abre um pull request com uma descrição clara.

## Licença

Ainda não foi definida uma licença para este projeto.

