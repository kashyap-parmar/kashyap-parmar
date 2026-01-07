'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import {
  AdminButton,
  AdminCard,
  AdminInput,
  AdminTextarea,
  AdminBreadcrumb,
  AdminImageUploader,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { showToast } from '@/utils/toast';

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    name: 'Kashyap Parmar',
    email: 'admin@example.com',
    phone: '+91 1234567890',
    location: 'Mumbai, India',
    bio: 'Full Stack Developer with 3+ years of experience in building modern web applications.',
    website: 'https://kashyapparmar.dev',
  });
  const [avatar, setAvatar] = useState(null);

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Settings', href: '/admin/settings/profile' },
    { label: 'Profile' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast.success('Profile updated successfully');
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="profile-settings-title">
            Profile Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your personal information and profile details
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Profile Picture
            </h3>
            <AdminImageUploader
              label="Upload Avatar"
              value={avatar}
              onChange={setAvatar}
              helperText="Recommended size: 400x400px"
            />
          </AdminCard>

          {/* Basic Information */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AdminInput
                label="Full Name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                icon={<Icon icon="mdi:account" className="text-gray-400" />}
                required
                data-testid="profile-name-input"
              />
              <AdminInput
                label="Email Address"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                icon={<Icon icon="mdi:email" className="text-gray-400" />}
                required
                data-testid="profile-email-input"
              />
              <AdminInput
                label="Phone Number"
                placeholder="+91 1234567890"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                icon={<Icon icon="mdi:phone" className="text-gray-400" />}
                data-testid="profile-phone-input"
              />
              <AdminInput
                label="Location"
                placeholder="City, Country"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                icon={<Icon icon="mdi:map-marker" className="text-gray-400" />}
                data-testid="profile-location-input"
              />
            </div>
            <div className="mt-6">
              <AdminInput
                label="Website"
                placeholder="https://yourwebsite.com"
                value={formData.website}
                onChange={(e) => handleChange('website', e.target.value)}
                icon={<Icon icon="mdi:web" className="text-gray-400" />}
                data-testid="profile-website-input"
              />
            </div>
          </AdminCard>

          {/* Bio */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Bio
            </h3>
            <AdminTextarea
              label="About You"
              placeholder="Write a short bio about yourself"
              value={formData.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              rows={6}
              helperText="This will be displayed on your public profile"
              data-testid="profile-bio-textarea"
            />
          </AdminCard>

          {/* Password */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Change Password
            </h3>
            <div className="space-y-6">
              <AdminInput
                label="Current Password"
                type="password"
                placeholder="Enter current password"
                icon={<Icon icon="mdi:lock" className="text-gray-400" />}
                data-testid="current-password-input"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AdminInput
                  label="New Password"
                  type="password"
                  placeholder="Enter new password"
                  icon={<Icon icon="mdi:lock-reset" className="text-gray-400" />}
                  data-testid="new-password-input"
                />
                <AdminInput
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm new password"
                  icon={<Icon icon="mdi:lock-check" className="text-gray-400" />}
                  data-testid="confirm-password-input"
                />
              </div>
            </div>
          </AdminCard>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4">
            <AdminButton type="button" variant="secondary" data-testid="reset-btn">
              Reset Changes
            </AdminButton>
            <AdminButton type="submit" variant="primary" data-testid="save-profile-btn">
              <Icon icon="mdi:content-save" className="mr-2" />
              Save Changes
            </AdminButton>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default ProfileSettings;
