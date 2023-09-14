import React, { useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';
  
const TinyMCE = (props) => {
    const editorRef = useRef(null);

    return (
        <>
            <Editor
                apiKey={process.env.REACT_APP_TINYMCE_SECRET}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={props.value ? props.value : ''}
                init={{
                    height: 500,
                    menubar: false,
                    force_br_newlines : true,
                    plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | code',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                onEditorChange={(value) => props.onChange(value)}
            />
        </>
    );
};
  
export default TinyMCE;