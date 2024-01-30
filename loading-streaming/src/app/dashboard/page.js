import React, { Suspense } from 'react'

//WelcomeL
const Welcome = React.lazy(() => {
    //return promise
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 8000, import('./components/greeter'))
    })
})


export default function DashboardPage() {
    return <>
        <h1>Dashboard page </h1>
        {/* <Welcome/> */}
        <Suspense fallback={<h1>Loading Locally.....</h1>}>
            <Welcome />
        </Suspense>
        <h1>Dashboard page </h1>
        <h1>Dashboard page </h1>
        <h1>Dashboard page </h1>
        <h1>Dashboard page </h1>
        <h1>Dashboard page </h1>

    </>
}