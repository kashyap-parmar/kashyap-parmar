'use client';
import { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const ImageUploader = ({ label, value, onChange, error, helperText, className = '' }) => {
  const [preview, setPreview] = useState(value || null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        onChange && onChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onChange && onChange(null);
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center ${
          error
            ? 'border-red-500'
            : 'border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary'
        } transition-colors`}
      >
        {preview ? (
          <div className="relative">
            <div className="relative w-full h-48 mb-4">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Change Image
              </button>
              <button
                type="button"
                onClick={handleRemove}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <div
            className="cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <Icon
              icon="mdi:cloud-upload"
              className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-600 mb-2"
            />
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
              Click to upload or drag and drop
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
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

export default ImageUploader;