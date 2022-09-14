import Avatar from 'components/Avatar';
import { format } from 'date-fns';
import { useAuthContext } from 'hooks/useAuthContext';
import { useFirestore } from 'hooks/useFirestore';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Flex } from 'styles/common';
import ProjectComments from './ProjectComments';
import { StyledProjectDetails } from './styles';

const Project = () => {
  console.count('[Component <ProjectDetails/> rendered] ');
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [projectData, setProjectData] = useState(null);
  const {
    onSnapshotDocument,
    documentData,
    isError,
    updateDocument,
    deleteDocument,
  } = useFirestore('projects', id);
  const deleteProjectHandler = async () => {
    await deleteDocument(id);
    navigate('/', { replace: true });
  };

  useEffect(() => {
    const unsub = onSnapshotDocument();
    return () => unsub();
  }, [onSnapshotDocument]);

  useEffect(() => {
    if (documentData) {
      setProjectData(documentData);
    }
    return () => {};
  }, [documentData]);

  if (isError) {
    return <>Error!!</>;
  }
  if (!projectData) {
    return <>Loading...</>;
  }

  const { name, assignTo, details, dueDate, comments, createdBy } = projectData;

  return (
    <StyledProjectDetails>
      <div className="project-details">
        <div>
          <h3>{name}</h3>
          <p>Project due by {format(new Date(dueDate), 'dd/MM/yyyy')}</p>
          <p>{details}</p>
          <strong>Project is assigned to: </strong>
          <Flex as="ul">
            {assignTo.map((user) => (
              <li key={user.value.id}>
                <Avatar photoURL={user.value.photoURL} />
              </li>
            ))}
          </Flex>
        </div>
        {user.uid === createdBy.id && (
          <Button onClick={deleteProjectHandler} className="delete-project">
            Mark as complete
          </Button>
        )}
      </div>
      <div className="project-comments">
        <h3>Project comments</h3>
        <ProjectComments
          oldComments={comments}
          updateComments={updateDocument}
        />
      </div>
    </StyledProjectDetails>
  );
};
export default Project;
