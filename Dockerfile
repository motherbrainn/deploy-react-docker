FROM node:16 AS ui-build
WORKDIR /
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:16 AS server-build
WORKDIR /usr/src/app
ENV NODE_ENV='production'
COPY --from=ui-build /client/build ./client/build
COPY server/ ./server/
RUN cd server && npm install

EXPOSE 4000

CMD ["node", "./server/app.js"]