/** Allow sample images from picsum.photos. Replace with your own host, or put files in /public and remove this. */
const nextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }] },
};
export default nextConfig;
