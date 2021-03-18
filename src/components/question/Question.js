import React,{useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import './Question.css'

function Question(props) {
    const [option,setOption] = useState(''); 
    const [options,setOptions] = useState([]);
    
    function handleChange(e){
      setOption(e.target.value);
    }

    function handleSubmit(e){
      e.preventDefault();
      setOptions(prev => 
          [...prev,option]
      )
      setOption('')
    }

    return (
        <div className="ques">
            <p className="ques-title">❓❓ {props.title}</p>
            <form class="form__group field" onSubmit={handleSubmit}>
              <input type="input" 
                class="form__field" 
                placeholder="Name" 
                id='name'
                value={option}
                onChange={handleChange} 
                />
              <label for="name" class="form__label">Add Option</label>
            </form>
            <div className="list">
                <List>
                  {options.map((option,i) => {
                    const labelId = `checkbox-list-label-${i}`;
                    return (
                      <ListItem key={i} role={undefined} dense button>
                        <ListItemText id={labelId} primary={`✅ ${option}`} />
                      </ListItem>
                    );
                  })}
                </List>
            </div>
        </div>
    )
}

export default Question;