const {gql} = require('apollo-server');

const typeDefs = gql `
  extend type Query{
    series(page: Int!): [Series!]!
  }

  type Series{ 
    id: String!
    title: String!
    sinopsis: String!
    poster: String!
    rating: String!
    year: String!
    extra: [Extra!]!
  }

  type Extra{ 
    channel: String!
    first_air_date: String!
    last_air_date: String!
    total_seasons: String!
    total_episodes: String
    season_list: [SeasonList!]! 
    cast_members: CastMembers!
    similar_series: [SimilarSeries!]!
  }

  type SeasonList{ 
    season: Int 
    episodes: [String]
  }

  type SimilarSeries{ 
    id: String!
    poster: String!
  }

  type CastMembers{ 
    creator: Creator!
    members_list: [MembersList!]!
  }

  type MembersList{ 
    members_info: [MembersInfo!]!
  }

  type MembersInfo{
    characters: Characters!
  }

  type Characters{
    real_name: String!
    character: String!
  }

  type Creator{
    name: String! 
    poster: String!
  }
`;

const resolvers ={
  Query:{
    series: async(_source , {page} , { dataSources }) =>{
      return dataSources.API.getAllSeries(page)
        .then(doc =>{
          return doc.series
        });
    }
  }
}

module.exports = {
  typeDefs,
  resolvers
}