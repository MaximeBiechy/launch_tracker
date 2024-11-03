# Launch Tracker

## Description

Launch Tracker est une application web full stack qui permet de répertorier tous les lancements de fusées en utilisant une API publique gratuite. L'application utilise une architecture Clean Architecture.

## Technologies Utilisées

- **Backend** : Node.js, Express
- **Frontend** : VueJs, Tailwind CSS
- **API** : Launch Library 2 API

## Installation

### Prérequis

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (si tu souhaites exécuter l'application localement sans Docker)

### Étapes d'Installation

1. **Clone le dépôt** :
   ```bash
   git clone https://github.com/MaximeBiechy/launch_tracker.git
   ```

2. **Accédez au répertoire du projet**

   Allez dans le répertoire cloné :

   ```bash
   cd launch_tracker
   ```
  
3. **Configurer les variables d'environnement**

   Renommez le fichier `.env.dist` en ̀`.env` à la racine du projet. Remplissez-le avec, par exemple :

   ```plaintext
   PORT=3000
   VUE_APP_API_URL=http://localhost:3000/api
   ```
  
4. **Construire et exécuter l'application avec Docker**

   Utilisez Docker Compose pour construire et exécuter l'application. Dans le terminal, exécutez :

   ```bash
   docker-compose up --build
   ```

   Cette commande va :

   - Construire les images Docker définie dans les `Dockerfile`.
   - Démarrer les conteneurs définis dans le fichier `docker-compose.yml`.

5. **Accéder à l'application**

   Une fois que les conteneurs sont en cours d'exécution, ouvrez votre navigateur web et accédez à :

   ```plaintext
   http://localhost:8080
   ```

   Cela affichera votre application de suivi des lancements de fusées.
