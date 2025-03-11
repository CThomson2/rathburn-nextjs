"use client"
import Editor from '@/shared/data/forms/form-editors/quilleditordata'
import Editor1 from '@/shared/data/forms/form-editors/quilleditordata1'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic'
import React, { Fragment, useState } from 'react'

const Quilleditor = () => {
    const [value, setValue] = useState('');
    
    return (
        <Fragment>
            <Seo title={"Quill Editor"} />
            <Pageheader currentpage="Quill Editor" activepage="Form Editors" mainpage="Quill Editor" />
            <div className="grid grid-cols-12 gp-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Quill Snow Editor
                            </div>
                        </div>
                        <div className="box-body">
                            <Editor value={''} modules={undefined} formats={undefined} bounds={undefined}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gp-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Quill Bubble Editor
                            </div>
                        </div>
                        <div className="box-body">
                            <Editor1/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Quilleditor