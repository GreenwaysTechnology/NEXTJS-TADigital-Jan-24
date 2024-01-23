import { Like } from "./like"
import { MyReview } from "./myreivew"

export default function ReviewPage() {
    console.log('Review Page')
    return <div id="rootPage">
        <h1>Review Page</h1>
        <Like />
        <hr />
        <h1>Client Component Uses another Server </h1>
        <MyReview />
    </div>
}