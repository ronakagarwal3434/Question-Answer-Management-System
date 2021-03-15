import React from 'react';
import DropZone from "./components/dropzone/DropZone";

import './App.css';

function App() {
  return (
     <div>
        <p className="title">Drag and Drop Image Upload</p>
        <div className="content">
            <DropZone />
        </div>
    </div>
  );
}
export default App;