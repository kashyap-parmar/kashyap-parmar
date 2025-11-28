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
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { projects, statusConfig, priorityConfig } from '@/mock/clientProjectData';
import { showToast } from '@/utils/toast';

const CreateModule = () => {
  const router = useRouter();
  const params = useParams();
  const projectId = parseInt(params.projectId);
  
  const project = projects.find((p) => p.id === projectId);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    estimatedTime: '',
    assignee: '',
    priority: '',
    status: 'todo',
  });

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Projects', href: '/admin/projects' },
    { label: project?.title || 'Project', href: `/admin/projects/${projectId}` },
    { label: 'Create Module' },
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
    showToast.success('Module created successfully');
    setTimeout(() => {
      router.push(`/admin/projects/${projectId}`);
    }, 1000);
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
        <AdminBreadcrumb items={breadcrumbItems} />

        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="create-module-title">
            Create New Module
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Add a new module to {project.title}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Module Information
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AdminInput
                  label="Reference ID"
                  placeholder="MOD-XXX (auto-generated)"
                  disabled
                  helperText="Auto-generated upon creation"
                  data-testid="module-ref-input"
                />
                <AdminSelect
                  label="Project"
                  options={[{ value: projectId, label: project.title }]}
                  value={projectId}
                  disabled
                  data-testid="module-project-select"
                />
              </div>
              <AdminInput
                label="Module Title"
                placeholder="Enter module title"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                required
                data-testid="module-title-input"
              />
              <AdminTextarea
                label="Description"
                placeholder="Detailed description of the module (optional)"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={4}
                data-testid="module-description-textarea"
              />
            </div>
          </AdminCard>

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
                data-testid="module-time-input"
              />
              <AdminInput
                label="Assignee"
                placeholder="Enter assignee name (optional)"
                value={formData.assignee}
                onChange={(e) => handleChange('assignee', e.target.value)}
                icon={<Icon icon="mdi:account" className="text-gray-400" />}
                data-testid="module-assignee-input"
              />
              <AdminSelect
                label="Priority"
                options={priorityOptions}
                value={formData.priority}
                onChange={(e) => handleChange('priority', e.target.value)}
                placeholder="Select priority (optional)"
                data-testid="module-priority-select"
              />
              <AdminSelect
                label="Status"
                options={statusOptions}
                value={formData.status}
                onChange={(e) => handleChange('status', e.target.value)}
                required
                data-testid="module-status-select"
              />
            </div>
          </AdminCard>

          <div className="flex items-center justify-end gap-4">
            <AdminButton
              type="button"
              variant="secondary"
              onClick={() => router.back()}
              data-testid="cancel-btn"
            >
              Cancel
            </AdminButton>
            <AdminButton type="submit" variant="primary" data-testid="save-module-btn">
              <Icon icon="mdi:content-save" className="mr-2" />
              Create Module
            </AdminButton>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateModule;