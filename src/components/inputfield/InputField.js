import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function InputField() {
  const index=0;
  return (
          <> 
            <ListItem button key={index}>
                <ListItemText primary={`Item ${index + 1}`} />
            </ListItem>
          </>
  );
}
export default InputField;