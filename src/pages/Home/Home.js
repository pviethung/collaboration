import ProjectCard from 'components/ProjectCard';
import { useAuthContext } from 'hooks/useAuthContext';
import { useFirestore } from 'hooks/useFirestore';
import { useEffect, useState } from 'react';
import { Flex } from 'styles/common';
import { StyledHome } from './styles';

const filterList = [
  'all',
  'mine',
  'development',
  'design',
  'marketing',
  'sales',
];

const Home = () => {
  console.count('[Component <Home/> rendered] ');
  const { user } = useAuthContext();
  const [currentFilter, setCurrentFilter] = useState('all');
  const { onSnapshotCollection: onProjectsChange, collectionData: projects } =
    useFirestore('projects');
  const filterHandler = (filter) => {
    setCurrentFilter(filter);
  };
  useEffect(() => {
    const unsub = onProjectsChange();
    return () => {
      console.log('[Home unmouned]');
      unsub();
    };
  }, [onProjectsChange]);

  if (!projects) return <>Loading...Home</>;

  let filteredProjects = null;
  if (currentFilter === 'all') {
    filteredProjects = projects;
  } else if (currentFilter === 'mine') {
    filteredProjects = projects.filter(
      (project) => project.createdBy.id === user.uid
    );
  } else {
    filteredProjects = projects.filter(
      (project) => project.category === currentFilter
    );
  }

  return (
    <StyledHome>
      <ul>
        <li>Filter by</li>
        {filterList.map((filter, idx) => (
          <li key={idx}>
            <button
              onClick={() => filterHandler(filter)}
              className={currentFilter === filter ? 'active' : ''}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
      <Flex wrap="wrap">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Flex>
    </StyledHome>
  );
};
export default Home;
