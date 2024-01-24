/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            //basic redirection
            {
                source: '/about',
                destination: '/',
                permanent: true
            },
            {
                source: '/myproducts',
                destination: '/products',
                permanent: true
            }
        ]
    }

};

export default nextConfig;
