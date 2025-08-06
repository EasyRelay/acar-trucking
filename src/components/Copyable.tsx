import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export const CopyableField = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <span
      onClick={handleCopy}
      className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition"
    >
      <strong>{label}</strong> {value}
      {copied ? (
        <Check size={16} className="text-green-500" />
      ) : (
        <Copy size={16} className="text-gray-400 hover:text-gray-600" />
      )}
    </span>
  );
};