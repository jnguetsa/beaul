# CAHIER DES CHARGES

## Projet GeoConnect --- Application mobile de géolocalisation et d'assistance urbaine

**Version :** 1.0\
**Date :** Novembre 2026\
**Plateforme cible :** Android et iOS\
**Technologies principales :** React Native, Expo, TypeScript et SQLite

------------------------------------------------------------------------

## 1. Présentation du projet

### 1.1 Contexte

La géolocalisation mobile permet de faciliter l'accès aux services de
proximité, d'améliorer l'orientation des usagers et de partager des
informations utiles sur leur environnement. GeoConnect répond à ces
besoins en proposant une application mobile qui exploite le GPS d'un
smartphone et des données géographiques pour aider les utilisateurs à
trouver des services, partager leur position et signaler des incidents.

### 1.2 Définition du projet

GeoConnect est une application mobile d'assistance urbaine. Elle permet
à un utilisateur de consulter sa position sur une carte, de rechercher
des points d'intérêt à proximité, d'enregistrer des lieux favoris, de
créer des signalements géolocalisés et de gérer le partage temporaire de
sa position.

L'application adopte une approche **offline-first** : les données utiles
sont d'abord enregistrées localement dans SQLite. Les fonctionnalités
nécessitant une communication entre plusieurs appareils ou l'accès à des
données géographiques distantes requièrent une connexion Internet.

### 1.3 Objectif général

Concevoir et développer une application mobile multiplateforme
permettant d'exploiter les fonctionnalités de géolocalisation d'un
smartphone et de fournir des services d'assistance urbaine, avec une
gestion locale des données.

### 1.4 Objectifs spécifiques

-   Récupérer et afficher la position géographique de l'utilisateur.
-   Intégrer une carte interactive.
-   Rechercher des services et points d'intérêt autour de l'utilisateur.
-   Calculer ou afficher la distance entre l'utilisateur et un lieu.
-   Enregistrer et gérer des lieux favoris.
-   Créer des signalements associés à une position GPS et, si
    nécessaire, à une photographie.
-   Conserver les données essentielles sur l'appareil avec SQLite.
-   Gérer les permissions natives du smartphone.
-   Mettre en place des notifications et des tâches de localisation en
    arrière-plan lorsque le système le permet.
-   Prévoir une évolution vers la synchronisation avec un serveur
    distant.

------------------------------------------------------------------------

## 2. Périmètre du projet

### 2.1 Fonctionnalités incluses

La première version de GeoConnect couvre les modules suivants :

1.  Gestion du profil local de l'utilisateur.
2.  Géolocalisation et carte interactive.
3.  Recherche de services à proximité.
4.  Gestion des favoris.
5.  Historique des positions, selon les préférences de l'utilisateur.
6.  Création et consultation de signalements.
7.  Notifications locales.
8.  Partage de position, sous réserve d'un service distant.
9.  Stockage local et consultation hors connexion des données déjà
    enregistrées.

### 2.2 Fonctionnalités exclues de la première version

Les éléments suivants ne sont pas obligatoires pour la première
livraison :

-   Une plateforme web d'administration.
-   Un système de paiement.
-   Une messagerie instantanée complète.
-   Un service d'intervention d'urgence garanti.
-   Une synchronisation multi-appareils entièrement automatisée.
-   Une modération avancée des signalements.

Ces fonctionnalités pourront être ajoutées dans une version ultérieure.

### 2.3 Public cible

-   Habitants d'une ville souhaitant trouver des services proches.
-   Personnes se déplaçant dans un quartier ou une ville qu'elles
    connaissent peu.
-   Utilisateurs souhaitant signaler un incident localisé.
-   Personnes souhaitant partager temporairement leur position avec un
    proche.

------------------------------------------------------------------------

## 3. Environnement technique

