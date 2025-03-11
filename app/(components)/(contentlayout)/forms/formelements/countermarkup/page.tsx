"use client"
import { counter1, counter2, counter3, counter4 } from '@/shared/data/prism/forms-prism'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import React, { useEffect } from 'react'

const Countermarkup = () => {
    useEffect(() => {
        const handleLoad = () => {
          const copyContent = (window as any).HSCopyMarkup.getInstance('#hs-copy-select-content');
          if (copyContent) {
            copyContent.on('copy', (el: HTMLElement) => {
              const select = el.querySelector('[data-hs-select]') as HTMLElement;
    
              new (window as any).HSSelect(select);
            });
          }
        };
    
        window.addEventListener('load', handleLoad);
    
        // Cleanup event listener on unmount
        return () => {
          window.removeEventListener('load', handleLoad);
        };
      }, []);
    
  return (
    <>
          <Seo title={"Counters & Markup"} />
            <Pageheader currentpage="Counters & Markup" activepage="Form Elements" mainpage="Counters & Markup" />
            <h6 className="text-base mb-4">Counters:</h6>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xxl:col-span-6">
                            <Showcode title="Checkbox Toggle Count" code={counter1}>
                                <div className="flex justify-end mb-3">
                                    <div id="toggle-count" className="p-0.5 inline-block bg-gray-100 rounded-sm dark:bg-bodybg2 space-x-1">
                                    <label htmlFor="toggle-count-monthly" className="relative inline-block py-2 px-3">
                                        <span className="inline-block relative z-10 text-sm font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                                        Monthly
                                        </span>
                                        <input id="toggle-count-monthly" name="toggle-count" type="radio" className="absolute top-0 end-0 size-full border-transparent bg-transparent dark:bg-bodybg bg-none text-transparent rounded-sm cursor-pointer before:absolute before:inset-0 before:size-full before:rounded-sm focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-bodybg dark:focus:ring-offset-transparent"/>
                                    </label>
                                    <label htmlFor="toggle-count-annual" className="relative inline-block py-2 px-3 dark:bg-bodybg2">
                                        <span className="inline-block relative z-10 text-sm font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                                        Annual
                                        </span>
                                        <input id="toggle-count-annual" name="toggle-count" type="radio" className="absolute top-0 end-0 size-full border-transparent bg-transparent bg-none text-transparent rounded-sm cursor-pointer before:absolute before:inset-0 before:size-full before:rounded-sm focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-bodybg2 dark:focus:ring-offset-transparent" defaultChecked/>
                                    </label>
                                    </div>
                                </div>
                        
                                <div className="grid sm:grid-cols-3 lg:items-center border border-gray-200 rounded-sm dark:border-white/10">
                                    
                                    <div className="flex flex-col p-4">
                                    <h4 className="text-gray-800 mb-1 dark:text-white">Startup</h4>
                                    <div className="flex gap-x-1">
                                        <span className="text-xl font-normal text-gray-800 dark:text-white">$</span>
                                        <p data-hs-toggle-count='{
                                            "target": "#toggle-count",
                                            "min": 19,
                                            "max": 29
                                        }' className="text-gray-800 font-semibold text-3xl dark:text-white">
                                        19
                                        </p>
                                    </div>
                                    </div>
                                    <div className="flex flex-col p-4">
                                    <div className="flex justify-between">
                                        <h4 className="text-gray-800 mb-1 dark:text-gray-200">Team</h4>
                                    </div>
                                    <div className="flex gap-x-1">
                                        <span className="text-xl font-normal text-gray-800 dark:text-gray-200">$</span>
                                        <p data-hs-toggle-count='{
                                            "target": "#toggle-count",
                                            "min": 89,
                                            "max": 99
                                        }' className="text-gray-800 font-semibold text-3xl dark:text-gray-200">
                                        89
                                        </p>
                                    </div>
                                    </div>
                                    <div className="flex flex-col p-4">
                                    <h4 className="text-gray-800 mb-1 dark:text-gray-200">Enterprise</h4>
                                    <div className="flex gap-x-1">
                                        <span className="text-xl font-normal text-gray-800 dark:text-gray-200">$</span>
                                        <p data-hs-toggle-count='{
                                            "target": "#toggle-count",
                                            "min": 129,
                                            "max": 149
                                        }' className="text-gray-800 font-semibold text-3xl dark:text-gray-200">
                                        129
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                    <div className="col-span-12 xxl:col-span-6">
                            <Showcode title="Switch Toggle Count" code={counter2}>
                                <div className="flex justify-center mb-4">
                                    <div>
                                        <label htmlFor="toggle-count-switch" className="inline-block p-2">
                                            <span className="inline-block text-sm text-gray-800 cursor-pointer dark:text-white">
                                                Monthly
                                            </span>
                                        </label>
                                        <input id="toggle-count-switch" name="toggle-count-switch" type="checkbox" className="ti-switch"/>
                                        <label htmlFor="toggle-count-switch" className="inline-block p-2">
                                            <span className="inline-block text-sm text-gray-800 cursor-pointer dark:text-white">
                                                Annual
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-3 lg:items-center border border-gray-200 rounded-sm dark:border-white/10">
                                  
                                    <div className="flex flex-col p-4">
                                        <h4 className="text-gray-800 mb-1 dark:text-white">Startup</h4>
                                        <div className="flex gap-x-1">
                                        <span className="text-xl font-normal text-gray-800 dark:text-white">$</span>
                                        <p data-hs-toggle-count='{
                                            "target": "#toggle-count-switch",
                                            "min": 19,
                                            "max": 29
                                            }' className="text-gray-800 font-semibold text-3xl dark:text-white">
                                            19
                                        </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-4">
                                        <div className="flex justify-between">
                                        <h4 className="text-gray-800 mb-1 dark:text-white">Team</h4>
                                        </div>
                                        <div className="flex gap-x-1">
                                        <span className="text-xl font-normal text-gray-800 dark:text-white">$</span>
                                        <p data-hs-toggle-count='{
                                            "target": "#toggle-count-switch",
                                            "min": 89,
                                            "max": 99
                                            }' className="text-gray-800 font-semibold text-3xl dark:text-white">
                                            89
                                        </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-4">
                                        <h4 className="text-gray-800 mb-1 dark:text-white">Enterprise</h4>
                                        <div className="flex gap-x-1">
                                        <span className="text-xl font-normal text-gray-800 dark:text-white">$</span>
                                        <p data-hs-toggle-count='{
                                            "target": "#toggle-count-switch",
                                            "min": 129,
                                            "max": 149
                                            }' className="text-gray-800 font-semibold text-3xl dark:text-white">
                                            129
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                </div>
                <h6 className="text-base mb-4">Markup:</h6>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-4">
                            <Showcode title="Basic Markup" code={counter3}>
                                <div id="hs-wrapper-for-copy" className="space-y-3">
                                    <input id="hs-content-for-copy" type="text" className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:ring-primary" placeholder="Enter Name"/>
                                </div>

                                <p className="mt-3 text-end">
                                    <button type="button" data-hs-copy-markup='{
                                        "targetSelector": "#hs-content-for-copy",
                                        "wrapperSelector": "#hs-wrapper-for-copy",
                                        "limit": 10
                                    }' id="hs-copy-content" className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:hover:bg-bgdark dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary">
                                    <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                    Add Name
                                    </button>
                                </p>
                                </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                            <Showcode title="Select Markup" code={counter4}>
                                <div id="hs-wrapper-select-for-copy" className="space-y-3">
                                    <div id="hs-content-select-for-copy" className="relative">
                                    <select data-hs-select='{
                                        "placeholder": "Select option...",
                                        "toggleTag": "<button type=\"button\"></button>",
                                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
                                        "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
                                        "optionClasses": "cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
                                        "optionTemplate": "<div class=\"flex justify-between w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-primary\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div>"
                                        }'>
                                        <option value="">Select Option ...</option>
                                        <option>Name</option>
                                        <option>Email address</option>
                                        <option>Description</option>
                                        <option>User ID</option>
                                    </select>

                                    <div className="absolute top-1/2 end-3 -translate-y-1/2">
                                        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
                                    </div>
                                    </div>
                                </div>
                                <p className="mt-3 text-end">
                                    <button type="button" data-hs-copy-markup='{
                                            "targetSelector": "#hs-content-select-for-copy",
                                            "wrapperSelector": "#hs-wrapper-select-for-copy",
                                            "limit": 3
                                        }' id="hs-copy-select-content" className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:hover:bg-bgdark dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                        Add Option
                                    </button>
                                </p>
                                </Showcode>
                    </div>
                </div>
    </>
  )
}

export default Countermarkup