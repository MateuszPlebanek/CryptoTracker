
# 🚀 CryptoTracker

📌 **Description du projet**  
CryptoTracker est une application web permettant de suivre les cours des cryptomonnaies en temps réel, d’ajouter des cryptos en favoris, et de laisser des commentaires.  

---

## 📦 Fonctionnalités
✔ Affichage des cryptos sous **forme d'hexagones dynamiques** 🔷
✔ Chaque hexagone affiche le **nom, prix, évolution** de la crypto 📊
✔ Taille et couleur des hexagones varient selon l'évolution de la crypto 🔺🔻
✔ Survol et clic sur un hexagone affichent plus d’infos 🖱️
✔ Recherche et tri des cryptos 🔍
✔ Page de détails avec description et évolution du prix 📊
✔ Système d'authentification utilisateur 🔐
✔ Ajout de cryptos en favoris ⭐
✔ Ajout de commentaires sur chaque crypto 💬
✔ Rafraîchissement automatique toutes les 30 secondes avec barre de progression 🔄
✔ Mode Dark/Light 🌙☀️
✔ Graphique d’évolution des prix 📈
✔ Header avec nom du site et icône utilisateur 🏠  
✔ Footer avec liens vers réseaux et contact 📧

---

## ⚙️ Technologies utilisées
- **Frontend** : React, Bootstrap, React Router, Chart.js, Clip-path CSS (pour les polygones) 
- **Backend** : Node.js, Express, MySQL, bcrypt, JWT  
- **Base de données** : MySQL  
- **API externe** : CoinGecko (données en temps réel)

---

## 🚀 Installation du projet

### 🔹 1️⃣ Cloner le repo
```bash
git clone https://github.com/MateuszPlebanek/CryptoTracker.git
cd CryptoTracker

### 2️⃣ **Installation des dépendances**  
```bash
cd frontend && npm install
cd ../backend && npm install
```
### 3️⃣ **Lancer le projet**  
```bash
cd frontend && npm run dev
cd ../backend && node server.js
```

## 📂 _ressources_
Le dossier `_ressources_` contient :
- **backlog.md** : Le backlog avec les User Stories et les Épics
- **wireframe.png** : Les maquettes de l'application
- **database.png** : Le modèle conceptuel de la base de données

---

## 📜 Auteur
**Mateusz Plebanek**


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
