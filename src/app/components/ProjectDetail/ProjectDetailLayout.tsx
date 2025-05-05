'use client';

import React from 'react';
import ProjectActions from './ProjectActions';

interface ProjectInfoProps {
  name: string;
  location: string;
  status: string;
  description: string;
  brochureUrl?: string;
}

interface ProjectDetailLayoutProps {
  projectInfo: ProjectInfoProps;
  children: React.ReactNode;
}

const ProjectDetailLayout: React.FC<ProjectDetailLayoutProps> = ({ projectInfo, children }) => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Project Info (Sticky) */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 lg:max-height-[calc(100vh-120px)] overflow-y-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {projectInfo.name}
            </h1>
            
            <div className="mb-4">
              <div className="flex items-start mb-2">
                <span className="font-medium text-gray-700 mr-2 w-20">Location:</span>
                <span className="text-gray-600">{projectInfo.location}</span>
              </div>
              
              <div className="flex items-start mb-2">
                <span className="font-medium text-gray-700 mr-2 w-20">Status:</span>
                <span className={`${
                  projectInfo.status.toLowerCase() === 'ongoing' 
                    ? 'text-green-600' 
                    : 'text-primary-blue-300'
                } font-medium`}>
                  {projectInfo.status}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              {projectInfo.description}
            </p>
            
            <ProjectActions 
              projectName={projectInfo.name}
              propertyType="property"
              brochureUrl={projectInfo.brochureUrl}
            />
          </div>
        </div>
        
        {/* Right Column - Content */}
        <div className="lg:col-span-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailLayout; 