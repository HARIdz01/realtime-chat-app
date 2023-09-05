import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['blockquote', 'code-block'],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    ['link', 'image'],
    ['emoji'],
    ['mention'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'blockquote', 'code-block',
  'link', 'image',
  'emoji',
  'mention',
];

function TextEditor({sendMessage,sendingMessage}) {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (event) => {
    setEditorHtml(event);
  };

  return (
    <div>
    <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        theme="snow"
       
        
        onKeyPress={(event)=>{
            event.key==='Enter' && sendMessage();
        }}
      />
    </div>
  );
}

export default TextEditor;
