"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react';
import { input1, input10, input11, input12, input13, input14, input15, input16, input17, input18, input19, input2, input20, input21, input22, input23, input24, input25, input26, input27, input3, input4, input5, input6, input7, input8, input9 } from '@/shared/data/prism/forms-prism';
import dynamic from 'next/dynamic';
const Showcode = dynamic(() => import("@/shared/layout-components/showcode/showcode"), { ssr: false });

const Inputs = () => {
    return (
        <Fragment>
            <Seo title={"Inputs"} />
            <Pageheader currentpage="Inputs" activepage="Form Elements" mainpage="Inputs" />
            <div className="grid grid-cols-12 gap-6 text-defaultsize">
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Input Types" code={input1}>
                                <div className="grid grid-cols-12 sm:gap-6">
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <p className="text-muted"></p>
                                        <label htmlFor="input-label" className="form-label">Basic Input:</label>
                                        <input type="text" className="form-control" id="input"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-label" className="form-label">Form Input With Label</label>
                                        <input type="text" className="form-control" id="input-label"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-placeholder" className="form-label">Form Input With
                                            Placeholder</label>
                                        <input type="text" className="form-control" id="input-placeholder"
                                            placeholder="Placeholder"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-text" className="form-label">Type Text</label>
                                        <input type="text" className="form-control" id="input-text" placeholder="Text"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-number" className="form-label">Type Number</label>
                                        <input type="number" className="form-control" id="input-number"
                                            placeholder="Number"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-password" className="form-label">Type Password</label>
                                        <input type="password" className="form-control" id="input-password"
                                            placeholder="Password"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-email" className="form-label">Type Email</label>
                                        <input type="email" className="form-control" id="input-email"
                                            placeholder="Email@xyz.com"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-tel" className="form-label">Type Tel</label>
                                        <input type="tel" className="form-control" id="input-tel"
                                            placeholder="+1100-2031-1233"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-date" className="form-label">Type Date</label>
                                        <input type="date" className="form-control" id="input-date"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-week" className="form-label">Type Week</label>
                                        <input type="week" className="form-control" id="input-week"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-month" className="form-label">Type Month</label>
                                        <input type="month" className="form-control" id="input-month"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-time" className="form-label">Type Time</label>
                                        <input type="time" className="form-control" id="input-time"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-datetime-local" className="form-label">Type datetime-local</label>
                                        <input type="datetime-local" className="form-control" id="input-datetime-local"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-search" className="form-label">Type Search</label>
                                        <input type="search" className="form-control" id="input-search"
                                            placeholder="Search"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-submit" className="form-label">Type Submit</label>
                                        <input type="submit" className="form-control ti-btn" id="input-submit"
                                            defaultValue="Submit"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-reset" className="form-label">Type Reset</label>
                                        <input type="reset" className="form-control ti-btn" id="input-reset"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-button" className="form-label">Type Button</label>
                                        <input type="button" className="form-control ti-btn !text-white !bg-primary"
                                            id="input-button" defaultValue="Button"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <div className="grid grid-cols-12 gap-6">
                                            <div className="xl:col-span-3 col-span-12 flex flex-col ">
                                                <label className="form-label">Type Color</label>
                                                <input className="form-control form-input-color !rounded-md" type="color"
                                                    defaultValue="#136bd0"/>
                                            </div>
                                            <div className="xl:col-span-5 col-span-12">
                                                <div className="form-check">
                                                    <p className="mb-3 px-0 text-muted">Type Checkbox</p>
                                                    <input className="form-check-input ms-2" type="checkbox" defaultValue=""
                                                        defaultChecked/>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <div className="form-check">
                                                    <p className="mb-4 px-0 text-muted">Type Radio</p>
                                                    <input className="form-check-input ms-2" type="radio" defaultChecked/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <div>
                                            <label htmlFor="file-input" className="sr-only">Type file</label>
                                            <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10
                                                 file:border-0
                                                file:bg-gray-200 file:me-4
                                                file:py-3 file:px-4
                                                dark:file:bg-black/20 dark:file:text-white/50"/>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="form-label">Type Url</label>
                                        <input className="form-control" type="url" name="website"
                                            placeholder="http://example.com"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-disabled" className="form-label">Type Disabled</label>
                                        <input type="text" id="input-disabled" className="form-control"
                                            placeholder="Disabled input" disabled/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-readonlytext" className="form-label">Input Readonly Text</label>
                                        <input type="text" readOnly className="form-control-plaintext"
                                            id="input-readonlytext" defaultValue="email@example.com"/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="disabled-readonlytext" className="form-label">Disabled Readonly
                                            Input</label>
                                        <input className="form-control" type="text" defaultValue="Disabled readonly input"
                                            id="disabled-readonlytext" aria-label="Disabled input example" disabled
                                            readOnly/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="form-label">Type Readonly Input</label>
                                        <input className="form-control" type="text" defaultValue="Readonly input here..."
                                            aria-label="readonly input example" readOnly/>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="text-area" className="form-label">Textarea</label>
                                        <textarea className="form-control" id="text-area" rows={1}></textarea>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-DataList" className="form-label">Datalist example</label>
                                        <input className="form-control" type="text" list="datalistOptions"
                                            id="input-DataList" placeholder="Type to search..."/>
                                        <datalist id="datalistOptions">
                                            <option defaultValue="San Francisco">
                                            </option>
                                            <option defaultValue="New York">
                                            </option>
                                            <option defaultValue="Seattle">
                                            </option>
                                            <option defaultValue="Los Angeles">
                                            </option>
                                            <option defaultValue="Chicago">
                                            </option>
                                        </datalist>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Input shapes" code={input2}>
                                <div className="grid grid-cols-12 gap-y-3">
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="input-noradius" className="form-label">Input With No Radius</label>
                                        <input type="text" className="form-control !rounded-none" id="input-noradius"
                                            placeholder="No Radius"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="input-rounded" className="form-label">Input With Radius</label>
                                        <input type="text" className="form-control" id="input-rounded"
                                            placeholder="Default Radius"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="input-rounded-pill" className="form-label">Rounded Input</label>
                                        <input type="text" className="form-control !rounded-full" id="input-rounded-pill"
                                            placeholder="Rounded"/>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Input border Styles" code={input3}>
                                <div className="grid grid-cols-12 gap-y-3">
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="input-rounded1" className="form-label">Default</label>
                                        <input type="text" className="form-control" id="input-rounded1"
                                            placeholder="Default"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="input-rounded2" className="form-label">Dotted Input</label>
                                        <input type="text" className="form-control border-dotted" id="input-rounded2"
                                            placeholder="Dotted"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="input-rounded3" className="form-label">Dashed Input</label>
                                        <input type="text" className="form-control border-dashed" id="input-rounded3"
                                            placeholder="Dashed"/>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Input Sizing" code={input4}>
                                <input className="form-control form-control-sm mb-3" type="text"
                                    placeholder=".form-control-sm" aria-label=".form-control-sm example"/>
                                <input className="form-control mb-3" type="text" placeholder="Default input"
                                    aria-label="default input example"/>
                                <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg"
                                    aria-label=".form-control-lg example"/>
                                    </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Basic Inputs" code={input5}>
                                <div className="max-w-sm space-y-3">
                                    <input type="text" className="ti-form-input"/>
                                    <textarea className="ti-form-input" rows={3}></textarea>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Inputs With Placeholder" code={input6}>
                                <div className="max-w-sm space-y-3">
                                    <input type="text" className="ti-form-input" placeholder="This is placeholder"/>
                                    <textarea className="ti-form-input" rows={2} placeholder="This is a textarea placeholder"></textarea>
                                    <input type="text" className="ti-form-input" placeholder="Readonly input" readOnly/>
                                    <textarea className="py-3 px-4 ti-form-input" rows={2} placeholder="Readonly" readOnly></textarea>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Disabled Inputs" code={input7}>
                                <div className="max-w-sm space-y-3">
                                    <input type="text" className="opacity-70 pointer-events-none ti-form-input" placeholder="Disabled input" disabled/>
                                    <input type="text" className="opacity-70 pointer-events-none ti-form-input" placeholder="Disabled readonly input" disabled readOnly/>
                                    <textarea className="py-3 px-4 ti-form-input disabled:opacity-50 disabled:pointer-events-none" rows={2} placeholder="Disabled textarea" disabled></textarea>
                                    <textarea className="py-3 px-4 ti-form-input disabled:opacity-50 disabled:pointer-events-none" rows={2} placeholder="Disabled readonly textarea" disabled readOnly></textarea>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Gray Inputs" code={input8} customCardBodyClass="space-y-3">
                                <div className="relative">
                                    <input type="email" className="peer py-3 px-4 ps-11 ti-form-input bg-gray-100 border-transparent disabled:opacity-50 disabled:pointer-events-none rounded dark:bg-bodybg2 dark:border-transparent" placeholder="Enter name"/>
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                      <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                    </div>
                                  </div>

                                  <div className="relative">
                                    <input type="password" className="peer py-3 px-4 ps-11 ti-form-input bg-gray-100 border-transparent disabled:opacity-50 disabled:pointer-events-none rounded dark:bg-bodybg2 dark:border-transparent" placeholder="Enter password"/>
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                      <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg>
                                    </div>
                                  </div>
                                  <textarea className="py-3 px-4 ti-form-input bg-gray-100 border-transparent disabled:opacity-50 disabled:pointer-events-none rounded dark:bg-bodybg2 dark:border-transparent" rows={3} placeholder="This is a textarea placeholder"></textarea>
                            </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Underline Inputs" code={input9} customCardBodyClass="space-y-3">
                                <div className="relative">
                                    <input type="email" className="peer py-3 pe-0 ps-8 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10" placeholder="Enter name"/>
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                      <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                    </div>
                                  </div>

                                  <div className="relative">
                                    <input type="password" className="peer py-3 pe-0 ps-8 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10" placeholder="Enter password"/>
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                      <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg>
                                    </div>
                                  </div>
                                  <textarea className="py-3 px-0 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 text-sm focus:!border-t-transparent focus:!border-x-transparent  focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10" rows={3} placeholder="This is a textarea placeholder"></textarea>
                            </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Floating label" code={input10} customCardBodyClass="space-y-3">
                                <div className="relative">
                                    <input type="email" id="hs-floating-input-email" className="peer p-4 ti-form-input placeholder:!text-transparent focus:!border-primary focus:!ring-primary disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2" placeholder="you@email.com"/>
                                    <label htmlFor="hs-floating-input-email" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500 dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Email</label>
                                </div>
                                <div className="relative">
                                    <input type="password" id="hs-floating-input-passowrd" className="peer p-4 ti-form-input placeholder:!text-transparent focus:!border-primary focus:!ring-primary disabled:opacity-50 disabled:pointer-events-none
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="********"/>
                                    <label htmlFor="hs-floating-input-passowrd" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                        peer-focus:text-xs
                                        peer-focus:-translate-y-1.5
                                        peer-focus:text-gray-500 dark:peer-focus:text-white/70
                                        peer-[:not(:placeholder-shown)]:text-xs
                                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                        peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Password</label>
                                </div>
                                <div className="relative">
                                    <textarea id="hs-floating-textarea" className="peer p-4 ti-form-input placeholder:!text-transparent focus:!border-primary focus:!ring-primary disabled:opacity-50 disabled:pointer-events-non
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
                                    <label htmlFor="hs-floating-textarea" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500 dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Comment</label>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Gray Floating label" code={input11} customCardBodyClass="space-y-3">
                                <div className="relative">
                                    <input type="email" id="hs-floating-gray-input-email" className="peer p-4 ti-form-input bg-gray-100 border-transparent placeholder:!text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 rounded-md dark:border-transparent
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="you@email.com"/>
                                    <label htmlFor="hs-floating-gray-input-email" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500 dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Email</label>
                                </div>
                                <div className="relative">
                                    <input type="password" id="hs-floating-gray-input-passowrd" className="peer p-4 ti-form-input bg-gray-100 border-transparent placeholder:!text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 rounded-lg dark:border-transparent
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="********"/>
                                    <label htmlFor="hs-floating-gray-input-passowrd" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                        peer-focus:text-xs
                                        peer-focus:-translate-y-1.5
                                        peer-focus:text-gray-500  dark:peer-focus:text-white/70
                                        peer-[:not(:placeholder-shown)]:text-xs
                                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                        peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Password</label>
                                </div>
                                <div className="relative">
                                    <textarea id="hs-floating-textarea-gray" className="peer p-4 ti-form-input bg-gray-100 border-transparent placeholder:!text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 rounded-lg dark:border-transparent
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
                                    <label htmlFor="hs-floating-textarea-gray" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500  dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Comment</label>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Underline Floating label" code={input12} customCardBodyClass="space-y-3 underlined-floatiing-label">
                                <div className="relative">
                                    <input type="email" id="hs-floating-underline-input-email" className="peer py-4 px-0 ti-form-input rounded-none bg-transparent 
                                    !border-t-transparent border-b !border-x-transparent border-b-gray-200 placeholder:!text-transparent focus:!border-t-transparent 
                                    focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none
                                     dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="you@email.com"/>
                                    <label htmlFor="hs-floating-underline-input-email" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500  dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Email</label>
                                </div>
                                <div className="relative">
                                    <input type="password" id="hs-floating-underline-input-passowrd" className="peer py-4 px-0 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 placeholder:!text-transparent focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="********"/>
                                    <label htmlFor="hs-floating-underline-input-passowrd" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500  dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Password</label>
                                </div>
                                <div className="relative">
                                    <textarea id="hs-floating-textarea-underline" className="peer py-4 px-0 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 placeholder:!text-transparent focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
                                    <label htmlFor="hs-floating-textarea-underline" className="absolute top-0 start-0 py-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500  dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Comment</label>
                                </div>
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Pilled Inputs" code={input13} customCardBodyClass="space-y-3">
                                <input type="text" className="ti-form-input px-5 rounded-full" placeholder="Input text"/>
                                <textarea className="ti-form-input px-5 rounded-md" rows={3} placeholder="This is a textarea placeholder"></textarea>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Input With Hidden Label" code={input14} customCardBodyClass="space-y-3">
                                <div className="">
                                    <label htmlFor="input-email-label" className="sr-only">Email</label>
                                    <input type="email" id="input-email-label" className="ti-form-input" placeholder="you@site.com"/>
                                </div>
                                <div className="">
                                    <label htmlFor="textarea-email-label" className="sr-only">Comment</label>
                                    <textarea id="textarea-email-label" className="ti-form-input" rows={3} placeholder="Say hi..."></textarea>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Inputs With Label" code={input15} customCardBodyClass="space-y-3">
                                <div className="">
                                    <label htmlFor="input-label" className="ti-form-label">Email</label>
                                    <input type="email" id="input-label1" className="ti-form-input" placeholder="you@site.com"/>
                                </div>
                                <div>
                                    <label htmlFor="textarea-label" className="ti-form-label">Comment</label>
                                    <textarea id="textarea-label" className="ti-form-input" rows={3} placeholder="Say hi..."></textarea>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Input With Helper text" code={input16} customCardBodyClass="space-y-3">
                                <div>
                                    <label htmlFor="input-label-with-helper-text" className="ti-form-label">Email</label>
                                    <input type="email" id="input-label-with-helper-text" className="ti-form-input" placeholder="you@site.com" aria-describedby="hs-input-helper-text"/>
                                    <p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-input-helper-text">We'll never share your details.</p>
                                </div>
                                <div>
                                    <label htmlFor="textarea-label-with-helper-text" className="ti-form-label">Leave your question</label>
                                    <textarea id="textarea-label-with-helper-text" className="ti-form-input" rows={2} placeholder="Say hi, we'll be happy to chat with you." aria-describedby="hs-textarea-helper-text"></textarea>
                                    <p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-textarea-helper-text">We'll get back to you soon.</p>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 xxl:col-span-4">
                            <Showcode title="Input With Inline helper text" code={input17} customCardBodyClass="space-y-3">
                                <div className="sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full rtl:space-x-reverse">
                                    <label htmlFor="inline-input-label-with-helper-text" className="ti-form-label">Email</label>
                                    <input type="email" id="inline-input-label-with-helper-text" className="ti-form-input" placeholder="you@site.com" aria-describedby="hs-inline-input-helper-text"/>
                                    <p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-inline-input-helper-text">We'll never share your details.</p>
                                </div>
                                <div className="sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full rtl:space-x-reverse">
                                    <label htmlFor="inline-textarea-label-with-helper-text" className="ti-form-label">Leave your question</label>
                                    <textarea id="inline-textarea-label-with-helper-text" className="ti-form-input" rows={3} placeholder="Say hi, we'll be happy to chat with you." aria-describedby="hs-textarea-helper-text"></textarea>
                                    <p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-inline-textarea-helper-text">We'll get back to you soon.</p>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 xxl:col-span-4">
                            <Showcode title="Input With Corner Hint" code={input18} customCardBodyClass="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <label htmlFor="with-corner-hint" className="ti-form-label">Email</label>
                                        <span className="block text-xs text-gray-500 mb-2 dark:text-white/70">Optional</span>
                                    </div>
                                    <input type="email" id="with-corner-hint" className="ti-form-input" placeholder="you@site.com"/>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <label htmlFor="hs-textarea-with-corner-hint" className="ti-form-label">Contact us</label>
                                        <span className="block text-xs text-gray-500 mb-2 dark:text-white/70">100 characters</span>
                                    </div>
                                    <textarea id="hs-textarea-with-corner-hint" className="ti-form-input" rows={3} placeholder="Say hi..."></textarea>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 xxl:col-span-4">
                            <Showcode title="Input Validation states" code={input19} customCardBodyClass="">
                                <div className="space-y-3">
                                    <div>
                                        <label htmlFor="hs-validation-name-error" className="ti-form-label">Email</label>
                                        <div className="relative">
                                          <input type="text" id="hs-validation-name-error" name="hs-validation-name-error" className="ti-form-input !border-danger focus:border-danger focus:ring-danger" required aria-describedby="hs-validation-name-error-helper"/>
                                          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                            <svg className="h-5 w-5 text-danger" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                            </svg>
                                          </div>
                                        </div>
                                        <p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p>
                                      </div>

                                      <div>
                                        <label htmlFor="hs-validation-name-success" className="ti-form-label">Email</label>
                                        <div className="relative">
                                          <input type="text" id="hs-validation-name-success" name="hs-validation-name-success" className="ti-form-input !border-success focus:border-success focus:ring-success" required aria-describedby="hs-validation-name-success-helper"/>
                                          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                            <svg className="h-5 w-5 text-success" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                            </svg>
                                          </div>
                                        </div>
                                        <p className="text-sm text-green-600 mt-2" id="hs-validation-name-success-helper">Looks good!</p>
                                      </div>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Input Sizes" code={input20} customCardBodyClass="">
                                <div className="space-y-3">
                                    <input type="text" className="py-2 px-3 ti-form-input" placeholder="Small size"/>
                                    <input type="text" className="ti-form-input" placeholder="Default size"/>
                                    <input type="text" className="ti-form-input sm:p-5" placeholder="Large size"/>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Textarea Sizes" code={input21} customCardBodyClass="">
                                <div className="space-y-3">
                                    <textarea className="py-2 px-3 ti-form-input" rows={2}
                                        placeholder="Small size"></textarea>
                                    <textarea className="py-3 px-4 ti-form-input" rows={2}
                                        placeholder="Default size"></textarea>
                                    <textarea className="sm:p-5 py-3 px-4 ti-form-input" rows={2}
                                        placeholder="Large size"></textarea>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">                            
                            <Showcode title=" Textarea examples" code={input22} customCardBodyClass="space-y-3">
                                <div className="relative">
                                    <textarea id="hs-textarea-ex-1" className="p-4 pb-12 ti-form-input focus:!ring-primary"
                                        placeholder="Ask me anything..."></textarea>
                                  
                                    <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-bodybg">
                                        <div className="flex justify-between items-center">
                                            
                                            <div className="flex items-center">
                                                <button type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                                        <line x1="9" x2="15" y1="15" y2="9"></line>
                                                    </svg>
                                                </button>
                                                <button type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path
                                                            d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-x-1">
                                               
                                                <button type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z">
                                                        </path>
                                                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                                        <line x1="12" x2="12" y1="19" y2="22"></line>
                                                    </svg>
                                                </button>
                                                <button type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-sm text-white bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                    <svg className="flex-shrink-0 size-3.5"
                                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <textarea id="hs-textarea-ex-2"
                                        className="p-4 pb-12 ti-form-input focus:!ring-primary bg-gray-100 dark:bg-bodybg"
                                        placeholder="Ask me anything..."></textarea>

                                    <div
                                        className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-gray-100 dark:bg-bodybg">
                                        <div className="flex justify-between items-center">
                                           
                                            <div className="flex items-center">
                                                <button type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                                        <line x1="9" x2="15" y1="15" y2="9"></line>
                                                    </svg>
                                                </button>
                                                <button type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path
                                                            d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-x-1">
                                                <button type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z">
                                                        </path>
                                                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                                        <line x1="12" x2="12" y1="19" y2="22"></line>
                                                    </svg>
                                                </button>
                                                <button type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-sm text-white bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                    <svg className="flex-shrink-0 size-3.5"
                                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                            <Showcode title="Autoheight" code={input23} customCardBodyClass="">
                                <label htmlFor="hs-autoheight-textarea" className="ti-form-label">Contact us</label>
                                <textarea id="hs-autoheight-textarea" className="ti-form-input" rows={3}
                                    placeholder="Say hi..."></textarea>
                                    </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Overview" code={input24} customCardBodyClass="">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email
                                            address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"/>
                                        <div id="emailHelp" className="form-text">We'll
                                            never share your email
                                            with
                                            anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className="mb-3 form-check !ps-0">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label ps-2" htmlFor="exampleCheck1">Check
                                            me out</label>
                                    </div>
                                    <button type="submit" className="ti-btn ti-btn-primary-full">Submit</button>
                                </form>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="grid grid-cols-12">
                            <div className="xl:col-span-12 col-span-12">
                                    <Showcode title="Form text" code={input25} customCardBodyClass="">
                                        <label htmlFor="inputPassword5" className="form-label">Password</label>
                                        <input type="password" id="inputPassword5" className="form-control"
                                            aria-describedby="passwordHelpBlock"/>
                                        <div id="passwordHelpBlock" className="form-text">
                                            Your password must be 8-20 characters long, contain letters and
                                            numbers,
                                            and
                                            must not contain spaces, special characters, or emoji.
                                        </div>
                                        </Showcode>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                    <Showcode title=" Inline text can use any typical inline HTML element with nothing more
                                            than
                                            the <span class='text-danger'>.form-text</span> class." code={input26} customCardBodyClass="">
                                        <div className="flex flex-wrap gap-4 items-center">
                                            <div className="">
                                                <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                                            </div>
                                            <div className="">
                                                <input type="password" id="inputPassword6" className="form-control"
                                                    aria-describedby="passwordHelpInline"/>
                                            </div>
                                            <div className="">
                                                <span id="passwordHelpInline" className="form-text">
                                                    Must be 8-20 characters long.
                                                </span>
                                            </div>
                                        </div>
                                        </Showcode>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Disabled forms" code={input27} customCardBodyClass="">
                                <form>
                                    <fieldset disabled>
                                        <legend className="text-2xl">Disabled fieldset example</legend>
                                        <div className="mb-3">
                                            <label htmlFor="disabledTextInput" className="form-label">Disabled
                                                input</label>
                                            <input type="text" id="disabledTextInput" className="form-control"
                                                placeholder="Disabled input"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="disabledSelect" className="form-label">Disabled select
                                                menu</label>
                                            <select id="disabledSelect" className="form-select">
                                                <option>Disabled select</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-check !ps-0">
                                                <input className="form-check-input" type="checkbox"
                                                    id="disabledFieldsetCheck" disabled/>
                                                <label className="form-check-label ps-2" htmlFor="disabledFieldsetCheck">
                                                    Can't check this
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit"
                                            className="ti-btn ti-btn-primary-full opacity-[0.6]">Submit</button>
                                    </fieldset>
                                </form>
                                </Showcode>
                    </div>
                </div>
        </Fragment>
    )
}

export default Inputs