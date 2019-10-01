const {RESTDataSource} = require('apollo-datasource-rest');

class API extends RESTDataSource {
  constructor(){
    super();
    this.baseURL = 'https://cinemanight.chrismichael.now.sh/api/v1/';
  }

  async getLatestEpisodes(page){
    return this.get(`episodes/${page}`);
  }

  async getAllSeries(page){
    return this.get(`series/${page}`);
  }

  async getAllMovies(page){
    return this.get(`movies/${page}`);
  }

  async getSeriesVideoContent(id , eps){
    return this.get(`video_serie/${id}-${eps}`);
  }

  async getMoviesVideoContent(id){
    return this.get(`video_movie/${id}`);
  }

  async search(query){
    return this.get(`search/${query}`);
  }

  async getBestMoviesRanked(){
    return this.get(`best_movies`);
  }

  async getBestSeriesRanked(){
    return this.get(`best_series`);
  }
};

module.exports = API;