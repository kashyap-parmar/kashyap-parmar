'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import {
  AdminButton,
  AdminCard,
  AdminTable,
  AdminPagination,
  AdminBreadcrumb,
  AdminInput,
  AdminModal,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { clients, projects } from '@/mock/clientProjectData';

const ClientsPage = () => {
  const [clientList, setClientList] = useState(clients);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, client: null });

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Clients' },
  ];

  const getProjectCount = (clientId) => {
    return projects.filter((p) => p.clientIds.includes(clientId)).length;
  };

  const handleDelete = () => {
    setClientList(clientList.filter((c) => c.id !== deleteModal.client.id));
    setDeleteModal({ isOpen: false, client: null });
  };

  const columns = [
    {
      header: 'Name',
      accessor: 'firstname',
      render: (row) => (
        <Link
          href={`/admin/clients/${row.id}`}
          className="font-medium text-primary hover:text-blue-700 transition-colors"
        >
          {row.firstname} {row.lastname}
        </Link>
      ),
    },
    {
      header: 'Email',
      accessor: 'email',
    },
    {
      header: 'Phone',
      accessor: 'phone',
      render: (row) => row.phone || '-',
    },
    {
      header: 'LinkedIn',
      accessor: 'linkedin',
      render: (row) =>
        row.linkedin ? (
          <a
            href={row.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            <Icon icon="mdi:linkedin" className="w-5 h-5" />
          </a>
        ) : (
          '-'
        ),
    },
    {
      header: 'Website',
      accessor: 'website',
      render: (row) =>
        row.website ? (
          <a
            href={row.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-blue-700"
          >
            <Icon icon="mdi:web" className="w-5 h-5" />
          </a>
        ) : (
          '-'
        ),
    },
    {
      header: 'Projects',
      accessor: 'id',
      render: (row) => (
        <span className="font-semibold text-gray-900 dark:text-white">
          {getProjectCount(row.id)}
        </span>
      ),
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: (row) => (
        <div className="flex items-center gap-2">
          <Link href={`/admin/clients/${row.id}/edit`}>
            <button
              className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
              data-testid={`edit-client-${row.id}`}
            >
              <Icon icon="mdi:pencil" className="w-5 h-5" />
            </button>
          </Link>
          <button
            onClick={() => setDeleteModal({ isOpen: true, client: row })}
            className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
            data-testid={`delete-client-${row.id}`}
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="clients-title">
              Clients
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your client relationships
            </p>
          </div>
          <Link href="/admin/clients/create">
            <AdminButton
              variant="primary"
              icon={<Icon icon="mdi:plus" />}
              data-testid="create-client-btn"
            >
              Add New Client
            </AdminButton>
          </Link>
        </div>

        {/* Search */}
        <AdminCard>
          <AdminInput
            placeholder="Search clients by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<Icon icon="mdi:magnify" className="text-gray-400" />}
            data-testid="search-input"
          />
        </AdminCard>

        {/* Clients Table */}
        <AdminCard padding={false}>
          <AdminTable columns={columns} data={clientList} />
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <AdminPagination
              currentPage={currentPage}
              totalPages={3}
              onPageChange={setCurrentPage}
            />
          </div>
        </AdminCard>

        {/* Delete Modal */}
        <AdminModal
          isOpen={deleteModal.isOpen}
          onClose={() => setDeleteModal({ isOpen: false, client: null })}
          title="Delete Client"
          footer={
            <>
              <AdminButton
                variant="secondary"
                onClick={() => setDeleteModal({ isOpen: false, client: null })}
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
            Are you sure you want to delete{' '}
            <strong>
              {deleteModal.client?.firstname} {deleteModal.client?.lastname}
            </strong>
            ? This action cannot be undone.
          </p>
        </AdminModal>
      </div>
    </AdminLayout>
  );
};

export default ClientsPage;