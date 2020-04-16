import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import "./index.css";
//graphql-urql

import { Provider, Client, dedupExchange, fetchExchange } from "urql"
import { cacheExchange } from "@urql/exchange-graphcache"

//creating a cache with a config
const cache = cacheExchange({})

const client = new Client({
    url: "https://4000-a9def18d-5f33-4287-b2aa-1d5d3de6f77d.ws-us02.gitpod.io/",
    //replace defaultExchanges with a new list of exchanges that includes both normalized cache exchange

    exchanges: [dedupExchange, cache, fetchExchange]
})


render(
    <BrowserRouter>
<Provider value={client}>
    <App />
    </Provider>
    </BrowserRouter>, document.getElementById('root'));
