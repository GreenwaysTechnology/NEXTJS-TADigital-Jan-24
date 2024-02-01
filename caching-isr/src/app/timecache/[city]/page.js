
//route segment configuration
//export const revalidate = 2

// export default async function CachePage(props) {

//     //with caching
//     // const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
//     //without caching
//     // const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata', { cache: 'no-store' })

//     //revalidate based on time.
//     // const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata', { next: { revalidate: 2 } })

//     // const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')

//     const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata', { next: { tags: ['collection'] } })
//     const data = await response.json();
//     return <>
//         <h1>Time Now : {new Date(data.datetime).toLocaleTimeString()} </h1>
//     </>
// }



export default async function CachePage(props) {
    const response = await fetch(`http://worldtimeapi.org/api/timezone/Asia/${props.params.city}`, { next: { tags: ['collection'] } });

    const data = await response.json();
    return <>
        <h1>Time Now : {new Date(data.datetime).toLocaleTimeString()} </h1>
    </>
}

export async function generateStaticParams() {
    return [{ city: 'Kolkata' }];
}
