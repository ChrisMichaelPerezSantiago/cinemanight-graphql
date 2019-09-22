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
};

module.exports = API;