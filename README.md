# 🚀 CryptoTracker

📌 **Description du projet**  
CryptoTracker est une application web permettant de suivre les cours des cryptomonnaies en temps réel, d’ajouter des cryptos en favoris, et de laisser des commentaires.  

---

## 📦 Fonctionnalités
✔ Affichage en temps réel des cryptomonnaies 📈 sous forme de polygones avec couleur graduante 🔷 vert si en hausse, rouge si en baisse
✔ **Taille dynamique des polygones** : plus grand si hausse importante 📈, plus petit si baisse 📉  
✔ Recherche et tri des cryptos 🔍  
✔ Page de détails avec description et évolution du prix 📊  
✔ Système d’authentification utilisateur 🔐  
✔ Ajout de cryptos en favoris ⭐  
✔ Ajout de commentaires sur chaque crypto 💬  
✔ Barre de rafraîchissement automatique qui met à jour les cryptos toutes les 30 sec ⏳

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
git clone https://github.com/matpleb/CryptoTracker.git
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

