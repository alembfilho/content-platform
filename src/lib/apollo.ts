import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p1jo9f1jc701xs4njzfh1x/master',
    cache: new InMemoryCache()
})