"use client"
import { password1, password10, password11, password12, password13, password14, password15, password16, password17, password18, password19, password2, password20, password3, password4, password5, password6, password7, password8, password9 } from '@/shared/data/prism/forms-prism'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import React from 'react'

const Passwords = () => {
  return (
    <>
         <Seo title={"Passwords"} />
            <Pageheader currentpage="Passwords" activepage="Form Elements" mainpage="Passwords" />
            <h6 className="text-base mb-4">Strong Password:</h6>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-4">
                            <Showcode title="Basic Strong Password" code={password1}>
                                <div className="flex">
                                    <div className="flex-1">
                                        <input type="password" id="hs-strong-password-base"
                                            className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
                                            placeholder="Enter password"/>
                                        <div data-hs-strong-password='{
                                        "target": "#hs-strong-password-base",
                                        "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1"
                                        }' className="flex mt-3 -mx-1"></div>
                                    </div>
                                </div>
                                </Showcode>
                            <Showcode title="Strong Password with API" code={password2}>
                                <div className="flex">
                                    <div className="relative flex-1">
                                        <input type="password"
                                            id="hs-strong-password-api-with-indicator-and-hint-in-popover"
                                            className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
                                            placeholder="Enter password"/>
                                        <div id="hs-strong-password-api"
                                            className="hidden absolute z-10 w-full bg-white shadow-md rounded-sm p-4 dark:bg-bodybg dark:border dark:border-white/10 dark:divide-white/10">
                                            <div id="hs-strong-password-api-in-popover" data-hs-strong-password='{
                                                "target": "#hs-strong-password-api-with-indicator-and-hint-in-popover",
                                                "hints": "#hs-strong-password-api",
                                                "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1",
                                                "mode": "popover",
                                                "checksExclude": ["lowercase", "min-length"],
                                                "specialCharactersSet": "&!@"
                                            }' className="flex mt-2 -mx-1">
                                            </div>
                                            <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
                                                Your password must contain:
                                            </h4>
                                            <ul className="space-y-1 text-sm text-gray-500 dark:text-white/70">
                                                <li data-hs-strong-password-hints-rule-text="uppercase"
                                                    className="hs-strong-password-active:text-success flex items-center gap-x-2">
                                                    <span className="hidden" data-check>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    </span>
                                                    <span data-uncheck>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M18 6 6 18" />
                                                            <path d="m6 6 12 12" />
                                                        </svg>
                                                    </span>
                                                    Should contain uppercase.
                                                </li>
                                                <li data-hs-strong-password-hints-rule-text="numbers"
                                                    className="hs-strong-password-active:text-success flex items-center gap-x-2">
                                                    <span className="hidden" data-check>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    </span>
                                                    <span data-uncheck>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M18 6 6 18" />
                                                            <path d="m6 6 12 12" />
                                                        </svg>
                                                    </span>
                                                    Should contain numbers.
                                                </li>
                                                <li data-hs-strong-password-hints-rule-text="special-characters"
                                                    className="hs-strong-password-active:text-success flex items-center gap-x-2">
                                                    <span className="hidden" data-check>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    </span>
                                                    <span data-uncheck>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M18 6 6 18" />
                                                            <path d="m6 6 12 12" />
                                                        </svg>
                                                    </span>
                                                    Should contain special characters (available chars: &!@).
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                       
                            <Showcode title="Min Length Strong Password" code={password3}>
                                <div className="flex-1">
                                    <input type="password" id="hs-strong-password-with-minLength"
                                        className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
                                        placeholder="Enter password"/>
                                    <div id="hs-strong-password-minLength" data-hs-strong-password='{
                                        "target": "#hs-strong-password-with-minLength",
                                        "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1",
                                        "minLength": "8"
                                        }' className="flex mt-3 -mx-1">
                                    </div>
                                </div>
                                </Showcode>
                           
                       
                            <Showcode title="Strong Password Working with Popover" code={password4}>
                                <div className="flex">
                                    <div className="relative flex-1">
                                        <input type="password"
                                            id="hs-strong-password-with-indicator-and-hint-in-popover"
                                            className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
                                            placeholder="Enter password"/>
                                        <div id="hs-strong-password-popover"
                                            className="hidden absolute z-10 w-full bg-white shadow-md rounded-sm p-4 dark:bg-bodybg dark:border dark:border-white/10 dark:divide-white/10">
                                            <div id="hs-strong-password-in-popover" data-hs-strong-password='{
                                            "target": "#hs-strong-password-with-indicator-and-hint-in-popover",
                                            "hints": "#hs-strong-password-popover",
                                            "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1",
                                            "mode": "popover"
                                        }' className="flex mt-2 -mx-1">
                                            </div>

                                            <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
                                                Your password must contain:
                                            </h4>

                                            <ul className="space-y-1 text-sm text-gray-500 dark:text-white/70">
                                                <li data-hs-strong-password-hints-rule-text="min-length"
                                                    className="hs-strong-password-active:text-success flex items-center gap-x-2">
                                                    <span className="hidden" data-check>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    </span>
                                                    <span data-uncheck>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M18 6 6 18" />
                                                            <path d="m6 6 12 12" />
                                                        </svg>
                                                    </span>
                                                    Minimum number of characters is 6.
                                                </li>
                                                <li data-hs-strong-password-hints-rule-text="lowercase"
                                                    className="hs-strong-password-active:text-success flex items-center gap-x-2">
                                                    <span className="hidden" data-check>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    </span>
                                                    <span data-uncheck>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M18 6 6 18" />
                                                            <path d="m6 6 12 12" />
                                                        </svg>
                                                    </span>
                                                    Should contain lowercase.
                                                </li>
                                                <li data-hs-strong-password-hints-rule-text="uppercase"
                                                    className="hs-strong-password-active:text-success flex items-center gap-x-2">
                                                    <span className="hidden" data-check>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    </span>
                                                    <span data-uncheck>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M18 6 6 18" />
                                                            <path d="m6 6 12 12" />
                                                        </svg>
                                                    </span>
                                                    Should contain uppercase.
                                                </li>
                                                <li data-hs-strong-password-hints-rule-text="numbers"
                                                    className="hs-strong-password-active:text-success flex items-center gap-x-2">
                                                    <span className="hidden" data-check>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    </span>
                                                    <span data-uncheck>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M18 6 6 18" />
                                                            <path d="m6 6 12 12" />
                                                        </svg>
                                                    </span>
                                                    Should contain numbers.
                                                </li>
                                                <li data-hs-strong-password-hints-rule-text="special-characters"
                                                    className="hs-strong-password-active:text-success flex items-center gap-x-2">
                                                    <span className="hidden" data-check>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    </span>
                                                    <span data-uncheck>
                                                        <svg className="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M18 6 6 18" />
                                                            <path d="m6 6 12 12" />
                                                        </svg>
                                                    </span>
                                                    Should contain special characters.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                </Showcode>
                           
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                    
                            <Showcode title="Strong Password With Indicator and Hints" code={password5}>
                                <div className="flex mb-2">
                                    <div className="flex-1">
                                        <input type="password" id="hs-strong-password-with-indicator-and-hint"
                                            className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
                                            placeholder="Enter password"/>
                                        <div id="hs-strong-password" data-hs-strong-password='{
                                            "target": "#hs-strong-password-with-indicator-and-hint",
                                            "hints": "#hs-strong-password-hints",
                                            "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1"
                                        }' className="flex mt-3 -mx-1"></div>
                                    </div>
                                </div>
                                <div id="hs-strong-password-hints" className="">
                                <div>
                                        <span className="text-sm text-gray-800 dark:text-gray-200">Level : </span>
                                        <span
                                            data-hs-strong-password-hints-weakness-text='["Empty", "Weak", "Medium", "Strong", "Very Strong", "Super Strong"]'
                                            className="text-sm font-semibold text-gray-800 dark:text-gray-200"></span>
                                    </div>

                                    <h4 className="my-2 text-sm font-semibold text-gray-800 dark:text-white">
                                        Your password must contain:
                                    </h4>

                                    <ul className="space-y-1 text-sm text-gray-500 dark:text-white/70">
                                        <li data-hs-strong-password-hints-rule-text="min-length"
                                            className="hs-strong-password-active:text-success flex items-center gap-x-2">
                                            <span className="hidden" data-check>
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </span>
                                            <span data-uncheck>
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M18 6 6 18" />
                                                    <path d="m6 6 12 12" />
                                                </svg>
                                            </span>
                                            Minimum number of characters is 6.
                                        </li>
                                        <li data-hs-strong-password-hints-rule-text="lowercase"
                                            className="hs-strong-password-active:text-success flex items-center gap-x-2">
                                            <span className="hidden" data-check>
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </span>
                                            <span data-uncheck>
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M18 6 6 18" />
                                                    <path d="m6 6 12 12" />
                                                </svg>
                                            </span>
                                            Should contain lowercase.
                                        </li>
                                        <li data-hs-strong-password-hints-rule-text="uppercase"
                                            className="hs-strong-password-active:text-success flex items-center gap-x-2">
                                            <span className="hidden" data-check>
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </span>
                                            <span data-uncheck>
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M18 6 6 18" />
                                                    <path d="m6 6 12 12" />
                                                </svg>
                                            </span>
                                            Should contain uppercase.
                                        </li>
                                        <li data-hs-strong-password-hints-rule-text="numbers"
                                            className="hs-strong-password-active:text-success flex items-center gap-x-2">
                                            <span className="hidden" data-check>
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </span>
                                            <span data-uncheck>
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M18 6 6 18" />
                                                    <path d="m6 6 12 12" />
                                                </svg>
                                            </span>
                                            Should contain numbers.
                                        </li>
                                        <li data-hs-strong-password-hints-rule-text="special-characters"
                                            className="hs-strong-password-active:text-success flex items-center gap-x-2">
                                            <span className="hidden" data-check>
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </span>
                                            <span data-uncheck>
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M18 6 6 18" />
                                                    <path d="m6 6 12 12" />
                                                </svg>
                                            </span>
                                            Should contain special characters.
                                        </li>
                                    </ul>
                                </div>
                                </Showcode>
                    </div>
                </div>
                <h6 className="text-base mb-4">Toggle Password:</h6>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-4">
                     
                            <Showcode title=" Basic Toggle Password" code={password6}>
                                <label className="block text-sm mb-2 dark:text-white">Password</label>
                                <div className="relative">
                                    <input id="hs-toggle-password" type="password"
                                        className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:ring-primary"
                                        placeholder="Enter password" defaultValue="12345qwerty"/>
                                    <button type="button" data-hs-toggle-password='{
                                    "target": "#hs-toggle-password"
                                    }'
                                        className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-transparent">
                                        <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-white" width="24"
                                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path className="hs-password-active:hidden"
                                                d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                            <path className="hs-password-active:hidden"
                                                d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                            <path className="hs-password-active:hidden"
                                                d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                            <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22" />
                                            <path className="hidden hs-password-active:block"
                                                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                            <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3" />
                                        </svg>
                                    </button>
                                </div>
                                </Showcode>
                            
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                       
                            <Showcode title="Checkbox Tooggle Password" code={password7}>
                            <div className="max-w-sm mb-5">
                                <label htmlFor="hs-toggle-password-with-checkbox" className="block text-sm mb-2 dark:text-white">Current password</label>
                                <input id="hs-toggle-password-with-checkbox" type="password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:!bg-light dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter current password" defaultValue="12345qwerty"/>

                                <div className="flex mt-4">
                                    <input data-hs-toggle-password='{
                                        "target": "#hs-toggle-password-with-checkbox"
                                    }' id="hs-toggle-password-checkbox" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-primary focus:ring-primary dark:bg-light dark:border-neutral-700 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-800"/>
                                    <label htmlFor="hs-toggle-password-checkbox" className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Show password</label>
                                </div>
                            </div>
                                </Showcode>
                           
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        
                            <Showcode title="Multi Toggle" code={password8}>
                                <div className="space-y-5" data-hs-toggle-password-group>
                                    
                                    <label htmlFor="hs-toggle-password-multi-toggle-np"
                                        className="block text-sm mb-2 dark:text-white">New password</label>
                                    <div className="relative">
                                        <input id="hs-toggle-password-multi-toggle-np" type="password"
                                            className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:ring-primary"
                                            placeholder="Enter new password"/>
                                        <button type="button" data-hs-toggle-password='{
                                            "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
                                        }'
                                            className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-transparent">
                                            <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-white" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path className="hs-password-active:hidden"
                                                    d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                                <path className="hs-password-active:hidden"
                                                    d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                                <path className="hs-password-active:hidden"
                                                    d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                                <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22" />
                                                <path className="hidden hs-password-active:block"
                                                    d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                                <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3" />
                                            </svg>
                                        </button>
                                    </div>
                                    <label htmlFor="hs-toggle-password-multi-toggle"
                                        className="block text-sm mb-2 dark:text-white">Current password</label>
                                    <div className="relative">
                                        <input id="hs-toggle-password-multi-toggle" type="password"
                                            className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:ring-primary"
                                            placeholder="Enter current password" defaultValue="12345qwerty"/>
                                        <button type="button" data-hs-toggle-password='{
                                            "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
                                        }'
                                            className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-transparent">
                                            <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-white" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path className="hs-password-active:hidden"
                                                    d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                                <path className="hs-password-active:hidden"
                                                    d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                                <path className="hs-password-active:hidden"
                                                    d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                                <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22" />
                                                <path className="hidden hs-password-active:block"
                                                    d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                                <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                </Showcode>
                           
                    </div>
                </div>
                <h6 className="text-base mb-4">PIN Input:</h6>
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 xl:col-span-3 lg:col-span-6">
                        
                                <Showcode title="Basic PIN Input" code={password9}>
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            data-hs-pin-input-item autoFocus/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            data-hs-pin-input-item/>
                                    </div>
                                    </Showcode>
                            
                        </div>
                        <div className="col-span-12 xl:col-span-3 lg:col-span-6">
                                <Showcode title="Placeholder PIN Input" code={password10}>
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                    </div>
                                    </Showcode>
                        </div>
                        <div className="col-span-12 xl:col-span-3 lg:col-span-6">
                                <Showcode title="Gray PIN Input" code={password11}>
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center bg-gray-100 border-transparent rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 dark:border-transparent dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center bg-gray-100 border-transparent rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 dark:border-transparent dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center bg-gray-100 border-transparent rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 dark:border-transparent dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center bg-gray-100 border-transparent rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 dark:border-transparent dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                    </div>
                                    </Showcode>
                        </div>
                        <div className="col-span-12 xl:col-span-3 lg:col-span-6">
                                <Showcode title="Underline PIN Input" code={password12}>
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:text-white dark:focus:ring-primary dark:focus:border-b-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:text-white dark:focus:ring-primary dark:focus:border-b-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:text-white dark:focus:ring-primary dark:focus:border-b-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:text-white dark:focus:ring-primary dark:focus:border-b-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                    </div>
                                    </Showcode>
                        </div>
                        <div className="col-span-12 xl:col-span-3 lg:col-span-6">
                                <Showcode title="Focus effect PIN Input" code={password13}>
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                    </div>
                                    </Showcode>
                        </div>
                        <div className="col-span-12 xl:col-span-3 lg:col-span-6">
                                <Showcode title="PIN Input Type" code={password14}>
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input='{"availableCharsRE": "^[0-9]+$"}'>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                    </div>
                                    </Showcode>
                        </div>
                        <div className="col-span-12 xl:col-span-3 lg:col-span-6">
                                <Showcode title="PIN Input Regex type" code={password15}>
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input='{"availableCharsRE": "^[0-3]+$"}'>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                    </div>
                                    </Showcode>
                        </div>
                        <div className="col-span-12 xl:col-span-3 lg:col-span-6">
                                <Showcode title="Masked" code={password16}>
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input='{"availableCharsRE": "^[0-3]+$"}'>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item />
                                    </div>
                                    </Showcode>
                        </div>
                        <div className="col-span-12  lg:col-span-6">
                                <Showcode title="Show PIN code suggest on iOS keyboard" code={password17}>
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
                                        <input
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            type="tel" placeholder="⚬" data-hs-pin-input-item/>
                                        <input
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            type="tel" placeholder="⚬" data-hs-pin-input-item/>
                                        <input
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            type="tel" placeholder="⚬" data-hs-pin-input-item/>
                                        <input
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            type="tel" placeholder="⚬" data-hs-pin-input-item/>
                                    </div>
                                    </Showcode>
                        </div>
                        <div className="col-span-12  lg:col-span-6">
                                <Showcode title="Pin Input Disabled" code={password18}>
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item disabled/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item disabled/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item disabled/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item disabled/>
                                    </div>
                                    </Showcode>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                                <Showcode title="Focus effect PIN Input" code={password19} customCardBodyClass="space-y-4">
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                    </div>
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                    </div>
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text"
                                            className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
                                            placeholder="⚬" data-hs-pin-input-item/>
                                    </div>
                                    </Showcode>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                                <Showcode title="PIN Input Sizes" code={password20} customCardBodyClass="space-y-4">
                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
                                        <input type="text" className="dark:placeholder:text-white/50 block size-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text" className="dark:placeholder:text-white/50 block size-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text" className="dark:placeholder:text-white/50 block size-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text" className="dark:placeholder:text-white/50 block size-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
                                    </div>

                                    <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
                                        <input type="text" className="dark:placeholder:text-white/50 block size-[46px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text" className="dark:placeholder:text-white/50 block size-[46px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text" className="dark:placeholder:text-white/50 block size-[46px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text" className="dark:placeholder:text-white/50 block size-[46px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
                                    </div>

                                    <div className="flex space-x-3 rtl:space-x-reverse " data-hs-pin-input>
                                        <input type="text" className="dark:placeholder:text-white/50 block sm:size-[62px] size-[50px] text-center border-gray-200 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text" className="dark:placeholder:text-white/50 block sm:size-[62px] size-[50px] text-center border-gray-200 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text" className="dark:placeholder:text-white/50 block sm:size-[62px] size-[50px] text-center border-gray-200 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
                                        <input type="text" className="dark:placeholder:text-white/50 block sm:size-[62px] size-[50px] text-center border-gray-200 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
                                    </div>
                                    </Showcode>
                        </div>
                    </div>

    </>
  )
}

export default Passwords