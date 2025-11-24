'use client';
import { useState, useEffect } from 'react';
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
  AdminImageUploader,
  AdminRichTextEditor,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { adminProjects } from '@/mock/adminData';

const EditProject = () => {
  const router = useRouter();
  const params = useParams();
  const projectId = parseInt(params.id);
  
  const project = adminProjects.find((p) => p.id === projectId);

  const [formData, setFormData] = useState({
    title: project?.title || '',
    slug: project?.slug || '',
    category: project?.category || '',
    status: project?.status || 'draft',
    featured: project?.featured || false,
    description: '',
    tech: project?.tech?.join(', ') || '',
    liveUrl: '',
    githubUrl: '',
  });
  const [thumbnail, setThumbnail] = useState(project?.thumbnail || null);
  const [content, setContent] = useState('');
  const [success, setSuccess] = useState(false);

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Projects', href: '/admin/projects' },
    { label: 'Edit' },
  ];

  const categoryOptions = [
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'mobile', label: 'Mobile' },
  ];

  const statusOptions = [
    { value: 'draft', label: 'Draft' },
    { value: 'published', label: 'Published' },
  ];

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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="edit-project-title">
              Edit Project
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Update your project information
            </p>
          </div>
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
          {/* Basic Information */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AdminInput
                label="Project Title"
                placeholder="Enter project title"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                required
                data-testid="edit-project-title-input"
              />
              <AdminInput
                label="Slug"
                placeholder="project-slug"
                value={formData.slug}
                onChange={(e) => handleChange('slug', e.target.value)}
                required
                data-testid="edit-project-slug-input"
              />
              <AdminSelect
                label="Category"
                options={categoryOptions}
                value={formData.category.toLowerCase()}
                onChange={(e) => handleChange('category', e.target.value)}
                required
                data-testid="edit-project-category-select"
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

            <div className="mt-6">
              <AdminTextarea
                label="Short Description"
                placeholder="Brief description of the project"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={3}
                required
                data-testid="edit-project-description-textarea"
              />
            </div>

            <div className="mt-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => handleChange('featured', e.target.checked)}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  data-testid="edit-project-featured-checkbox"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Mark as featured project
                </span>
              </label>
            </div>
          </AdminCard>

          {/* Project Details */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Project Details
            </h3>
            <div className="space-y-6">
              <AdminInput
                label="Technologies Used"
                placeholder="React, Node.js, MongoDB (comma separated)"
                value={formData.tech}
                onChange={(e) => handleChange('tech', e.target.value)}
                helperText="Separate multiple technologies with commas"
                data-testid="edit-project-tech-input"
              />
              <AdminInput
                label="Live URL"
                placeholder="https://project-demo.com"
                value={formData.liveUrl}
                onChange={(e) => handleChange('liveUrl', e.target.value)}
                data-testid="edit-project-live-url-input"
              />
              <AdminInput
                label="GitHub URL"
                placeholder="https://github.com/username/repo"
                value={formData.githubUrl}
                onChange={(e) => handleChange('githubUrl', e.target.value)}
                data-testid="edit-project-github-url-input"
              />
            </div>
          </AdminCard>

          {/* Thumbnail */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Project Thumbnail
            </h3>
            <AdminImageUploader
              label="Upload Thumbnail"
              value={thumbnail}
              onChange={setThumbnail}
              helperText="Recommended size: 1200x630px"
            />
          </AdminCard>

          {/* Content */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Project Content
            </h3>
            <AdminRichTextEditor
              label="Full Description"
              value={content}
              onChange={setContent}
              helperText="Write detailed information about the project"
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