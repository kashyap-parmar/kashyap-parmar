'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AdminButton,
  AdminCard,
  AdminTable,
  AdminPagination,
  AdminBreadcrumb,
  AdminBadge,
  AdminInput,
  AdminSelect,
  AdminModal,
  AdminEmptyState,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { adminProjects } from '@/mock/adminData';

const AdminProjects = () => {
  const [projects, setProjects] = useState(adminProjects);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, project: null });

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Projects' },
  ];

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'published', label: 'Published' },
    { value: 'draft', label: 'Draft' },
  ];

  const handleDelete = () => {
    setProjects(projects.filter((p) => p.id !== deleteModal.project.id));
    setDeleteModal({ isOpen: false, project: null });
  };

  const columns = [
    {
      header: 'Project',
      accessor: 'title',
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden">
            <Image src={row.thumbnail} alt={row.title} fill className="object-cover" />
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">{row.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{row.slug}</p>
          </div>
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => (
        <AdminBadge
          variant={row.status === 'published' ? 'success' : 'warning'}
          className="capitalize"
        >
          {row.status}
        </AdminBadge>
      ),
    },
    {
      header: 'Category',
      accessor: 'category',
    },
    {
      header: 'Featured',
      accessor: 'featured',
      render: (row) => (
        <span>
          {row.featured ? (
            <Icon icon="mdi:star" className="w-5 h-5 text-yellow-500" />
          ) : (
            <Icon icon="mdi:star-outline" className="w-5 h-5 text-gray-400" />
          )}
        </span>
      ),
    },
    {
      header: 'Updated',
      accessor: 'updatedAt',
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: (row) => (
        <div className="flex items-center gap-2">
          <Link href={`/admin/projects/${row.id}/edit`}>
            <button
              className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
              data-testid={`edit-project-${row.id}`}
            >
              <Icon icon="mdi:pencil" className="w-5 h-5" />
            </button>
          </Link>
          <button
            onClick={() => setDeleteModal({ isOpen: true, project: row })}
            className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
            data-testid={`delete-project-${row.id}`}
          >
            <Icon icon="mdi:delete" className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <AdminBreadcrumb items={breadcrumbItems} />

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="projects-title">
              Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage all your portfolio projects
            </p>
          </div>
          <Link href="/admin/projects/create">
            <AdminButton
              variant="primary"
              icon={<Icon icon="mdi:plus" />}
              data-testid="create-project-btn"
            >
              Add New Project
            </AdminButton>
          </Link>
        </div>

        {/* Filters */}
        <AdminCard>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AdminInput
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<Icon icon="mdi:magnify" className="text-gray-400" />}
              data-testid="search-input"
            />
            <AdminSelect
              options={statusOptions}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              placeholder="Filter by status"
              data-testid="status-filter"
            />
            <AdminButton variant="outline" fullWidth>
              <Icon icon="mdi:filter" className="mr-2" />
              More Filters
            </AdminButton>
          </div>
        </AdminCard>

        {/* Projects Table */}
        <AdminCard padding={false}>
          {projects.length > 0 ? (
            <>
              <AdminTable columns={columns} data={projects} />
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <AdminPagination
                  currentPage={currentPage}
                  totalPages={5}
                  onPageChange={setCurrentPage}
                />
              </div>
            </>
          ) : (
            <AdminEmptyState
              icon="mdi:folder-open"
              title="No projects found"
              description="Get started by creating your first project"
              action="Create Project"
              onAction={() => {}}
            />
          )}
        </AdminCard>

        {/* Delete Modal */}
        <AdminModal
          isOpen={deleteModal.isOpen}
          onClose={() => setDeleteModal({ isOpen: false, project: null })}
          title="Delete Project"
          footer={
            <>
              <AdminButton
                variant="secondary"
                onClick={() => setDeleteModal({ isOpen: false, project: null })}
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
            Are you sure you want to delete <strong>{deleteModal.project?.title}</strong>?
            This action cannot be undone.
          </p>
        </AdminModal>
      </div>
    </AdminLayout>
  );
};

export default AdminProjects;