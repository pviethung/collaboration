import Avatar from 'components/Avatar';
import { useAuthContext } from 'hooks/useAuthContext';
import { useRef } from 'react';
import { Button, Flex, Form } from 'styles/common';
import { v4 as uuidv4 } from 'uuid';

const ProjectComments = ({ updateComments, oldComments }) => {
  console.count('[Component <ProjectComments/> rendered] ');
  const commentRef = useRef();
  const {
    user: { displayName, photoURL },
  } = useAuthContext();

  const addCommentHandler = async (e) => {
    e.preventDefault();
    const comment = {
      content: commentRef.current.value,
      displayName,
      id: uuidv4(),
      photoURL,
      createdAt: new Date().toISOString(),
    };
    await updateComments({
      comments: [...oldComments, comment],
    });
    commentRef.current.value = '';
    commentRef.current.focus();
  };

  return (
    <div>
      {oldComments.length > 0 && (
        <ul className="comment-list">
          {oldComments.map((comment) => (
            <li key={comment.id}>
              <Flex alignItems="center">
                <Avatar photoURL={comment.photoURL} />
                <h4>{comment.displayName}</h4>
              </Flex>
              <span>{new Date(comment.createdAt).toDateString()}</span>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      )}
      <Form onSubmit={addCommentHandler}>
        <div className="form-group">
          <textarea ref={commentRef}></textarea>
          <label>Add a new comment</label>
        </div>
        <Button>Add a comment</Button>
      </Form>
    </div>
  );
};
export default ProjectComments;
