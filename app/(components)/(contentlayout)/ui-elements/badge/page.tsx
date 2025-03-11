"use client"
import { badges1, badges10, badges11, badges12, badges13, badges14, badges15, badges16, badges17, badges18, badges19, badges2, badges3, badges4, badges5, badges6, badges7, badges8, badges9 } from '@/shared/data/prism/uielementsprism'
import { badges, gradientbadge, lightbadges, outlinebadges } from '@/shared/data/ui-elements/badgesdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import React from 'react'

const Badge = () => {
    const data = 'flex flex-wrap gap-2'
    return (
        <>
            <Seo title={"Badge"} />
            <Pageheader currentpage="Badge" activepage="Ui Elements" mainpage="Badge" />
            
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Badges" code={badges1} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                            {badges.map((idx) => (
                            <span className={`badge me-2 bg-${idx.color}`} key={Math.random()}>{idx.class}</span>
                        ))}
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Pill badges" code={badges2} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                            {badges.map((idx) => (
                            <span className={`badge me-2 !rounded-full bg-${idx.color}`} key={Math.random()}>{idx.class}</span>
                        ))}
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Light Badges" code={badges3} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                            {lightbadges.map((idx) => (
                            <span className={`badge me-2 bg-${idx.color}`} key={Math.random()}>{idx.class}</span>
                        ))}
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Light Pill Badges" code={badges4} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                            {lightbadges.map((idx) => (
                            <span className={`badge me-2 !rounded-full bg-${idx.color}`} key={Math.random()}>{idx.class}</span>
                        ))}
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Gradient Badges" code={badges5} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                            {gradientbadge.map((idx) => (
                            <span className={`badge me-2 bg-${idx.color}-gradient`} key={Math.random()}>{idx.class}</span>
                        ))}
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title=" Gradient Pill Badges" code={badges6} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                            {gradientbadge.map((idx) => (
                            <span className={`badge me-2 rounded-full bg-${idx.color}-gradient`} key={Math.random()}>{idx.class}</span>
                        ))}
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Outline Badges" code={badges7} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                            {outlinebadges.map((idx) => (
                            <span className={`badge me-2  mb-2 sm:mb-0  bg-outline-${idx.color}`} key={Math.random()}>{idx.class}</span>
                        ))}
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Outline Pill Badges" code={badges8} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                            {outlinebadges.map((idx) => (
                            <span className={`badge me-2  mb-2 sm:mb-0  !rounded-full bg-outline-${idx.color}`} key={Math.random()}>{idx.class}</span>
                        ))}
                                    </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Max width Badges" code={badges9} customCardBodyClass="flex flex-wrap gap-2">
                                <span
                                    className="max-w-40 truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-lg text-xs font-medium bg-primary/10 text-primary/80 me-2">This
                                    content is a little bit longer.</span>
                                <span
                                    className="max-w-40 truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-lg text-xs font-medium bg-secondary/10 text-secondary/80 me-2">This
                                    content is a little bit longer.</span>
                                <span
                                    className="max-w-40 truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-lg text-xs font-medium bg-success/10 text-success/80 me-2">This
                                    content is a little bit longer.</span>
                                <span
                                    className="max-w-40 truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-lg text-xs font-medium bg-danger/10 text-danger/80 me-2">This
                                    content is a little bit longer.</span>
                                    </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Badges with indicators" code={badges10} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 px-3  mb-2 sm:mb-0  rounded-full text-xs font-medium bg-primary/10 text-primary me-2">
                                    <span className="size-1.5 inline-block rounded-full bg-primary/80"></span>
                                    Badge
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 px-3  mb-2 sm:mb-0  rounded-full text-xs font-medium bg-secondary/10 text-secondary me-2">
                                    <span className="size-1.5 inline-block rounded-full bg-secondary/80"></span>
                                    Badge
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 px-3  mb-2 sm:mb-0  rounded-full text-xs font-medium bg-warning/10 text-warning me-2">
                                    <span className="size-1.5 inline-block rounded-full bg-warning/80"></span>
                                    Badge
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-2 sm:mb-0  rounded-full text-xs font-medium bg-success/10 text-success me-2">
                                    <span className="size-1.5 inline-block rounded-full bg-success/80"></span>
                                    Badge
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-2 sm:mb-0  rounded-full text-xs font-medium bg-info/10 text-info me-2">
                                    <span className="size-1.5 inline-block rounded-full bg-info/80"></span>
                                    Badge
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-danger/10 text-danger me-2">
                                    <span className="size-1.5 inline-block rounded-full bg-danger/80"></span>
                                    Badge
                                </span>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Badges with icons" code={badges11} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                <span
                                    className="py-1 px-2 inline-flex items-center gap-x-1 text-xs mb-2 sm:mb-0 font-medium bg-primary/10 text-primary/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path
                                            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                    Connected
                                </span>

                                <span
                                    className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs mb-2 sm:mb-0 font-medium bg-secondary/10 text-secondary/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path
                                            d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                                        <path d="M12 9v4" />
                                        <path d="M12 17h.01" />
                                    </svg>
                                    Attention
                                </span>

                                <span
                                    className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs  mb-2 sm:mb-0 font-medium bg-warning/10 text-warning/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" x2="12" y1="2" y2="6" />
                                        <line x1="12" x2="12" y1="18" y2="22" />
                                        <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
                                        <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
                                        <line x1="2" x2="6" y1="12" y2="12" />
                                        <line x1="18" x2="22" y1="12" y2="12" />
                                        <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
                                        <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
                                    </svg>
                                    Loading
                                </span>

                                <span
                                    className="py-1 px-2 inline-flex items-center gap-x-1 text-xs mb-2 sm:mb-0 bg-info/10 text-info/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                                        <line x1="12" x2="12" y1="2" y2="12" />
                                    </svg>
                                    Disabled
                                </span>

                                <span
                                    className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs mb-2 sm:mb-0 font-medium bg-success/10 text-success/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                        <polyline points="16 7 22 7 22 13" />
                                    </svg>
                                    14.5%
                                </span>

                                <span
                                    className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs mb-2 sm:mb-0 font-medium bg-danger/10 text-danger/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                                        <polyline points="16 17 22 17 22 11" />
                                    </svg>
                                    2%
                                </span>

                                <span
                                    className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs mb-2 sm:mb-0 bg-primary/10 text-primary/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                        <polyline points="16 7 22 7 22 13" />
                                    </svg>
                                    37.3%
                                </span>

                                <span
                                    className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-secondary/10 text-secondary/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                                        <polyline points="16 17 22 17 22 11" />
                                    </svg>
                                    56%
                                </span>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Badges with remove button" code={badges12} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 mb-2 sm:mb-0 rounded-full text-xs font-medium bg-primary/10 text-primary/80 me-2">
                                    Badge
                                    <button type="button"
                                        className="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-primary/20 focus:outline-none focus:bg-primary/20 focus:text-primary/50 dark:hover:bg-primary/90">
                                        <span className="sr-only">Remove badge</span>
                                        <i className="ti ti-x size-3"></i>
                                    </button>
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 mb-2 sm:mb-0  rounded-full text-xs font-medium bg-secondary/10 text-secondary/80 me-2">
                                    Badge
                                    <button type="button"
                                        className="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-secondary/20 focus:outline-none focus:bg-secondary/20 focus:text-secondary/50 dark:hover:bg-secondary/90">
                                        <span className="sr-only">Remove badge</span>
                                        <i className="ti ti-x size-3"></i>
                                    </button>
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 mb-2 sm:mb-0  rounded-full text-xs font-medium bg-success/10 text-success/80 me-2">
                                    Badge
                                    <button type="button"
                                        className="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-success/20 focus:outline-none focus:bg-success/20 focus:text-success/50 dark:hover:bg-success/90">
                                        <span className="sr-only">Remove badge</span>
                                        <i className="ti ti-x size-3"></i>
                                    </button>
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 mb-2 sm:mb-0  rounded-full text-xs font-medium bg-warning/10 text-warning/80 me-2">
                                    Badge
                                    <button type="button"
                                        className="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-warning/20 focus:outline-none focus:bg-warning/20 focus:text-warning/50 dark:hover:bg-warning/90">
                                        <span className="sr-only">Remove badge</span>
                                        <i className="ti ti-x size-3"></i>
                                    </button>
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 mb-2 sm:mb-0  rounded-full text-xs font-medium bg-info/10 text-info/80 me-2">
                                    Badge
                                    <button type="button"
                                        className="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-info/20 focus:outline-none focus:bg-info/20 focus:text-info/50 dark:hover:bg-info/90">
                                        <span className="sr-only">Remove badge</span>
                                        <i className="ti ti-x size-3"></i>
                                    </button>
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2  rounded-full text-xs font-medium bg-danger/10 text-danger/80 me-2">
                                    Badge
                                    <button type="button"
                                        className="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-danger/20 focus:outline-none focus:bg-danger/20 focus:text-danger/50 dark:hover:bg-danger/90">
                                        <span className="sr-only">Remove badge</span>
                                        <i className="ti ti-x size-3"></i>
                                    </button>
                                </span>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <Showcode title="Badges with avatars" code={badges13} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                <div
                                    className="inline-flex flex-nowrap items-center border  mb-2 sm:mb-0  border-defaultborder rounded-full p-1.5 pe-3 dark:border-white/10 me-2">
                                    <img className="me-1.5 mb-0 inline-block avatar avatar-xs avatar-rounded"
                                        src="../../assets/images/faces/10.jpg" alt="Image Description"/>
                                    <div
                                        className="whitespace-nowrap text-sm font-medium text-defaulttextcolor dark:text-white">
                                        Christina
                                    </div>
                                </div>
                                <div
                                    className="inline-flex flex-nowrap items-center border mb-2 sm:mb-0  border-defaultborder rounded-full p-1.5 dark:border-white/10 me-2">
                                    <img className="me-1.5 mb-0 inline-block avatar avatar-xs avatar-rounded"
                                        src="../../assets/images/faces/11.jpg" alt="Image Description"/>
                                    <div
                                        className="whitespace-nowrap text-sm font-medium text-defaulttextcolor dark:text-white">
                                        Mark
                                    </div>
                                </div>
                                <div
                                    className="inline-flex flex-nowrap items-center border mb-2 sm:mb-0  border-defaultborder rounded-full p-1.5 dark:border-white/10 me-2">
                                    <img className="me-1.5 mb-0 inline-block avatar avatar-xs avatar-rounded"
                                        src="../../assets/images/faces/12.jpg" alt="Image Description"/>
                                    <div
                                        className="whitespace-nowrap text-sm font-medium text-defaulttextcolor dark:text-white">
                                        Bhamako
                                    </div>
                                </div>
                                <div
                                    className="inline-flex flex-nowrap items-center border mb-2 sm:mb-0  border-defaultborder rounded-full p-1.5 dark:border-white/10 me-2">
                                    <img className="me-1.5 mb-0 inline-block avatar avatar-xs avatar-rounded"
                                        src="../../assets/images/faces/13.jpg" alt="Image Description"/>
                                    <div
                                        className="whitespace-nowrap text-sm font-medium text-defaulttextcolor dark:text-white">
                                        Wicky cross
                                    </div>
                                </div>
                                <div
                                    className="inline-flex flex-nowrap items-center border border-defaultborder rounded-full p-1.5 dark:border-white/10 me-2">
                                    <img className="me-1.5 mb-0 inline-block avatar avatar-xs avatar-rounded"
                                        src="../../assets/images/faces/14.jpg" alt="Image Description"/>
                                    <div
                                        className="whitespace-nowrap text-sm font-medium text-defaulttextcolor dark:text-white">
                                        Brodus
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title=" Badges with animation ping" code={badges14} customCardBodyClass="!flex flex-wrap gap-2">
                                <button type="button"
                                    className="m-1 ms-0 relative flex justify-center items-center size-[35px] text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-light dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m5 11 4-7" />
                                        <path d="m19 11-4-7" />
                                        <path d="M2 11h20" />
                                        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                                        <path d="m9 11 1 9" />
                                        <path d="M4.5 15.5h15" />
                                        <path d="m15 11-1 9" />
                                    </svg>
                                    <span className="flex absolute top-0 end-0 size-3 -mt-1.5 -me-1.5">
                                        <span
                                            className="animate-ping absolute inline-flex size-full rounded-full bg-danger/40 opacity-75 dark:bg-danger/60"></span>
                                        <span className="relative inline-flex rounded-full size-3 bg-danger/50"></span>
                                    </span>
                                </button>
                                <button type="button"
                                    className="m-1 ms-0 relative py-1 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-light dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    Notification
                                    <span className="flex absolute top-0 end-0 -mt-2 -me-2">
                                        <span
                                            className="animate-ping absolute inline-flex size-full rounded-full bg-danger/40 opacity-75"></span>
                                        <span
                                            className="relative inline-flex text-xs bg-danger/50 text-white rounded-full py-0.5 px-1.5">
                                            9+
                                        </span>
                                    </span>
                                </button>
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Buttons With Badges" code={badges15} customCardBodyClass="flex flex-wrap gap-2">
                                <button type="button" className="ti-btn bg-primary text-white my-1 me-2">
                                    Notifications <span className="badge ms-2 bg-secondary">4</span>
                                </button>
                                <button type="button" className="ti-btn bg-secondary text-white my-1 me-2">
                                    Notifications <span className="badge ms-2 bg-primary">7</span>
                                </button>
                                <button type="button" className="ti-btn bg-success text-white my-1 me-2">
                                    Notifications <span className="badge ms-2 bg-danger">12</span>
                                </button>
                                <button type="button" className="ti-btn bg-info text-white my-1 me-2">
                                    Notifications <span className="badge ms-2 bg-warning">32</span>
                                </button>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Outline Button Badges" code={badges16} customCardBodyClass="flex flex-wrap gap-2">
                                <button type="button" className="ti-btn ti-btn-outline-primary my-1 me-2">
                                    Notifications <span className="badge bg-primary ms-2 text-white">4</span>
                                </button>
                                <button type="button" className="ti-btn ti-btn-outline-secondary my-1 me-2">
                                    Notifications <span className="badge bg-secondary ms-2 text-white">7</span>
                                </button>
                                <button type="button" className="ti-btn ti-btn-outline-success my-1 me-2">
                                    Notifications <span className="badge bg-success ms-2 text-white">12</span>
                                </button>
                                <button type="button" className="ti-btn ti-btn-outline-info my-1 me-2">
                                    Notifications <span className="badge bg-info ms-2 text-white">32</span>
                                </button>
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Headings" code={badges17} customCardBodyClass="">
                                <h1 className="text-[2.5rem]">Example heading <span
                                        className="badge bg-primary text-white">New</span></h1>
                                <h2 className="text-[2rem]">Example heading <span
                                        className="badge bg-primary text-white">New</span></h2>
                                <h3 className="text-[1.75rem]">Example heading <span
                                        className="badge bg-primary text-white">New</span></h3>
                                <h4 className="text-[1.5rem]">Example heading <span
                                        className="badge bg-primary text-white">New</span></h4>
                                <h5 className="text-[1.25rem]">Example heading <span
                                        className="badge bg-primary text-white">New</span></h5>
                                <h6 className="text-[1rem]">Example heading <span
                                        className="badge bg-primary text-white">New</span></h6>
                                        </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="xl:col-span-12 col-span-12">
                                    <Showcode title="Positioned Badges" code={badges18} customCardBodyClass="!flex items-center flex-wrap gap-5">
                                        <button type="button" className="ti-btn bg-primary text-white relative me-3">
                                            Inbox
                                            <span
                                                className="absolute -top-2 start-[60%] translate-middle  badge !rounded-full bg-danger">
                                                99+
                                                <span className="hidden">unread messages</span>
                                            </span>
                                        </button>
                                        <button type="button" className="ti-btn bg-secondary text-white relative me-3">
                                            Profile
                                            <span
                                                className="absolute -top-2 start-[80%] translate-middle p-2 bg-success border border-light !rounded-full">
                                                <span className="hidden">New alerts</span>
                                            </span>
                                        </button>
                                        <span className="avatar relative me-3">
                                            <img src="../../assets/images/faces/2.jpg" alt="img" className="!rounded-md"/>
                                            <span
                                                className="absolute -top-1 start-[80%] translate-middle p-1 bg-success border border-light !rounded-full">
                                                <span className="hidden">New alerts</span>
                                            </span>
                                        </span>
                                        <span className="avatar avatar-rounded relative me-3">
                                            <img src="../../assets/images/faces/15.jpg" alt="img"/>
                                            <span
                                                className="absolute top-0 start-[80%] translate-middle p-1 bg-success border border-light !rounded-full">
                                                <span className="hidden">New alerts</span>
                                            </span>
                                        </span>
                                        <span className="avatar avatar-rounded relative">
                                            <img src="../../assets/images/faces/10.jpg" alt="img"/>
                                            <span
                                                className="absolute -top-2 start-[60%] translate-middle badge bg-secondary !rounded-full shadow-lg text-white">1000+
                                                <span className="hidden">New alerts</span>
                                            </span>
                                        </span>
                                        </Showcode>
                                    <Showcode title="Positioned Badges" code={badges19} customCardBodyClass="">
                                        <div className="flex items-center gap-5 flex-wrap">
                                            <div>
                                                <span
                                                    className="badge bg-outline-secondary !font-semibold !text-[.9375rem] inline-flex items-center">
                                                    <i className="ti ti-flame me-1"></i>
                                                    Hot
                                                </span>
                                            </div>
                                            <div>
                                                <span className="relative">
                                                    <svg className="fill-textmuted dark:fill-textmuted/50 w-8 h-8 text-[2rem]"
                                                        xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 0 24 24" width="24px" fill="#000000">
                                                        <path
                                                            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z">
                                                        </path>
                                                    </svg>
                                                    <span
                                                        className="badge !rounded-full bg-success text-white absolute -end-2 top-0">14</span>
                                                </span>
                                            </div>
                                            <div>
                                                <span
                                                    className="badge border dark:border-light bg-light text-defaulttextcolor font-semibold font-[.7rem]"><i
                                                        className="fe fe-eye me-2 inline-block"></i>13.2k</span>
                                            </div>
                                            <div>
                                                <span className="text-badge relative">
                                                    <span className="text text-lg">Inbox</span>
                                                    <span className="badge !rounded-full bg-success text-white">32</span>
                                                </span>
                                            </div>
                                        </div>
                                        </Showcode>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Badge