FROM node
WORKDIR /usr/src
COPY . .
EXPOSE 4000
RUN npm i && npm run build
CMD ["npm", "start"]