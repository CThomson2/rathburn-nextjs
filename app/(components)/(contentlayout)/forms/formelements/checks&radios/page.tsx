"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react';
import { radio1, radio10, radio11, radio12, radio13, radio14, radio2, radio3, radio4, radio5, radio6, radio7, radio8, radio9 } from '@/shared/data/prism/forms-prism';
import dynamic from 'next/dynamic';
const Showcode = dynamic(() => import("@/shared/layout-components/showcode/showcode"), { ssr: false });

const Checksradios = () => {

    const [secondary1, setsecondary1] = useState("on");
    const [success1, setsuccess1] = useState("on");
    const [dark1, setdark1] = useState("on");
    const [primary1, setprimary1] = useState("on");
    const [warning1, setwarning1] = useState("on");
    const [info1, setinfo1] = useState("on");
    const [danger1, setdanger1] = useState("on");
    const [light1, setlight1] = useState("on");

    //sizes 
    const [primary2, setprimary2] = useState("on");
    const [secondary2, setsecondary2] = useState("on");
    const [success2, setsuccess2] = useState("on");

    return (
        <Fragment>
            <Seo title={"Checks & Radios"} />
            <Pageheader currentpage="Checks & Radios" activepage="Form Elements" mainpage="Checks & Radios" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Showcode title="Checks" code={radio1}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked"
                                defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Checked checkbox
                            </label>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Showcode title="Disabled" code={radio2}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDisabled"
                                disabled />
                            <label className="form-check-label" htmlFor="flexCheckDisabled">
                                Disabled checkbox
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input opacity-[0.6]" type="checkbox" defaultValue=""
                                id="flexCheckCheckedDisabled" defaultChecked disabled />
                            <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                                Disabled checked checkbox
                            </label>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Showcode title="Radios" code={radio3}>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Default radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2" defaultChecked />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Default checked radio
                            </label>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Showcode title="Disabled" code={radio4}>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDisabled"
                                id="flexRadioDisabled" disabled />
                            <label className="form-check-label" htmlFor="flexRadioDisabled">
                                Disabled radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input opacity-[0.6]" type="radio" name="flexRadioDisabled"
                                id="flexRadioCheckedDisabled" defaultChecked disabled />
                            <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
                                Disabled checked radio
                            </label>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
                    <Showcode title="Default (stacked)" code={radio5}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Default checkbox
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck2"
                                disabled />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Disabled checkbox
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios"
                                id="exampleRadios1" defaultValue="option1" defaultChecked />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Default radio
                            </label>
                        </div>
                        <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="exampleRadios"
                                id="exampleRadios3" defaultValue="option3" disabled />
                            <label className="form-check-label" htmlFor="exampleRadios3">
                                Disabled radio
                            </label>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
                    <Showcode title="Switches" code={radio11} customCardBodyClass="flex flex-col gap-y-4">
                        <div className="flex items-center">
                            <input type="checkbox" id="hs-basic-with-description-checked" className="ti-switch mb-4" defaultChecked />
                            <label htmlFor="hs-basic-with-description-checked" className="text-sm text-gray-500 ms-3 dark:text-[#8c9097] dark:text-white/50 mb-4">Checked</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="hs-basic-with-description-unchecked" className="ti-switch mb-4" />
                            <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ms-3 dark:text-[#8c9097] dark:text-white/50 mb-4">Unchecked</label>
                        </div>
                        <div className="flex items-center">
                            <label className="text-sm text-gray-500 me-3 dark:text-[#8c9097] dark:text-white/50">On</label>
                            <input type="checkbox" id="hs-basic-with-description" className="ti-switch" />
                            <label className="text-sm text-gray-500 ms-3 dark:text-[#8c9097] dark:text-white/50">Off</label>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                    <Showcode title="Checkbox Sizes" code={radio12} customCardBodyClass="sm:flex items-center justify-between">
                        <div className='sm:flex'>
                            <div className="form-check me-5">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="checkebox-sm" defaultChecked />
                                <label className="form-check-label" htmlFor="checkebox-sm">
                                    Default
                                </label>
                            </div>
                            <div className="form-check form-check-md flex items-center me-5">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="checkebox-md" defaultChecked />
                                <label className="form-check-label" htmlFor="checkebox-md">
                                    Medium
                                </label>
                            </div>
                            <div className="form-check form-check-lg flex items-center ">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="checkebox-lg" defaultChecked />
                                <label className="form-check-label" htmlFor="checkebox-lg">
                                    Large
                                </label>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                    <Showcode title="Radio Sizes" code={radio13} customCardBodyClass="sm:flex items-center justify-between">
                        <div className='sm:flex'>
                            <div className="form-check me-5">
                                <input className="form-check-input" type="radio" name="Radio" id="Radio-sm" />
                                <label className="form-check-label" htmlFor="Radio-sm">
                                    default
                                </label>
                            </div>
                            <div className="form-check form-check-md me-5">
                                <input className="form-check-input" type="radio" name="Radio" id="Radio-md" />
                                <label className="form-check-label" htmlFor="Radio-md">
                                    Medium
                                </label>
                            </div>
                            <div className="form-check form-check-lg">
                                <input className="form-check-input" type="radio" name="Radio" id="Radio-lg" defaultChecked />
                                <label className="form-check-label" htmlFor="Radio-lg">
                                    Large
                                </label>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                    <Showcode title="Inline" code={radio14} customCardBodyClass="sm:flex gap-2">
                        <div className='sm:flex gap-2'>
                            <div className="flex gap-2">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                        defaultValue="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                        defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                        defaultValue="option3" disabled />
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="form-check form-check-inline gap-2">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                        id="inlineRadio1" defaultValue="option1" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                        id="inlineRadio2" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                        id="inlineRadio3" defaultValue="option3" disabled />
                                    <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6  lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                    <Showcode title="Reverse" code={radio6}>
                        <div className="form-check rtl:pe-4 form-check-reverse mb-4">
                            <input className="form-check-input" type="checkbox" defaultValue=""
                                id="reverseCheck1" />
                            <label className="form-check-label" htmlFor="reverseCheck1">
                                Reverse checkbox
                            </label>
                        </div>
                        <div className="form-check rtl:pe-4 form-check-reverse mb-4">
                            <input className="form-check-input" type="checkbox" defaultValue=""
                                id="reverseCheck2" disabled />
                            <label className="form-check-label" htmlFor="reverseCheck2">
                                Disabled reverse checkbox
                            </label>
                        </div>
                    </Showcode>
                </div>
            </div>
           
        </Fragment>
    )
}

export default Checksradios