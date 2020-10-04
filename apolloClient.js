import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

export default function createApolloClient(initialState, ctx) {
    // The `ctx` (NextPageContext) will only be present on the server.
    // use it to extract auth headers (ctx.req) or similar.
    return new ApolloClient({
        ssrMode: Boolean(ctx),
        link: new HttpLink({
            uri: 'https://apipulsa.vercel.app/', // Server URL (must be absolute)
            credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
            headers: {
                authorization: "3cbab6ed12ec365ab502940bbe69ac747228224ec589f17b722adbf2e0fa841b",
              },
            fetch,
        }),
        cache: new InMemoryCache().restore(initialState),
    });
}