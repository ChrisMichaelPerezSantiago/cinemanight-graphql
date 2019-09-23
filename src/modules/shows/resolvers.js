const resolvers = {
  Query: {
    series: async (_source, {page}, {dataSources}) => {
      return dataSources.API.getAllSeries(page)
        .then(doc => {
          return doc.series
        });
    },
    movies: async (_source, {page}, {dataSources}) => {
      return dataSources.API.getAllMovies(page)
        .then(doc => {
          return doc.movies
        });
    },
    episodes: async(_source , {page} , { dataSources }) =>{
      return dataSources.API.getLatestEpisodes(page)
        .then(doc => {
          return doc.episodes
        });
    },
    search: async(_source , {q} , { dataSources}) =>{
      return dataSources.API.search(q)
        .then(doc =>{
          return doc.content
        });
    }
  }
};

module.exports = resolvers;