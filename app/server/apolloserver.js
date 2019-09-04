import { ApolloServer, gql } from 'apollo-server-express'
import typeDefs from '../schema/employees'
import resolvers from '../resolvers/index'


const apolloserver = new ApolloServer({ typeDefs, resolvers })

export default apolloserver