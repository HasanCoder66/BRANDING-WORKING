import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function EditContactUsTable() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  return (
    <div className="bg-white ml-5 mr-5 mb-5 py-3 px-4 mt-5">
      

      <h3 className="px-2 text-xl text-black-400 py-2">Page Content</h3>
      <Editor
        apiKey="ar9rz3ek138ri8zqmmjy1ver1c4xksfbzi3illv7sk37tojq"
        init={{
          plugins:
            "anchor autolink charmap codesample image link advlist lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown preview",
          toolbar:
            "undo redo styles forecolor backcolor bold italic underline alignleft aligncenter alignright alignjustify outdent indent link image media table  numlist bullist removeformat preview",
          menubar: false,
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
          content_style:
            ".tox-tinymce { border: 1px solid #ddd; padding: 10px; border-radius: 0px; }",
        }}
        initialValue="Insert content form administration panel"
      />

      <div className="mt-5">
        <h1 className="text-xl px-2 py-2">Meta Tags</h1>
        <hr />
      </div>
      <div className="flex w-full justify-between items-center mb-4 py-2 mt-5">
        <div className=" text-center">
          <label
            htmlFor="oldPassword"
            className="text-sm font-bold text-slate-500 mr-3"
          >
            Page Title
          </label>
        </div>
        <div className="border border-collapse-700 w-3/4 p-2 m-1">
          <input type="text" placeholder="TRIM SLIM - Shape your Future" className="w-full   outline-none" />
        </div>
      </div>
      <div className="flex w-full justify-between items-center mb-4 ">
        <div className=" text-center">
          <label
            htmlFor="oldPassword"
            className="text-sm font-bold text-slate-500 mr-3"
          >
            Meta Keywords
          </label>
        </div>
        <div className="border border-collapse-700 w-3/4 p-2 m-1">
          <input type="text" placeholder="" className="w-full   outline-none" />
        </div>
      </div>
      <div className="flex w-full justify-between items-center mb-4 ">
        <div className=" text-center">
          <label
            htmlFor="oldPassword"
            className="text-sm font-bold text-slate-500 mr-3"
          >
            Meta Description
          </label>
        </div>
        <div className="border border-collapse-700 w-3/4 p-2 m-1">
          <input type="text" placeholder="" className="w-full   outline-none" />
        </div>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <button className="bg-gray-800 text-white py-2 px-4 rounded">
          Submit
        </button>
        <button className="bg-gray-300 text-black py-2 px-4 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
}
