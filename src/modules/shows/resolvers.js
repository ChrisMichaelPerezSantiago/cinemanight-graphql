const resolvers = {
  Search:{
    __resolveType(obj , context , info){
      // ...
    }
  },

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
    video_serie: async(_source , {id , eps} , { dataSources }) =>{
      return dataSources.API.getSeriesVideoContent(id , eps)
        .then(doc => {
          return doc.video_iframe
        });
    },
    video_movie: async(_source , {id} , { dataSources }) =>{
      return dataSources.API.getMoviesVideoContent(id)
        .then(doc => {
          return doc.video_iframe
        });
    },
    search: async(_source , {query} , { dataSources}) =>{
      return dataSources.API.search(query)
        .then(doc => {
          return doc.content;
        });
    },
    best_series: async(_source , _args , {dataSources}) =>{
      return dataSources.API.getBestSeriesRanked()
        .then(doc =>{
          return doc.ranked_series;
        });
    },
    best_movies: async(_source , _args , {dataSources}) =>{
      return dataSources.API.getBestMoviesRanked()
        .then(doc =>{
          return doc.ranked_movies;
        });
    }
  }
};

module.exports = resolvers;