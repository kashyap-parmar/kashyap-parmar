export default function sitemap() {
    return [
        {
            url: 'https://kashyapparmar.com',
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: 'https://kashyapparmar.com/3d-model',
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];
}