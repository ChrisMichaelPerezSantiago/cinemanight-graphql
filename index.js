const {ApolloServer} = require('apollo-server');
const API = require('./src/api/API.js');

const server = new ApolloServer({
  modules: [
    require('./src/modules/shows/index.js'),
  ],
  dataSources: () => ({
    API: new API()
  }),
  introspection: true,
  playground: true  
});

server.listen().then(({url}) =>{
  console.log(`🚀... Server started at ${url}`)
})