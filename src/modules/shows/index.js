const resolvers = require('./resolvers.js');
const {gql} = require('apollo-server');

const typeDefs = gql `
  extend type Query{
    series(page: Int!): [Series!]!
    movies(page: Int!): [Movies!]!
    episodes(page: Int!): [Episodes!]!
    video_serie(id: String! , eps: String!): [VideoIframe!]!
    video_movie(id: String!): [VideoIframe!]!
    search(query: String!): [Search!]!
    best_series: [RankedSeries!]!
    best_movies: [RankedMovies!]!
  }

  union Search = Series | Movies

  type Series{
    id: String!
    title: String!
    sinopsis: String!
    poster: String!
    rating: String!
    year: String!
    extra: [SerieExtra!]!
  }

  type Movies{
    id: String!
    title: String!
    sinopsis: String!
    poster: String!
    rating: String!
    quality: String!
    year: String!
    extra: [MovieExtra!]!
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

  type RankedMovies{ 
    id: String!
    title: String!
    type: String!
    poster: String!
    ranking: String!
    rating: String!
    extra: [MovieExtra!]! 
  }

  type RankedSeries{ 
    id: String!
    title: String!
    type: String!
    poster: String!
    ranking: String!
    rating: String!
    extra: [SerieExtra!]!
  }


  type VideoIframe{
    iframe: Iframe
  }

  type Iframe{
    option: Int 
    video_iframe: String
  }

  type SerieExtra {
    channel: String!
    first_air_date: String!
    last_air_date: String!
    total_seasons: String!
    total_episodes: String
    season_list: [SeasonList!] !
    cast_members: CastMembers!
    similar_series: [SimilarSeries!] !
  }

  type MovieExtra {
    air_date: String!
    country: String!
    runtime: String!
    rated: String!
    cast_members: CastMembers!
    similar_movies: [SimilarMovies!] !
  }

  type SeasonList {
    season: Int
    episodes: [String]
  }

  type SimilarSeries {
    id: String!
    poster: String!
  }

  type SimilarMovies {
    id: String!
    poster: String!
  }

  type CastMembers {
    creator: Creator!
    members_list: [MembersList!] !
  }

  type MembersList {
    members_info: [MembersInfo!] !
  }

  type MembersInfo {
    characters: Characters!
  }

  type Characters {
    real_name: String!
      character: String!
  }

  type Creator {
    name: String!
    poster: String!
  }
`;


module.exports = {
  typeDefs,
  resolvers
}
