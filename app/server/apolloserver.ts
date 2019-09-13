import { ApolloServer } from 'apollo-server-express'
import typeDefs from '../schemas/employee.schema'
import resolvers from '../resolvers/employee.resolver'

const apolloserver = new ApolloServer({
    typeDefs,
    resolvers
})

export default apolloserver