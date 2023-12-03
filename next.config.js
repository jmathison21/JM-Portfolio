/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/portfolio',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/',
                destination: '/about',
                permanent: true,
            }
        ]
    },
}
   
module.exports = nextConfig