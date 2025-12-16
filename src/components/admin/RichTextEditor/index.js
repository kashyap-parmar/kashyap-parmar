'use client';
import { useState, useRef } from 'react';
import { Icon } from '@iconify/react';

const RichTextEditor = ({ label, value, onChange, error, helperText, className = '' }) => {
  const textareaRef = useRef(null);

  const formatText = (command, value = null) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    let newText = textarea.value;

    switch (command) {
      case 'bold':
        newText = textarea.value.substring(0, start) + `**${selectedText}**` + textarea.value.substring(end);
        break;
      case 'italic':
        newText = textarea.value.substring(0, start) + `*${selectedText}*` + textarea.value.substring(end);
        break;
      case 'underline':
        newText = textarea.value.substring(0, start) + `__${selectedText}__` + textarea.value.substring(end);
        break;
      case 'strikethrough':
        newText = textarea.value.substring(0, start) + `~~${selectedText}~~` + textarea.value.substring(end);
        break;
      case 'h1':
        newText = textarea.value.substring(0, start) + `# ${selectedText}` + textarea.value.substring(end);
        break;
      case 'h2':
        newText = textarea.value.substring(0, start) + `## ${selectedText}` + textarea.value.substring(end);
        break;
      case 'h3':
        newText = textarea.value.substring(0, start) + `### ${selectedText}` + textarea.value.substring(end);
        break;
      case 'ul':
        newText = textarea.value.substring(0, start) + `\n- ${selectedText}` + textarea.value.substring(end);
        break;
      case 'ol':
        newText = textarea.value.substring(0, start) + `\n1. ${selectedText}` + textarea.value.substring(end);
        break;
      case 'link':
        newText = textarea.value.substring(0, start) + `[${selectedText}](url)` + textarea.value.substring(end);
        break;
      case 'code':
        newText = textarea.value.substring(0, start) + `\`${selectedText}\`` + textarea.value.substring(end);
        break;
      default:
        break;
    }

    onChange({ target: { value: newText } });
    textarea.focus();
  };

  const toolbarButtons = [
    { command: 'h1', icon: 'mdi:format-header-1', title: 'Heading 1' },
    { command: 'h2', icon: 'mdi:format-header-2', title: 'Heading 2' },
    { command: 'h3', icon: 'mdi:format-header-3', title: 'Heading 3' },
    { command: 'bold', icon: 'mdi:format-bold', title: 'Bold' },
    { command: 'italic', icon: 'mdi:format-italic', title: 'Italic' },
    { command: 'underline', icon: 'mdi:format-underline', title: 'Underline' },
    { command: 'strikethrough', icon: 'mdi:format-strikethrough', title: 'Strikethrough' },
    { command: 'ul', icon: 'mdi:format-list-bulleted', title: 'Bullet List' },
    { command: 'ol', icon: 'mdi:format-list-numbered', title: 'Numbered List' },
    { command: 'link', icon: 'mdi:link', title: 'Insert Link' },
    { command: 'code', icon: 'mdi:code-tags', title: 'Inline Code' },
  ];

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <div
        className={`bg-white dark:bg-[#020817]/70 border rounded-lg overflow-hidden ${
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
        }`}
      >
        {/* Toolbar */}
        <div className="border-b border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 p-2 flex flex-wrap gap-1">
          {toolbarButtons.map((btn) => (
            <button
              key={btn.command}
              type="button"
              onClick={() => formatText(btn.command)}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
              title={btn.title}
            >
              <Icon icon={btn.icon} className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          ))}
        </div>

        {/* Editor */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={onChange}
          className="w-full h-64 p-4 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none resize-none font-mono text-sm"
          placeholder="Write your content here... Use markdown syntax for formatting."
        />
      </div>

      {/* Helper Text */}
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        <p>Tip: Select text and click toolbar buttons to apply formatting (Markdown syntax)</p>
      </div>

      {error && helperText && (
        <p className="mt-1 text-sm text-red-500">{helperText}</p>
      )}
      {!error && helperText && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
};

export default RichTextEditor;