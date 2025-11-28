import toast from 'react-hot-toast';

/**
 * Toast Notification Utility
 * 
 * Provides consistent toast notifications across the app
 * All toasts auto-dismiss after 3 seconds
 * Positioned at top-right corner
 */

const defaultOptions = {
  duration: 3000,
  position: 'top-right',
  style: {
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '14px',
    maxWidth: '500px',
  },
};

export const showToast = {
  success: (message) => {
    toast.success(message, {
      ...defaultOptions,
      icon: '✅',
      style: {
        ...defaultOptions.style,
        background: '#10b981',
        color: '#fff',
      },
    });
  },

  error: (message) => {
    toast.error(message, {
      ...defaultOptions,
      icon: '❌',
      style: {
        ...defaultOptions.style,
        background: '#ef4444',
        color: '#fff',
      },
    });
  },

  warning: (message) => {
    toast(message, {
      ...defaultOptions,
      icon: '⚠️',
      style: {
        ...defaultOptions.style,
        background: '#f97316',
        color: '#fff',
      },
    });
  },

  info: (message) => {
    toast(message, {
      ...defaultOptions,
      icon: 'ℹ️',
      style: {
        ...defaultOptions.style,
        background: '#2563eb',
        color: '#fff',
      },
    });
  },

  loading: (message) => {
    return toast.loading(message, {
      ...defaultOptions,
      style: {
        ...defaultOptions.style,
        background: '#6b7280',
        color: '#fff',
      },
    });
  },

  // For updating loading toasts
  dismiss: (toastId) => {
    toast.dismiss(toastId);
  },

  // Promise-based toast (useful for async operations)
  promise: (promise, messages) => {
    return toast.promise(
      promise,
      {
        loading: messages.loading || 'Loading...',
        success: messages.success || 'Success!',
        error: messages.error || 'Error occurred',
      },
      {
        ...defaultOptions,
        success: {
          style: {
            ...defaultOptions.style,
            background: '#10b981',
            color: '#fff',
          },
        },
        error: {
          style: {
            ...defaultOptions.style,
            background: '#ef4444',
            color: '#fff',
          },
        },
      }
    );
  },
};

export default showToast;