### 3.1 Technologies imposées

  -----------------------------------------------------------------------
  Technologie / bibliothèque          Rôle
  ----------------------------------- -----------------------------------
  React Native                        Développement de l'application
                                      mobile

  Expo                                Environnement et outils de
                                      développement

  TypeScript                          Typage et fiabilité du code

  `expo-location`                     Accès à la position GPS et suivi de
                                      localisation

  `react-native-maps`                 Affichage et interaction avec la
                                      carte

  `expo-notifications`                Gestion des notifications

  `expo-image-picker`                 Sélection de photos et accès à la
                                      caméra selon la configuration

  `expo-task-manager`                 Déclaration et exécution de tâches
                                      en arrière-plan

  `expo-sqlite`                       Base de données locale SQLite

  Expo Router                         Navigation entre les écrans

  NativeWind (facultatif)             Mise en forme de l'interface
  -----------------------------------------------------------------------

### 3.2 Cartographie et données géographiques

OpenStreetMap pourra être utilisé comme source de données
cartographiques. Overpass API pourra servir à rechercher des points
d'intérêt tels que les pharmacies, hôpitaux, restaurants ou
stations-service.

Il est important de distinguer les rôles :

-   `react-native-maps` est la bibliothèque d'affichage de la carte.
-   OpenStreetMap est une source de données cartographiques.
-   Overpass API est un service permettant d'interroger certaines
    données OpenStreetMap.
-   `expo-location` fournit la position GPS du smartphone.

L'utilisation d'un fournisseur de tuiles cartographiques ou d'un service
de recherche doit respecter ses conditions d'utilisation, ses limites de
requêtes et ses exigences d'attribution. Pour une utilisation en
production, un fournisseur adapté ou une infrastructure dédiée pourra
être nécessaire.

### 3.3 Environnement de développement

-   Node.js et npm.
-   Expo CLI via `npx expo`.
-   Visual Studio Code ou IntelliJ IDEA.
-   Android Studio et/ou un appareil Android physique pour les tests.
-   Xcode pour les tests iOS sur macOS.
-   Git pour le suivi des versions.

### 3.4 Installation indicative des dépendances

``` bash
npx expo install expo-location
npx expo install react-native-maps
npx expo install expo-notifications
npx expo install expo-image-picker
npx expo install expo-task-manager
npx expo install expo-sqlite
```

Les versions doivent être compatibles avec la version d'Expo utilisée.
Les configurations natives et les permissions devront être vérifiées
dans la documentation officielle avant la compilation.

------------------------------------------------------------------------

## 4. Description détaillée des besoins fonctionnels

### 4.1 Module A --- Profil utilisateur

**Objectif :** permettre à l'utilisateur de disposer d'un profil local
pour personnaliser son expérience.

Fonctionnalités :

-   Créer un profil local avec un nom ou pseudonyme.
-   Modifier les informations du profil.
-   Consulter les paramètres de confidentialité.
-   Choisir les préférences relatives à l'historique de localisation.

**Données principales :** identifiant local, nom, adresse e-mail
facultative, date de création et préférences.

**Remarque :** un profil local ne constitue pas une authentification
sécurisée entre plusieurs appareils. Une véritable connexion avec compte
distant nécessitera un backend.

### 4.2 Module B --- Géolocalisation

**Objectif :** récupérer et exploiter la position géographique du
smartphone.

Fonctionnalités :

-   Demander l'autorisation d'accès à la localisation.
-   Récupérer la latitude et la longitude.
-   Afficher la position actuelle sur la carte.
-   Actualiser la position lorsque l'utilisateur se déplace.
-   Afficher la précision GPS lorsque cette information est disponible.
-   Gérer les cas où le GPS est désactivé ou l'autorisation refusée.
-   Permettre à l'utilisateur d'activer ou de désactiver l'historique de
    ses positions.

**Règles de gestion :**

-   La localisation ne doit être demandée que lorsqu'une fonctionnalité
    en a besoin.
-   L'utilisateur doit être informé de la raison de la demande
    d'autorisation.
-   L'historique ne doit pas être conservé sans nécessité et sans
    information claire.
-   Les tâches en arrière-plan doivent être désactivables par
    l'utilisateur.
-   Le fonctionnement en arrière-plan dépend des autorisations, de la
    configuration native et des restrictions Android/iOS.

### 4.3 Module C --- Carte interactive

**Objectif :** visualiser la position de l'utilisateur et les points
d'intérêt.

