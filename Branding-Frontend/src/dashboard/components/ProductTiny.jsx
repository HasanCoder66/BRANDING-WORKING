import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function ProductTiny() {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(URL.createObjectURL(selectedImage));
    };

    return (
        <div className='bg-white ml-5 mr-5 mb-5 py-3 px-4 mt-5'>
                   <div className="flex w-full justify-between items-center mb-4 ">
            <div className=" text-center">
              <label
                htmlFor="oldPassword"
                className="text-sm font-bold text-slate-500 mr-3"
              >
              Product Name
              </label>
            </div>
            <div className="border border-collapse-700 w-3/4 p-2 m-1">
             <input type="text" placeholder="Medicine Name" className="w-full   outline-none"/>
            </div>
          </div>
          <div className="flex w-full justify-between items-center mb-4 ">
            <div className=" text-center">
              <label
                htmlFor="oldPassword"
                className="text-sm font-bold text-slate-500 mr-3"
              >
              Product price
              </label>
            </div>
            <div className="border border-collapse-700 w-3/4 p-2 m-1">
             <input type="text" placeholder="$9.0" className="w-full   outline-none"/>
            </div>
          </div>
          <div className="flex w-full justify-between items-start mb-4 ">
            <div className=" text-center">
              <label
                htmlFor="oldPassword"
                className="text-sm font-bold text-slate-500 mr-3"
              >
             Summary
              </label>
            </div>
            <div className="border border-collapse-700 w-3/4 p-2 m-1">
             <textarea type="text" rows={4} placeholder="" className="w-full   outline-none"/>
            </div>
            
          </div>
          
          
          

            <h3 className='px-2 text-xl text-black-400 py-2'>Description</h3>
            <Editor
                apiKey='ar9rz3ek138ri8zqmmjy1ver1c4xksfbzi3illv7sk37tojq'
                init={{
                    plugins: 'anchor autolink charmap codesample image link advlist lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown preview',
                    toolbar: 'undo redo styles forecolor backcolor bold italic underline alignleft aligncenter alignright alignjustify outdent indent link image media table  numlist bullist removeformat preview',
                    menubar: false,
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                    ],
                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                    content_style: '.tox-tinymce { border: 1px solid #ddd; padding: 10px; border-radius: 0px; }'
                }}
                initialValue="Welcome to TinyMCE!"
            />
          
            <div className="flex px-2 py-2">
                <div className='py-4 w-1/4'>
                    <h3 className="block text-sm font-medium text-gray-700">Upload Image</h3>
                    <small className='text-xs'>Image must be 1200x850 for better result</small>
                </div>
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 rounded-md h-28 relative w-3/4" onClick={() => document.getElementById('fileInput').click()}>
                    {image && (
                        <img src={image} alt="Uploaded" className="mx-auto max-h-96" />
                    )}
                    {!image && (
                        <div className="space-y-1 text-center">
                            <div className="flex flex-col items-center justify-center h-12">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                <input id="fileInput" type="file" className="sr-only" accept="image/*" onChange={handleImageChange} />
                                <p className="mt-1 text-sm text-gray-600">Drag and drop an image here or click to select</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <h1 className='text-xl px-2 py-2'>Meta Tags</h1>
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
             <input type="text" placeholder="" className="w-full   outline-none"/>
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
             <input type="text" placeholder="" className="w-full   outline-none"/>
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
             <input type="text" placeholder="" className="w-full   outline-none"/>
            </div>
          </div>
            <div className="mt-4 flex justify-center space-x-4">
                <button className="bg-gray-800 text-white py-2 px-4 rounded">Submit</button>
                <button className="bg-gray-300 text-black py-2 px-4 rounded">Cancel</button>
            </div>
        </div>
    );
}
