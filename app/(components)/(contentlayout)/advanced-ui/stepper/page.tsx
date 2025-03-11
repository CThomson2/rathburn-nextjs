"use client"
import { Stepper1, Stepper2, Stepper3, Stepper4, Stepper5, Stepper6 } from '@/shared/data/prism/advance-uiprism'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import React from 'react'

const Stepper = () => {
  return (
    <>
                <Seo title={"Stepper"} />
            <Pageheader currentpage="Stepper" activepage=" Advanced Ui" mainpage="Stepper" />
                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                    <div className="col-span-12 xxl:col-span-6">
                            <Showcode title="Basic Stepper" code={Stepper1}>
                                <div data-hs-stepper>
                                    <ul className="relative sm:flex flex-row gap-x-2 sm:space-y-0 space-y-4">
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                                            data-hs-stepper-nav-item='{"index": 1}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                    Name &amp; Email
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                                            data-hs-stepper-nav-item='{"index": 2}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                    Contact
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block hidden sm:block w-full h-px flex-1 bg-gray-200 dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                                            data-hs-stepper-nav-item='{"index": 3}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                    Payment
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="mt-5 sm:mt-8">
                                        <div data-hs-stepper-content-item='{"index": 1}'>
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Name1" className="ti-form-label">Name: </label>
                                                        <input type="text" id="Name1" className="ti-form-input"
                                                            placeholder="Enter Name"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Email1" className="ti-form-label">Email: </label>
                                                        <input type="email" id="Email1" className="ti-form-input"
                                                            placeholder="Enter Email"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"index": 2}' 
                                        
                                        >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Telephone1" className="ti-form-label">Telephone: </label>
                                                        <input type="text" id="Telephone1" className="ti-form-input"
                                                            placeholder="Enter Telephone"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Mobile2" className="ti-form-label">Mobile: </label>
                                                        <input type="text" id="Mobile2" className="ti-form-input"
                                                            placeholder="Enter Mobile"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"index": 3}' 
                                        
                                        >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                                    <div className="col-span-12">
                                                        <label htmlFor="cardholder1" className="ti-form-label">CardHolder Name:
                                                        </label>
                                                        <input type="text" id="cardholder1" className="ti-form-input"
                                                            placeholder="Enter card Details"/>
                                                    </div>
                                                    <div className="col-span-12">
                                                        <label htmlFor="card1" className="ti-form-label">Card number: </label>
                                                        <input type="text" id="card1" className="ti-form-input"
                                                            placeholder="Enter card Details"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Expiry1" className="ti-form-label">Expiry: </label>
                                                        <input type="text" id="Expiry1" className="ti-form-input"
                                                            placeholder="Enter Expiry Date"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="cvv1" className="ti-form-label">CVV: </label>
                                                        <input type="text" id="cvv1" className="ti-form-input"
                                                            placeholder="Enter CVV"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"isFinal": true}'
                                         style={{ display: "none" }}
                                         >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="text-center">
                                                    <i className="ri-checkbox-circle-line text-7xl text-success"></i>
                                                    <h4 className="text-xl font-semibold mb-1">Hurray !..Your Payment is
                                                        Successfull</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:flex justify-between items-center gap-x-2">
                                            <button type="button"
                                                className="ti-btn me-2 ti-btn-light disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-back-btn><i className="ri-arrow-left-s-line rtl:rotate-180"></i>
                                                Back</button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-next-btn>Next<i
                                                    className="ri-arrow-right-s-line rtl:rotate-180"></i></button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-finish-btn 
                                                style={{ display: "none" }}
                                                >Finish</button>
                                            <button type="reset"
                                                className="ti-btn ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-reset-btn
                                                style={{ display: "none" }}
                                                 >Reset</button>
                                        </div>
                                    </div>
                                </div>
                                
                                </Showcode>
                    </div>
                    <div className="col-span-12 xxl:col-span-6">
                        
                            <Showcode title="Non-linear Stepper" code={Stepper2}>
                                <div data-hs-stepper='{"mode": "non-linear"}'>
                                    <ul className="relative sm:flex flex-row gap-x-2 sm:space-y-0 space-y-4">
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                                            data-hs-stepper-nav-item='{"index": 1}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                    Name &amp; Email
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                                            data-hs-stepper-nav-item='{"index": 2}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                    Contact
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                                            data-hs-stepper-nav-item='{"index": 3}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                    Payment
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="mt-5 sm:mt-8">
                                        <div data-hs-stepper-content-item='{"index": 1}'>
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Name2" className="ti-form-label">Name: </label>
                                                        <input type="text" id="Name2" className="ti-form-input"
                                                            placeholder="Enter Name"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Email2" className="ti-form-label">Email: </label>
                                                        <input type="email" id="Email2" className="ti-form-input"
                                                            placeholder="Enter Email"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"index": 2}' 
                                        
                                        >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Telephone2" className="ti-form-label">Telephone: </label>
                                                        <input type="text" id="Telephone2" className="ti-form-input"
                                                            placeholder="Enter Telephone"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Mobile3" className="ti-form-label">Mobile: </label>
                                                        <input type="text" id="Mobile3" className="ti-form-input"
                                                            placeholder="Enter Mobile"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"index": 3}' 
                                        
                                        >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                                    <div className="col-span-12">
                                                        <label htmlFor="cardholder2" className="ti-form-label">CardHolder Name:
                                                        </label>
                                                        <input type="text" id="cardholder2" className="ti-form-input"
                                                            placeholder="Enter card Details"/>
                                                    </div>
                                                    <div className="col-span-12">
                                                        <label htmlFor="card2" className="ti-form-label">Card number: </label>
                                                        <input type="text" id="card2" className="ti-form-input"
                                                            placeholder="Enter card Details"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Expiry2" className="ti-form-label">Expiry: </label>
                                                        <input type="text" id="Expiry2" className="ti-form-input"
                                                            placeholder="Enter Expiry Date"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="cvv2" className="ti-form-label">CVV: </label>
                                                        <input type="text" id="cvv2" className="ti-form-input"
                                                            placeholder="Enter CVV"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"isFinal": true}' 
                                        
                                        >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="text-center">
                                                    <i className="ri-checkbox-circle-line text-7xl text-success"></i>
                                                    <h4 className="text-xl font-semibold mb-1">Hurray !..Your Payment is
                                                        Successfull</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:flex justify-between items-center gap-x-2">
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-light disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-back-btn><i className="ri-arrow-left-s-line rtl:rotate-180"></i>
                                                Back</button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-skip-btn 
                                                style={{ display: "none" }}
                                                >Skip</button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-complete-step-btn='{"completedText": "This step is completed"}'>Complete
                                                Step</button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-next-btn>Next<i
                                                    className="ri-arrow-right-s-line rtl:rotate-180"></i></button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-finish-btn 
                                                style={{ display: "none" }}
                                                >Finish</button>
                                            <button type="reset"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-reset-btn 
                                                style={{ display: "none" }}
                                                >Reset</button>
                                        </div>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                    <div className="col-span-12 xxl:col-span-6">
                      
                            <Showcode title="Skipped Stepper" code={Stepper3}>
                                <div data-hs-stepper>
                                    <ul className="relative sm:flex flex-row gap-x-2 sm:space-y-0 space-y-4">
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group active"
                                            data-hs-stepper-nav-item='{"index": 1,"isOptional": true}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                    Name &amp; Email
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group active"
                                            data-hs-stepper-nav-item='{"index": 2 ,"isOptional": true}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                    Contact
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                                            data-hs-stepper-nav-item='{"index": 3,"isOptional": true}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                    Payment
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="mt-5 sm:mt-8">
                                        <div data-hs-stepper-content-item='{"index": 1}'>
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Name5" className="ti-form-label">Name: </label>
                                                        <input type="text" id="Name5" className="ti-form-input"
                                                            placeholder="Enter Name"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Email5" className="ti-form-label">Email: </label>
                                                        <input type="email" id="Email5" className="ti-form-input"
                                                            placeholder="Enter Email"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"index": 2}' 
                                        
                                        >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Telephone5" className="ti-form-label">Telephone:
                                                        </label>
                                                        <input type="text" id="Telephone5" className="ti-form-input"
                                                            placeholder="Enter Telephone"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Mobile5" className="ti-form-label">Mobile: </label>
                                                        <input type="text" id="Mobile5" className="ti-form-input"
                                                            placeholder="Enter Mobile"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"index": 3}'
                                        style={{ display: "none" }}
                                         >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                                    <div className="col-span-12">
                                                        <label htmlFor="cardholder5" className="ti-form-label">CardHolder Name:
                                                        </label>
                                                        <input type="text" id="cardholder5" className="ti-form-input"
                                                            placeholder="Enter card Details"/>
                                                    </div>
                                                    <div className="col-span-12">
                                                        <label htmlFor="card5" className="ti-form-label">Card number: </label>
                                                        <input type="text" id="card5" className="ti-form-input"
                                                            placeholder="Enter card Details"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Expiry5" className="ti-form-label">Expiry: </label>
                                                        <input type="text" id="Expiry5" className="ti-form-input"
                                                            placeholder="Enter Expiry Date"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="cvv5" className="ti-form-label">CVV: </label>
                                                        <input type="text" id="cvv5" className="ti-form-input"
                                                            placeholder="Enter CVV"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"isFinal": true}' 
                                        
                                        >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="text-center">
                                                    <i className="ri-checkbox-circle-line text-7xl text-success"></i>
                                                    <h4 className="text-xl font-semibold mb-1">Hurray !..Your Payment is
                                                        Successfull</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:flex justify-between items-center gap-x-2">
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-light disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-back-btn><i className="ri-arrow-left-s-line rtl:rotate-180"></i>
                                                Back</button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-skip-btn 
                                                
                                                >Skip</button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-next-btn>Next<i
                                                    className="ri-arrow-right-s-line rtl:rotate-180"></i></button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-finish-btn 
                                                style={{ display: "none" }}
                                                >Finish</button>
                                            <button type="reset"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-reset-btn 
                                                style={{ display: "none" }}
                                                >Reset</button>
                                        </div>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 xxl:col-span-6">
                       
                            <Showcode title="Active Stepper" code={Stepper4}>
                                <div data-hs-stepper='{"currentIndex": 2}'>
                                    <ul className="relative sm:flex flex-row gap-x-2 sm:space-y-0 space-y-4">
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group success"
                                            data-hs-stepper-nav-item='{"index": 1,"isCompleted": true}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                    Name &amp; Email
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group active"
                                            data-hs-stepper-nav-item='{"index": 2}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                    Contact
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                                            data-hs-stepper-nav-item='{"index": 3}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                    Payment
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="mt-5 sm:mt-8">
                                        <div data-hs-stepper-content-item='{"index": 1}'>
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Name3" className="ti-form-label">Name: </label>
                                                        <input type="text" id="Name3" className="ti-form-input"
                                                            placeholder="Enter Name"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Email3" className="ti-form-label">Email: </label>
                                                        <input type="email" id="Email3" className="ti-form-input"
                                                            placeholder="Enter Email"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"index": 2}' 
                                        
                                        >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Telephone3" className="ti-form-label">Telephone: </label>
                                                        <input type="text" id="Telephone3" className="ti-form-input"
                                                            placeholder="Enter Telephone"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Mobile1" className="ti-form-label">Mobile: </label>
                                                        <input type="text" id="Mobile1" className="ti-form-input"
                                                            placeholder="Enter Mobile"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"index": 3}' 
                                        
                                        >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                                    <div className="col-span-12">
                                                        <label htmlFor="cardholder3" className="ti-form-label">CardHolder Name:
                                                        </label>
                                                        <input type="text" id="cardholder3" className="ti-form-input"
                                                            placeholder="Enter card Details"/>
                                                    </div>
                                                    <div className="col-span-12">
                                                        <label htmlFor="card3" className="ti-form-label">Card number: </label>
                                                        <input type="text" id="card3" className="ti-form-input"
                                                            placeholder="Enter card Details"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Expiry3" className="ti-form-label">Expiry: </label>
                                                        <input type="text" id="Expiry3" className="ti-form-input"
                                                            placeholder="Enter Expiry Date"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="cvv3" className="ti-form-label">CVV: </label>
                                                        <input type="text" id="cvv3" className="ti-form-input"
                                                            placeholder="Enter CVV"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"isFinal": true}'
                                        style={{ display: "none" }}
                                         >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="text-center">
                                                    <i className="ri-checkbox-circle-line text-7xl text-success"></i>
                                                    <h4 className="text-xl font-semibold mb-1">Hurray !..Your Payment is
                                                        Successfull</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:flex justify-between items-center gap-x-2">
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-light disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-back-btn><i className="ri-arrow-left-s-line rtl:rotate-180"></i>
                                                Back</button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-next-btn>Next<i
                                                    className="ri-arrow-right-s-line rtl:rotate-180"></i></button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-finish-btn 
                                                style={{ display: "none" }}
                                                >Finish</button>
                                            <button type="reset"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-reset-btn 
                                                style={{ display: "none" }}
                                                >Reset</button>
                                        </div>
                                    </div>
                                </div>
                                </Showcode>
                           
                    </div>
                </div>
                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                    <div className="col-span-12 xxl:col-span-6">
                       
                            <Showcode title="Error Stepper" code={Stepper5}>
                                <div data-hs-stepper='{"currentIndex": 2}'>
                                    <ul className="relative sm:flex flex-row gap-x-2 sm:space-y-0 space-y-4">
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group success"
                                            data-hs-stepper-nav-item='{"index": 1,"isCompleted": true}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success hs-stepper-error:!bg-danger hs-stepper-active:text-white hs-stepper-success:text-white hs-stepper-processed:bg-white hs-stepper-processed:border hs-stepper-processed:border-gray-200 hs-stepper-processed:dark:border-white/10">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden hs-stepper-error:hidden hs-stepper-processed:hidden">1</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-error:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 6 6 18" />
                                                        <path d="m6 6 12 12" />
                                                    </svg>
                                                    <span
                                                        className="hidden animate-spin size-4 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-white hs-stepper-processed:inline-block"
                                                        role="status" aria-label="loading">
                                                        <span className="sr-only">Loading...</span>
                                                    </span>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success hs-stepper-error:!text-danger">
                                                    Name &amp; Email
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group active"
                                            data-hs-stepper-nav-item='{"index": 2 , "hasError": true}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success hs-stepper-error:!bg-danger hs-stepper-active:text-white hs-stepper-success:text-white hs-stepper-processed:bg-white hs-stepper-processed:border hs-stepper-processed:border-gray-200 hs-stepper-processed:dark:border-white/10">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden hs-stepper-error:hidden hs-stepper-processed:hidden">2</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-error:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 6 6 18" />
                                                        <path d="m6 6 12 12" />
                                                    </svg>
                                                    <span
                                                        className="hidden animate-spin size-4 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-white hs-stepper-processed:inline-block"
                                                        role="status" aria-label="loading">
                                                        <span className="sr-only">Loading...</span>
                                                    </span>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success hs-stepper-error:!text-danger">
                                                    Contact
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                                            data-hs-stepper-nav-item='{"index": 3}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                    Payment
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="mt-5 sm:mt-8">
                                        <div data-hs-stepper-content-item='{"index": 1}'>
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Name4" className="ti-form-label">Name: </label>
                                                        <input type="text" id="Name4" className="ti-form-input"
                                                            placeholder="Enter Name"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Email4" className="ti-form-label">Email: </label>
                                                        <input type="email" id="Email4" className="ti-form-input"
                                                            placeholder="Enter Email"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"index": 2}' 
                                        
                                        >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Telephone4" className="ti-form-label">Telephone: </label>
                                                        <input type="text" id="Telephone4" className="ti-form-input"
                                                            placeholder="Enter Telephone"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Mobile4" className="ti-form-label">Mobile: </label>
                                                        <input type="text" id="Mobile4" className="ti-form-input"
                                                            placeholder="Enter Mobile"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"index": 3}' 
                                        
                                        >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                                    <div className="col-span-12">
                                                        <label htmlFor="cardholder4" className="ti-form-label">CardHolder Name:
                                                        </label>
                                                        <input type="text" id="cardholder4" className="ti-form-input"
                                                            placeholder="Enter card Details"/>
                                                    </div>
                                                    <div className="col-span-12">
                                                        <label htmlFor="card4" className="ti-form-label">Card number: </label>
                                                        <input type="text" id="card4" className="ti-form-input"
                                                            placeholder="Enter card Details"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Expiry4" className="ti-form-label">Expiry: </label>
                                                        <input type="text" id="Expiry4" className="ti-form-input"
                                                            placeholder="Enter Expiry Date"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="cvv4" className="ti-form-label">CVV: </label>
                                                        <input type="text" id="cvv4" className="ti-form-input"
                                                            placeholder="Enter CVV"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"isFinal": true}' 
                                        
                                        >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="text-center">
                                                    <i className="ri-checkbox-circle-line text-7xl text-success"></i>
                                                    <h4 className="text-xl font-semibold mb-1">Hurray !..Your Payment is
                                                        Successfull</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:flex justify-between items-center gap-x-2">
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-light disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-back-btn><i className="ri-arrow-left-s-line rtl:rotate-180"></i>
                                                Back</button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-next-btn>Next<i
                                                    className="ri-arrow-right-s-line rtl:rotate-180"></i></button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-finish-btn
                                                style={{ display: "none" }}
                                                 >Finish</button>
                                            <button type="reset"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-reset-btn 
                                                style={{ display: "none" }}
                                                >Reset</button>
                                        </div>
                                    </div>
                                </div>
                                </Showcode>
                           
                    </div>
                    <div className="col-span-12 xxl:col-span-6">
                       
                            <Showcode title="Success Stepper" code={Stepper6}>
                                <div data-hs-stepper='{"isCompleted": true}' className="completed">
                                    <ul className="relative sm:flex flex-row gap-x-2 sm:space-y-0 space-y-4">
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group success"
                                            data-hs-stepper-nav-item='{"index": 1,"isCompleted": true}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success hs-stepper-error:!bg-danger hs-stepper-active:text-white hs-stepper-success:text-white hs-stepper-processed:bg-white hs-stepper-processed:border hs-stepper-processed:border-gray-200 hs-stepper-processed:dark:border-white/10">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden hs-stepper-error:hidden hs-stepper-processed:hidden">1</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-error:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 6 6 18" />
                                                        <path d="m6 6 12 12" />
                                                    </svg>
                                                    <span
                                                        className="hidden animate-spin size-4 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-white hs-stepper-processed:inline-block"
                                                        role="status" aria-label="loading">
                                                        <span className="sr-only">Loading...</span>
                                                    </span>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success hs-stepper-error:!text-danger">
                                                    Name &amp; Email
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group success"
                                            data-hs-stepper-nav-item='{"index": 2,"isCompleted": true}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success hs-stepper-error:!bg-danger hs-stepper-active:text-white hs-stepper-success:text-white hs-stepper-processed:bg-white hs-stepper-processed:border hs-stepper-processed:border-gray-200 hs-stepper-processed:dark:border-white/10">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden hs-stepper-error:hidden hs-stepper-processed:hidden">2</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-error:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 6 6 18" />
                                                        <path d="m6 6 12 12" />
                                                    </svg>
                                                    <span
                                                        className="hidden animate-spin size-4 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-white hs-stepper-processed:inline-block"
                                                        role="status" aria-label="loading">
                                                        <span className="sr-only">Loading...</span>
                                                    </span>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success hs-stepper-error:!text-danger">
                                                    Contact
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group success"
                                            data-hs-stepper-nav-item='{"index": 3,"isCompleted": true}'>
                                            <span
                                                className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                                <span
                                                    className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200  dark:bg-light dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success hs-stepper-error:!bg-danger hs-stepper-active:text-white hs-stepper-success:text-white hs-stepper-processed:bg-white hs-stepper-processed:border hs-stepper-processed:border-gray-200 hs-stepper-processed:dark:border-white/10">
                                                    <span
                                                        className="hs-stepper-success:hidden hs-stepper-completed:hidden hs-stepper-error:hidden hs-stepper-processed:hidden">3</span>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-error:block"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 6 6 18" />
                                                        <path d="m6 6 12 12" />
                                                    </svg>
                                                    <span
                                                        className="hidden animate-spin size-4 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-white hs-stepper-processed:inline-block"
                                                        role="status" aria-label="loading">
                                                        <span className="sr-only">Loading...</span>
                                                    </span>
                                                </span>
                                                <span
                                                    className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success hs-stepper-error:!text-danger">
                                                    Payment
                                                </span>
                                            </span>
                                            <div
                                                className="hidden sm:block w-full h-px flex-1 bg-gray-200  dark:bg-light group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success">
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="mt-5 sm:mt-8">
                                        <div data-hs-stepper-content-item='{"index": 1,"isCompleted": true}'
                                            
                                            >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Name6" className="ti-form-label">Name: </label>
                                                        <input type="text" id="Name6" className="ti-form-input"
                                                            placeholder="Enter Name"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Email6" className="ti-form-label">Email: </label>
                                                        <input type="email" id="Email6" className="ti-form-input"
                                                            placeholder="Enter Email"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"index": 2,"isCompleted": true}'
                                            
                                            >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Telephone6" className="ti-form-label">Telephone:
                                                        </label>
                                                        <input type="text" id="Telephone6" className="ti-form-input"
                                                            placeholder="Enter Telephone"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Mobile6" className="ti-form-label">Mobile: </label>
                                                        <input type="text" id="Mobile6" className="ti-form-input"
                                                            placeholder="Enter Mobile"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"index": 3,"isCompleted": true}'
                                            
                                            >
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                                    <div className="col-span-12">
                                                        <label htmlFor="cardholder4" className="ti-form-label">CardHolder Name:
                                                        </label>
                                                        <input type="text" id="cardholder6" className="ti-form-input"
                                                            placeholder="Enter card Details"/>
                                                    </div>
                                                    <div className="col-span-12">
                                                        <label htmlFor="card6" className="ti-form-label">Card number: </label>
                                                        <input type="text" id="card6" className="ti-form-input"
                                                            placeholder="Enter card Details"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="Expiry6" className="ti-form-label">Expiry: </label>
                                                        <input type="text" id="Expiry6" className="ti-form-input"
                                                            placeholder="Enter Expiry Date"/>
                                                    </div>
                                                    <div className="lg:col-span-6 col-span-12">
                                                        <label htmlFor="cvv6" className="ti-form-label">CVV: </label>
                                                        <input type="text" id="cvv6" className="ti-form-input"
                                                            placeholder="Enter CVV"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-hs-stepper-content-item='{"isFinal": true}'>
                                            <div
                                                className="p-6 bg-gray-50  dark:bg-light border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                                <div className="text-center">
                                                    <i className="ri-checkbox-circle-line text-7xl text-success"></i>
                                                    <h4 className="text-xl font-semibold mb-1">Hurray !..Your Payment is
                                                        Successfull</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:flex justify-between items-center gap-x-2">
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-light disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-back-btn 
                                                style={{ display: "none" }}
                                                ><i
                                                    className="ri-arrow-left-s-line rtl:rotate-180"></i> Back</button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-next-btn 
                                                style={{ display: "none" }}
                                                >Next<i
                                                    className="ri-arrow-right-s-line rtl:rotate-180"></i></button>
                                            <button type="button"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none"
                                                data-hs-stepper-finish-btn 
                                                style={{ display: "none" }}
                                                >Finish</button>
                                            <button type="reset"
                                                className="ti-btn me-2  ti-btn-primary-full disabled:opacity-50 disabled:pointer-events-none" 
                                                data-hs-stepper-reset-btn>Reset</button>
                                        </div>
                                    </div>
                                </div>
                                </Showcode>
                           
                    </div>
                </div>
    </>
  )
}

export default Stepper