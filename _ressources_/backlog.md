# 📌 Backlog du projet CryptoTracker

📅 **Durée** : 2 jours  
👨‍💻 **Développeur** : Mateusz Plebanek  
🎯 **Objectif** : Créer une application web permettant d’afficher les cours des cryptomonnaies sous **forme de polygones dynamiques**, de laisser des commentaires et de gérer des favoris avec un système d’authentification utilisateur.

---

## 🟢 Épic 1 : Affichage des Cryptos en Polygones
### **US01 - Affichage des cryptos sous forme de polygones**
💡 **En tant qu’utilisateur**, je veux voir une représentation graphique des cryptomonnaies sous forme de polygones dynamiques, affichant leur nom, prix et évolution, afin de visualiser instantanément les tendances du marché.
📌 **Critères d’acceptation** :
- [ ] Chaque cryptomonnaie est affichée dans **un polygone dynamique**
- [ ] **Le polygone est plus grand** si la crypto est en forte hausse, et plus petit en cas de baisse
- [ ] **Les couleurs des polygones changent** :
   - 🔴 **Rouge si la crypto est en baisse**
   - 🟢 **Vert si la crypto est en hausse**
- [ ] Les données des cryptos sont récupérées depuis **l’API CoinGecko**
- [ ] L’affichage est **responsive**
- [ ] Un **survol d’un polygone** affiche des infos supplémentaires
- [ ] Un **clic sur un polygone** ouvre une modale avec les détails de la crypto

---

## 🔵 Épic 2 : Interaction avec les Cryptos
### **US04 - Ajouter un commentaire sur une crypto**
💡 **En tant qu’utilisateur connecté**, je veux pouvoir poster un commentaire sur une cryptomonnaie pour donner mon avis.
📌 **Critères d’acceptation** :
- [ ] Formulaire avec **champ texte + bouton envoyer**
- [ ] Les commentaires sont enregistrés en **base de données**
- [ ] Les commentaires sont affichés en **temps réel**

### **US05 - Système de favoris**
💡 **En tant qu’utilisateur connecté**, je veux pouvoir ajouter des cryptos en favoris pour les retrouver plus tard.
📌 **Critères d’acceptation** :
- [ ] Bouton **"Ajouter aux favoris"** sur chaque crypto
- [ ] Liste des favoris accessible via une page dédiée
- [ ] Données stockées en **base de données**

---

## 🟠 Épic 3 : Gestion des Utilisateurs
### **US06 - Inscription et Connexion**
💡 **En tant qu’utilisateur**, je veux pouvoir créer un compte et me connecter pour accéder aux fonctionnalités avancées.
📌 **Critères d’acceptation** :
- [ ] Formulaire d’inscription avec **email, pseudo et mot de passe**
- [ ] Formulaire de connexion avec vérification des identifiants
- [ ] Stockage sécurisé avec **bcrypt + JWT**

### **US07 - Affichage des favoris de l’utilisateur**
💡 **En tant qu’utilisateur connecté**, je veux voir la liste des cryptos que j’ai ajoutées en favoris.
📌 **Critères d’acceptation** :
- [ ] Une page dédiée affiche mes favoris
- [ ] Option pour **supprimer une crypto des favoris**

---

## 🟣 Épic 4 : Expérience Utilisateur
### **US08 - Mode Dark/Light**
💡 **En tant qu’utilisateur**, je veux pouvoir passer en mode sombre pour améliorer le confort visuel.
📌 **Critères d’acceptation** :
- [ ] Bouton **"Dark/Light mode"** disponible
- [ ] Sauvegarde du mode préféré en **local storage**

### **US09 - Graphique d’évolution des prix**
💡 **En tant qu’utilisateur**, je veux voir un graphique affichant l’évolution du prix d’une crypto sur les derniers jours.
📌 **Critères d’acceptation** :
- [ ] Graphique interactif avec **Chart.js**
- [ ] Affichage sur la page de **détails de la crypto**

---

## 🟡 Épic 5 : Polygones Dynamiques
### **US10 - Taille dynamique des polygones**
💡 **En tant qu’utilisateur**, je veux que la taille des polygones varie en fonction des variations du marché afin d’avoir une visualisation intuitive.
📌 **Critères d’acceptation** :
- [ ] La taille du polygone est **proportionnelle à la variation** de la crypto

### **US11 - Animation des polygones au survol**
💡 **En tant qu’utilisateur**, je veux que les polygones réagissent lorsque je passe la souris dessus pour améliorer l’interactivité.
📌 **Critères d’acceptation** :
- [ ] Un **survol change l’opacité ou la taille** du polygone

---

## 🔶 Épic 6 : Rafraîchissement Auto
### **US12 - Rafraîchissement automatique des cryptos**
💡 **En tant qu’utilisateur**, je veux que les données des cryptos se mettent à jour automatiquement pour avoir les informations en temps réel.
📌 **Critères d’acceptation** :
- [ ] Une **barre de progression** affiche le temps avant le prochain rafraîchissement
- [ ] Les **données des cryptos sont mises à jour toutes les 30 secondes**

---

## 🚀 Récapitulatif des priorités
| **Priorité** | **User Story** | **Statut** |
|-------------|---------------|------------|
| 🔥 **Haute** | US01 - Affichage des cryptos en polygones | À faire |
| 🔥 **Haute** | US06 - Inscription & Connexion | À faire |
| 🔥 **Haute** | US05 - Ajouter aux favoris | À faire |
| ⚡ **Moyenne** | US04 - Ajouter un commentaire | À faire |
| ⚡ **Moyenne** | US07 - Liste des favoris | À faire |
| ⚡ **Moyenne** | US12 - Rafraîchissement automatique | À faire |
| 🎨 **Basse** | US08 - Mode Dark/Light | À faire |
| 🎨 **Basse** | US09 - Graphique d’évolution | À faire |
| 🎨 **Basse** | US10 - Taille dynamique des polygones | À faire |
| 🎨 **Basse** | US11 - Animation des polygones au survol | À faire |




