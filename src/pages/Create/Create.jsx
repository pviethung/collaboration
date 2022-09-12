import { Button, Form } from 'styles/common';
import { StyledCreate } from './styles';
import Select from 'react-select';

const Create = () => {
  console.count('[Component <Create/> rendered] ');
  const categories = [
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
  ];

  return (
    <StyledCreate>
      <Form>
        <div className="form-desc">
          <h4>Create a new project</h4>
        </div>
        <div className="form-group">
          <input required type="text" />
          <label>Name</label>
        </div>
        <div className="form-group">
          <textarea required></textarea>
          <label>Details</label>
        </div>
        <div className="form-group">
          <input type="date" />
          <label>Due date</label>
        </div>
        <div className="form-group">
          <Select
            menuPosition="fixed"
            className="react-select-container"
            classNamePrefix="react-select"
            options={categories}
          />
        </div>
        <div className="form-group">
          <label>Assignment</label>
        </div>

        <Button>Add Project</Button>
      </Form>
    </StyledCreate>
  );
};
export default Create;
