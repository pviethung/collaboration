import ProjectCard from 'components/ProjectCard';
import { useFirestore } from 'hooks/useFirestore';
import { useEffect } from 'react';
import { Flex } from 'styles/common';
import { StyledHome } from './styles';

const Home = () => {
  console.count('[Component <Home/> rendered] ');
  const { onSnapshotCollection: onProjectsChange, collectionData: projects } =
    useFirestore('projects');

  useEffect(() => {
    const unsub = onProjectsChange();
    return () => {
      console.log('[Home unmouned]');
      unsub();
    };
  }, [onProjectsChange]);

  if (!projects) return <>Loading...Home</>;

  console.log(projects);

  return (
    <StyledHome>
      <Flex wrap="wrap">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Flex>
    </StyledHome>
  );
};
export default Home;
