FROM node:16-alpine
EXPOSE 9000
WORKDIR /test
COPY . .
RUN yarn install
# create a anonymous volume same as the -v anonymous-volume
# this can be used to lock some folder in the binding-volume play a role in
VOLUME [ "/test/node_modules" ]
CMD [ "node","./node_modules/live-server/live-server.js" ,"--port=9000" ,"."]