export default function sitemap() {
    const lastMod = new Date().toISOString();
    return [
        {
            url: 'https://kashyapparmar.com',
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.9,
        }
    ];
}