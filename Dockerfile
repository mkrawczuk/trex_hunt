# Make sure you have a Node image!
FROM node:12

WORKDIR /app

COPY package.json /app/package.json
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH

EXPOSE 3000:3000
CMD ["npm", "start"]
