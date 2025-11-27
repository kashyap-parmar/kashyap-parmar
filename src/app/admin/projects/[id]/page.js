'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import {
  AdminButton,
  AdminCard,
  AdminBreadcrumb,
  AdminBadge,
  AdminModal,
  AdminProgressBar,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { projects, clients, modules, subtasks, statusConfig } from '@/mock/clientProjectData';

const ProjectDetail = () => {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.id);
  
  const project = projects.find((p) => p.id === projectId);
  const projectModules = modules.filter((m) => m.projectId === projectId);
  const projectClients = clients.filter((c) => project?.clientIds.includes(c.id));

  const [previewModule, setPreviewModule] = useState(null);

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Projects', href: '/admin/projects' },
    { label: project?.title || 'Detail' },
  ];

  const getModuleProgress = (moduleId) => {
    const moduleSub tasks = subtasks.filter((s) => s.moduleId === moduleId);
    const statusCounts = statusConfig.module.map((status) => ({
      status: status.value,
      label: status.label,
      count: moduleSubtasks.filter((s) => s.status === status.value).length,
    }));
    return statusCounts;
  };

  const getTotalTime = (moduleId) => {
    const moduleSubtasks = subtasks.filter((s) => s.moduleId === moduleId);
    return moduleSubtasks.reduce((total, sub) => {
      const hours = parseInt(sub.estimatedTime) || 0;
      return total + hours;
    }, 0);
  };

  const statusColors = {
    todo: 'default',
    inprogress: 'primary',
    completed: 'success',
    draft: 'warning',
    code_review: 'primary',
    bugs: 'danger',
    add_ons: 'warning',
  };

  if (!project) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">Project not found</p>
          <AdminButton
            variant="primary"
            onClick={() => router.push('/admin/projects')}
            className="mt-4"
          >
            Back to Projects
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
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                {project.ref_id}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-testid="project-detail-title">
                {project.title}
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>
          <Link href={`/admin/projects/${projectId}/modules/create`}>
            <AdminButton variant="primary" icon={<Icon icon="mdi:plus" />}>
              Add Module
            </AdminButton>
          </Link>
        </div>

        {/* Project Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Project Details
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Status</p>
                <AdminBadge variant={statusColors[project.status]} className="capitalize">
                  {project.status.replace('_', ' ')}
                </AdminBadge>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Estimated Time</p>
                <p className="text-gray-900 dark:text-white font-semibold flex items-center gap-2">
                  <Icon icon="mdi:clock-outline" className="w-5 h-5" />
                  {project.estimatedTime}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Created On</p>
                <p className="text-gray-900 dark:text-white">{project.createdAt}</p>
              </div>
            </div>
          </AdminCard>

          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Assigned Clients ({projectClients.length})
            </h3>
            <div className="space-y-3">
              {projectClients.map((client) => (
                <Link
                  key={client.id}
                  href={`/admin/clients/${client.id}`}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                    {client.firstname[0]}{client.lastname[0]}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {client.firstname} {client.lastname}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{client.email}</p>
                  </div>
                </Link>
              ))}
            </div>
          </AdminCard>
        </div>

        {/* Modules Section */}
        <AdminCard>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Modules ({projectModules.length})
          </h3>
          
          {projectModules.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No modules created yet. Start by adding a module to this project.
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projectModules.map((module) => {
                const progressData = getModuleProgress(module.id);
                const totalTime = getTotalTime(module.id);
                
                return (
                  <div
                    key={module.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-all cursor-pointer bg-white dark:bg-[#020817]/70"
                    onClick={() => setPreviewModule(module)}
                  >
                    {/* Module Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                            {module.ref_id}
                          </span>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {module.title}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {module.description}
                        </p>
                      </div>
                    </div>

                    {/* Module Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Icon icon="mdi:clock-outline" className="w-4 h-4" />
                        {totalTime}h
                      </span>
                      {module.assignee && (
                        <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Icon icon="mdi:account" className="w-4 h-4" />
                          {module.assignee}
                        </span>
                      )}
                      {module.priority && (
                        <AdminBadge 
                          variant={module.priority === 'high' ? 'danger' : module.priority === 'medium' ? 'warning' : 'success'}
                          size="sm"
                        >
                          {module.priority}
                        </AdminBadge>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <AdminProgressBar data={progressData} showLegend={false} className="mb-4" />

                    {/* Module Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                      <AdminBadge variant={statusColors[module.status]} className="capitalize">
                        {module.status.replace('_', ' ')}
                      </AdminBadge>
                      <Link
                        href={`/admin/projects/${projectId}/modules/${module.id}/board`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <AdminButton variant="primary" size="sm">
                          Open Board
                        </AdminButton>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </AdminCard>

        {/* Module Preview Modal */}
        <AdminModal
          isOpen={!!previewModule}
          onClose={() => setPreviewModule(null)}
          title={previewModule?.title || 'Module Details'}
          size="lg"
        >
          {previewModule && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                  {previewModule.ref_id}
                </span>
                <AdminBadge variant={statusColors[previewModule.status]} className="capitalize">
                  {previewModule.status.replace('_', ' ')}
                </AdminBadge>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Description</p>
                <p className="text-gray-900 dark:text-white">{previewModule.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Estimated Time</p>
                  <p className="text-gray-900 dark:text-white font-medium">{previewModule.estimatedTime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Assignee</p>
                  <p className="text-gray-900 dark:text-white font-medium">{previewModule.assignee || '-'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Priority</p>
                  <p className="text-gray-900 dark:text-white font-medium capitalize">{previewModule.priority || '-'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Subtasks</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {subtasks.filter((s) => s.moduleId === previewModule.id).length}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Progress</p>
                <AdminProgressBar data={getModuleProgress(previewModule.id)} />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link href={`/admin/projects/${projectId}/modules/${previewModule.id}/edit`}>
                  <AdminButton variant="secondary">
                    <Icon icon="mdi:pencil" className="mr-2" />
                    Edit Module
                  </AdminButton>
                </Link>
                <Link href={`/admin/projects/${projectId}/modules/${previewModule.id}/board`}>
                  <AdminButton variant="primary">
                    <Icon icon="mdi:view-dashboard" className="mr-2" />
                    Open Board
                  </AdminButton>
                </Link>
              </div>
            </div>
          )}
        </AdminModal>
      </div>
    </AdminLayout>
  );
};

export default ProjectDetail;
