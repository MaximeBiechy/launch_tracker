# Utilisez une image Node.js
FROM node:20-alpine

# Créer le dossier de l'application
WORKDIR /app

# Copier les fichiers de package
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Exposez le port utilisé par le serveur de développement
EXPOSE 8080

# Commande pour démarrer le serveur de développement
CMD ["npm", "run", "serve"]
