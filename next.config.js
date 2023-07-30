/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');

dotenv.config();
console.log('APP_TOKEN:', process.env.APP_TOKEN);
console.log('GIT_WEB_URL:', process.env.GIT_WEB_URL);

const nextConfig = {}

module.exports = nextConfig
