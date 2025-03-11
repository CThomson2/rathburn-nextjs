"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Timeline = () => {
    return (
        <Fragment>
            <Seo title={"Timeline"} />
            <Pageheader currentpage="Timeline" activepage="Pages" mainpage="Timeline" />
            
                <div className="container">
                    <ul className="timeline list-none text-[0.813rem] text-defaulttextcolor">
                        <li>
                            <div className="timeline-time text-end">
                               <span className="date">FRIDAY</span>
                               <span className="time inline-block">02:31</span>
                            </div>
                            <div className="timeline-icon">
                               <a aria-label="anchor" href="#!"></a>
                            </div>
                            <div className="timeline-body">
                                <div className="flex items-start timeline-main-content flex-wrap mt-0">
                                    <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                                        <img alt="avatar" src="../../assets/images/faces/4.jpg"/>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center">
                                            <div className="sm:mt-0 mt-2">
                                                <p className="mb-0 text-[.875rem] font-semibold">Emperio</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50">Project assigned by the manager all<span className="badge bg-primary/10 text-primary font-semibold mx-1">files</span>and<span className="badge bg-primary/10 text-primary font-semibold mx-1">folders</span>were included</p>
                                            </div>
                                            <div className="ms-auto">
                                                <span className="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                                    24,Oct 2022
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </li>
                        <li>
                            <div className="timeline-time text-end">
                               <span className="date">MONDAY</span>
                               <span className="time inline-block">08:47</span>
                            </div>
                            <div className="timeline-icon">
                               <a aria-label="anchor" href="#!"></a>
                            </div>
                            <div className="timeline-body">
                                <div className="flex items-start timeline-main-content flex-wrap mt-0">
                                    <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                                        <img alt="avatar" src="../../assets/images/faces/15.jpg"/>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center">
                                            <div className="sm:mt-0 mt-2">
                                                <p className="mb-0 text-[.875rem] font-semibold">Dwayne Bero</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50">Admin and other team accepted your work request</p>
                                            </div>
                                            <div className="ms-auto">
                                                <span className="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                                    30,Sep 2022
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </li>
                        <li>
                            <div className="timeline-time text-end">
                               <span className="date">YESTERDAY</span>
                               <span className="time inline-block">18:43</span>
                            </div>
                            <div className="timeline-icon">
                               <a aria-label="anchor" href="#!" ></a>
                            </div>
                            <div className="timeline-body">
                                <div className="flex items-start timeline-main-content flex-wrap mt-0">
                                    <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                                        <img alt="avatar" src="../../assets/images/faces/11.jpg"/>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center">
                                            <div className="sm:mt-0 mt-2">
                                                <p className="mb-0 text-[.875rem] font-semibold">Alister Chuk</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50">Temporary data will be <span className="badge bg-danger/10 text-danger font-semibold mx-1">deleted</span> once dedicated time complated</p>
                                            </div>
                                            <div className="ms-auto">
                                                <span className="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                                    11,Sep 2021
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </li>
                        <li>
                            <div className="timeline-time text-end">
                               <span className="date">TODAY</span>
                               <span className="time inline-block">03:18</span>
                            </div>
                            <div className="timeline-icon">
                               <a aria-label="anchor" href="#!" ></a>
                            </div>
                            <div className="timeline-body">
                                <div className="flex items-start timeline-main-content flex-wrap mt-0">
                                    <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                                        <img alt="avatar" src="../../assets/images/faces/5.jpg"/>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center">
                                            <div className="sm:mt-0 mt-2">
                                                <p className="mb-0 text-[.875rem] font-semibold">Melissa Blue</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50">Approved date for sanction of loan is verified <i className="ri-checkbox-circle-line text-success ms-1 text-[1rem] align-middle"></i></p>
                                            </div>
                                            <div className="ms-auto">
                                                <span className="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                                    18,Sep 2021
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </li>
                        <li>
                            <div className="timeline-time text-end">
                               <span className="date">TODAY</span>
                               <span className="time inline-block">12:24</span>
                            </div>
                            <div className="timeline-icon">
                               <a aria-label="anchor" href="#!" ></a>
                            </div>
                            <div className="timeline-body">
                                <div className="flex items-start timeline-main-content flex-wrap mt-0">
                                    <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                                        <img alt="avatar" src="../../assets/images/faces/10.jpg"/>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center">
                                            <div className="sm:mt-0 mt-2">
                                                <p className="mb-0 text-[.875rem] font-semibold">Zack Slayer</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50">Social network accounts are at risk check your <span className="badge bg-success/10 text-success font-semibold mx-1">login</span> details</p>
                                            </div>
                                            <div className="ms-auto">
                                                <span className="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                                    15,Sep 2021
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </li>
                        <li>
                            <div className="timeline-time text-end">
                               <span className="date">TODAY</span>
                               <span className="time inline-block">04:11</span>
                            </div>
                            <div className="timeline-icon">
                               <a aria-label="anchor" href="#!" ></a>
                            </div>
                            <div className="timeline-body">
                                <div className="flex items-start timeline-main-content flex-wrap mt-0">
                                    <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                                        <img alt="avatar" src="../../assets/images/faces/2.jpg"/>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center">
                                            <div className="sm:mt-0 mt-2">
                                                <p className="mb-0 text-[.875rem] font-semibold">Monika Karen</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50">Changed the password of gmail 4 hrs ago. <span className="badge bg-secondary text-white">Update</span></p>
                                            </div>
                                            <div className="ms-auto">
                                                <span className="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                                    12,Sep 2021
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </li>
                     </ul>
                     <div className="timeline-loadmore-container text-center">
                        <button type="button" className="ti-btn ti-btn-info ti-btn-loader">
                            Loading
                            <span className="ti-spinner !h-4 !w-4" role="status"></span>
                        </button>
                     </div>
                 </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-4">
                    <div className="box">
                        <div className="box-header">
                        <h5 className="box-title">Basic Timeline</h5>
                        </div>
                        <div className="box-body">
                        <div>
                            
                            <div className="ps-2 my-2 first:mt-0">
                            <p className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                                1 Mar, 2024
                            </p>
                            </div>
                            
        
                            
                            <div className="flex gap-x-3">
                            
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                            </div>
                            
        
                            
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                                Created "Preline in React" task
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Find more detailed insctructions here.
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                James Collins
                                </button>
                            </div>
                            
                            </div>
                            
        
                            
                            <div className="flex gap-x-3">
                            
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                            </div>
                            
        
                            
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Release v5.2.0 quick bug fix &#128030;
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                                    A
                                </span>
                                Alex Gregarov
                                </button>
                            </div>
                            
                            </div>
                            
        
                            
                            <div className="flex gap-x-3">
                            
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                            </div>
                            
        
                            
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Marked "Install Charts" completed
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Finally! You can check it out here.
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                James Collins
                                </button>
                            </div>
                            
                            </div>
                            
        
                            
                            <div className="ps-2 my-2 first:mt-0">
                            <p className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                                29 Feb, 2024
                            </p>
                            </div>
                            
        
                            
                            <div className="flex gap-x-3">
                            
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Take a break &#9971;
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Just chill for now... &#128521;
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-span-12 xl:col-span-4">
                    <div className="box">
                        <div className="box-header">
                        <h5 className="box-title">Collapsable Timeline</h5>
                        </div>
                        <div className="box-body">
                        <div>
                            <div className="ps-2 my-2 first:mt-0">
                            <p className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                                1 Mar, 2024
                            </p>
                            </div>
                            <div className="flex gap-x-3">
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                                Created "Preline in React" task
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Find more detailed insctructions here.
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                James Collins
                                </button>
                            </div>
                            </div>
                            <div className="flex gap-x-3">
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Release v5.2.0 quick bug fix &#128030;
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                                    A
                                </span>
                                Alex Gregarov
                                </button>
                            </div>
                            </div>
                            <div className="flex gap-x-3">
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Marked "Install Charts" completed
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Finally! You can check it out here.
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                James Collins
                                </button>
                            </div>
                            </div>
                            <div className="ps-2 my-2 first:mt-0">
                            <p className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                                29 Feb, 2024
                            </p>
                            </div>
                            <div className="flex gap-x-3">
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Take a break &#9971;
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Just chill for now... &#128521;
                                </p>
                            </div>
                            </div>
                            <div id="hs-timeline-collapse" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-timeline-collapse-content">
                            
                            <div className="ps-2 my-2">
                                <p className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                                28 Feb, 2024
                                </p>
                            </div>
                            <div className="flex gap-x-3">
                                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                    <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                                </div>
                                <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                    Final touch ups
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                    Double check everything and make sure we're ready to go.
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="ps-[7px] flex gap-x-3">
                            <button type="button" className="hs-collapse-toggle hs-collapse-open:hidden text-start inline-flex items-center gap-x-1 text-sm text-primary font-medium decoration-2 hover:underline dark:text-primary dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" id="hs-timeline-collapse-content" data-hs-collapse="#hs-timeline-collapse">
                                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                Show older
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-span-12 xl:col-span-4">
                    <div className="box">
                        <div className="box-header">
                        <h5 className="box-title">Hoverable Timeline</h5>
                        </div>
                        <div className="box-body">
                        <div>
                            <div className="ps-2 my-2 first:mt-0">
                            <p className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                                1 MAR, 2024
                            </p>
                            </div>
                            <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                            <a className="absolute inset-0 z-[1]" href="#!" ></a>
        
                            
                            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2 dark:group-hover:after:bg-bodybg/70">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:group-hover:border-white dark:bg-bgdark dark:border-white/10"></div>
                                </div>
                            </div>
                            <div className="grow pt-2 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                                Created "Preline in React" task
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Find more detailed insctructions here.
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                James Collins
                                </button>
                            </div>
                            </div>
                            <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                            <a className="absolute inset-0 z-[1]" href="#!" ></a>
        
                            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2 dark:group-hover:after:bg-bodybg/70">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:group-hover:border-white dark:bg-bgdark dark:border-white/10"></div>
                                </div>
                            </div>
                            <div className="grow pt-2 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Release v5.2.0 quick bug fix &#128030;
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                                    A
                                </span>
                                Alex Gregarov
                                </button>
                            </div>
                            </div>
                            <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                            <a className="absolute inset-0 z-[1]" href="#!" ></a>
        
                          
                            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2 dark:group-hover:after:bg-bodybg/70">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:group-hover:border-white dark:bg-bgdark dark:border-white/10"></div>
                                </div>
                            </div>
                            <div className="grow pt-2 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Marked "Install Charts" completed
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Finally! You can check it out here.
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                James Collins
                                </button>
                            </div>
                            </div>
        
                            <div className="ps-2 my-2 first:mt-0">
                            <p className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                                29 FEB, 2024
                            </p>
                            </div>
                            <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                            <a className="absolute inset-0 z-[1]" href="#!" ></a>
        
                          
                            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2 dark:group-hover:after:bg-bodybg/70">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:group-hover:border-white dark:bg-bgdark dark:border-white/10"></div>
                                </div>
                            </div>
                            <div className="grow pt-2 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Take a break &#9971;
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Just chill for now... &#128521;
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-6">
                    <div className="box">
                        <div className="box-header">
                        <h5 className="box-title">Timeline with Time</h5>
                        </div>
                        <div className="box-body">
                        <div>
                            <div className="flex gap-x-3">
                            <div className="w-16 text-end">
                                <span className="text-xs text-gray-500 dark:text-white/70">12:05PM</span>
                            </div>
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                                Created "Preline in React" task
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Find more detailed insctructions here.
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                James Collins
                                </button>
                            </div>
                            </div>
                            <div className="flex gap-x-3">
                            <div className="w-16 text-end">
                                <span className="text-xs text-gray-500 dark:text-white/70">12:05PM</span>
                            </div>
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Release v5.2.0 quick bug fix &#128030;
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                                    A
                                </span>
                                Alex Gregarov
                                </button>
                            </div>
                            </div>
                            <div className="flex gap-x-3">
                            <div className="w-16 text-end">
                                <span className="text-xs text-gray-500 dark:text-white/70">12:05PM</span>
                            </div>
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Marked "Install Charts" completed
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Finally! You can check it out here.
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                James Collins
                                </button>
                            </div>
                            </div>
                            <div className="flex gap-x-3">
                            <div className="w-16 text-end">
                                <span className="text-xs text-gray-500 dark:text-white/70">12:05PM</span>
                            </div>
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Take a break &#9971;
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Just chill for now... &#128521;
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                    <div className="box">   
                        <div className="box-header">
                        <h5 className="box-title">Timeline with Time , Icons and avatars</h5>
                        </div>
                        <div className="box-body">
                        <div>
                            <div className="ps-2 my-2 first:mt-0">
                            <p className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                                1 MAR, 2024
                            </p>
                            </div>
                            <div className="flex gap-x-3">
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <img className="flex-shrink-0 size-7 rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                                Created "Preline in React" task
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Find more detailed insctructions here.
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                James Collins
                                </button>
                            </div>
                            </div>
                            <div className="flex gap-x-3">
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <span className="flex flex-shrink-0 justify-center items-center size-7 border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                                    A
                                </span>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Release v5.2.0 quick bug fix &#128030;
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                                    A
                                </span>
                                Alex Gregarov
                                </button>
                            </div>
                            </div>
                            <div className="flex gap-x-3">
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <img className="flex-shrink-0 size-7 rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Marked "Install Charts" completed
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Finally! You can check it out here.
                                </p>
                                <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                James Collins
                                </button>
                            </div>
                            </div>
                            <div className="ps-2 my-2 first:mt-0">
                            <p className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                                29 FEB, 2024
                            </p>
                            </div>
                            <div className="flex gap-x-3">
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                <span className="flex flex-shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                                    <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/></svg>
                                </span>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Take a break &#9971;
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Just chill for now... &#128521;
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default Timeline