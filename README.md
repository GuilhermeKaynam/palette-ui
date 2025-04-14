<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
=======
# 🎨 palette UI

Uma interface simples e responsiva criada com **React + Tailwind CSS**, focada em design elegante com uma paleta de cores personalizada. Ideal para quem busca um template leve e bonito para começar novos projetos.

## 🚀 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🌈 Paleta de Cores

> A paleta utilizada nesse projeto é suave e moderna, trazendo um visual agradável para experiências web.

| Cor        | Hex      |
|------------|----------|
| Primária   | `#A78BFA` |
| Secundária | `#F472B6` |
| Fundo      | `#F8FAFC` |
| Texto      | `#1F2937` |

## 📦 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/GuilhermeKaynam/palette-ui.git

# Acesse a pasta do projeto
cd colorwave-ui

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```
## 🧠 Inspiração

Esse projeto nasceu da vontade de criar interfaces bonitas e reutilizáveis com foco em cores e tipografia. Perfeito para quem está começando ou precisa de uma base com estilo.

## 🧑‍💻 Autor

Feito com 💜 por Guilherme Kaynam


>>>>>>> abba1801464d98cf31f134744210f9d7b5fe27fa
