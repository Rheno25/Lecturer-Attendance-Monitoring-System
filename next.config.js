/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    
  }

  module.exports = {
    // Other configuration options...
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        // Add other pages here as needed
      }
    }
  }
  