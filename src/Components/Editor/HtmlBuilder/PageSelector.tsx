import { selectProjectId, setProjectId } from '@/Redux/ProjectStructure/Project';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface Page {
  _id: string;
  projectId: string;
  name: string;
  html: string;
  css: string;
}

function PageSelector() {
  const [pages, setPages] = useState<Page[]>([]);
  const projectid = useSelector(selectProjectId);

  console.log(projectid)

  
  useEffect(() => {
    async function fetchPages() {
      const res = await fetch(`/api/Pages/pages?projectId=${projectid}`);
      const data = await res.json();
      console.log(data)
      setPages(data);
    }
    fetchPages();
  }, [projectid]);

  
  return (
    <div>
    <h2>Select a Page</h2>
    <select className="h-8 w-full bg-zinc-800">
      {pages.length > 0 && pages.map((page) => (
        <option key={page._id} value={page._id}>
          {page.name}
        </option>
      ))}
    </select>
  </div>
  
  );
}

export default PageSelector;
