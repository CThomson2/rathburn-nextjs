"use client"
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, avatar16, avatar17, avatar18, avatar19, avatar20, avatar21, avatar22 } from '@/shared/data/prism/utilities-prism'
import { AvatarIcon, AvatarInitial, AvatarNumber, AvatarOffline, AvatarOnline, Avatarsize, StackedAvatars } from '@/shared/data/utilities/avatarsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import Link from 'next/link'
import React from 'react'

const Avatars = () => {
    return (
        <>
            <Seo title={"Avatars"} />
            <Pageheader currentpage="Avatars" activepage="Utilities" mainpage="Avatars" />
           
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatars" code={avatar1}  customCardBodyClass="py-4">
                                <span className="avatar me-2 avatar-radius-0">
                                    <img src="../../assets/images/faces/1.jpg" alt="img"/>
                                </span>
                                <span className="avatar me-2">
                                    <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                </span>
                                <span className="avatar me-2 avatar-rounded">
                                    <img src="../../assets/images/faces/3.jpg" alt="img"/>
                                </span>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatar Sizes <p class='subtitle text-muted text-[0.75rem] font-normal'>
                                        Avatars of different sizes  </p>" code={avatar2}  customCardBodyClass="">
                                  {Avatarsize.map((idx)=>(
                            <span className={`avatar avatar-${idx.class} me-2`} key={Math.random()}>
                                <img src={idx.src}  alt="img"/>
                            </span>
                            ))}
                                </Showcode>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatar With Icons <p class='subtitle text-muted text-[0.75rem] font-normal'> Avatar contains icons to perform respective action.</p>" code={avatar3}  customCardBodyClass="">
                            {AvatarIcon.map((idx) => (
                            <span className={`avatar avatar-${idx.class} me-2 avatar-rounded`} key={Math.random()}>
                                <img src={idx.src} alt="img" />
                                <Link aria-label="anchor" href="#!" scroll={false} className={`badge bg-${idx.color} rounded-full text-white avatar-badge`}><i className={`fe ${idx.icon} text-[.5rem]`}></i></Link>
                            </span>
                            ))}
                                </Showcode>
                          
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatar With Online Status Indicators <p class='subtitle text-muted text-[0.75rem] font-normal'>  avatars having online status indicator. </p>" code={avatar4}  customCardBodyClass="">
                            {AvatarOnline.map((idx) => (
                            <span className={`avatar avatar-${idx.class} me-2 online avatar-rounded`} key={Math.random()}>
                                <img src={idx.src} alt="img" />
                            </span>
                            ))}
                                </Showcode>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title=" Avatar With Ofline Status Indicators <p class='subtitle text-muted text-[0.75rem] font-normal'> avatars having a offline status indicator. </p>" code={avatar5}  customCardBodyClass="">
                            {AvatarOffline.map((idx) => (
                            <span className={`avatar avatar-${idx.class} me-2 offline avatar-rounded`} key={Math.random()}>
                                <img src={idx.src} alt="img" />
                            </span>
                            ))}
                                </Showcode>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title=" Avatars With Number Badges <p class='subtitle text-muted text-[0.75rem] font-normal'>Avatar numbers indicates the no. of unread notififactions/messages.</p>" code={avatar6}  customCardBodyClass="">
                            {AvatarNumber.map((idx) => (
                            <span className={`avatar avatar-${idx.class} me-2 avatar-rounded`} key={Math.random()}>
                                <img src={idx.src} alt="img" />
                                <span className={`badge rounded-full bg-${idx.color} text-white avatar-badge`}>{idx.number}</span>
                            </span>
                            ))}
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatar With Brand Logos" code={avatar7}  customCardBodyClass="">
                                <div className="space-x-3 rtl:space-x-reverse">
                                    <div className="relative inline-block">
                                        <img className="inline-block avatar avatar-lg" src="../../assets/images/faces/2.jpg"
                                            alt="img"/>
                                        <span
                                            className="absolute bottom-[-7px] end-[-15px] block p-1 rounded-full bg-white dark:bg-slate-900 dark:ring-slate-900">
                                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                id="TailwindCss">
                                                <path
                                                    d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"
                                                    fill="#87ddfd" className="color000000 svgShape"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="relative inline-block">
                                        <img className="inline-block avatar avatar-lg avatar-rounded"
                                            src="../../assets/images/faces/3.jpg" alt="img"/>
                                        <span
                                            className="absolute bottom-[-7px] end-[-15px] block p-1 rounded-full bg-white dark:bg-slate-900 dark:ring-slate-900">
                                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"
                                                id="slack">
                                                <g fill="none" fillRule="evenodd">
                                                    <path fill="#36C5F0"
                                                        d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386">
                                                    </path>
                                                    <path fill="#2EB67D"
                                                        d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387">
                                                    </path>
                                                    <path fill="#ECB22E"
                                                        d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386">
                                                    </path>
                                                    <path fill="#E01E5A"
                                                        d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatar With Placeholder Icon" code={avatar8}  customCardBodyClass="">
                                <span className="avatar avatar-sm  avatar-rounded me-2">
                                    <img src="../../assets/images/faces/22.jpg" alt="img"/>
                                </span>

                                <span className="avatar avatar-md  avatar-rounded me-2">
                                    <img src="../../assets/images/faces/22.jpg" alt="img"/>
                                </span>

                                <span className="avatar avatar-lg  avatar-rounded me-2">
                                    <img src="../../assets/images/faces/22.jpg" alt="img"/>
                                </span>

                                <span className="avatar avatar-xl  avatar-rounded me-2">
                                    <img src="../../assets/images/faces/22.jpg" alt="img"/>
                                </span>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatar with solid color variants" code={avatar9}  customCardBodyClass="">
                                <span className="avatar avatar-md avatar-rounded text-white bg-primary me-1">YX</span>
                                <span className="avatar avatar-md avatar-rounded text-white bg-secondary me-1">YX</span>
                                <span className="avatar avatar-md avatar-rounded text-white bg-warning me-1">YX</span>
                                <span className="avatar avatar-md avatar-rounded text-white bg-danger me-1">YX</span>
                                <span className="avatar avatar-md avatar-rounded text-white bg-success me-1">YX</span>
                                <span className="avatar avatar-md avatar-rounded text-white bg-info me-1">YX</span>
                                <span className="avatar avatar-md avatar-rounded text-white bg-light !text-defaulttextcolor me-1">YX</span>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatar with soft color variants" code={avatar10}  customCardBodyClass="">
                                <span className="avatar avatar-md avatar-rounded bg-primary/10 text-primary/80 me-1">YX</span>
                                <span
                                    className="avatar avatar-md avatar-rounded bg-secondary/10 text-secondary/80 me-1">YX</span>
                                <span className="avatar avatar-md avatar-rounded bg-success/10 text-success/80 me-1">YX</span>
                                <span className="avatar avatar-md avatar-rounded bg-info/10 text-info/80 me-1">YX</span>
                                <span className="avatar avatar-md avatar-rounded bg-danger/10 text-danger/80 me-1">YX</span>
                                <span className="avatar avatar-md avatar-rounded bg-warning/10 text-warning/80 me-1">YX</span>
                                <span
                                    className="avatar avatar-md avatar-rounded bg-light/50 text-defaulttextcolor">YX</span>
                                    </Showcode>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatar with outline color variants" code={avatar11}  customCardBodyClass="">
                                <span
                                    className="avatar avatar-md avatar-rounded border border-primary/80 text-primary me-1">YX</span>
                                <span
                                    className="avatar avatar-md avatar-rounded border border-secondary/80 text-secondary me-1">YX</span>
                                <span
                                    className="avatar avatar-md avatar-rounded border border-success/80 text-success me-1">YX</span>
                                <span
                                    className="avatar avatar-md avatar-rounded border border-danger/80 text-danger me-1">YX</span>
                                <span className="avatar avatar-md avatar-rounded border border-info/80 text-info me-1">YX</span>
                                <span
                                    className="avatar avatar-md avatar-rounded border border-warning/80 text-warning me-1">YX</span>
                                <span
                                    className="avatar avatar-md avatar-rounded border border-gray-500 dark:text-white text-defaulttextcolor">YX</span>
                                    </Showcode>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatar with white color variants" code={avatar12}  customCardBodyClass="">
                                <span
                                    className="avatar avatar-sm avatar-rounded me-2 border border-defaultborder bg-white text-defaulttextcolor dark:bg-bodybg dark:border-white/10 dark:text-white">
                                    YX
                                </span>
                                <span
                                    className="avatar avatar-md avatar-rounded me-2 border border-defaultborder bg-white text-defaulttextcolor dark:bg-bodybg dark:border-white/10 dark:text-white">
                                    YX
                                </span>
                                <span
                                    className="avatar avatar-lg avatar-rounded me-2 border border-defaultborder bg-white text-defaulttextcolor dark:bg-bodybg dark:border-white/10 dark:text-white">
                                    YX
                                </span>
                                <span
                                    className="avatar avatar-xl avatar-rounded me-2 border border-defaultborder bg-white text-defaulttextcolor dark:bg-bodybg dark:border-white/10 dark:text-white">
                                    YX
                                </span>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatar displaying a tooltip" code={avatar13}  customCardBodyClass="">
                                <div className="hs-tooltip inline-block">
                                    <a className="hs-tooltip-toggle relative inline-block avatar online avatar-rounded"
                                        href="#">
                                        <img className="inline-block size-[46px]" src="../../assets/images/faces/4.jpg"
                                            alt="img"/>
                                        <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Stella is online
                                        </div>
                                    </a>
                                </div>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatar with text" code={avatar14}  customCardBodyClass="">
                                <div className="flex-shrink-0 group block">
                                    <div className="flex items-center">
                                        <img className="avatar avatar-md avatar-rounded"
                                            src="../../assets/images/faces/5.jpg" alt="Image Description"/>
                                        <div className="ms-3">
                                            <h6 className="">Michael</h6>
                                            <p className="text-sm font-medium">mic@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatar with border color" code={avatar15}  customCardBodyClass="">
                                <div className="flex -space-x-2">
                                    <img className="avatar avatar-rounded border-2 border-primary" src="../../assets/images/faces/5.jpg" alt="Image Description"/>
                                    <img className="avatar avatar-rounded border-2 border-primary" src="../../assets/images/faces/6.jpg" alt="Image Description"/>
                                    <img className="avatar avatar-rounded border-2 border-primary" src="../../assets/images/faces/7.jpg" alt="Image Description"/>
                                    <img className="avatar avatar-rounded border-2 border-primary" src="../../assets/images/faces/8.jpg" alt="Image Description"/>
                                </div>
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xxl:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Stacked avatar with sizes" code={avatar16}  customCardBodyClass="">
                                <div className="grid gap-10 sm:flex sm:items-end justify-between">
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../assets/images/faces/8.jpg" alt="img"/>
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                        </span>
                                    </div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-md avatar-rounded">
                                            <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                        </span>
                                        <span className="avatar avatar-md avatar-rounded">
                                            <img src="../../assets/images/faces/8.jpg" alt="img"/>
                                        </span>
                                        <span className="avatar avatar-md avatar-rounded">
                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-lg avatar-rounded">
                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-lg avatar-rounded">
                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-lg avatar-rounded">
                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-xl avatar-rounded">
                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-xl avatar-rounded">
                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-xl avatar-rounded">
                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                    <div className="xxl:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Avatars grid" code={avatar17}  customCardBodyClass="">
                                <div className="grid gap-10 sm:items-end">
                                    <div className="grid xxl:!grid-cols-8 md:!grid-cols-11 sm:grid-cols-7 grid-cols-4 gap-4"> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/2.jpg" alt="Image Description"/> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/4.jpg" alt="Image Description"/> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/6.jpg" alt="Image Description"/> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/5.jpg" alt="Image Description"/> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/7.jpg" alt="Image Description"/> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/2.jpg" alt="Image Description"/> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/9.jpg" alt="Image Description"/> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/1.jpg" alt="Image Description"/> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/4.jpg" alt="Image Description"/> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/6.jpg" alt="Image Description"/> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/5.jpg" alt="Image Description"/> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/7.jpg" alt="Image Description"/> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/2.jpg" alt="Image Description"/> 
                                        <img className="avatar avatar-rounded" src="../../assets/images/faces/9.jpg" alt="Image Description"/> 
                                        <span className="inline-flex items-center justify-center h-[2.875rem] w-[2.875rem] avatar-rounded bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
                                            <span className="font-medium text-gray-500 leading-none dark:text-white/70">9+</span> 
                                        </span> 
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Stacked avatar with tooltip" code={avatar18}  customCardBodyClass="">
                                <div className="flex -space-x-2 rtl:space-x-reverse">
                                    <div className="hs-tooltip inline-block">
                                      <a className="hs-tooltip-toggle relative inline-block" href="#!" >
                                        <img className="avatar rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                        <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-sm shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" 
                                        // style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(1096px, -301px);"
                                        >
                                          James bond
                                        </div>
                                      </a>
                                    </div>
                                    <div className="hs-tooltip inline-block show">
                                      <a className="hs-tooltip-toggle relative inline-block" href="#!" >
                                        <img className="avatar rounded-full" src="../../assets/images/faces/4.jpg" alt="Image Description"/>
                                        <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-sm shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" 
                                        // style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(1126px, -301px);"
                                        >
                                          James bond
                                        </div>
                                      </a>
                                    </div>
                                    <div className="hs-tooltip inline-block show">
                                      <a className="hs-tooltip-toggle relative inline-block" href="#!" >
                                        <img className="avatar rounded-full" src="../../assets/images/faces/2.jpg" alt="Image Description"/>
                                        <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-sm shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" 
                                        // style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(1156px, -301px);"
                                        >
                                          James bond
                                        </div>
                                      </a>
                                    </div>
                                    <div className="hs-tooltip inline-block show">
                                      <a className="hs-tooltip-toggle relative inline-block" href="#!" >
                                        <img className="avatar rounded-full" src="../../assets/images/faces/3.jpg" alt="Image Description"/>
                                        <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-sm shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top"
                                        //  style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(1186px, -301px);"
                                         >
                                          James bond
                                        </div>
                                      </a>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title=" Avatars with dropdown" code={avatar19}  customCardBodyClass="">
                                <div className="flex -space-x-2 rtl:space-x-reverse">
                                    <img className="inline-block avatar avatar-rounded" src="../../assets/images/faces/8.jpg" alt="Image Description"/>
                                    <img className="inline-block avatar avatar-rounded" src="../../assets/images/faces/4.jpg" alt="Image Description"/>
                                    <img className="inline-block avatar avatar-rounded" src="../../assets/images/faces/6.jpg" alt="Image Description"/>
                                    <img className="inline-block avatar avatar-rounded" src="../../assets/images/faces/7.jpg" alt="Image Description"/>
                                    <div className="hs-dropdown relative inline-flex" data-hs-dropdown-placement="top-left">
                                      <button type="button" id="hs-dropdown-avatar-more" className="inline-block avatar avatar-rounded hs-dropdown-toggle  items-center justify-center avatar 
                                      avatar-rounded bg-gray-200 border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-300 
                                      focus:outline-none focus:bg-primary focus:text-white focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary 
                                      transition-all text-sm dark:bg-bodybg2 dark:hover:bg-black/30 dark:border-white/10 dark:text-white/70 dark:hover:text-white 
                                      dark:focus:bg-primary dark:focus:text-white dark:focus:ring-offset-white/10">
                                        <span className="font-medium leading-none">9+</span>
                                      </button>
                                      <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-72 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 min-w-[15rem]
                                       bg-white shadow-md rounded-sm p-2 dark:bg-bodybg2 dark:border dark:border-white/10 dark:divide-white/10">
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-defaulttextcolor hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!">
                                          Chris Lynch
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-defaulttextcolor hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!">
                                          Maria Guan
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-defaulttextcolor hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!">
                                          Amil Evara
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-defaulttextcolor hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!">
                                          Ebele Egbuna
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  </Showcode>
                           
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                        
                            <Showcode title="Avatar With Initials   <p class='subtitle text-muted text-[0.75rem] font-normal'>
                                        Avatar contains intials when user profile doesn't exist.
                                    </p> " code={avatar20}  customCardBodyClass="">
                            {AvatarInitial.map((idx)=>(
                            <span className={`avatar avatar-${idx.class} text-white m-2 bg-${idx.color}`} key={Math.random()}>
                               {idx.class}
                            </span>
                            ))}
                                </Showcode>
                           
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                       
                            <Showcode title="Stacked Avatars <p class='subtitle text-muted text-[0.75rem] font-normal'> Group of avatars stacked together.</p>" code={avatar21}  customCardBodyClass="">
                            <div className="avatar-list-stacked">
                                {StackedAvatars.map((idx)=>(
                                <span className="avatar" key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                </span>
                                ))}
                                <Link className="avatar bg-primary text-white" href="#!" scroll={false}>
                                    +8
                                </Link>
                            </div>
                                </Showcode>
                           
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Rounded Stacked Avatars <p class='subtitle text-muted text-[0.75rem] font-normal'> Group of avatars stacked together.</p>" code={avatar22}  customCardBodyClass="">
                            <div className="avatar-list-stacked">
                            {StackedAvatars.map((idx)=>(
                                <span className="avatar avatar-rounded" key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                </span>
                                ))}
                                <Link className="avatar bg-primary avatar-rounded text-white" href="#!" scroll={false}>
                                    +8
                                </Link>
                            </div>
                                </Showcode>
                    </div>
                </div>
        </>
    )
}

export default Avatars