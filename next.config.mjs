/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MYSQL_HOST: "localhost",
    MYSQL_PORT: "3000",
    MYSQL_DATABASE: "suesue_db",
    MYSQL_USER: "root",
    MYSQL_PASSWORD: "",
  },
};

export default nextConfig;
