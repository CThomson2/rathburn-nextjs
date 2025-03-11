"use client"
import { progress1, progress10, progress11, progress12, progress13, progress14, progress15, progress16, progress17, progress18, progress19, progress2, progress3, progress4, progress5, progress6, progress7, progress8, progress9 } from '@/shared/data/prism/uielementsprism'
import { Custom, Gradient, animated, basicprogress, colorprogress, lables, stripped } from '@/shared/data/ui-elements/progressdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import React from 'react'

const Progress = () => {
    return (
        <>
            <Seo title={"Progress"} />
            <Pageheader currentpage="Progress" activepage="Ui Elements" mainpage="Progress" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                        <Showcode title="Basic Progress" code={progress1}>
                    {basicprogress.map((idx) => (
                            <div className={`progress !rounded-full ${idx.class}`} aria-valuenow={Number(idx.valuenow)} aria-valuemin={0} aria-valuemax={100} key={Math.random()} role="progressbar">
                                <div className={`progress-bar ${idx.width}`}></div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                        <Showcode title="Different Colored Progress" code={progress2}>
                        {colorprogress.map((idx) => (
                            <div className={`progress ${idx.class}`} aria-valuenow={Number(idx.valuenow)} role="progressbar" aria-valuemin={0} key={Math.random()}
                                aria-valuemax={100}>
                                <div className={`progress-bar !bg-${idx.color} !rounded-s-full ${idx.width}`}></div>
                            </div>
                        ))}
                    </Showcode>
                     
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                <Showcode title="Striped Progress" code={progress3}>
                        {stripped.map((idx) => (
                            <div className={`progress ${idx.class}`} aria-valuenow={10} aria-valuemin={0} role="progressbar" aria-valuemax={100} key={Math.random()}>
                                <div className={`progress-bar progress-bar-striped ${idx.color} ${idx.width}`}>
                                </div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">

                        <Showcode title="Progress Height" code={progress4}>
                            <div className="progress progress-xs mb-4" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar bg-primary !rounded-s-full w-[10%]">
                                </div>
                            </div>
                            <div className="progress progress-sm mb-4" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar bg-primary !rounded-s-full w-1/4">
                                </div>
                            </div>
                            <div className="progress mb-4" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar bg-primary !rounded-s-full w-2/4">
                                </div>
                            </div>
                            <div className="progress progress-lg mb-4" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar bg-primary !rounded-s-full w-3/4">
                                </div>
                            </div>
                            <div className="progress progress-xl" role="progressbar" aria-valuenow={100} aria-valuemin={0}
                                aria-valuemax={100}>
                                <div className="progress-bar bg-primary !rounded-s-full w-full"></div>
                            </div>
                            </Showcode>
                       
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                  
                        <Showcode title="Progress With Labels" code={progress5}>
                        {lables.map((idx) => ( 
                            <div className={`progress ${idx.class1}`} key={Math.random()} role="progressbar"
                                aria-valuenow={Number(idx.valuenow)} aria-valuemin={0} aria-valuemax={100}>
                                <div className={`progress-bar !rounded-s-full ${idx.color} ${idx.width}`}>{idx.class}</div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                        <Showcode title="Multiple Bars With Sizes" code={progress6}>
                            <div className="progress-stacked progress-xs mb-4 flex">
                                <div className="progress-bar w-[5%]" role="progressbar" aria-valuenow={5} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="progress-bar !bg-secondary !rounded-none w-[10%]" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="progress-bar !bg-success !rounded-none w-[15%]" role="progressbar" aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="progress-stacked progress-sm mb-4 flex">
                                <div className="progress-bar !bg-warning w-[10%]" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="progress-bar !bg-info !rounded-none w-[15%]" role="progressbar" aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="progress-bar !bg-danger !rounded-none w-[20%]" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="progress-stacked mb-4 flex">
                                <div className="progress-bar !bg-info w-[15%]"
                                    role="progressbar" aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="progress-bar !bg-success !rounded-none w-1/5"
                                    role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="progress-bar !rounded-none w-1/4"
                                    role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="progress-stacked progress-lg mb-4 flex">
                                <div className="progress-bar !bg-purplemain w-1/5"
                                    role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="progress-bar !bg-tealmain !rounded-none w-1/4"
                                    role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="progress-bar !bg-orangemain !rounded-none w-[30%]"
                                    role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="progress-stacked progress-xl mb-0 flex">
                                <div className="progress-bar !bg-success w-1/4"
                                    role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="progress-bar !bg-danger !rounded-none w-[30%]"
                                    role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="progress-bar !bg-warning !rounded-none w-[35%]"
                                    role="progressbar" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                        <Showcode title="Labels at The end" code={progress7}>
                            <div className="flex items-center gap-x-3 whitespace-nowrap w-full mb-4">
                                <div className="ti-main-progress w-full progress bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" 
                                    style={{ width : "25%" }} 
                                     role="progressbar"
                                     aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="w-10 text-end">
                                    <span className="text-sm text-gray-800 dark:text-white">25%</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-3 whitespace-nowrap w-full mb-4">
                                <div className="ti-main-progress w-full progress bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center"
                                    style={{ width : "50%" }}  
                                    role="progressbar"
                                      aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="w-10 text-end">
                                    <span className="text-sm text-gray-800 dark:text-white">50%</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-3 whitespace-nowrap w-full mb-4">
                                <div className="ti-main-progress w-full progress bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" 
                                    style={{ width : "75%" }} 
                                     role="progressbar"
                                     aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="w-10 text-end">
                                    <span className="text-sm text-gray-800 dark:text-white">75%</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-3 whitespace-nowrap w-full mb-4">
                                <div className="ti-main-progress w-full progress bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" 
                                    style={{ width : "100%" }} 
                                    role="progressbar"
                                     aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="w-10 text-end">
                                    <span className="text-sm text-gray-800 dark:text-white">100%</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-3 whitespace-nowrap w-full mb-4">
                                <div className="ti-main-progress w-full progress bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-danger text-xs text-white text-center" 
                                    style={{ width : "100%" }} 
                                    role="progressbar"
                                     aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="w-10 text-end">
                                    <span className="flex-shrink-0 ms-auto size-4 flex justify-center items-center rounded-full bg-red-500 dark:text-white">
                                        <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-3 whitespace-nowrap w-full mb-4">
                                <div className="ti-main-progress w-full progress bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-success text-xs text-white text-center" 
                                    style={{ width : "100%" }} 
                                    role="progressbar"
                                     aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="w-10 text-end">
                                    <span className="flex-shrink-0 ms-auto size-4 flex justify-center items-center rounded-full bg-success text-white">
                                        <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                        <Showcode title="Progress With Title Label" code={progress8} customCardBodyClass="space-y-4">
                            <div className="">
                                <div className="mb-2 flex justify-between items-center">
                                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Progress title</h3>
                                    <span className="text-sm text-gray-800 dark:text-white">25%</span>
                                </div>
                                <div className="ti-main-progress w-full h-2 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" 
                                    style={{ width: "25%"  }}
                                    role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-2 flex justify-between items-center">
                                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Progress title</h3>
                                    <span className="text-sm text-gray-800 dark:text-white">50%</span>
                                </div>
                                <div className="ti-main-progress w-full h-2 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" 
                                    style={{ width: "50%" }} 
                                    role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-2 flex justify-between items-center">
                                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Progress title</h3>
                                    <span className="text-sm text-gray-800 dark:text-white">75%</span>
                                </div>
                                <div className="ti-main-progress w-full h-2 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" 
                                    style={{ width: "75%" }} 
                                    role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-2 flex justify-between items-center">
                                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Progress title</h3>
                                    <span className="text-sm text-gray-800 dark:text-white">100%</span>
                                </div>
                                <div className="ti-main-progress w-full h-2 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" 
                                    style={{ width: "100%" }} 
                                    role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                        <Showcode title="Progress With Steps" code={progress9} customCardBodyClass="space-y-4">
                            <div className="max-w-40 ti-main-progress !h-full items-center gap-x-1">
                                <div className="w-full h-2.5 ti-main-progress-bar bg-primary text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-primary text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-gray-200 dark:bg-bodybg text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-gray-200 dark:bg-bodybg text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div>
                                    <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">50%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ti-main-progress !h-full items-center gap-x-1">
                                <div className="w-full h-2.5 ti-main-progress-bar bg-primary text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-primary text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-gray-200 dark:bg-bodybg text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-gray-200 dark:bg-bodybg text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div>
                                    <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">50%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-40 ti-main-progress !h-full items-center gap-x-1">
                                <div className="w-full h-2.5 ti-main-progress-bar bg-danger text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-danger/10 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-danger/10 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-danger/10 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div>
                                    <div className="w-10 text-end">
                                        <span className="text-sm text-danger">25%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full ti-main-progress !h-full items-center gap-x-1">
                                <div className="w-full h-2.5 ti-main-progress-bar bg-danger text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-danger/10 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-danger/10 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-danger/10 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div>
                                    <div className="w-10 text-end">
                                        <span className="text-sm text-danger">25%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-40 ti-main-progress !h-full items-center gap-x-1">
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div>
                                    <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">100%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ti-main-progress !h-full items-center gap-x-1">
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div>
                                    <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">100%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-[8.5rem] ti-main-progress !h-full items-center gap-x-1">
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ms-1">
                                    <span className="flex-shrink-0 ms-auto size-4 flex justify-center items-center rounded-full bg-success text-white">
                                        <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </span>
                                </div>
                            </div>
                            <div className="ti-main-progress !h-full items-center gap-x-1">
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ms-1">
                                    <span className="flex-shrink-0 ms-auto size-4 flex justify-center items-center rounded-full bg-success text-white">
                                        <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </span>
                                </div>
                            </div>
                            </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                        <Showcode title="Vertical Progress" code={progress10} customCardBodyClass="">
                            <div className="flex space-x-8 rtl:space-x-reverse">
                                <div className="ti-main-progress flex-col flex-nowrap justify-end !w-2 !h-[17rem] bg-gray-200 dark:bg-bodybg">
                                    <div className="bg-primary ti-main-progress-bar" 
                                    style={{height: "25%"}} role="progressbar" 
                                    aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="ti-main-progress flex-col flex-nowrap justify-end !w-2 !h-[17rem] bg-gray-200 dark:bg-bodybg">
                                    <div className="bg-secondary ti-main-progress-bar" 
                                    style={{height: "40%"}} role="progressbar"
                                     aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="ti-main-progress flex-col flex-nowrap justify-end !w-2 !h-[17rem] bg-gray-200 dark:bg-bodybg">
                                    <div className="bg-warning ti-main-progress-bar" 
                                    style={{height: "60%"}} role="progressbar"
                                     aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="ti-main-progress flex-col flex-nowrap justify-end !w-2 !h-[17rem] bg-gray-200 dark:bg-bodybg">
                                    <div className="bg-info ti-main-progress-bar" 
                                    style={{height: "80%"}} role="progressbar" 
                                    aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="ti-main-progress flex-col flex-nowrap justify-end !w-2 !h-[17rem] bg-gray-200 dark:bg-bodybg">
                                    <div className="bg-danger ti-main-progress-bar"
                                     style={{ height: "100%" }} role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}
                                     ></div>
                                </div>
                            </div>
                            </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                        <Showcode title="Circular progress" code={progress11} customCardBodyClass="">
                            <div className="flex gap-x-5">
                                <div className="relative size-40">
                                    <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                        
                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-white/10" strokeWidth="2"></circle>
                                       
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-primary" strokeWidth="2" strokeDasharray="100" strokeDashoffset="75"></circle>
                                        </g>
                                    </svg>
                                </div>
                                <div className="relative size-40">
                                    <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                        
                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-white/10" strokeWidth="2"></circle>
                                       
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-primary" strokeWidth="2" strokeDasharray="100" strokeDashoffset="75"></circle>
                                        </g>
                                    </svg>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                        <span className="text-center text-2xl font-bold text-gray-800 dark:text-white">72%</span>
                                    </div>
                                </div>
                            </div>
                            </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Animated Stripped Progress" code={progress12}>
                        {animated.map((idx) => (
                            <div className={`progress ${idx.class1}`}  role="progressbar" aria-valuenow={Number(idx.valuenow)} aria-valuemin={0} aria-valuemax={100} key={Math.random()}>
                                <div className={`progress-bar ${idx.class}`}></div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Gradient Progress" code={progress13}>
                        {Gradient.map((idx) => (
                            <div className={`progress ${idx.class}`} role="progressbar" aria-valuenow={Number(idx.valuenow)} aria-valuemin={0} aria-valuemax={100} key={Math.random()}>
                                <div className={`progress-bar bg-${idx.color}-gradient ${idx.width}`}></div>
                            </div>
                        ))}
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                     <Showcode title="Custom Animated Progress" code={progress14}>
                        {Gradient.map((idx) => (
                            <div className={`progress ${idx.class} progress-animate`} role="progressbar" aria-valuenow={Number(idx.valuenow)} aria-valuemin={0} aria-valuemax={100} key={Math.random()}>
                                <div className={`progress-bar bg-${idx.color}-gradient ${idx.width}`}></div>
                            </div>
                        ))}
                                
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                <Showcode title="Custom Progress-1" code={progress15}>
                        <div className="progress progress-sm progress-custom mb-[3rem] progress-animate" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                            <h6 className="progress-bar-title !text-[0.63rem]">Mobiles</h6>
                            <div className="progress-bar w-1/2">
                                <div className="progress-bar-value !bg-primary">50%</div>
                            </div>
                        </div>
                        <div className="progress progress-sm progress-custom mb-[3rem] progress-animate" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                            <h6 className="progress-bar-title !bg-secondary !text-[0.63rem] after:!border-s-secondary">Watches</h6>
                            <div className="progress-bar progress-secondary w-3/5">
                                <div className="progress-bar-value !bg-secondary">60%</div>
                            </div>
                        </div>
                        <div className="progress progress-sm progress-custom progress-animate" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                            <h6 className="progress-bar-title !bg-success !text-[0.63rem] after:!border-s-success">Shirts</h6>
                            <div className="progress-bar progress-success w-[70%]">
                                <div className="progress-bar-value !bg-success">70%</div>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                        <Showcode title="Custom Progress-2" code={progress16}>
                            <div className="progress progress-sm mb-4" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-item-1 !bg-primary"></div><div className="progress-item-2"></div><div className="progress-item-3"></div>
                                <div className="progress-bar w-1/2"></div>
                            </div>
                            <div className="progress progress-sm mb-4" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-item-1 !bg-secondary"></div><div className="progress-item-2 !bg-secondary"></div><div className="progress-item-3"></div>
                                <div className="progress-bar !bg-secondary w-3/5"></div>
                            </div>
                            <div className="progress progress-sm mb-4" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-item-1 !bg-success"></div><div className="progress-item-2 !bg-success"></div><div className="progress-item-3"></div>
                                <div className="progress-bar !bg-success w-[70%]"></div>
                            </div>
                            <div className="progress progress-sm mb-4" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-item-1 !bg-info"></div><div className="progress-item-2 !bg-info"></div><div className="progress-item-3 !bg-info"></div>
                                <div className="progress-bar !bg-info w-4/5"></div>
                            </div>
                            <div className="progress progress-sm" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-item-1 !bg-warning"></div><div className="progress-item-2 !bg-warning"></div><div className="progress-item-3 !bg-warning"></div>
                                <div className="progress-bar !bg-warning w-[90%]"></div>
                            </div>
                            </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                        <Showcode title=" Custom Progress-3" code={progress17}>
                            <div className="progress progress-lg mb-[3rem] custom-progress-3 progress-animate" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar w-1/2">
                                    <div className="progress-bar-value">50%</div>
                                </div>
                            </div>
                            <div className="progress progress-lg mb-[3rem] custom-progress-3 progress-animate" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar !bg-secondary w-3/5">
                                    <div className="progress-bar-value secondary">60%</div>
                                </div>
                            </div>
                            <div className="progress progress-lg custom-progress-3 progress-animate" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar !bg-success w-[70%]">
                                    <div className="progress-bar-value success">70%</div>
                                </div>
                            </div>
                            </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                        <Showcode title="Custom Progress-4" code={progress18}>
                        {Custom.map((idx) => (
                            <div className={`progress progress-xl ${idx.class} progress-animate custom-progress-4 ${idx.color}`} role="progressbar" aria-valuenow={Number(idx.valuenow)} aria-valuemin={0} aria-valuemax={100} key={Math.random()}>
                                <div className={`progress-bar bg-${idx.color}-gradient !rounded-sm ${idx.width}`}></div>
                                <div className="progress-bar-label">{Number(idx.valuenow)}%</div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                        <Showcode title="Custom Progress-5" code={progress19}>
                            <h6 className="font-semibold mb-2">Project Dependencies</h6>
                            <div className="progress-stacked progress-xl mb-[3rem] flex">
                                <div className="progress-bar w-1/2"
                                    role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                <div className="progress-bar !bg-secondary !rounded-none w-[35%]"
                                    role="progressbar" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>35%</div>
                                <div className="progress-bar !bg-danger !rounded-s-none !rounded-e-full w-2/5"
                                    role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                            </div>
                            <div className="grid grid-cols-12 justify-center">
                                <div className="xl:col-span-5 col-span-12">
                                    <div className="border border-defaultborder dark:border-defaultborder/10 p-4 rounded-md">
                                        <p className="text-[0.75rem] font-semibold mb-0 text-[#8c9097] dark:text-white/50">Html<span className="ltr:float-right rtl:float-left text-[0.625rem] font-normal">25%</span></p>
                                        <div className="progress progress-xs mb-4 progress-animate" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar bg-primary w-1/2">
                                            </div>
                                        </div>
                                        <p className="text-[0.75rem] font-semibold mb-0 text-[#8c9097] dark:text-white/50">Css<span className="ltr:float-right rtl:float-left text-[0.625rem] font-normal">35%</span></p>
                                        <div className="progress progress-xs mb-4 progress-animate " role="progressbar" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar !rounded-none !bg-secondary w-[35%]">
                                            </div>
                                        </div>
                                        <p className="text-[0.75rem] font-semibold mb-0 text-[#8c9097] dark:text-white/50">Js<span className="ltr:float-right rtl:float-left text-[0.625rem] font-normal">40%</span></p>
                                        <div className="progress progress-xs mb-0 progress-animate " role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar !rounded-e-full !bg-danger w-2/5">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Showcode>
                        
                </div>
            </div>
        </>
    )
}

export default Progress