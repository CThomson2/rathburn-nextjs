"use client"
import { color1, color2 } from '@/shared/data/prism/forms-prism';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode';
import React, { Fragment, useState } from 'react'
import { ColorPicker, useColor } from "react-color-palette";

const Colorpicker = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    //color picker
    const [color, setColor] = useColor("#561ecb");

    return (
        <Fragment>
            <Seo title={"Color Pickers"} />
            <Pageheader currentpage="Color Pickers" activepage="Form Elements" mainpage="Color Picker" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Color Picker" code={color1}>
                        <input type="color" className="form-control form-control-color !border-0"
                            id="exampleColorInput" defaultValue="#136ad0" title="Choose your color" />
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Classic
                            </div>
                        </div>
                        <div className="box-body sm:flex justify-around">
                            <div>
                                <button onClick={toggleVisibility} className='ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium'>
                                <i className="ri-palette-line"></i>
                                    </button>
                                    {isVisible && (
                                        <ColorPicker color={color} onChange={setColor} hideInput={["hex", "hsv"]} />
                                    )}
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-6">
                            <Showcode title="Tailwind colorpicker" code={color2}>
                                <input type="color"
                                    className="p-1 h-10 w-10 block bg-white dark:bg-bodybg border border-gray-200 cursor-pointer rounded-sm 
                                    disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10"
                                    id="hs-color-input" defaultValue="#5a66f1" title="Choose your color"/>
                                    </Showcode>
                            
                    </div>
                </div>
        </Fragment>
    )
}

export default Colorpicker