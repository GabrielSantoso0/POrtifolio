# Portfólio Minimalista - Gabriel Oliveira

Este é o repositório standalone do seu portfólio de Direção de Arte, estruturado para rodar de forma isolada e pronto para ser publicado no Vercel ou Netlify.

## Tecnologias
* **React** + **Vite** + **TypeScript**
* **Framer Motion** (para animações da modal)
* **Lucide React** (para ícones)
* **Roboto Mono** (via Google Fonts)

---

## Como rodar localmente

1. Entre na pasta do projeto:
   ```bash
   cd portfolio-standalone
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Para gerar o build de produção:
   ```bash
   npm run build
   ```

---

## Como subir para um novo repositório no GitHub

Siga este passo a passo no seu terminal dentro da pasta `portfolio-standalone`:

1. Inicialize o repositório git local:
   ```bash
   git init -b main
   ```
2. Adicione todos os arquivos:
   ```bash
   git add .
   ```
3. Crie o primeiro commit:
   ```bash
   git commit -m "feat: setup portfolio standalone"
   ```
4. Crie um repositório vazio no seu GitHub (ex: `portfolio-gabriel`).
5. Copie a URL do repositório gerado e adicione como remote:
   ```bash
   git remote add origin <URL_DO_SEU_REPOSITORIO_GITHUB>
   ```
   *(Exemplo: `git remote add origin https://github.com/GabrielSantoso0/portfolio-gabriel.git`)*
6. Envie o código para o GitHub:
   ```bash
   git push -u origin main
   ```

---

## Como publicar no Vercel

1. Acesse o painel da [Vercel](https://vercel.com) e clique em **Add New > Project**.
2. Importe o novo repositório que você acabou de criar no GitHub (`portfolio-gabriel`).
3. O Vercel detectará automaticamente as configurações do **Vite**.
4. Clique em **Deploy**.
5. Em poucos segundos seu portfólio estará no ar em um link público gratuito!