Fonctionnalités :

-   Afficher une carte centrée sur la position actuelle.
-   Afficher un marqueur représentant l'utilisateur.
-   Afficher les marqueurs des lieux recherchés.
-   Permettre le zoom et le déplacement sur la carte.
-   Afficher une fiche descriptive lorsqu'un marqueur est sélectionné.
-   Recentrer la carte sur la position actuelle.

**Informations d'un lieu :**

-   Nom.
-   Catégorie.
-   Latitude et longitude.
-   Adresse ou description, si disponible.
-   Distance par rapport à l'utilisateur, si calculable.
-   Source et date de récupération des informations.

### 4.4 Module D --- Recherche de services à proximité

**Objectif :** permettre à l'utilisateur de trouver des services autour
de sa position ou d'un emplacement choisi.

Catégories minimales :

-   Hôpitaux et centres de santé.
-   Pharmacies.
-   Commissariats.
-   Stations-service.
-   Restaurants.
-   Distributeurs automatiques.

Fonctionnalités :

-   Choisir une catégorie.
-   Rechercher les lieux à proximité.
-   Afficher les résultats sur la carte et sous forme de liste.
-   Trier les résultats par distance lorsque les coordonnées sont
    disponibles.
-   Consulter les détails d'un lieu.
-   Gérer les erreurs de réseau et l'absence de résultats.

**Règle de fonctionnement hors connexion :** les résultats déjà
enregistrés dans les favoris ou dans le cache local restent
consultables. Une nouvelle recherche distante nécessite généralement une
connexion Internet.

### 4.5 Module E --- Favoris

**Objectif :** permettre à l'utilisateur de sauvegarder des lieux
utiles.

Fonctionnalités :

-   Ajouter un lieu aux favoris.
-   Consulter la liste des favoris.
-   Ouvrir un favori sur la carte.
-   Supprimer un favori.
-   Éviter les doublons pour un même lieu.

Les favoris doivent rester disponibles hors connexion après leur
enregistrement.

### 4.6 Module F --- Signalements d'incidents

**Objectif :** permettre à l'utilisateur d'enregistrer un incident avec
sa position géographique.

Types d'incidents proposés :

-   Accident de circulation.
-   Embouteillage.
-   Incendie.
-   Danger sur la voie publique.
-   Infrastructure endommagée.
-   Autre incident.

Informations obligatoires :

-   Type d'incident.
-   Description.
-   Latitude.
-   Longitude.
-   Date et heure de création.

Informations facultatives :

-   Photographie.
-   Adresse ou indication complémentaire.

Fonctionnalités :

-   Créer un signalement.
-   Ajouter une photo depuis la caméra ou la galerie.
-   Associer automatiquement la position actuelle, avec accord de
    l'utilisateur.
-   Enregistrer le signalement dans SQLite.
-   Consulter les signalements enregistrés sur l'appareil.
-   Modifier ou supprimer un signalement local tant qu'il n'a pas été
    transmis à un service distant.

**Important :** dans la première version locale, un signalement
enregistré sur un téléphone n'est pas automatiquement visible par les
autres utilisateurs. Sa diffusion nécessitera une API ou un serveur.

### 4.7 Module G --- Notifications

**Objectif :** informer l'utilisateur de certains événements.

Fonctionnalités minimales :

-   Afficher une notification locale après la création d'un signalement,
    si cela est pertinent.
-   Programmer des rappels locaux, si nécessaire.
-   Gérer l'autorisation de notification.
-   Permettre à l'utilisateur de désactiver les notifications.

Les notifications entre utilisateurs ou déclenchées par des incidents
publiés à distance nécessitent un backend et un mécanisme de diffusion.

### 4.8 Module H --- Partage de position

**Objectif :** permettre à l'utilisateur de partager temporairement sa
position avec un proche.

Fonctionnalités attendues dans la version connectée :

-   Démarrer un partage.
-   Choisir une durée de partage.
-   Arrêter le partage à tout moment.
-   Consulter les partages actifs.
-   Informer clairement l'utilisateur de l'état du partage.

