'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import {
  AdminButton,
  AdminCard,
  AdminInput,
  AdminTextarea,
  AdminBreadcrumb,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { showToast } from '@/utils/toast';

const CreateClient = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    linkedin: '',
    website: '',
    description: '',
  });
  const [success, setSuccess] = useState(false);

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Clients', href: '/admin/clients' },
    { label: 'Create' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast.success('Client created successfully');
    setTimeout(() => {
      router.push('/admin/clients');
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
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="create-client-title">
            Add New Client
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create a new client profile
          </p>
        </div>

        {/* Success Alert */}
        {success && (
          <AdminAlert
            type="success"
            title="Success!"
            message="Client created successfully. Redirecting..."
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
                label="First Name"
                placeholder="Enter first name"
                value={formData.firstname}
                onChange={(e) => handleChange('firstname', e.target.value)}
                required
                data-testid="firstname-input"
              />
              <AdminInput
                label="Last Name"
                placeholder="Enter last name"
                value={formData.lastname}
                onChange={(e) => handleChange('lastname', e.target.value)}
                required
                data-testid="lastname-input"
              />
            </div>
          </AdminCard>

          {/* Contact Information */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AdminInput
                  label="Email"
                  type="email"
                  placeholder="client@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  icon={<Icon icon="mdi:email" className="text-gray-400" />}
                  required
                  data-testid="email-input"
                />
                <AdminInput
                  label="Phone"
                  placeholder="+1 234 567 8900"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  icon={<Icon icon="mdi:phone" className="text-gray-400" />}
                  data-testid="phone-input"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AdminInput
                  label="LinkedIn URL"
                  placeholder="https://linkedin.com/in/username"
                  value={formData.linkedin}
                  onChange={(e) => handleChange('linkedin', e.target.value)}
                  icon={<Icon icon="mdi:linkedin" className="text-gray-400" />}
                  data-testid="linkedin-input"
                />
                <AdminInput
                  label="Website URL"
                  placeholder="https://example.com"
                  value={formData.website}
                  onChange={(e) => handleChange('website', e.target.value)}
                  icon={<Icon icon="mdi:web" className="text-gray-400" />}
                  data-testid="website-input"
                />
              </div>
            </div>
          </AdminCard>

          {/* Additional Information */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Additional Information
            </h3>
            <AdminTextarea
              label="Description"
              placeholder="Brief description about the client..."
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={4}
              data-testid="description-textarea"
            />
          </AdminCard>

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
            <AdminButton type="submit" variant="primary" data-testid="save-client-btn">
              <Icon icon="mdi:content-save" className="mr-2" />
              Save Client
            </AdminButton>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateClient;