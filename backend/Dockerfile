# Use a imagem oficial do Node.js como base
FROM node:14

# Crie e defina o diretório de trabalho na imagem
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para a imagem
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte da aplicação para a imagem
COPY . .

# Exponha a porta que a aplicação Express.js está ouvindo
EXPOSE 3000

# Inicie a aplicação Express.js
CMD ["npm", "start"]
