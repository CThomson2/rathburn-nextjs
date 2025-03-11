"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useCallback, useState } from 'react';
import { FilePond, registerPlugin } from "react-filepond";
import { Uploader } from 'uploader';
import { UploadButton } from 'react-uploader';

const Fileuploads = () => {

    const uploader = Uploader({
        // Get production API keys from Upload.io
        apiKey: 'free'
      });

    const getUploadParams = ({ meta }:any) => { return { url: "https://httpbin.org/post" }; };

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }: any, status: any) => { console.log(status, meta, file); };

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files: any[], allFiles: any[]) => {
        console.log(files.map(f => f.meta));
        allFiles.forEach(f => f.remove());
    };

    //React filepond

    const [files, setFiles] = useState<any>([]);
    const [files1, setFiles1] = useState<any>([]);
      
    return (
        <Fragment>
            <Seo title={"File Uploads"} />
            <Pageheader currentpage="File Uploads" activepage="Form Elements" mainpage="File Uploads" />
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 ">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Basic File Input</h5>
                        </div>
                        <div className="box-body">
                            <div>
                                <label htmlFor="file-input" className="sr-only">Choose file</label>
                                <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/50
                                       file:border-0
                                      file:bg-light file:me-4
                                      file:py-3 file:px-4
                                      dark:file:bg-black/20 dark:file:text-white/50"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 ">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">File Input Buttons</h5>
                        </div>
                        <div className="box-body">
                            <div>
                                <label className="block">
                                    <span className="sr-only">Choose Profile photo</span>
                                    <input type="file" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50
                                        file:me-4 file:py-2 file:px-4
                                        file:rounded-s-sm file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-primary file:text-white
                                        hover:file:bg-primary focus-visible:outline-none
                                      "/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">File Input Sizes</h5>
                        </div>
                        <div className="box-body space-y-3">
                            <div>
                                <label htmlFor="small-file-input" className="sr-only">Choose file</label>
                                <input type="file" name="small-file-input" id="small-file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/50
                                       file:border-0
                                      file:bg-light file:me-4
                                      file:py-2 file:px-4
                                      dark:file:bg-black/20 dark:file:text-white/50"/>
                            </div>

                            <div>
                                <label htmlFor="file-input-medium" className="sr-only">Choose file</label>
                                <input type="file" name="file-input-medium" id="file-input-medium" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/50
                                       file:border-0
                                      file:bg-light file:me-4
                                      file:py-3 file:px-4
                                      dark:file:bg-black/20 dark:file:text-white/50"/>
                            </div>

                            <div>
                                <label htmlFor="large-file-input" className="sr-only">Choose file</label>
                                <input type="file" name="large-file-input" id="large-file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50
                                       file:border-0
                                      file:bg-light file:me-4
                                      file:py-3 file:px-4 file:sm:py-5
                                      dark:file:bg-black/20 dark:file:text-white/50"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Dropzone File Upload</h5>
                        </div>
                        <div className="box-body dropzone-file-upload">
                                <UploadButton uploader={uploader} options={{ multi: true }}>
                   
                   {({ onClick }) =>
                     <input className='file_input text-center' onClick={onClick} placeholder='Drop files here to upload' />
                   }
                 </UploadButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Single File Upload</h5>
                        </div>
                        <div className="box-body">
                            <FilePond className="basic-filepond" accepted-file-types={["application/pdf", "image/png", "image/jpeg", "image/gif"]}
                                server="/api" allowReorder={true} files={files1} onupdatefiles={setFiles1} allowMultiple={false} allowImagePreview={true} maxFiles={10} name="filepond"
                                labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>' />
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Multiple File Upload</h5>
                        </div>
                        <div className="box-body">
                            <FilePond className="multiple-filepond" accepted-file-types={["application/pdf", "image/png", "image/jpeg", "image/gif"]}
                                server="/api" allowReorder={true} files={files} onupdatefiles={setFiles} allowMultiple={true} allowImagePreview={true} maxFiles={10} name="filepond"
                                labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>' />
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">circular File Upload</h5>
                        </div>
                        <div className="box-body">
                            <FilePond className="filepond circular-filepond" labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                                // imageCropAspectRatio='1:1'
                                //  imageResizeTargetWidth="200" 
                                //  imageResizeTargetHeight="200"
                                  stylePanelLayout='compact circle'
                                   styleLoadIndicatorPosition='center bottom'
                                styleButtonRemoveItemPosition='center bottom' />

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Fileuploads