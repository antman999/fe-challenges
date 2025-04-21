import React, { type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChallengeLayoutProps {
  title: string;
  component: ReactNode;
  markdown: string;
}

const ChallengeLayout: React.FC<ChallengeLayoutProps> = ({
  title,
  component,
  markdown,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">{title}</h1>
        <section className="mb-10 border border-gray-200 rounded-lg p-6 bg-white shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Finished component
          </h2>
          {component}
        </section>
        <section className="prose prose-sm max-w-none prose-h2:my-2 prose-p:text-base prose-ul:text-base prose-h2:underline text-gray-700">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </section>
      </div>
    </div>
  );
};

export default ChallengeLayout;