**Dépendance technique :** cette fonctionnalité nécessite un serveur ou
une API capable de transmettre les positions entre appareils. SQLite
seul ne permet pas le partage en temps réel entre utilisateurs.

### 4.9 Module I --- Historique et paramètres

Fonctionnalités :

-   Consulter l'historique local des positions lorsque cette option est
    activée.
-   Supprimer l'historique.
-   Configurer les préférences de notifications.
-   Gérer les autorisations et préférences de confidentialité.
-   Consulter les informations de version de l'application.

------------------------------------------------------------------------

## 5. Exigences relatives à la base de données SQLite

### 5.1 Principes

SQLite constitue le stockage local principal de l'application. La base
doit être créée et initialisée au premier lancement, puis réutilisée aux
lancements suivants.

Les opérations d'accès aux données doivent être centralisées dans une
couche dédiée afin de séparer la logique métier des composants
d'interface.

### 5.2 Tables minimales proposées

| Table | Champs indicatifs | Description |
|-------|-------------------|-------------|
| `users` | `id`, `username`, `email`, `created_at` | Profil local |
| `favorites` | `id`, `name`, `category`, `latitude`, `longitude`, `created_at` | Lieux favoris |
| `locations` | `id`, `latitude`, `longitude`, `accuracy`, `recorded_at` | Historique GPS |
| `reports` | `id`, `type`, `description`, `photo_uri`, `latitude`, `longitude`, `status`, `created_at` | Signalements |
| `settings` | `id`, `key`, `value` | Préférences |
| `shared_locations` | `id`, `started_at`, `expires_at`, `is_active` | Métadonnées locales de partage |
Les champs pourront être ajustés lors de la conception détaillée. Les
données de partage ne deviennent réellement accessibles à un autre
appareil qu'avec un service distant.

### 5.3 Opérations attendues

Pour les entités concernées, l'application devra proposer les opérations
CRUD :

-   **Create :** créer un enregistrement.
-   **Read :** consulter un ou plusieurs enregistrements.
-   **Update :** modifier un enregistrement.
-   **Delete :** supprimer un enregistrement.

### 5.4 Contraintes de données

-   Utiliser des clés primaires.
-   Définir les champs obligatoires.
-   Vérifier les coordonnées géographiques.
-   Utiliser des requêtes paramétrées.
-   Gérer les erreurs de base de données.
-   Prévoir une stratégie de migration du schéma.
-   Éviter de stocker inutilement des données personnelles.
-   Stocker les URI des photos plutôt que les fichiers binaires dans la
    base, sauf besoin particulier.

------------------------------------------------------------------------

## 6. Règles de gestion générales

1.  L'application doit expliquer pourquoi une permission est demandée.
2.  Le refus d'une permission ne doit pas provoquer le plantage de
    l'application.
3.  Une position GPS invalide ne doit pas être enregistrée.
4.  Les coordonnées doivent être comprises entre -90 et 90 pour la
    latitude et entre -180 et 180 pour la longitude.
5.  Un favori doit comporter au minimum un nom et des coordonnées
    valides.
6.  Un signalement doit comporter un type, une description et une
    position.
7.  L'utilisateur doit pouvoir supprimer ses données locales.
8.  Les données déjà enregistrées doivent rester consultables sans
    connexion Internet.
9.  Les fonctions dépendantes d'Internet doivent présenter un message
    explicite lorsque le réseau est indisponible.
10. Le partage de position doit être volontaire, limité dans le temps et
    révocable.
11. L'application ne doit pas présenter les signalements comme des
    alertes officielles ou comme une garantie d'intervention des
    secours.

------------------------------------------------------------------------

## 7. Exigences non fonctionnelles

### 7.1 Ergonomie et expérience utilisateur

-   Interface moderne, épurée et cohérente.
-   Navigation simple et compréhensible.
-   Contrastes suffisants et textes lisibles.
-   Retours visuels lors des chargements et des erreurs.
-   Adaptation aux différentes tailles d'écran.
-   Formulaires avec validation des champs.

### 7.2 Performance

-   Limiter les mises à jour GPS inutiles.
-   Éviter les requêtes réseau répétitives.
-   Charger les résultats progressivement lorsque nécessaire.
-   Utiliser des opérations SQLite efficaces.
-   Éviter de bloquer l'interface pendant les traitements.

