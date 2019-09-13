import React from 'react'
import App from 'next/app'
import { ApolloClient, HttpLink } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:8080/graphql',
        fetch
    }),
    cache: new InMemoryCache()
})

class MyApp extends App {
    render() {
        const { Component, pageProps, router } = this.props
        return (
            <ApolloProvider client={client} >
                i'm
                <Component {...pageProps} key={router.route} />
            </ApolloProvider>

        )
    }
}

export default MyApp