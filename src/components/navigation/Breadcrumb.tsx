import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="mb-8">
      <ol className="flex items-center space-x-2 text-accent-cream/80">
        {items.map((item, index) => (
          <React.Fragment key={item.path}>
            <li>
              <a
                href={item.path}
                className="hover:text-accent-gold transition-colors"
              >
                {item.label}
              </a>
            </li>
            {index < items.length - 1 && (
              <li>
                <ChevronRight className="w-4 h-4" />
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};