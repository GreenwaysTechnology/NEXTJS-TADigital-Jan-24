import { ApolloWrapper } from "../../../lib/apollo-wrapper"

export default function ClientLayout({ children }) {
    return <ApolloWrapper>{children}</ApolloWrapper>
}