Voici une reformulation complète du TP, en intégrant React Native, Expo, SQLite et les cinq plugins, avec une approche professionnelle et pédagogique.

# TP : Conception et développement d'une application mobile de géolocalisation et d'assistance urbaine – GeoConnect

[Nearby places finder app by Sardor Abdujalolov on Dribbble](https://images.openai.com/static-rsc-4/lCamJyhDOfBVEVF_V531m9k_H8iSslgaYeHXreNfuXP9INEoR1Iy985KrA0dw_mDyfujxjFzDjE_4b0f4O7I6mJZOpWFpa5VYTteUxwzQBE5Kss2xQn61em3s3WGy_s4rFIqpJ6eUPMnqLTblcGr1X067ocffwXGM6cew_zDg1s?purpose=inline)

[Fire Shield – Instant Fire Reporting App UI by ME UI/UX Designer on Dribbble](https://images.openai.com/static-rsc-4/1kYi0WmDiIgV-bKBpXirWYC0RV5KeeLvh7o3n8jUhzFlCZlJuE4k-X-s7eIRQfTey-EpkRmHcmIpYIOcueKplmJ86RZOmT4Jkyn8uG-NDdhzENXTWo_3wO8kkeUxqqpYhhb6maK5T7I_ctuyyt1wZytZXmqOXiZzA7MUaBsiVVI?purpose=inline)

[Life360 | Family Tracking App | Location Sharing & Family Safety](https://images.openai.com/static-rsc-4/qM3BQG7ny7fAojha_gkwDQk6vBiG1pgKOqhqsOb0IUFGW3IwVCehIB-TG4EAhv4Ct3Ofz5klQE6UHpDGrPqsFS92jGwKNmgZyN0_sVeRsgrCoN6MBfoFbbBheLIsgfqspFPV8LrDWv0CT50WseIHXA0tZYAzFJR8tZ8B_MGXWXc?purpose=inline)

14

React Native

Expo

TypeScript

SQLite

OpenStreetMap

## 1. Contexte général

La localisation géographique est devenue un élément essentiel dans le développement des applications mobiles modernes. Elle permet notamment de faciliter les déplacements, de retrouver des services à proximité, de partager sa position et de signaler des situations nécessitant une intervention.

Dans ce contexte, le présent TP consiste à concevoir et développer GeoConnect, une application mobile de géolocalisation et d'assistance urbaine.

L'application permettra aux utilisateurs de connaître leur position géographique, de rechercher des services à proximité, de partager leur position avec leurs proches et de signaler des incidents géolocalisés.

Le projet sera développé avec React Native et Expo. La gestion des données locales sera assurée par SQLite afin de permettre une utilisation hors connexion.

## 2. Objectif général

Concevoir et développer une application mobile multiplateforme exploitant les fonctionnalités natives d'un smartphone, notamment la géolocalisation GPS, la cartographie interactive, les notifications, la caméra et l'exécution de tâches en arrière-plan.

## 3. Objectifs spécifiques

À la fin de ce TP, l'étudiant devra être capable de :

1. Développer une application mobile avec React Native et Expo.
2. Exploiter les coordonnées GPS d'un appareil mobile.
3. Intégrer une carte interactive dans une application mobile.
4. Rechercher des services géographiques à proximité.
5. Manipuler une base de données SQLite.
6. Utiliser les notifications locales et push.
7. Exploiter la caméra et la galerie d'un smartphone.
8. Effectuer certaines tâches en arrière-plan.
9. Mettre en place une architecture permettant le fonctionnement hors connexion.

## 4. Technologies et plugins imposés

Les bibliothèques suivantes devront être utilisées durant le développement.

| Technologie          | Rôle dans le projet                      |
| -------------------- | ---------------------------------------- |
| `expo-location`      | Récupération et suivi de la position GPS |
| `react-native-maps`  | Affichage de la carte interactive        |
| `expo-notifications` | Gestion des notifications                |
| `expo-image-picker`  | Prise et sélection de photos             |
| `expo-task-manager`  | Exécution des tâches en arrière-plan     |
| `expo-sqlite`        | Stockage et gestion des données locales  |

Technologies complémentaires :

- Expo Router : navigation entre les écrans.
- TypeScript : typage et structuration du code.
- NativeWind : conception de l'interface.
- OpenStreetMap : données cartographiques.
- Overpass API : recherche de points d'intérêt géographiques.

## 5. Description fonctionnelle

L'application devra comporter les modules suivants.

### Module 1 : Gestion des utilisateurs

Ce module permettra à l'utilisateur de :

- Créer un compte.
- Se connecter.
- Consulter et modifier son profil.
- Gérer ses préférences.

Les informations nécessaires seront enregistrées dans SQLite. Pour une véritable authentification sécurisée, une API distante sera nécessaire.

### Module 2 : Géolocalisation et cartographie

Ce module constitue le cœur de l'application.

Fonctionnalités attendues :

- Récupérer la position actuelle de l'utilisateur.
- Afficher sa position sur une carte.
- Actualiser sa position lorsqu'il se déplace.
- Afficher les coordonnées géographiques.
- Rechercher les lieux situés autour de lui.
- Afficher les distances entre l'utilisateur et les lieux recherchés.

### Module 3 : Recherche des services à proximité

L'utilisateur pourra rechercher différents services :

- Hôpitaux et centres de santé.
- Pharmacies.
- Commissariats.
- Stations-service.
- Restaurants.
- Distributeurs automatiques.

Les résultats seront affichés sur la carte et dans une liste, avec leurs informations géographiques et leur distance par rapport à l'utilisateur.

### Module 4 : Partage de position

L'application permettra :

- De partager sa position géographique.
- De définir une durée de partage.
- De consulter les positions partagées avec soi.

Le partage entre plusieurs appareils nécessitera une API ou un serveur distant.

### Module 5 : Signalement des incidents

L'utilisateur pourra signaler différents types d'incidents :

- Accident de circulation.
- Embouteillage.
- Incendie.
- Danger sur la voie publique.
- Situation d'urgence.

Chaque signalement devra comporter :

- Un type d'incident.
- Une description.
- Une photographie facultative.
- Une position GPS.
- Une date de création.

Les signalements seront enregistrés localement dans SQLite.

### Module 6 : Notifications et alertes

L'application devra pouvoir :

- Envoyer une notification après un signalement.
- Informer l'utilisateur des alertes importantes.
- Signaler certains événements à proximité.
- Notifier l'utilisateur des changements concernant ses partages de position.

Les alertes entre plusieurs utilisateurs nécessiteront un mécanisme de communication distant.

## 6. Modélisation de la base de données SQLite

La base de données devra comporter au minimum les tables suivantes :

| Table              | Description                               |
| ------------------ | ----------------------------------------- |
| `users`            | Informations des utilisateurs             |
| `favorites`        | Services enregistrés en favoris           |
| `locations`        | Historique des positions GPS              |
| `reports`          | Signalements d'incidents                  |
| `settings`         | Préférences de l'application              |
| `shared_locations` | Informations sur les partages de position |

L'étudiant devra réaliser :

- La création de la base de données.
- La création des tables.
- Les relations entre les tables lorsque nécessaire.
- Les opérations CRUD (Create, Read, Update, Delete).
- La gestion des erreurs.
- La persistance des données après fermeture de l'application.

## 7. Contraintes techniques

Le développement devra respecter les contraintes suivantes :

- Utilisation obligatoire de React Native avec Expo.
- Utilisation de TypeScript.
- Utilisation des cinq plugins imposés.
- Utilisation de SQLite comme stockage local principal.
- Gestion des permissions GPS, caméra et notifications.
- Interface ergonomique et adaptée aux différentes tailles d'écran.
- Gestion des erreurs et des situations sans connexion Internet.
- Respect de la confidentialité des données de localisation.
- Possibilité de conserver les signalements hors connexion.

## 8. Découpage du travail

1. Phase 1 – Initialisation

   Création du projet Expo, configuration de TypeScript, installation des dépendances et organisation des dossiers.
2. Phase 2 – Base de données

   Configuration de SQLite, création des tables et implémentation des opérations CRUD.
3. Phase 3 – Géolocalisation

   Gestion des permissions, récupération des coordonnées GPS et suivi de la position.
4. Phase 4 – Cartographie

   Intégration de la carte, affichage des marqueurs et recherche des services proches.
5. Phase 5 – Fonctionnalités natives

   Intégration des notifications, de la caméra et des tâches en arrière-plan.
6. Phase 6 – Fonctionnalités avancées

   Développement du partage de position, des signalements et de la gestion hors connexion.
7. Phase 7 – Tests et validation

   Tests fonctionnels, tests sur appareil physique, vérification de SQLite et validation des permissions.

## 9. Livrables attendus

À la fin du TP, chaque étudiant devra fournir :

1. Le code source complet de l'application.
2. Le fichier de configuration des dépendances.
3. Le script SQL de création de la base de données.
4. Une documentation technique présentant l'architecture.
5. Des captures d'écran des différentes fonctionnalités.
6. Une démonstration fonctionnelle sur un appareil mobile ou un émulateur.

## 10. Critères d'évaluation proposés

| Critère                               | Pondération |
| ------------------------------------- | ----------- |
| Architecture et organisation du code  | 10 %        |
| Interface utilisateur et ergonomie    | 10 %        |
| Géolocalisation GPS                   | 15 %        |
| Cartographie et recherche de services | 15 %        |
| Gestion SQLite et CRUD                | 20 %        |
| Utilisation des plugins natifs        | 15 %        |
| Tests et gestion des erreurs          | 10 %        |
| Documentation et présentation         | 5 %         |
| Total                                 | 100 %       |

## 11. Travail supplémentaire (facultatif)

Pour approfondir le projet, les étudiants pourront :

- Ajouter un système de synchronisation entre SQLite et une API distante.
- Mettre en place un système de géofencing.
- Ajouter le calcul d'itinéraires.
- Développer un système de classement des services selon leur distance.
- Ajouter une fonctionnalité de recherche avec filtres.
- Mettre en place un tableau de bord statistique des incidents.

Résultat final attendu : une application mobile fonctionnelle, capable d'exploiter les ressources natives d'un smartphone, de gérer des données géographiques et de fonctionner en mode hors connexion.

Ce TP permettra de mettre en pratique plusieurs notions importantes de l'architecture mobile : gestion des permissions, accès aux ressources matérielles, persistance locale, API géographiques, navigation et exécution en arrière-plan.