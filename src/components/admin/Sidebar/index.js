'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [expandedMenu, setExpandedMenu] = useState(null);

  const menuItems = [
    {
      title: 'Dashboard',
      icon: 'mdi:view-dashboard',
      href: '/admin/dashboard',
    },
    {
      title: 'Projects',
      icon: 'mdi:folder-multiple',
      submenu: [
        { title: 'All Projects', href: '/admin/projects' },
        { title: 'Add New', href: '/admin/projects/create' },
      ],
    },
    {
      title: 'Gallery',
      icon: 'mdi:image-multiple',
      href: '/admin/gallery',
    },
    {
      title: 'Settings',
      icon: 'mdi:cog',
      submenu: [
        { title: 'Profile', href: '/admin/settings/profile' },
        { title: 'Social Links', href: '/admin/settings/social' },
        { title: 'Theme', href: '/admin/settings/theme' },
      ],
    },
  ];

  const toggleSubmenu = (index) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  const isActive = (href) => pathname === href;
  const hasActiveChild = (submenu) => submenu?.some((item) => pathname === item.href);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-20 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-full w-64 bg-white dark:bg-[#020817]/90 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700">
            <Link href="/admin/dashboard" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Admin</span>
            </Link>
            <button
              onClick={onClose}
              className="lg:hidden text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <Icon icon="mdi:close" className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                          hasActiveChild(item.submenu)
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <div className="flex items-center">
                          <Icon icon={item.icon} className="w-5 h-5 mr-3" />
                          <span className="font-medium">{item.title}</span>
                        </div>
                        <Icon
                          icon="mdi:chevron-down"
                          className={`w-5 h-5 transition-transform ${
                            expandedMenu === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedMenu === index && (
                        <ul className="mt-2 ml-4 space-y-1">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                className={`block px-4 py-2 rounded-lg transition-colors ${
                                  isActive(subItem.href)
                                    ? 'bg-primary text-white'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'bg-primary text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <Icon icon={item.icon} className="w-5 h-5 mr-3" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/"
              className="flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Icon icon="mdi:arrow-left" className="w-5 h-5 mr-3" />
              <span className="font-medium">Back to Site</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;