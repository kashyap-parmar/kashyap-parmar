'use client';
import { useParams, useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import {
  AdminButton,
  AdminCard,
  AdminBreadcrumb,
  AdminBadge,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { clients, projects } from '@/mock/clientProjectData';

const ClientDetail = () => {
  const params = useParams();
  const router = useRouter();
  const clientId = parseInt(params.id);
  
  const client = clients.find((c) => c.id === clientId);
  const clientProjects = projects.filter((p) => p.clientIds.includes(clientId));

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Clients', href: '/admin/clients' },
    { label: client ? `${client.firstname} ${client.lastname}` : 'Detail' },
  ];

  const statusColors = {
    todo: 'default',
    inprogress: 'primary',
    completed: 'success',
    draft: 'warning',
  };

  if (!client) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">Client not found</p>
          <AdminButton
            variant="primary"
            onClick={() => router.push('/admin/clients')}
            className="mt-4"
          >
            Back to Clients
          </AdminButton>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <AdminBreadcrumb items={breadcrumbItems} />

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="client-detail-title">
              {client.firstname} {client.lastname}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Client Details and Projects
            </p>
          </div>
          <Link href={`/admin/clients/${clientId}/edit`}>
            <AdminButton variant="primary" icon={<Icon icon="mdi:pencil" />}>
              Edit Client
            </AdminButton>
          </Link>
        </div>

        {/* Client Information */}
        <AdminCard>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Client Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
              <a
                href={`mailto:${client.email}`}
                className="text-primary hover:text-blue-700 font-medium"
              >
                {client.email}
              </a>
            </div>
            {client.phone && (
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                <a
                  href={`tel:${client.phone}`}
                  className="text-gray-900 dark:text-white font-medium"
                >
                  {client.phone}
                </a>
              </div>
            )}
            {client.linkedin && (
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">LinkedIn</p>
                <a
                  href={client.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
                >
                  <Icon icon="mdi:linkedin" className="w-5 h-5" />
                  View Profile
                </a>
              </div>
            )}
            {client.website && (
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Website</p>
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-blue-700 font-medium flex items-center gap-2"
                >
                  <Icon icon="mdi:web" className="w-5 h-5" />
                  Visit Website
                </a>
              </div>
            )}
          </div>
          {client.description && (
            <div className="mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Description</p>
              <p className="text-gray-900 dark:text-white">{client.description}</p>
            </div>
          )}
        </AdminCard>

        {/* Projects Section */}
        <AdminCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Projects ({clientProjects.length})
            </h3>
          </div>
          
          {clientProjects.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No projects assigned to this client yet
            </div>
          ) : (
            <div className="space-y-4">
              {clientProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                          {project.ref_id}
                        </span>
                        <Link
                          href={`/admin/projects/${project.id}`}
                          className="text-lg font-semibold text-primary hover:text-blue-700 transition-colors"
                        >
                          {project.title}
                        </Link>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <AdminBadge variant={statusColors[project.status]} className="capitalize">
                          {project.status.replace('_', ' ')}
                        </AdminBadge>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Icon icon="mdi:clock-outline" className="w-4 h-4" />
                          {project.estimatedTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </AdminCard>
      </div>
    </AdminLayout>
  );
};

export default ClientDetail;