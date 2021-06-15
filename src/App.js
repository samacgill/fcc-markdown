import "./App.css";
import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { initialContent } from "./initialContent";
import marked from "marked";

marked.setOptions({
  breaks: true,
  gfm: true,
});

function App() {
  const [maxEditor, setMaxEditor] = useState(false);
  const [maxPreview, setMaxPreview] = useState(false);
  const [content, setContent] = useState(initialContent);
  const updateContent = (newContent) => {
    setContent(newContent);
  };
  const markedContent = () => {
    return { __html: marked(content) };
  };
  const toggleEditor = () => {
    setMaxEditor(!maxEditor);
  };

  const togglePreview = () => {
    setMaxPreview(!maxPreview);
  };

  let editorRows = maxEditor ? "20" : "10";

  return (
    <div className="App">
      {!maxPreview && (
        <Editor
          onEdit={updateContent}
          content={content}
          noRows={editorRows}
          toggleEditor={toggleEditor}
          max={maxEditor}
        />
      )}
      {!maxEditor && (
        <Preview
          content={markedContent}
          togglePreview={togglePreview}
          max={maxPreview}
        />
      )}
    </div>
  );
}

export default App;
