import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Editor1State {
  editorHtml: string;
  theme: string;
  showToolbar: boolean;
}

const defaultContent = `
  <h4><strong className="ql-size-large">Quill Bubble</strong> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
  <p><br/></p>
  <ol>
      <li className="ql-size-normal">Write text select and edit with multiple options.</li>
      <li className="">This is quill bubble editor.</li>
      <li className="">Easy to customize and flexible.</li>
  </ol>
  <p><br/></p>
  <h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>
`;

const Editor1: React.FC = () => {
  const [editorHtml, setEditorHtml] = useState<string>(defaultContent);
  const [theme, setTheme] = useState<string>("snow");
  const [showToolbar, setShowToolbar] = useState<boolean>(false);
  const quillRef = useRef<any>(null);

  const modules = {
    toolbar: [
      [{ "header": "1" }, { "header": "2" }, { "blockquote": "blockquote" }],
      ["bold", "italic", "link"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  useEffect(() => {
    const quill = quillRef.current;

    if (quill) {
      quill.on("selection-change", handleSelectionChange);
    }

    return () => {
      if (quill) {
        quill.off("selection-change", handleSelectionChange);
      }
    };
  }, []);

  const handleChange = (html: string) => {
    setEditorHtml(html);
  };

  const handleSelectionChange = (range: any) => {
    setShowToolbar(range && range.length > 0);
  };

  return (
    <>
      <ReactQuill
        theme={theme}
        onChange={handleChange}
        value={editorHtml}
        modules={modules}
      />
      {showToolbar && (
        <div className="toolbar">
        </div>
      )}
    </>
  );
};

export default Editor1;
