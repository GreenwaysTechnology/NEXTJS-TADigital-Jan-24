
// export default function ProfileDetailsPage(props) {
//     return <div>
//         {/* <h1>Profile Details {JSON.stringify(props)}</h1> */}
//         <h1>{props.params.id} details</h1>
//     </div>
// }

export default function ProfileDetailsPage({ params: { id } }) {
    return <div>
        {/* <h1>Profile Details {JSON.stringify(props)}</h1> */}
        <h1>{id} details</h1>
    </div>
}