# 📌 Backlog du projet CryptoTracker

📅 **Durée** : 2 jours  
👨‍💻 **Développeur** : Mateusz Plebanek  
🎯 **Objectif** : Créer une application web permettant d’afficher les cours des cryptomonnaies, de laisser des commentaires et de gérer des favoris avec un système d’authentification utilisateur.

---

## **🟢 Épic 1 : Affichage des Cryptomonnaies**
### **US01 - Affichage de la liste des cryptos**  
💡 **En tant qu’utilisateur**, je veux voir une liste des cryptomonnaies avec leur prix actuel et leur évolution sur 24h, afin de suivre les tendances du marché.  
📌 **Critères d’acceptation** :  
- [ ] Affichage des cryptos avec **nom, prix, évolution 24h**  
- [ ] Données récupérées depuis **l’API CoinGecko**  
- [ ] Affichage responsive  

---

### **US02 - Recherche et tri des cryptos**  
💡 **En tant qu’utilisateur**, je veux rechercher une cryptomonnaie et trier la liste par prix, évolution, ou volume, afin de mieux analyser le marché.  
📌 **Critères d’acceptation** :  
- [ ] Champ de **recherche dynamique**  
- [ ] Boutons pour **trier par prix, volume, évolution**  

---

### **US03 - Page de détails d’une crypto**  
💡 **En tant qu’utilisateur**, je veux pouvoir cliquer sur une crypto et voir plus de détails sur sa valeur et son historique.  
📌 **Critères d’acceptation** :  
- [ ] Page contenant **nom, prix, évolution 24h, description complète**  
- [ ] Données récupérées via **l’API CoinGecko**  
- [ ] Navigation fluide avec **React Router**  

---

## **🔵 Épic 2 : Interaction avec les Cryptos**
### **US04 - Ajouter un commentaire sur une crypto**  
💡 **En tant qu’utilisateur connecté**, je veux pouvoir poster un commentaire sur une cryptomonnaie pour donner mon avis.  
📌 **Critères d’acceptation** :  
- [ ] Formulaire avec **champ texte + bouton envoyer**  
- [ ] Les commentaires sont enregistrés en **base de données**  
- [ ] Les commentaires sont affichés en **temps réel**  

---

### **US05 - Système de favoris**  
💡 **En tant qu’utilisateur connecté**, je veux pouvoir ajouter des cryptos en favoris pour les retrouver plus tard.  
📌 **Critères d’acceptation** :  
- [ ] Bouton **"Ajouter aux favoris"** sur chaque crypto  
- [ ] Liste des favoris accessible via une page dédiée  
- [ ] Données stockées en **base de données**  

---

## **🟠 Épic 3 : Gestion des Utilisateurs**
### **US06 - Inscription et Connexion**  
💡 **En tant qu’utilisateur**, je veux pouvoir créer un compte et me connecter pour accéder aux fonctionnalités avancées.  
📌 **Critères d’acceptation** :  
- [ ] Formulaire d’**inscription** avec **email, pseudo et mot de passe**  
- [ ] Formulaire de **connexion** avec vérification des identifiants  
- [ ] Stockage sécurisé avec **bcrypt + JWT**  

---

### **US07 - Affichage des favoris de l’utilisateur**  
💡 **En tant qu’utilisateur connecté**, je veux voir la liste des cryptos que j’ai ajoutées en favoris.  
📌 **Critères d’acceptation** :  
- [ ] Une page dédiée affiche mes favoris  
- [ ] Option pour **supprimer une crypto des favoris**  

---

## **🟣 Épic 4 : Améliorations et Expérience Utilisateur**
### **US08 - Mode Dark/Light**  
💡 **En tant qu’utilisateur**, je veux pouvoir passer en mode sombre pour améliorer le confort visuel.  
📌 **Critères d’acceptation** :  
- [ ] Bouton **"Dark/Light mode"** disponible  
- [ ] Sauvegarde du mode préféré en **local storage**  

---

### **US09 - Graphique d’évolution des prix**  
💡 **En tant qu’utilisateur**, je veux voir un graphique affichant l’évolution du prix d’une crypto sur les derniers jours.  
📌 **Critères d’acceptation** :  
- [ ] Graphique interactif avec **Chart.js**  
- [ ] Affichage sur la page de **détails de la crypto**  

---

## **🚀 Récapitulatif des priorités**
| **Priorité** | **User Story** | **Statut** |
|-------------|---------------|------------|
| 🔥 **Haute** | US01 - Liste des cryptos | À faire |
| 🔥 **Haute** | US02 - Recherche et tri | À faire |
| 🔥 **Haute** | US03 - Page de détails | À faire |
| 🔥 **Haute** | US06 - Inscription & Connexion | À faire |
| 🔥 **Haute** | US05 - Ajouter aux favoris | À faire |
| ⚡ **Moyenne** | US04 - Ajouter un commentaire | À faire |
| ⚡ **Moyenne** | US07 - Liste des favoris | À faire |
| ⚡ **Moyenne** | US09 - Graphique d’évolution | À faire |
| 🎨 **Basse** | US08 - Mode Dark/Light | À faire |



