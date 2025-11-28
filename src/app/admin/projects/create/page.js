'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import {
  AdminButton,
  AdminCard,
  AdminInput,
  AdminTextarea,
  AdminSelect,
  AdminBreadcrumb,
  AdminMultiSelect,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { clients, statusConfig } from '@/mock/clientProjectData';
import { showToast } from '@/utils/toast';

const CreateProject = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    clientIds: [],
    estimatedTime: '',
    status: 'todo',
  });

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Projects', href: '/admin/projects' },
    { label: 'Create' },
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
    showToast.success('Project created successfully');
    setTimeout(() => {
      router.push('/admin/projects');
    }, 1000);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <AdminBreadcrumb items={breadcrumbItems} />

        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="create-project-title">
              Create New Project
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Add a new project to your portfolio
            </p>
          </div>
        </div>

        {/* Success Alert */}
        {success && (
          <AdminAlert
            type="success"
            title="Success!"
            message="Project created successfully. Redirecting..."
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
                data-testid="project-title-input"
              />
              <AdminTextarea
                label="Description"
                placeholder="Brief description of the project (optional)"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={4}
                data-testid="project-description-textarea"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AdminInput
                  label="Estimated Time"
                  placeholder="e.g., 120h (optional)"
                  value={formData.estimatedTime}
                  onChange={(e) => handleChange('estimatedTime', e.target.value)}
                  data-testid="project-time-input"
                />
                <AdminSelect
                  label="Status"
                  options={statusOptions}
                  value={formData.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                  required
                  data-testid="project-status-select"
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
              data-testid="project-clients-select"
            />
          </AdminCard>

          {/* Additional sections can be added here in the future */}

          {/* Actions */}
          <div className="flex items-center justify-end gap-4">
            <AdminButton
              type="button"
              variant="secondary"
              onClick={() => router.back()}
              data-testid="cancel-btn"
            >
              Cancel
            </AdminButton>
            <AdminButton type="submit" variant="primary" data-testid="save-project-btn">
              <Icon icon="mdi:content-save" className="mr-2" />
              Save Project
            </AdminButton>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateProject;