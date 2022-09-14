import { Link } from 'react-router-dom';
import { Flex } from 'styles/common';
import Avatar from './Avatar';
import { StyledProjectCard } from './ProjectCard.styles';

const ProjectCard = ({ id, name, dueDate, assignTo }) => {
  console.count('[Component <ProjectCard/> rendered] ');
  return (
    <StyledProjectCard>
      <Link to={`/projects/${id}`}>
        <div>
          <h4>{name}</h4>
          <p>Due by {new Date(dueDate).toDateString()}</p>
        </div>
        <Flex>
          {assignTo.map((user) => (
            <Avatar key={user.value.id} photoURL={user.value.photoURL} />
          ))}
        </Flex>
      </Link>
    </StyledProjectCard>
  );
};
export default ProjectCard;
