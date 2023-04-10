import * as React from "react";
import MonacoEditor, { type EditorProps as MonacoEditorProps } from "@monaco-editor/react";

const Playground: React.FC = () => {

  const monacoEditorProps: MonacoEditorProps = {
    theme: "vs-dark"
  };
  return (
    <div>
      <h1>Playground V6</h1>
      <div style={{ height:"50vh", width: "100%" }}>
        <MonacoEditor {...monacoEditorProps} />
      </div>
    </div>
  );
};

Playground.displayName = "Top";

export default Playground;
