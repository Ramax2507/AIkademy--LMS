// Sidebar.jsx placeholder
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ modules = [], currentModuleId }) => {
  const location = useLocation();

  return (
    <aside className="w-64 h-full bg-gray-100 p-4 border-r hidden md:block">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Modules</h2>
      <ul className="space-y-2">
        {modules.map((module, index) => (
          <li key={module.id}>
            <Link
              to={`/course/module/${module.id}`}
              className={`block px-3 py-2 rounded-md text-sm font-medium
                ${currentModuleId === module.id || location.pathname.includes(module.id)
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-blue-100'}
              `}
            >
              {index + 1}. {module.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
