import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
        employees: [Employee]!
    }

    type Employee {
        emp_no: ID!
        first_name: String
        last_name: String
    }

    type Mutation {
        addEmployee(first_name: String!, last_name: String!): Employee
    }
`;

export default typeDefs