'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
  AdminButton,
  AdminCard,
  AdminBreadcrumb,
  AdminModal,
  AdminImageUploader,
  AdminInput,
  AdminSelect,
  AdminAlert,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { adminGalleryImages } from '@/mock/adminData';

const AdminGallery = () => {
  const [images, setImages] = useState(adminGalleryImages);
  const [uploadModal, setUploadModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, image: null });
  const [selectedImage, setSelectedImage] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [imageTitle, setImageTitle] = useState('');
  const [imageCategory, setImageCategory] = useState('');
  const [success, setSuccess] = useState(false);

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Gallery' },
  ];

  const categoryOptions = [
    { value: 'screenshots', label: 'Screenshots' },
    { value: 'mockups', label: 'Mockups' },
    { value: 'illustrations', label: 'Illustrations' },
    { value: 'other', label: 'Other' },
  ];

  const handleUpload = () => {
    if (newImage && imageTitle) {
      const newImageData = {
        id: images.length + 1,
        title: imageTitle,
        url: '/images/projectImg.jpg',
        category: imageCategory || 'Other',
        uploadedAt: new Date().toISOString().split('T')[0],
      };
      setImages([newImageData, ...images]);
      setUploadModal(false);
      setNewImage(null);
      setImageTitle('');
      setImageCategory('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  const handleDelete = () => {
    setImages(images.filter((img) => img.id !== deleteModal.image.id));
    setDeleteModal({ isOpen: false, image: null });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <AdminBreadcrumb items={breadcrumbItems} />

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="gallery-title">
              Media Gallery
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your portfolio images and media files
            </p>
          </div>
          <AdminButton
            variant="primary"
            icon={<Icon icon="mdi:cloud-upload" />}
            onClick={() => setUploadModal(true)}
            data-testid="upload-media-btn"
          >
            Upload Media
          </AdminButton>
        </div>

        {/* Success Alert */}
        {success && (
          <AdminAlert
            type="success"
            title="Success!"
            message="Image uploaded successfully"
            onClose={() => setSuccess(false)}
          />
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <AdminCard
              key={image.id}
              padding={false}
              hoverable
              className="group overflow-hidden"
            >
              <div className="relative aspect-video">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="p-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                    data-testid={`view-image-${image.id}`}
                  >
                    <Icon icon="mdi:eye" className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setDeleteModal({ isOpen: true, image })}
                    className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    data-testid={`delete-image-${image.id}`}
                  >
                    <Icon icon="mdi:delete" className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {image.category} • {image.uploadedAt}
                </p>
              </div>
            </AdminCard>
          ))}
        </div>

        {/* Upload Modal */}
        <AdminModal
          isOpen={uploadModal}
          onClose={() => setUploadModal(false)}
          title="Upload New Image"
          size="md"
          footer={
            <>
              <AdminButton variant="secondary" onClick={() => setUploadModal(false)}>
                Cancel
              </AdminButton>
              <AdminButton variant="primary" onClick={handleUpload}>
                Upload
              </AdminButton>
            </>
          }
        >
          <div className="space-y-6">
            <AdminImageUploader
              label="Select Image"
              value={newImage}
              onChange={setNewImage}
            />
            <AdminInput
              label="Image Title"
              placeholder="Enter image title"
              value={imageTitle}
              onChange={(e) => setImageTitle(e.target.value)}
              required
              data-testid="image-title-input"
            />
            <AdminSelect
              label="Category"
              options={categoryOptions}
              value={imageCategory}
              onChange={(e) => setImageCategory(e.target.value)}
              data-testid="image-category-select"
            />
          </div>
        </AdminModal>

        {/* View Modal */}
        <AdminModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title={selectedImage?.title || 'Image Preview'}
          size="lg"
        >
          {selectedImage && (
            <div className="space-y-4">
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Category</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {selectedImage.category}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Uploaded</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {selectedImage.uploadedAt}
                  </p>
                </div>
              </div>
            </div>
          )}
        </AdminModal>

        {/* Delete Modal */}
        <AdminModal
          isOpen={deleteModal.isOpen}
          onClose={() => setDeleteModal({ isOpen: false, image: null })}
          title="Delete Image"
          footer={
            <>
              <AdminButton
                variant="secondary"
                onClick={() => setDeleteModal({ isOpen: false, image: null })}
              >
                Cancel
              </AdminButton>
              <AdminButton variant="danger" onClick={handleDelete}>
                Delete
              </AdminButton>
            </>
          }
        >
          <p className="text-gray-700 dark:text-gray-300">
            Are you sure you want to delete <strong>{deleteModal.image?.title}</strong>?
            This action cannot be undone.
          </p>
        </AdminModal>
      </div>
    </AdminLayout>
  );
};

export default AdminGallery;