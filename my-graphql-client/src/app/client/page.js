
"use client";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

//automatic cach invalidation option 
export const dynamic = "force-dynamic";

//query 
const query = gql `query getCountries {
    countries {
      name
    }          
}`
export default function PollPage() {
    //parse and send request to graphql server
    
    const { data: { countries } } = useSuspenseQuery(query);
    countries.map(country => {
        console.log(country.name)
    })
    return <main>
        <ul>
            {countries.map(country => {
                return <li>{country.name}</li>
            })}
        </ul>
    </main>
};