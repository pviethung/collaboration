import { Button, Form } from 'styles/common';
import { StyledCreate } from './styles';
import Select from 'react-select';
import { useRef, useState } from 'react';
import { useFirestore } from 'hooks/useFirestore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'hooks/useAuthContext';

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];
const Create = () => {
  console.count('[Component <Create/> rendered] ');
  const { collectionData: users, onSnapshotCollection: onUsersChange } =
    useFirestore('users');
  const { addDocument } = useFirestore('projects');
  const nameRef = useRef();
  const detailsRef = useRef();
  const dueDateRef = useRef();
  const [category, setCategory] = useState(null);
  const [assignment, setAssignment] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    const unsub = onUsersChange();
    return () => unsub();
  }, [onUsersChange]);

  const addProjectHandler = async (e) => {
    e.preventDefault();
    await addDocument({
      name: nameRef.current.value,
      details: detailsRef.current.value,
      dueDate: dueDateRef.current.value,
      category: category.value,
      assignTo: assignment,
      createdBy: {
        id: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
      },
      comments: [],
    });
    navigate('/', { replace: true });
  };

  if (!users) {
    return <></>;
  }

  return (
    <StyledCreate>
      <Form onSubmit={addProjectHandler}>
        <div className="form-desc">
          <h4>Create a new project</h4>
        </div>
        <div className="form-group">
          <input ref={nameRef} required type="text" />
          <label>Name</label>
        </div>
        <div className="form-group">
          <textarea ref={detailsRef} required></textarea>
          <label>Details</label>
        </div>
        <div className="form-group">
          <input ref={dueDateRef} type="date" />
          <label>Due date</label>
        </div>
        <div className="form-group">
          <Select
            menuPosition="fixed"
            className="react-select-container"
            classNamePrefix="react-select"
            options={categories}
            onChange={(value) => {
              setCategory(value);
            }}
          />
          <label>Category</label>
        </div>
        <div className="form-group">
          <Select
            menuPosition="fixed"
            className="react-select-container"
            classNamePrefix="react-select"
            options={users.map((user) => ({
              value: user,
              label: user.displayName,
            }))}
            isMulti
            onChange={(value) => {
              setAssignment(value);
            }}
          />
          <label>Assignment</label>
        </div>

        <Button>Add Project</Button>
      </Form>
    </StyledCreate>
  );
};
export default Create;
