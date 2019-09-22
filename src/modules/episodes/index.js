const {gql} = require('apollo-server');

const typeDefs = gql `
  extend type Query{
    episodes(page: Int!): [Episodes!]!
  }

  type Episodes{
    id: String!
    title: String!
    episode_name: String!
    poster: String!
    date: String!
    quality: String!
    sinopsis: String!
  }
`;

const resolvers = {
  Query:{
    episodes: async(_source , {page} , { dataSources }) =>{
      return dataSources.API.getLatestEpisodes(page)
        .then(doc => {
          return doc.episodes
        })
    } 
  }
};

module.exports = {
  typeDefs,
  resolvers,
}