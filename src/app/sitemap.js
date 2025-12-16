export default function sitemap() {
    const lastMod = new Date().toISOString();
    return [
        {
            url: 'https://kashyapparmar.com',
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://kashyapparmar.com/3d-model',
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: 'https://kashyapparmar.com/projects',
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://kashyapparmar.com/projects/dental-sem-crm',
            lastModified: lastMod,
            priority: 0.7,
        },
        {
            url: 'https://kashyapparmar.com/projects/sba-loans-crm',
            lastModified: lastMod,
            priority: 0.7,
        },
        {
            url: 'https://kashyapparmar.com/projects/moustachescapes-hotel-booking',
            lastModified: lastMod,
            priority: 0.7,
        },
        {
            url: 'https://kashyapparmar.com/projects/proaits-crm',
            lastModified: lastMod,
            priority: 0.7,
        },
        {
            url: 'https://kashyapparmar.com/projects/sla-fs-financial-services',
            lastModified: lastMod,
            priority: 0.7,
        }
    ];
}