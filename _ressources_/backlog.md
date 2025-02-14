# 📌 Backlog du projet CryptoTracker

📅 **Durée** : 2 jours  
👨‍💻 **Développeur** : Mateusz Plebanek  
🎯 **Objectif** : Créer une application web permettant d’afficher les cours des cryptomonnaies sous **forme d’hexagones dynamiques**, de laisser des commentaires et de gérer des favoris avec un système d’authentification utilisateur.

---

## 🟢 Épic 1 : Affichage des Cryptos en forme d’hexagones
### **US01 - Affichage des cryptos sous forme de d’hexagones**
💡 **En tant qu’utilisateur**, je veux voir une représentation graphique des cryptomonnaies sous forme d’hexagones dynamiques, affichant leur nom, prix et évolution, afin de visualiser instantanément les tendances du marché.
📌 **Critères d’acceptation** :
- [ ] Chaque cryptomonnaie est affichée dans **un hexagone dynamique**
- [ ] **L'hexagones est plus grand** si la crypto est en forte hausse, et plus petit en cas de baisse, la taille de l'hexagone est **proportionnelle à la variation** de la crypto
- [ ] **Les couleurs des hexagones changent** :
   - 🔴 **Rouge si la crypto est en baisse**
   - 🟢 **Vert si la crypto est en hausse**
- [ ] Les données des cryptos sont récupérées depuis **l’API CoinGecko**
- [ ] L’affichage est **responsive**
- [ ] Un **clic sur un hexagones** ouvre une modale avec les détails de la crypto
- [ ] 💡**En tant qu’utilisateur**, je veux que les polygones réagissent lorsque je passe la souris dessus pour améliorer l’interactivité

---

## 🟣 Épic 2 : Interface et Navigation
 **US02 - Header avec nom et icône utilisateur**
- [ ]💡 En tant qu'utilisateur, je veux voir un header avec le nom du site et une icône utilisateur, afin d'accéder facilement à la page de connexion.

### **US03 - Barre de recherche pour trouver une crypto**
💡 **En tant qu'utilisateur**, je veux rechercher une cryptomonnaie en tapant son nom dans une barre de recherche pour la retrouver rapidement.
📌 **Critères d'acceptation** :
- [ ]Une barre de recherche est présente dans le header (ou juste en dessous).
- [ ]En tapant au moins une lettre, une liste des cryptos correspondant s'affiche (auto-complétion).
- [ ]En cliquant sur une crypto dans la liste, une modale s'ouvre avec ses détails.
- [ ]La recherche est insensible à la casse.
- [ ]Le nom du site "CryptoTracker" est affiché à gauche.
- [ ]Une icône utilisateur est affichée à droite.
- [ ]Un clic sur l'icône utilisateur redirige vers une page de connexion.

### **US04 - Footer avec liens de contact et réseaux**
💡 **En tant qu'utilisateur** , je veux voir un footer contenant des liens vers les réseaux sociaux et une adresse de contact pour pouvoir obtenir plus d'informations ou contacter les développeurs.
📌 Critères d'acceptation :
 - [ ]Le pied de page est présent sur toutes les pages.
 - [ ]Il contient des liens vers X (Twitter) , email (contact) et éventuellement d'autres réseaux.
 - [ ]Les liens ouvrent une nouvelle page dans un nouvel onglet (target="_blank").
 - [ ]Le pied de page est responsive .

## 🟠 Épic 3 : Gestion des Utilisateurs
### **US05 - Inscription et Connexion**
💡 **En tant qu’utilisateur**, je veux pouvoir créer un compte et me connecter pour accéder aux fonctionnalités avancées.
📌 **Critères d’acceptation** :
- [ ] Formulaire d’inscription avec **email, pseudo et mot de passe**
- [ ] Formulaire de connexion avec vérification des identifiants
- [ ] Stockage sécurisé avec **bcrypt + JWT**


## 🔵 Épic 4 : Interaction avec les Cryptos
### **US06 - Ajouter un commentaire sur une crypto**
💡 **En tant qu’utilisateur connecté**, je veux pouvoir poster un commentaire sur une cryptomonnaie pour donner mon avis.
📌 **Critères d’acceptation** :
- [ ] Formulaire avec **champ texte + bouton envoyer**
- [ ] Les commentaires sont enregistrés en **base de données**
- [ ] Les commentaires sont affichés en **temps réel**

### **US07 - Système de favoris**
💡 **En tant qu’utilisateur connecté**, je veux pouvoir ajouter des cryptos en favoris pour les retrouver plus tard.
📌 **Critères d’acceptation** :
- [ ] Bouton **"Ajouter aux favoris"** sur chaque crypto
- [ ] Liste des favoris accessible via une page dédiée
- [ ] Données stockées en **base de données**
- [ ] Option pour **supprimer une crypto des favoris** 

---

### **US08 - Graphique d’évolution des prix**
💡 **En tant qu’utilisateur**, je veux voir un graphique affichant l’évolution du prix d’une crypto sur les derniers jours.
📌 **Critères d’acceptation** :
- [ ] Graphique interactif avec **Chart.js**
- [ ] Affichage sur la page de **détails de la crypto**

---

## 🟡 Épic 5 : Hexagones Dynamiques
### **US09 - Effets d’animation avancés sur les hexagones**
 📌 **Critères d’acceptation** :
- [ ] Un **survol change l’opacité** de l'hexagone

---

## 🔶 Épic 6 : Rafraîchissement Auto
### **US10 - Rafraîchissement automatique des cryptos**
💡 **En tant qu’utilisateur**, je veux que les données des cryptos se mettent à jour automatiquement pour avoir les informations en temps réel.
📌 **Critères d’acceptation** :
- [ ] Une **barre de progression** affiche le temps avant le prochain rafraîchissement
- [ ] Les **données des cryptos sont mises à jour toutes les 30 secondes**

---

## 🟣 Épic 7 : Expérience Utilisateur
### **US11 - Mode Dark/Light**
💡 **En tant qu’utilisateur**, je veux pouvoir passer en mode sombre pour améliorer le confort visuel.
📌 **Critères d’acceptation** :
- [ ] Bouton **"Dark/Light mode"** disponible
- [ ] Sauvegarde du mode préféré en **local storage**

## 🚀 Récapitulatif des priorités
| **Priorité** | **User Story** | **Statut** |
|-------------|---------------|------------|
| 🔥 **Haute** | US01 - Affichage des cryptos en forme d'hexagones | À faire |
| 🔥 **Haute** | US02 - Header avec nom et icône utilisateur | À faire |
| 🔥 **Haute** | US03 - Barre de recherche pour trouver une crypto | À faire |
| 🔥 **Haute** | US04 - Inscription & Connexion | À faire |
| 🔥 **Haute** | US05 - Inscription & Connexion | À faire |
| ⚡ **Moyenne** | US06 - Ajouter un commentaire | À faire |
| 🔥 **Haute** | US07 - Ajouter aux favoris | À faire |
| 🎨 **Basse** | US08 - Graphique d’évolution | À faire |
| 🎨 **Basse** | US09 - Effets d'animation avancées sur les hexagones | À faire |
| ⚡ **Moyenne** | US10 - Rafraîchissement automatique | À faire |
| 🎨 **Basse** | US11- Mode Dark/Light | À faire |




