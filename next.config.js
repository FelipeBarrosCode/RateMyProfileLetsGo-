/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { esmExternals: true,
        missingSuspenseWithCSRBailout: false
     }
}

module.exports = nextConfig
