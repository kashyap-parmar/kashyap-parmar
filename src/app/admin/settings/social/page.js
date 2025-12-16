'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import {
  AdminButton,
  AdminCard,
  AdminInput,
  AdminBreadcrumb,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { showToast } from '@/utils/toast';

const SocialSettings = () => {
  const [socialLinks, setSocialLinks] = useState({
    github: 'https://github.com/kashyapparmar',
    linkedin: 'https://linkedin.com/in/kashyapparmar',
    twitter: 'https://twitter.com/kashyapparmar',
    instagram: 'https://instagram.com/kashyapparmar',
    youtube: '',
    facebook: '',
  });

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Settings', href: '/admin/settings/profile' },
    { label: 'Social Links' },
  ];

  const socialPlatforms = [
    { key: 'github', label: 'GitHub', icon: 'mdi:github', color: 'text-gray-900 dark:text-white' },
    { key: 'linkedin', label: 'LinkedIn', icon: 'mdi:linkedin', color: 'text-blue-600' },
    { key: 'twitter', label: 'Twitter', icon: 'mdi:twitter', color: 'text-blue-400' },
    { key: 'instagram', label: 'Instagram', icon: 'mdi:instagram', color: 'text-pink-600' },
    { key: 'youtube', label: 'YouTube', icon: 'mdi:youtube', color: 'text-red-600' },
    { key: 'facebook', label: 'Facebook', icon: 'mdi:facebook', color: 'text-blue-700' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast.success('Social links updated successfully');
  };

  const handleChange = (platform, value) => {
    setSocialLinks({ ...socialLinks, [platform]: value });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <AdminBreadcrumb items={breadcrumbItems} />

        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="social-settings-title">
            Social Links
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your social media profiles and links
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Social Links */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Social Media Profiles
            </h3>
            <div className="space-y-6">
              {socialPlatforms.map((platform) => (
                <AdminInput
                  key={platform.key}
                  label={platform.label}
                  placeholder={`https://${platform.key}.com/username`}
                  value={socialLinks[platform.key]}
                  onChange={(e) => handleChange(platform.key, e.target.value)}
                  icon={<Icon icon={platform.icon} className={`${platform.color}`} />}
                  data-testid={`social-${platform.key}-input`}
                />
              ))}
            </div>
          </AdminCard>

          {/* Preview */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Preview
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              This is how your social links will appear on your portfolio
            </p>
            <div className="flex flex-wrap gap-3">
              {socialPlatforms.map((platform) => (
                socialLinks[platform.key] && (
                  <a
                    key={platform.key}
                    href={socialLinks[platform.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Icon icon={platform.icon} className={`w-5 h-5 ${platform.color}`} />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {platform.label}
                    </span>
                  </a>
                )
              ))}
            </div>
          </AdminCard>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4">
            <AdminButton type="button" variant="secondary" data-testid="reset-social-btn">
              Reset Changes
            </AdminButton>
            <AdminButton type="submit" variant="primary" data-testid="save-social-btn">
              <Icon icon="mdi:content-save" className="mr-2" />
              Save Changes
            </AdminButton>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default SocialSettings;
