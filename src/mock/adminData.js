export const adminProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    slug: 'ecommerce-platform',
    status: 'published',
    category: 'Full Stack',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    featured: true,
    thumbnail: '/images/projectImg.jpg',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
  },
  {
    id: 2,
    title: 'Task Management App',
    slug: 'task-management-app',
    status: 'draft',
    category: 'Frontend',
    tech: ['Next.js', 'Tailwind CSS', 'Redux'],
    featured: false,
    thumbnail: '/images/projectImg.jpg',
    createdAt: '2024-02-10',
    updatedAt: '2024-02-15',
  },
  {
    id: 3,
    title: 'AI Chat Bot',
    slug: 'ai-chat-bot',
    status: 'published',
    category: 'Full Stack',
    tech: ['React', 'Python', 'OpenAI', 'FastAPI'],
    featured: true,
    thumbnail: '/images/projectImg.jpg',
    createdAt: '2024-03-05',
    updatedAt: '2024-03-10',
  },
];

export const adminGalleryImages = [
  {
    id: 1,
    title: 'Project Screenshot 1',
    url: '/images/dentalSemCrm.png',
    category: 'Screenshots',
    uploadedAt: '2024-01-15',
  },
  {
    id: 2,
    title: 'Project Screenshot 2',
    url: '/images/moustachescapes.png',
    category: 'Screenshots',
    uploadedAt: '2024-01-20',
  },
  {
    id: 3,
    title: 'Project Screenshot 3',
    url: '/images/mxmNews.png',
    category: 'Screenshots',
    uploadedAt: '2024-02-10',
  },
  {
    id: 4,
    title: 'Project Screenshot 4',
    url: '/images/slafs.png',
    category: 'Screenshots',
    uploadedAt: '2024-02-15',
  },
];

export const dashboardStats = [
  {
    title: 'Total Projects',
    value: '24',
    icon: 'mdi:folder-multiple',
    trend: 'up',
    trendValue: '12%',
    color: 'blue',
  },
  {
    title: 'Published',
    value: '18',
    icon: 'mdi:check-circle',
    trend: 'up',
    trendValue: '8%',
    color: 'green',
  },
  {
    title: 'Drafts',
    value: '6',
    icon: 'mdi:file-document-edit',
    trend: 'down',
    trendValue: '3%',
    color: 'orange',
  },
  {
    title: 'Total Views',
    value: '12.5K',
    icon: 'mdi:eye',
    trend: 'up',
    trendValue: '23%',
    color: 'purple',
  },
];

export const recentActivities = [
  {
    id: 1,
    action: 'Published new project',
    project: 'E-Commerce Platform',
    time: '2 hours ago',
    icon: 'mdi:check-circle',
    color: 'green',
  },
  {
    id: 2,
    action: 'Updated project',
    project: 'Task Management App',
    time: '5 hours ago',
    icon: 'mdi:pencil',
    color: 'blue',
  },
  {
    id: 3,
    action: 'Deleted project',
    project: 'Old Portfolio',
    time: '1 day ago',
    icon: 'mdi:delete',
    color: 'red',
  },
  {
    id: 4,
    action: 'Added new image',
    project: 'Gallery',
    time: '2 days ago',
    icon: 'mdi:image',
    color: 'purple',
  },
];

export const chartData = [
  { name: 'Jan', projects: 4, views: 2400 },
  { name: 'Feb', projects: 3, views: 1398 },
  { name: 'Mar', projects: 2, views: 9800 },
  { name: 'Apr', projects: 5, views: 3908 },
  { name: 'May', projects: 4, views: 4800 },
  { name: 'Jun', projects: 6, views: 3800 },
];