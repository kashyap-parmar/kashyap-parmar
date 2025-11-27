'use client';
import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Icon } from '@iconify/react';
import {
  AdminButton,
  AdminCard,
  AdminInput,
  AdminTextarea,
  AdminSelect,
  AdminBreadcrumb,
  AdminAlert,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { projects, modules, statusConfig, priorityConfig } from '@/mock/clientProjectData';

const EditModule = () => {
  const router = useRouter();
  const params = useParams();
  const projectId = parseInt(params.projectId);
  const moduleId = parseInt(params.moduleId);
  
  const project = projects.find((p) => p.id === projectId);
  const module = modules.find((m) => m.id === moduleId);

  const [formData, setFormData] = useState({
    title: module?.title || '',
    description: module?.description || '',
    estimatedTime: module?.estimatedTime || '',
    assignee: module?.assignee || '',
    priority: module?.priority || '',
    status: module?.status || 'todo',
  });
  const [success, setSuccess] = useState(false);

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Projects', href: '/admin/projects' },
    { label: project?.title || 'Project', href: `/admin/projects/${projectId}` },
    { label: 'Edit Module' },
  ];

  const statusOptions = statusConfig.module.map((s) => ({
    value: s.value,
    label: s.label,
  }));

  const priorityOptions = priorityConfig.map((p) => ({
    value: p.value,
    label: p.label,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      router.push(`/admin/projects/${projectId}`);
    }, 2000);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  if (!project || !module) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">Module or Project not found</p>
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
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="edit-module-title">
            Edit Module
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Update module information for {project.title}
          </p>
        </div>

        {/* Success Alert */}
        {success && (
          <AdminAlert
            type="success"
            title="Success!"
            message="Module updated successfully. Redirecting..."
            onClose={() => setSuccess(false)}
          />
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Module Information */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Module Information
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AdminInput
                  label="Reference ID"
                  value={module.ref_id}
                  disabled
                  data-testid="edit-module-ref-input"
                />
                <AdminSelect
                  label="Project"
                  options={[{ value: projectId, label: project.title }]}
                  value={projectId}
                  disabled
                  data-testid="edit-module-project-select"
                />
              </div>
              <AdminInput
                label="Module Title"
                placeholder="Enter module title"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                required
                data-testid="edit-module-title-input"
              />
              <AdminTextarea
                label="Description"
                placeholder="Detailed description of the module (optional)"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={4}
                data-testid="edit-module-description-textarea"
              />
            </div>
          </AdminCard>

          {/* Module Details */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Module Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AdminInput
                label="Time Estimation"
                placeholder="e.g., 40h (optional)"
                value={formData.estimatedTime}
                onChange={(e) => handleChange('estimatedTime', e.target.value)}
                data-testid="edit-module-time-input"
              />
              <AdminInput
                label="Assignee"
                placeholder="Enter assignee name (optional)"
                value={formData.assignee}
                onChange={(e) => handleChange('assignee', e.target.value)}
                icon={<Icon icon="mdi:account" className="text-gray-400" />}
                data-testid="edit-module-assignee-input"
              />
              <AdminSelect
                label="Priority"
                options={priorityOptions}
                value={formData.priority}
                onChange={(e) => handleChange('priority', e.target.value)}
                placeholder="Select priority (optional)"
                data-testid="edit-module-priority-select"
              />
              <AdminSelect
                label="Status"
                options={statusOptions}
                value={formData.status}
                onChange={(e) => handleChange('status', e.target.value)}
                required
                data-testid="edit-module-status-select"
              />
            </div>
          </AdminCard>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4">
            <AdminButton
              type="button"
              variant="secondary"
              onClick={() => router.back()}
              data-testid="edit-cancel-btn"
            >
              Cancel
            </AdminButton>
            <AdminButton type="submit" variant="primary" data-testid="update-module-btn">
              <Icon icon="mdi:content-save" className="mr-2" />
              Update Module
            </AdminButton>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditModule;