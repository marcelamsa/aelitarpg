# Metanoia

Metanoia é o site do universo Aelita, desenvolvido com Ionic e React. A proposta é permitir que cada jogador consulte a sua própria “mente”: um espaço pessoal com as informações técnicas e narrativas do seu personagem, deixadas ou atualizadas durante o jogo.

> O projeto encontra-se em desenvolvimento. As funcionalidades descritas abaixo correspondem ao estado atual do código.

## Objetivo do projeto

O site pretende funcionar como um arquivo pessoal dos jogadores, reunindo informações que podem ser difíceis de consultar ou atualizar dentro do jogo. A ideia é que cada pessoa possa acompanhar os dados do seu personagem e manter a sua história organizada num só lugar.

Entre as funcionalidades planeadas estão:

- Guardar e editar a história e os nicknames dos personagens.
- Consultar o nível de sanidade atribuído ao personagem.
- Ver o estado da candidatura ou participação: em análise, aprovado ou recusado, e se o jogador está no servidor.
- Consultar se o personagem está vivo ou morto e a que lado pertence.
- Enviar imagens de referência para guardar junto das informações do personagem.
- Acompanhar atualizações do universo Aelita e, futuramente, integrar redes sociais como Twitter/X e YouTube.

Este espaço poderá receber novas mecânicas no futuro.

## Funcionalidades implementadas

- Página inicial com opção de autenticação através do Discord.
- Autenticação OAuth gerida pelo Supabase.
- Página de perfil que apresenta o nome, o nome de utilizador e o avatar devolvidos pelo Discord.
- Opção para terminar sessão.
- Interface construída com Ionic e React.

As funcionalidades de sanidade, estados do personagem, upload de imagens e integração com redes sociais fazem parte da visão do projeto e ainda não estão implementadas no código atual.

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

A aplicação já inclui o fluxo de login com Discord e a apresentação dos dados básicos do perfil. O repositório contém componentes em desenvolvimento relacionados à edição de história, mas o conjunto de funcionalidades descrito na visão do projeto ainda está a ser construído.

## Contribuição

Sugestões e melhorias são bem-vindas. Para propor uma alteração, cria uma branch, faz as alterações e abre um pull request com uma descrição clara.

## Licença

Ainda não foi definida uma licença para este projeto.