### 7.3 Sécurité et confidentialité

-   Demander uniquement les permissions nécessaires.
-   Informer l'utilisateur de la collecte et de l'utilisation de sa
    position.
-   Permettre la désactivation du suivi.
-   Limiter la conservation de l'historique.
-   Ne pas intégrer de secrets ou de clés privées dans le code client.
-   Prévoir un mécanisme sécurisé si une API distante est ajoutée.
-   Ne jamais partager une position sans action ou consentement
    explicite.

### 7.4 Compatibilité

La cible principale est Android. La compatibilité iOS sera prise en
compte dans la mesure des possibilités des bibliothèques et des
configurations natives. Les fonctionnalités en arrière-plan devront être
testées sur des appareils physiques.

------------------------------------------------------------------------

## 8. Architecture logicielle proposée

L'application devra adopter une architecture modulaire séparant
l'interface, la logique métier, les accès aux données et les services
externes.

### 8.1 Organisation indicative des dossiers

``` text
GeoConnect/
├── app/
│   ├── (auth)/
│   ├── (tabs)/
│   ├── reports/
│   └── _layout.tsx
│
├── components/
│   ├── Map/
│   ├── Service/
│   ├── Report/
│   └── Common/
│
├── database/
│   ├── migrations/
│   ├── schema.ts
│   └── database.ts
│
├── services/
│   ├── location.service.ts
│   ├── map.service.ts
│   ├── places.service.ts
│   ├── notification.service.ts
│   ├── image.service.ts
│   └── report.service.ts
│
├── repositories/
│   ├── favorite.repository.ts
│   ├── location.repository.ts
│   └── report.repository.ts
│
├── hooks/
├── types/
├── constants/
└── assets/
```

### 8.2 Principes d'architecture

-   Les composants d'interface ne doivent pas contenir directement
    toutes les requêtes SQL.
-   Les repositories centralisent les opérations de persistance.
-   Les services encapsulent les fonctionnalités GPS, cartographiques,
    réseau et notifications.
-   Les types TypeScript décrivent les données manipulées.
-   Les erreurs doivent être traitées à chaque frontière entre modules.

------------------------------------------------------------------------

## 9. Écrans de l'application

Les écrans minimums attendus sont :

  Écran                     Contenu principal
  ------------------------- ---------------------------------------------
  Écran de démarrage        Logo et initialisation
  Accueil                   Résumé, accès rapides et position
  Carte                     Carte interactive et position actuelle
  Recherche                 Catégories et résultats de proximité
  Détail d'un lieu          Informations et action favori
  Favoris                   Liste des lieux sauvegardés
  Création de signalement   Type, description, photo et position
  Mes signalements          Historique local des signalements
  Partage de position       Gestion des partages disponibles
  Profil et paramètres      Préférences, confidentialité et permissions

La navigation devra être cohérente et permettre de revenir facilement à
l'écran précédent.

------------------------------------------------------------------------

## 10. Plan de réalisation

Le projet sera développé par étapes afin de faciliter les tests et la
validation.

  -----------------------------------------------------------------------
  Phase                   Travaux à réaliser      Résultat attendu
  ----------------------- ----------------------- -----------------------
  1\. Initialisation      Création Expo,          Projet exécutable
                          TypeScript, dépendances 
                          et Git                  

  2\. Conception          Maquettes, navigation   Structure validée
                          et architecture         

  3\. SQLite              Schéma, initialisation  Persistance locale
                          et CRUD                 fonctionnelle

  4\. Géolocalisation     Permissions, position   Position GPS
                          et suivi                exploitable

  5\. Cartographie        Carte, marqueurs et     Carte interactive
                          fiches de lieux         

  6\. Recherche           Requêtes géographiques  Services proches
                          et filtres              affichés

  7\. Signalements        Formulaire, photo et    Signalements locaux
                          stockage                

  8\. Notifications       Permissions et          Notifications testées
                          notifications locales   

  9\. Arrière-plan        Tâches de localisation  Fonctionnement vérifié
                          compatibles             sur appareil

  10\. Validation         Tests, corrections et   Version livrable
                          documentation           
  -----------------------------------------------------------------------

