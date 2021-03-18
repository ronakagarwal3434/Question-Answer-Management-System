import React, {useState} from 'react';
import DropZone from "./components/dropzone/DropZone";
import Question from "./components/question/Question";
import TextField from '@material-ui/core/TextField';
import './components/inputfield/InputField.css'
import './App.css';

function App() {

  const [question,setQuestion] = useState(''); 
  const [questions,setQuestions] = useState([]);
  
  function handleChange(e){
    setQuestion(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    setQuestions(prev => 
        [...prev,question]
    )
    setQuestion('')
  }

  return (
     <div>
        <form onSubmit={handleSubmit} className="inputform"> 
            <TextField
              id="standard-full-width"
              class="input-field"
              style={{ }}
              placeholder="Enter Your Questions Here"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={question}
              onChange={handleChange}
            />
        </form>
        <div className='ques-box'>
              {questions.map(ques => (
                <Question
                  title = {ques}
                />
              ))}
        </div>
    </div>
  );
}
export default App;