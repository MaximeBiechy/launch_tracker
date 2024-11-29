# Utiliser une image Node.js officielle
FROM node:20-alpine

# Créer le dossier de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Compiler le projet TypeScript
RUN npm run build

# Exposer le port de l'application
EXPOSE 3000

# Lancer l'application
CMD ["node", "dist/app/index.js"]
