import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
        employees: [Employee]!
    }

    type Employee {
        id: ID!
        firstname: String
        lastname: String
    }

    type Mutation {
        createUser(firstname: String!, lastname: String!): Employee
    }
`;

export default typeDefs