"use client"
import { switch1, switch10, switch2, switch3, switch4, switch5, switch6, switch7, switch8, switch9 } from '@/shared/data/prism/forms-prism'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import React from 'react'

const Formswitch = () => {
  return (
    <>
            <Seo title={"Form switch"} />
            <Pageheader currentpage="Form switch" activepage="Form Elements" mainpage="Form switch" />
            
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
              <Showcode title=" Default Toggle Switch" code={switch1}>
                <input type="checkbox" id="hs-basic-usage" className="ti-switch"/>
                <label htmlFor="hs-basic-usage" className="sr-only">Toggle switch</label>
                </Showcode>
          </div>
          <div className="col-span-12 lg:col-span-6">
              <Showcode title="Toggle Switch With Tooltip" code={switch2}>
                <div className="hs-tooltip flex items-center">
                  <input type="checkbox" id="hs-tooltip-example" className="hs-tooltip-toggle ti-switch shrink-0"/>
                  <label htmlFor="hs-tooltip-example" className="text-sm text-gray-500 ms-3 dark:text-white/70">Allow push
                    notifications</label>
                  <div
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-sm shadow-sm dark:bg-slate-700"
                    role="tooltip">
                    Enable push notifications
                  </div>
                </div>
                </Showcode>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
              <Showcode title="Toggle Switch With Description" code={switch3}>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input type="checkbox" id="hs-basic-with-description-unchecked" className="ti-switch"/>
                    <label htmlFor="hs-basic-with-description-unchecked"
                      className="text-sm text-gray-500 ms-3 dark:text-white/70">Unchecked</label>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="hs-basic-with-description-checked" className="ti-switch" defaultChecked/>
                    <label htmlFor="hs-basic-with-description-checked"
                      className="text-sm text-gray-500 ms-3 dark:text-white/70">Checked</label>
                  </div>

                  <div className="flex items-center">
                    <label className="text-sm text-gray-500 me-3 dark:text-white/70">On</label>
                    <input type="checkbox" id="hs-basic-with-description" className="ti-switch"/>
                    <label className="text-sm text-gray-500 ms-3 dark:text-white/70">Off</label>
                  </div>
                </div>
                </Showcode>
          </div>
          <div className="col-span-12 lg:col-span-6">
              <Showcode title="Disabled Toggle Switch" code={switch4}>
                <div className="space-y-4">
                  <div className="flex items-center opacity-70">
                    <input type="checkbox" id="hs-basic-disabled-with-description-unchecked"
                      className="ti-switch shrink-0 pointer-events-none" disabled/>
                    <label htmlFor="hs-basic-disabled-with-description-unchecked"
                      className="text-sm text-gray-500 ms-3 dark:text-white/70">Unchecked</label>
                  </div>

                  <div className="flex items-center opacity-70">
                    <input type="checkbox" id="hs-basic-disabled-with-description-checked"
                      className="ti-switch shrink-0 pointer-events-none" defaultChecked disabled/>
                    <label htmlFor="hs-basic-disabled-with-description-checked"
                      className="text-sm text-gray-500 ms-3 dark:text-white/70">Checked</label>
                  </div>

                  <div className="flex items-center opacity-70">
                    <label className="text-sm text-gray-500 me-3 dark:text-white/70">On</label>
                    <input type="checkbox" id="hs-basic-disabled-with-description"
                      className="ti-switch shrink-0 pointer-events-none" disabled/>
                    <label className="text-sm text-gray-500 ms-3 dark:text-white/70">Off</label>
                  </div>
                </div>
                </Showcode>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
              <Showcode title="Toggle Switch With Sizes" code={switch5}>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input type="checkbox" id="hs-xs-switch"
                      className="ti-switch shrink-0 !w-[35px] !h-[21px] before:size-4"/>
                    <label htmlFor="hs-xs-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Extra small</label>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="hs-small-switch" className="ti-switch shrink-0 !w-11 !h-6 before:size-5"/>
                    <label htmlFor="hs-small-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Small</label>
                  </div>


                  <div className="flex items-center">
                    <input type="checkbox" id="hs-medium-switch" className="ti-switch shrink-0"/>
                    <label htmlFor="hs-medium-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Medium</label>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="hs-large-switch"
                      className="ti-switch shrink-0 !w-[4.25rem] !h-9 before:w-8 before:h-8"/>
                    <label htmlFor="hs-large-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Large</label>
                  </div>
                </div>
                </Showcode>
              <Showcode title="Toggle Switch Validation States" code={switch6}>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input type="checkbox" id="hs-valid-toggle-switch" className="ti-switch shrink-0 checked:bg-none checked:bg-green-600 checked:hover:bg-green-600 checked:focus:bg-green-600 focus:border-green-600 focus:ring-green-600 dark:checked:bg-green-600
  
                                  checked:before:bg-green-200 dark:checked:before:bg-green-200" defaultChecked/>
                    <label htmlFor="hs-valid-toggle-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Valid
                      toggle switch</label>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="hs-invalid-toggle-switch" className="ti-switch shrink-0 checked:bg-none checked:bg-red-600 checked:hover:bg-red-600 
                    checked:focus:bg-red-600 focus:border-red-600 focus:ring-red-600 dark:checked:bg-red-600
  
                                  checked:before:bg-red-200 dark:checked:before:bg-red-200" defaultChecked/>
                    <label htmlFor="hs-invalid-toggle-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Invalid
                      toggle switch</label>
                  </div>
                </div>
                </Showcode>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
              <Showcode title="Solid Color Variants" code={switch7}>
                <div className="space-x-4 rtl:space-x-reverse">
                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-xs-solid-switch"
                      className="ti-switch shrink-0 !w-[35px] !h-[21px] before:size-4"/>
                    <label htmlFor="hs-xs-solid-switch" className="sr-only">Extra small</label>
                  </div>

                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-small-solid-switch"
                      className="ti-switch shrink-0 !w-11 !h-6 before:size-5"/>
                    <label htmlFor="hs-small-solid-switch" className="sr-only">Small</label>
                  </div>


                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-medium-solid-switch" className="ti-switch shrink-0"/>
                    <label htmlFor="hs-medium-solid-switch" className="sr-only">Medium</label>
                  </div>

                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-large-solid-switch"
                      className="ti-switch shrink-0 !w-[4.25rem] !h-9 before:w-8 before:h-8"/>
                    <label htmlFor="hs-large-solid-switch" className="sr-only">Large</label>
                  </div>
                </div>
                </Showcode>
              <Showcode title="Solid Color With Icons" code={switch8}>
                <div className="space-x-4 rtl:space-x-reverse">
                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-small-solid-switch-with-icons" className="peer relative shrink-0 w-11 h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary checked:border-primary focus:checked:border-primary dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-600
                  
                    before:inline-block before:size-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-white"
                    />
                    <label htmlFor="hs-small-solid-switch-with-icons" className="sr-only">switch</label>
                    <span className="peer-checked:text-white text-gray-500 dark:text-white/70 size-5 absolute top-[3px] start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                      <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </span>
                    <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-5 absolute top-[3px] end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                      <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-default-solid-switch-with-icons" className="peer relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary checked:border-primary focus:checked:border-primary dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-600
                  
                    before:inline-block before:size-6 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-white" />
                    <label htmlFor="hs-default-solid-switch-with-icons" className="sr-only">switch</label>
                    <span className="peer-checked:text-white text-gray-500 dark:text-white/70 size-6 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                      <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </span>
                    <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-6 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                      <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-large-solid-switch-with-icons" className="peer relative shrink-0 w-[4.25rem] h-9 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary checked:border-primary focus:checked:border-primary dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-600
                  
                    before:inline-block before:w-8 before:h-8 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-white" />
                    <label htmlFor="hs-large-solid-switch-with-icons" className="sr-only">switch</label>
                    <span className="peer-checked:text-white text-gray-500 dark:text-white/70 size-8 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </span>
                    <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-8 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                  </div>
                </div>
                </Showcode>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
              <Showcode title="Soft Color Variants" code={switch9}>
                <div className="space-x-4 rtl:space-x-reverse">
                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-xs-soft-switch"
                      className="ti-switch checked:!bg-primary/10 checked:!text-primary/10 checked:!border-primary/20 focus:checked:!border-primary/10 checked:before:!bg-primary dark:checked:before:bg-primary shrink-0 !w-[35px] !h-[21px] before:size-4"/>
                    <label htmlFor="hs-xs-soft-switch" className="sr-only">Extra small</label>
                  </div>

                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-small-soft-switch"
                      className="ti-switch checked:!bg-primary/10 checked:!text-primary/10 checked:!border-primary/20 focus:checked:!border-primary/10 checked:before:!bg-primary dark:checked:before:bg-primary shrink-0 !w-11 !h-6 before:size-5"/>
                    <label htmlFor="hs-small-soft-switch" className="sr-only">Small</label>
                  </div>


                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-medium-soft-switch"
                      className="ti-switch checked:!bg-primary/10 checked:!text-primary/10 checked:!border-primary/20 focus:checked:!border-primary/10 checked:before:!bg-primary dark:checked:before:bg-primary shrink-0"/>
                    <label htmlFor="hs-medium-soft-switch" className="sr-only">Medium</label>
                  </div>

                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-large-soft-switch"
                      className="ti-switch checked:!bg-primary/10 checked:!text-primary/10 checked:!border-primary/20 focus:checked:!border-primary/10 checked:before:!bg-primary dark:checked:before:bg-primary shrink-0 !w-[4.25rem] !h-9 before:w-8 before:h-8"/>
                    <label htmlFor="hs-large-soft-switch" className="sr-only">Large</label>
                  </div>
                </div>
                </Showcode>
              <Showcode title="Soft Color With Icons" code={switch10}>
                <div className="space-x-4 rtl:space-x-reverse">
                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-small-switch-soft-with-icons" className="peer relative shrink-0 w-11 h-6 p-px bg-gray-100 border border-gray-200 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary/30 checked:border-primary/50 checked:hover:!bg-primary/10 checked:hover:!text-primary/10 checked:hover:!border-primary/30 checked:focus:!border-primary/30 checked:focus:!bg-primary/10 checked:focus:!text-primary/10 focus:checked:border-primary/50 dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary/30 dark:checked:border-primary dark:focus:ring-offset-gray-600
                    before:inline-block before:size-5 before:bg-white checked:before:bg-primary before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-primary"/>
                    <label htmlFor="hs-small-switch-soft-with-icons" className="sr-only">switch</label>
                    <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-5 absolute top-[3px] start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                      <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </span>
                    <span className="peer-checked:text-white  size-5 absolute top-[3px] end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                      <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-default-switch-soft-with-icons" className="peer relative w-[3.25rem] h-7 p-px bg-gray-100 border border-gray-200 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary/30 checked:border-primary/50 checked:hover:!bg-primary/10 checked:hover:!text-primary/10 checked:hover:!border-primary/30 checked:focus:!border-primary/30 checked:focus:!bg-primary/10 checked:focus:!text-primary/10  focus:checked:border-primary/50 dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary/30 dark:checked:border-primary dark:focus:ring-offset-gray-600
                    before:inline-block before:size-6 before:bg-white checked:before:bg-primary before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-primary"/>
                    <label htmlFor="hs-default-switch-soft-with-icons" className="sr-only">switch</label>
                    <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-6 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                      <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </span>
                    <span className="peer-checked:text-white size-6 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                      <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <input type="checkbox" id="hs-large-switch-soft-with-icons" className="peer relative shrink-0 w-[4.25rem] h-9 p-px bg-gray-100 border border-gray-200 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary/30 checked:hover:!bg-primary/10 checked:hover:!text-primary/10 checked:hover:!border-primary/30 checked:focus:!border-primary/30 checked:focus:!bg-primary/10 checked:focus:!text-primary/10  checked:border-primary/50 focus:checked:border-primary/50 dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary/30 dark:checked:border-primary dark:focus:ring-offset-gray-600
                  
                    before:inline-block before:w-8 before:h-8 before:bg-white checked:before:bg-primary before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-primary"/>
                    <label htmlFor="hs-large-switch-soft-with-icons" className="sr-only">switch</label>
                    <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-8 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </span>
                    <span className="peer-checked:text-white size-8 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                  </div>
                </div>
                </Showcode>
          </div>
        </div>
    </>
  )
}

export default Formswitch