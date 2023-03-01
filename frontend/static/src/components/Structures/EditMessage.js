import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

function EditMessage({message, onSaveEdit}) {
    const [editContent, setEditContent] = useState({ message });
    // console.log()

    const handleSave = (e) => {
        onSaveEdit(e, editContent.text);
      };

    return (
        <div>
             <textarea defaultValue={message}
             onChange={e => 
                setEditContent({ 
                    ...editContent, 
                    text: e.target.value 
                })}
             />
            <Button type="submit" 
            onClick={handleSave} 
            variant="dark"
            >
            Submit
            </Button>
        </div>
    )
}
export default EditMessage