Le partage de position entre appareils et la synchronisation distante
feront l'objet d'une phase complémentaire si un backend est disponible.

------------------------------------------------------------------------

## 11. Stratégie de tests et critères d'acceptation

### 11.1 Tests fonctionnels

-   L'application démarre sans erreur.
-   L'utilisateur peut accorder ou refuser la permission GPS.
-   La position s'affiche lorsque le GPS est disponible.
-   Les marqueurs des lieux recherchés apparaissent correctement.
-   Les favoris peuvent être ajoutés, consultés et supprimés.
-   Un signalement peut être créé et retrouvé après fermeture puis
    réouverture de l'application.
-   Une photo peut être associée à un signalement.
-   Les notifications autorisées sont reçues dans les conditions
    prévues.
-   Les données locales restent consultables hors connexion.

### 11.2 Tests de cas limites

-   Permission GPS refusée.
-   GPS désactivé.
-   Absence de connexion Internet.
-   Recherche sans résultat.
-   Coordonnées invalides.
-   Photo inaccessible ou supprimée.
-   Base de données indisponible ou erreur SQL.
-   Application interrompue pendant une opération.
-   Autorisation de notification refusée.

### 11.3 Critères d'acceptation

La première version sera considérée comme acceptable lorsque :

1.  Les écrans essentiels sont accessibles.
2.  La position GPS peut être récupérée avec autorisation.
3.  La carte affiche la position de l'utilisateur.
4.  Une recherche de services peut être exécutée en ligne.
5.  Les favoris sont persistés dans SQLite.
6.  Les signalements sont enregistrés localement avec leurs coordonnées.
7.  Les fonctionnalités principales ne provoquent pas de plantage en cas
    de permission refusée ou de réseau indisponible.
8.  Une démonstration sur appareil ou émulateur est possible.

------------------------------------------------------------------------

## 12. Livrables attendus

Le développeur devra remettre :

-   Le code source complet du projet.
-   Le fichier `package.json` et les fichiers de configuration Expo.
-   Le schéma de la base SQLite et les migrations éventuelles.
-   Une documentation d'installation et d'exécution.
-   Une documentation technique présentant l'architecture.
-   Des captures d'écran des principaux écrans.
-   Un rapport de tests.
-   Une démonstration de l'application.

------------------------------------------------------------------------

## 13. Proposition de grille d'évaluation

  Critère                                    Pondération
  ---------------------------------------- -------------
  Architecture et organisation du code              10 %
  Interface et ergonomie                            10 %
  Géolocalisation GPS                               15 %
  Cartographie et recherche de proximité            15 %
  SQLite et opérations CRUD                         20 %
  Intégration des plugins natifs                    15 %
  Tests et gestion des erreurs                      10 %
  Documentation et présentation                      5 %
  **Total**                                    **100 %**

------------------------------------------------------------------------

## 14. Évolutions possibles

Après validation de la première version, GeoConnect pourra évoluer avec
:

-   Une API distante pour synchroniser les données.
-   Une authentification multi-utilisateur.
-   La diffusion des signalements entre utilisateurs.
-   Le partage de position en temps réel.
-   Un système de géofencing.
-   Le calcul d'itinéraires.
-   Un système de modération des signalements.
-   Un tableau de bord statistique.
-   Une interface d'administration.

------------------------------------------------------------------------

## 15. Conclusion

GeoConnect est un projet de développement mobile qui met en pratique
l'utilisation des ressources natives d'un smartphone et la gestion de
données géographiques. Il permet d'aborder la géolocalisation, la
cartographie, les notifications, l'accès aux images, les tâches en
arrière-plan et la persistance locale avec SQLite.

La première version privilégie une architecture **offline-first**, dans
laquelle les données locales restent disponibles sans connexion. Les
fonctionnalités impliquant plusieurs utilisateurs ou une diffusion en
temps réel seront ajoutées au moyen d'un service distant dans une
évolution ultérieure.

**Fin du cahier des charges.**
