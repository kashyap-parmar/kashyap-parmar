'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  AdminButton,
  AdminCard,
  AdminBreadcrumb,
  AdminBadge,
  AdminModal,
  AdminInput,
  AdminTextarea,
  AdminSelect,
  AdminAlert,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { projects, modules, subtasks, statusConfig, priorityConfig } from '@/mock/clientProjectData';

const KanbanBoard = () => {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.projectId);
  const moduleId = parseInt(params.moduleId);
  
  const project = projects.find((p) => p.id === projectId);
  const module = modules.find((m) => m.id === moduleId);
  const [moduleSubtasks, setModuleSubtasks] = useState(
    subtasks.filter((s) => s.moduleId === moduleId)
  );

  const [previewSubtask, setPreviewSubtask] = useState(null);
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [success, setSuccess] = useState(false);

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
    { label: 'Board' },
  ];

  const kanbanColumns = [
    { status: 'todo', label: 'Todo', color: 'gray' },
    { status: 'inprogress', label: 'In Progress', color: 'blue' },
    { status: 'code_review', label: 'Code Review', color: 'purple' },
    { status: 'bugs', label: 'Bugs', color: 'red' },
    { status: 'completed', label: 'Completed', color: 'green' },
    { status: 'add_ons', label: 'Add Ons', color: 'orange' },
  ];

  const statusOptions = statusConfig.module.map((s) => ({
    value: s.value,
    label: s.label,
  }));

  const priorityOptions = priorityConfig.map((p) => ({
    value: p.value,
    label: p.label,
  }));

  const handleCreateSubtask = (e) => {
    e.preventDefault();
    setSuccess(true);
    setCreateModal(false);
    setFormData({
      title: '',
      description: '',
      estimatedTime: '',
      assignee: '',
      priority: '',
      status: 'todo',
    });
    setTimeout(() => setSuccess(false), 3000);
  };

  const handleEditSubtask = (e) => {
    e.preventDefault();
    setSuccess(true);
    setEditModal(null);
    setTimeout(() => setSuccess(false), 3000);
  };

  const openCreateModal = () => {
    setFormData({
      title: '',
      description: '',
      estimatedTime: '',
      assignee: '',
      priority: '',
      status: 'todo',
    });
    setCreateModal(true);
  };

  const openEditModal = (subtask) => {
    setFormData({
      title: subtask.title,
      description: subtask.description,
      estimatedTime: subtask.estimatedTime,
      assignee: subtask.assignee,
      priority: subtask.priority,
      status: subtask.status,
    });
    setEditModal(subtask);
  };

  const getSubtasksByStatus = (status) => {
    return moduleSubtasks.filter((s) => s.status === status);
  };

  const priorityColors = {
    high: 'danger',
    medium: 'warning',
    low: 'success',
  };

  if (!project || !module) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">Module or Project not found</p>
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

        {/* Success Alert */}
        {success && (
          <AdminAlert
            type="success"
            title="Success!"
            message="Subtask saved successfully"
            onClose={() => setSuccess(false)}
          />
        )}

        {/* Module Header */}
        <AdminCard>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                  {module.ref_id}
                </span>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white" data-testid="board-title">
                  {module.title}
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {module.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Icon icon="mdi:clock-outline" className="w-4 h-4" />
                  {module.estimatedTime}
                </span>
                {module.assignee && (
                  <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Icon icon="mdi:account" className="w-4 h-4" />
                    {module.assignee}
                  </span>
                )}
                {module.priority && (
                  <AdminBadge variant={priorityColors[module.priority]} size="sm">
                    {module.priority}
                  </AdminBadge>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href={`/admin/projects/${projectId}/modules/${moduleId}/edit`}>
                <AdminButton variant="secondary" icon={<Icon icon="mdi:pencil" />}>
                  Edit Module
                </AdminButton>
              </Link>
              <AdminButton
                variant="primary"
                icon={<Icon icon="mdi:plus" />}
                onClick={openCreateModal}
                data-testid="create-subtask-btn"
              >
                Add Subtask
              </AdminButton>
            </div>
          </div>
        </AdminCard>

        {/* Kanban Board */}
        <div className="overflow-x-auto pb-4">
          <div className="inline-flex gap-4 min-w-full">
            {kanbanColumns.map((column) => {
              const columnSubtasks = getSubtasksByStatus(column.status);
              
              return (
                <div
                  key={column.status}
                  className="w-80 flex-shrink-0"
                >
                  {/* Column Header */}
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-t-lg px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {column.label}
                      </h3>
                      <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-full">
                        {columnSubtasks.length}
                      </span>
                    </div>
                  </div>

                  {/* Column Content */}
                  <div className="bg-gray-50 dark:bg-gray-900/30 rounded-b-lg p-4 min-h-[500px] space-y-3">
                    {columnSubtasks.map((subtask) => (
                      <div
                        key={subtask.id}
                        onClick={() => setPreviewSubtask(subtask)}
                        className="bg-white dark:bg-[#020817]/70 border border-gray-200 dark:border-gray-700 rounded-lg p-4 cursor-pointer hover:shadow-md transition-all"
                        data-testid={`subtask-card-${subtask.id}`}
                      >
                        {/* Subtask Header */}
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                            {subtask.ref_id}
                          </span>
                          {subtask.priority && (
                            <AdminBadge
                              variant={priorityColors[subtask.priority]}
                              size="sm"
                            >
                              {subtask.priority}
                            </AdminBadge>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
                          {subtask.title}
                        </h4>

                        {/* Description */}
                        {subtask.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                            {subtask.description}
                          </p>
                        )}

                        {/* Footer */}
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-3">
                            {subtask.estimatedTime && (
                              <span className="flex items-center gap-1">
                                <Icon icon="mdi:clock-outline" className="w-3 h-3" />
                                {subtask.estimatedTime}
                              </span>
                            )}
                            {subtask.comments > 0 && (
                              <span className="flex items-center gap-1">
                                <Icon icon="mdi:comment-outline" className="w-3 h-3" />
                                {subtask.comments}
                              </span>
                            )}
                          </div>
                          {subtask.assignee && (
                            <div className="flex items-center gap-1">
                              <Icon icon="mdi:account" className="w-3 h-3" />
                              <span className="truncate max-w-[100px]">{subtask.assignee}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {columnSubtasks.length === 0 && (
                      <div className="text-center py-8 text-gray-400 dark:text-gray-600 text-sm">
                        No tasks
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subtask Preview Modal */}
        <AdminModal
          isOpen={!!previewSubtask}
          onClose={() => setPreviewSubtask(null)}
          title={previewSubtask?.title || 'Subtask Details'}
          size="lg"
        >
          {previewSubtask && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                  {previewSubtask.ref_id}
                </span>
                {previewSubtask.priority && (
                  <AdminBadge variant={priorityColors[previewSubtask.priority]}>
                    {previewSubtask.priority}
                  </AdminBadge>
                )}
                <AdminBadge variant="primary" className="capitalize">
                  {previewSubtask.status.replace('_', ' ')}
                </AdminBadge>
              </div>
              
              {previewSubtask.description && (
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Description</p>
                  <p className="text-gray-900 dark:text-white">{previewSubtask.description}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Estimated Time</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {previewSubtask.estimatedTime || '-'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Assignee</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {previewSubtask.assignee || '-'}
                  </p>
                </div>
              </div>

              {previewSubtask.comments > 0 && (
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Comments ({previewSubtask.comments})
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 text-sm text-gray-600 dark:text-gray-400">
                    Comments section UI placeholder
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <AdminButton
                  variant="secondary"
                  onClick={() => {
                    setPreviewSubtask(null);
                    openEditModal(previewSubtask);
                  }}
                >
                  <Icon icon="mdi:pencil" className="mr-2" />
                  Edit Subtask
                </AdminButton>
              </div>
            </div>
          )}
        </AdminModal>

        {/* Create Subtask Modal */}
        <AdminModal
          isOpen={createModal}
          onClose={() => setCreateModal(false)}
          title="Create New Subtask"
          size="lg"
        >
          <form onSubmit={handleCreateSubtask} className="space-y-6">
            <AdminInput
              label="Reference ID"
              placeholder="SUB-XXX (auto-generated)"
              disabled
              helperText="Auto-generated upon creation"
            />
            <AdminInput
              label="Subtask Title"
              placeholder="Enter subtask title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              data-testid="subtask-title-input"
            />
            <AdminTextarea
              label="Description"
              placeholder="Detailed description (optional)"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              data-testid="subtask-description-textarea"
            />
            <div className="grid grid-cols-2 gap-4">
              <AdminInput
                label="Time Estimation"
                placeholder="e.g., 4h (optional)"
                value={formData.estimatedTime}
                onChange={(e) => setFormData({ ...formData, estimatedTime: e.target.value })}
                data-testid="subtask-time-input"
              />
              <AdminInput
                label="Assignee"
                placeholder="Enter name (optional)"
                value={formData.assignee}
                onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
                data-testid="subtask-assignee-input"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <AdminSelect
                label="Priority"
                options={priorityOptions}
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                placeholder="Select priority (optional)"
                data-testid="subtask-priority-select"
              />
              <AdminSelect
                label="Status"
                options={statusOptions}
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                required
                data-testid="subtask-status-select"
              />
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <AdminButton
                type="button"
                variant="secondary"
                onClick={() => setCreateModal(false)}
              >
                Cancel
              </AdminButton>
              <AdminButton type="submit" variant="primary">
                <Icon icon="mdi:content-save" className="mr-2" />
                Create Subtask
              </AdminButton>
            </div>
          </form>
        </AdminModal>

        {/* Edit Subtask Modal */}
        <AdminModal
          isOpen={!!editModal}
          onClose={() => setEditModal(null)}
          title="Edit Subtask"
          size="lg"
        >
          {editModal && (
            <form onSubmit={handleEditSubtask} className="space-y-6">
              <AdminInput
                label="Reference ID"
                value={editModal.ref_id}
                disabled
              />
              <AdminInput
                label="Subtask Title"
                placeholder="Enter subtask title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                data-testid="edit-subtask-title-input"
              />
              <AdminTextarea
                label="Description"
                placeholder="Detailed description (optional)"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                data-testid="edit-subtask-description-textarea"
              />
              <div className="grid grid-cols-2 gap-4">
                <AdminInput
                  label="Time Estimation"
                  placeholder="e.g., 4h (optional)"
                  value={formData.estimatedTime}
                  onChange={(e) => setFormData({ ...formData, estimatedTime: e.target.value })}
                  data-testid="edit-subtask-time-input"
                />
                <AdminInput
                  label="Assignee"
                  placeholder="Enter name (optional)"
                  value={formData.assignee}
                  onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
                  data-testid="edit-subtask-assignee-input"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <AdminSelect
                  label="Priority"
                  options={priorityOptions}
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  placeholder="Select priority (optional)"
                  data-testid="edit-subtask-priority-select"
                />
                <AdminSelect
                  label="Status"
                  options={statusOptions}
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  required
                  data-testid="edit-subtask-status-select"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <AdminButton
                  type="button"
                  variant="secondary"
                  onClick={() => setEditModal(null)}
                >
                  Cancel
                </AdminButton>
                <AdminButton type="submit" variant="primary">
                  <Icon icon="mdi:content-save" className="mr-2" />
                  Update Subtask
                </AdminButton>
              </div>
            </form>
          )}
        </AdminModal>
      </div>
    </AdminLayout>
  );
};

export default KanbanBoard;
