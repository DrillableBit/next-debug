/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_SECRET: "secret1234567",
    },
}

module.exports = nextConfig
