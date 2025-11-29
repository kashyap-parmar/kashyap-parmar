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
  AdminMultiSelect,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { clients, projects, statusConfig } from '@/mock/clientProjectData';

const EditProject = () => {
  const router = useRouter();
  const params = useParams();
  const projectId = parseInt(params.projectId);
  
  const project = projects.find((p) => p.id === projectId);

  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    clientIds: project?.clientIds || [],
    estimatedTime: project?.estimatedTime || '',
    status: project?.status || 'todo',
  });
  const [success, setSuccess] = useState(false);

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Projects', href: '/admin/projects' },
    { label: 'Edit' },
  ];

  const clientOptions = clients.map((client) => ({
    value: client.id,
    label: `${client.firstname} ${client.lastname}`,
  }));

  const statusOptions = statusConfig.project.map((s) => ({
    value: s.value,
    label: s.label,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      router.push('/admin/projects');
    }, 2000);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
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
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="edit-project-title">
            Edit Project
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Update project information
          </p>
        </div>

        {/* Success Alert */}
        {success && (
          <AdminAlert
            type="success"
            title="Success!"
            message="Project updated successfully. Redirecting..."
            onClose={() => setSuccess(false)}
          />
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Information */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Project Information
            </h3>
            <div className="space-y-6">
              <AdminInput
                label="Project Title"
                placeholder="Enter project title"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                required
                data-testid="edit-project-title-input"
              />
              <AdminTextarea
                label="Description"
                placeholder="Brief description of the project (optional)"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={4}
                data-testid="edit-project-description-textarea"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AdminInput
                  label="Estimated Time"
                  placeholder="e.g., 120h (optional)"
                  value={formData.estimatedTime}
                  onChange={(e) => handleChange('estimatedTime', e.target.value)}
                  data-testid="edit-project-time-input"
                />
                <AdminSelect
                  label="Status"
                  options={statusOptions}
                  value={formData.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                  required
                  data-testid="edit-project-status-select"
                />
              </div>
            </div>
          </AdminCard>

          {/* Client Assignment */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Client Assignment
            </h3>
            <AdminMultiSelect
              label="Select Clients"
              options={clientOptions}
              value={formData.clientIds}
              onChange={(value) => handleChange('clientIds', value)}
              placeholder="Select one or more clients"
              required
              helperText="You must assign at least one client to this project"
              data-testid="edit-project-clients-select"
            />
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
            <AdminButton type="submit" variant="primary" data-testid="update-project-btn">
              <Icon icon="mdi:content-save" className="mr-2" />
              Update Project
            </AdminButton>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditProject;
