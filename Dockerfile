# Hapi 1: Zgjidh një imazh bazë të vogël dhe të sigurt me Node.js
FROM node:18-alpine

# Hapi 2: Përcakto folderin e punës brenda kontejnerit
WORKDIR /usr/src/app

# Hapi 3: Kopjo skedarët e varësive për të përfituar nga cache-imi i Docker-it
COPY package*.json ./

# Hapi 4: Instalo varësitë e projektit. Përdorim 'npm ci' për instalim të pastër dhe të shpejtë
RUN npm ci

# Hapi 5: Kopjo të gjithë skedarët e tjerë të aplikacionit
COPY . .

# Hapi 6: Ekspozo portën ku aplikacioni yt do të funksionojë
# Kjo nuk e hap portën, por shërben si dokumentacion për përdoruesit e imazhit
EXPOSE 8080

# Hapi 7: Përcakto komandën që do të ekzekutohet kur kontejneri të nisë
CMD [ "node", "scraping-test.spec.ts" ]