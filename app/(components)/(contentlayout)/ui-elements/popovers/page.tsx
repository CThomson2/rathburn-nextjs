
"use client"
import { popover1, popover10, popover11, popover12, popover2, popover3, popover4, popover5, popover6, popover7, popover8, popover9 } from '@/shared/data/prism/uielementsprism'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import Link from 'next/link'
import React from 'react'

const Popovers = () => {
    return (
        <div>
            <Seo title={"Popovers"} />
            <Pageheader currentpage="Popovers" activepage="Ui Elements" mainpage="Popovers" />
                 <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-5 col-span-12">
                            <Showcode title=" Default Popovers" customCardClass="custom-box" code={popover1}>
                                <div className="ti-btn-list">
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-primary" href="#!" scroll={false}>Popover Top
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                                <div  className="!border-b !border-solid dark:border-defaultborder/10 !rounded-t-md !py-2  !px-4 text-defaulttextcolor border-defaultborder text-start w-full text-[1rem]">
                                                <h6>Popover Top</h6>
                                                </div>
                                                <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">And here's some amazing content. It's very engaging. Right?</p>
                                            </div>
                                          </Link>
                                      </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-primary" href="#!" scroll={false}>Popover Right
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                                <div  className="!border-b !border-solid dark:border-defaultborder/10 !rounded-t-md !py-2  !px-4 text-defaulttextcolor border-defaultborder text-start w-full text-[1rem]">
                                                <h6>Popover Right</h6>
                                                </div>
                                                <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">And here's some amazing content. It's very engaging. Right?</p>
                                            </div>
                                          </Link>
                                      </div>
                                      <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:bottom]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-primary" href="#!" scroll={false}>Popover Bottom
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                                <div  className="!border-b !border-solid dark:border-defaultborder/10 !rounded-t-md !py-2  !px-4 text-defaulttextcolor border-defaultborder text-start w-full text-[1rem]">
                                                <h6>Popover Bottom</h6>
                                                </div>
                                                <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">And here's some amazing content. It's very engaging. Right?</p>
                                            </div>
                                          </Link>
                                      </div>
                                      <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:left]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-primary" href="#!" scroll={false}>Popover Left
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                                <div  className="!border-b !border-solid dark:border-defaultborder/10 !rounded-t-md !py-2  !px-4 text-defaulttextcolor border-defaultborder text-start w-full text-[1rem]">
                                                <h6>Popover Left</h6>
                                                </div>
                                                <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">And here's some amazing content. It's very engaging. Right?</p>
                                            </div>
                                          </Link>
                                      </div>
                                </div>
                                </Showcode>
                            
                    </div>
                    <div className="xl:col-span-7 col-span-12">
                            <Showcode title=" Colored Headers" customCardClass="custom-box" code={popover2}>
                                <div className="ti-btn-list">
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-primary" href="#!" scroll={false}>Header Primary
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                                <div  className="!border-b !border-solid dark:border-defaultborder/10 bg-primary !rounded-t-md !py-2  !px-4 text-white border-defaultborder text-start w-full text-[1rem]">
                                                <h6>Color Header</h6>
                                                </div>
                                                <p className="!text-defaulttextcolor  !text-[0.8rem] !py-4 !px-4 text-start">Popover With Primary Header</p>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-secondary" href="#!" scroll={false}>Header Secondary
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                                <div  className="!border-b !border-solid dark:border-defaultborder/10 bg-secondary !py-2 !rounded-t-md !px-4 text-white border-defaultborder text-start w-full text-[1rem]">
                                                <h6>Color Header</h6>
                                                </div>
                                                <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">Popover With Secondary Header</p>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:bottom]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-info" href="#!" scroll={false}>Header Info
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                                <div  className="!border-b !border-solid dark:border-defaultborder/10 bg-info !py-2 !px-4 !rounded-t-md text-white border-defaultborder text-start w-full text-[1rem]">
                                                <h6>Color Header</h6>
                                                </div>
                                                <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">Popover With Info Header</p>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:left]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-warning" href="#!" scroll={false}>Header warning
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                                <div  className="!border-b !border-solid dark:border-defaultborder/10 bg-warning !py-2 !px-4 !rounded-t-md text-white border-defaultborder text-start w-full text-[1rem]">
                                                <h6>Color Header</h6>
                                                </div>
                                                <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">Popover With warning Header</p>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-success" href="#!" scroll={false}>Header succuss
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                                <div  className="!border-b !border-solid dark:border-defaultborder/10 bg-success !py-2 !px-4 text-white !rounded-t-md border-defaultborder text-start w-full text-[1rem]">
                                                <h6>Color Header</h6>
                                                </div>
                                                <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">Popover With succuss Header</p>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-danger" href="#!" scroll={false}>Header danger
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                                <div  className="!border-b !border-solid dark:border-defaultborder/10 bg-danger !py-2 !px-4 text-white border-defaultborder !rounded-t-md text-start w-full text-[1rem]">
                                                <h6>Color Header</h6>
                                                </div>
                                                <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">Popover With danger Header</p>
                                            </div>
                                          </Link>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                </div>
                 <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Colored Popovers" customCardClass="custom-box" code={popover3}>
                                <div className="ti-btn-list">
                                    <div className="hs-tooltip ti-main-tooltip  [--trigger:click] [--placement:top]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-primary-full" href="#!" scroll={false}>Primary
                                            <div className="hs-tooltip-content ti-main-tooltip-content !bg-primary !z-[1000] !p-0 !max-w-[276px] !border-white/10" role="tooltip">
                                                <div  className="!border-b !border-solid dark:border-white/10 !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
                                                <h6>Primary Color background</h6>
                                                </div>
                                                <p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">Popover With primary background</p>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-secondary-full" href="#!" scroll={false}>Secondary
                                            <div className="hs-tooltip-content ti-main-tooltip-content !bg-secondary !p-0 !max-w-[276px] !border-white/10" role="tooltip">
                                                <div  className="!border-b !border-solid dark:border-white/10 !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
                                                <h6>Secondary Color background</h6>
                                                </div>
                                                <p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">Popover With secondary background</p>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-info-full" href="#!" scroll={false}>Info
                                            <div className="hs-tooltip-content ti-main-tooltip-content !bg-secondary  !p-0 !max-w-[276px]  !border-white/10" role="tooltip">
                                                <div  className="!border-b dark:border-white/10 !border-solid !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
                                                <h6>Info Color background</h6>
                                                </div>
                                                <p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">Popover With info background</p>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-warning-full" href="#!" scroll={false}>Warning
                                            <div className="hs-tooltip-content ti-main-tooltip-content !bg-warning  !p-0 !max-w-[276px] !border-white/10" role="tooltip">
                                                <div  className="!border-b dark:border-white/10 !border-solid !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
                                                <h6>Warning Color background</h6>
                                                </div>
                                                <p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">Popover With warning background</p>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-success-full" href="#!" scroll={false}>Success
                                            <div className="hs-tooltip-content ti-main-tooltip-content !bg-success  !p-0 !max-w-[276px] !border-white/10" role="tooltip">
                                                <div  className="!border-b dark:border-white/10 !border-solid !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
                                                <h6>Success Color background</h6>
                                                </div>
                                                <p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">Popover With success background</p>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-danger-full" href="#!" scroll={false}>Danger
                                            <div className="hs-tooltip-content ti-main-tooltip-content !bg-danger  !p-0 !max-w-[276px] !border-white/10" role="tooltip">
                                                <div  className="!border-b dark:border-white/10 !border-solid !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
                                                <h6>Danger Color background</h6>
                                                </div>
                                                <p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">Popover With danger background</p>
                                            </div>
                                          </Link>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                </div>
                 <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Light Popovers" customCardClass="custom-box" code={popover4}>
                                <div className="ti-btn-list">
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top] ">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-primary" href="#!" scroll={false}>Primary
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 !max-w-[276px] overflow-hidden" role="tooltip">
                                                <div className="!bg-primary/10">
                                                    <div  className="!border-b !border-solid !py-2 !px-4  text-primary !border-primary/20 !rounded-t-md text-start w-full text-[1rem]">
                                                    <h6>Color background</h6>
                                                    </div>
                                                    <p className="!text-primary !text-[0.8rem] !py-4 !px-4 text-start">Popover With primary background</p>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-secondary" href="#!" scroll={false}>Secondary
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 !max-w-[276px] overflow-hidden" role="tooltip">
                                                <div className="!bg-secondary/10">
                                                    <div  className="!border-b !border-solid !py-2 !px-4  text-secondary !border-secondary/20 !rounded-t-md text-start w-full text-[1rem]">
                                                    <h6>Color background</h6>
                                                    </div>
                                                    <p className="!text-secondary !text-[0.8rem] !py-4 !px-4 text-start">Popover With secondary background</p>

                                                </div>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-info" href="#!" scroll={false}>Info
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 !max-w-[276px] overflow-hidden" role="tooltip">
                                                <div className="!bg-info/10">
                                                    <div  className="!border-b !border-solid !py-2 !px-4  text-info !border-info/20 !rounded-t-md text-start w-full text-[1rem]">
                                                    <h6>Color background</h6>
                                                    </div>
                                                    <p className="!text-info !text-[0.8rem] !py-4 !px-4 text-start">Popover With info background</p>

                                                </div>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-warning" href="#!" scroll={false}>Warning
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 !max-w-[276px] overflow-hidden" role="tooltip">
                                                <div className="!bg-warning/10">
                                                    <div  className="!border-b !border-solid !py-2 !px-4  text-warning !border-warning/20 !rounded-t-md text-start w-full text-[1rem]">
                                                    <h6>Color background</h6>
                                                    </div>
                                                    <p className="!text-warning !text-[0.8rem] !py-4 !px-4 text-start">Popover With warning background</p>
                                                </div>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-success" href="#!" scroll={false}>Success
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 !max-w-[276px] overflow-hidden" role="tooltip">
                                                <div className="!bg-success/10">
                                                    <div  className="!border-b !border-solid !py-2 !px-4  text-success !border-success/20 !rounded-t-md text-start w-full text-[1rem]">
                                                    <h6>Color background</h6>
                                                    </div>
                                                    <p className="!text-success !text-[0.8rem] !py-4 !px-4 text-start">Popover With success background</p>

                                                </div>
                                            </div>
                                          </Link>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-danger" href="#!" scroll={false}>danger
                                            <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 !max-w-[276px] overflow-hidden" role="tooltip">
                                                <div className="!bg-danger/10">
                                                    <div  className="!border-b !border-solid !py-2 !px-4  text-danger !border-danger/20 !rounded-t-md text-start w-full text-[1rem]">
                                                    <h6>Color background</h6>
                                                    </div>
                                                    <p className="!text-danger !text-[0.8rem] !py-4 !px-4 text-start">Popover With danger background</p>

                                                </div>
                                            </div>
                                          </Link>
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                </div>
                 <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Disabled Popover" customCardClass="custom-box" code={popover5}>
                                <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                    <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-primary-full opacity-60" href="#!" scroll={false}>
                                        Disabled button
                                      <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg " role="tooltip">
                                       Disabled Popover
                                      </div>
                                    </Link>
                                  </div>
                                  </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title=" Icon Popovers" customCardClass="custom-box" customCardBodyClass="flex" code={popover6}>
                                <div className="hs-tooltip ti-main-tooltip me-6 !max-w-[276px] [--trigger:click] [--placement:top]">
                                    <Link className="hs-tooltip-toggle ti-main-tooltip-toggle" href="#!" scroll={false}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>
                                      <div className="hs-tooltip-content ti-main-tooltip-content !py-4 !px-4 !bg-primary !text-white" role="tooltip">
                                       <p>The Icon Popover</p>
                                      </div>
                                    </Link>
                               </div>
                               <div className="hs-tooltip ti-main-tooltip !max-w-[276px] [--trigger:click] [--placement:left]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle" href="#!" scroll={false}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                                    <div className="hs-tooltip-content ti-main-tooltip-content !bg-secondary !text-white !py-4 !px-4" role="tooltip">
                                        <p>The Icon Popover</p>
                                  </div>
                                </Link>
                              </div>
                              </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                          <Showcode title="Popover With Four Directions" customCardClass="" customCardBodyClass="" code={popover7}>
                            <div className="flex justify-center gap-4">
                              <div className="hs-tooltip ti-main-tooltip [--trigger:click]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle" href="#!" scroll={false}>
                                  <span className="w-10 h-10 ti-btn p-0 transition-none focus:outline-none bg-gray-50 border-gray-200 text-gray-600 hover:bg-primary/30 hover:border-primary hover:text-primary dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white">
                                    <i className="ri-arrow-up-s-line"></i>
                                  </span>
                                  <div className="hs-tooltip-content ti-main-tooltip-content" role="tooltip" data-popper-placement="top" 
                                //   style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(327px, -338px);"
                                  >
                                    Top popover
                                  </div>
                                </Link>
                              </div>
                
                              <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:left]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle" href="#!" scroll={false}>
                                  <span className="w-10 h-10 ti-btn p-0 transition-none focus:outline-none bg-gray-50 border-gray-200 text-gray-600 hover:bg-primary/30 hover:border-primary hover:text-primary dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white">
                                    <i className="ri-arrow-left-s-line rtl:rotate-180"></i>
                                  </span>
                                  <div className="hs-tooltip-content ti-main-tooltip-content hidden" role="tooltip" 
                                //   style="position: fixed; inset: 0px 0px auto auto; margin: 0px; transform: translate(-1501px, 469px);" 
                                  data-popper-placement="left">
                                    Left popover
                                  </div>
                                </Link>
                              </div>
                
                              <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle" href="#!" scroll={false}>
                                  <span className="w-10 h-10 ti-btn p-0 transition-none focus:outline-none bg-gray-50 border-gray-200 text-gray-600 hover:bg-primary/30 hover:border-primary hover:text-primary dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white">
                                    <i className="ri-arrow-right-s-line rtl:rotate-180"></i>
                                  </span>
                                  <div className="hs-tooltip-content ti-main-tooltip-content hidden" role="tooltip" 
                                //   style="position: fixed; inset: 0px auto auto 0px; margin: 0px; transform: translate(533px, 469px);"
                                   data-popper-placement="right">
                                    Right popover
                                  </div>
                                </Link>
                              </div>
                
                              <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:bottom]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle" href="#!" scroll={false}>
                                  <span className="w-10 h-10 ti-btn p-0 transition-none focus:outline-none bg-gray-50 border-gray-200 text-gray-600 hover:bg-primary/30 hover:border-primary hover:text-primary dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white">
                                    <i className="ri-arrow-down-s-line"></i>
                                  </span>
                                  <div className="hs-tooltip-content ti-main-tooltip-content hidden" role="tooltip" 
                                //   style="position: fixed; inset: 0px auto auto 0px; margin: 0px; transform: translate(496px, 521px);"
                                   data-popper-placement="bottom">
                                    Bottom popover
                                  </div>
                                </Link>
                              </div>
                
                            </div>
                            </Showcode>
                          
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                        <Showcode title="Popover With Focus event" customCardClass="" customCardBodyClass="" code={popover8}>
                          <div className="flex justify-center">
                            <div className="hs-tooltip ti-main-tooltip [--trigger:focus]">
                              <Link className="hs-tooltip-toggle ti-main-tooltip-toggle" href="#!" scroll={false}>
                                <span className="w-10 h-10 ti-btn p-0 transition-none focus:outline-none bg-gray-50 border-gray-200 text-gray-600 hover:bg-primary/30 hover:border-primary hover:text-primary dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white">
                                  <i className="ri-arrow-up-s-line"></i>
                                </span>
                                <div className="hs-tooltip-content ti-main-tooltip-content hidden" role="tooltip"
                                //  style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(835px, -490px);"
                                  data-popper-placement="top">
                                  Focus me
                                </div>
                              </Link>
                            </div>
                          </div>
                          </Showcode>
                       
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                     
                        <Showcode title="Popover With Content" customCardClass="" customCardBodyClass="" code={popover9}>
                          <div className="flex justify-center">
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click]">
                              <Link className="hs-tooltip-toggle ti-main-tooltip-toggle" href="#!" scroll={false}>
                                <span className="w-10 h-10 ti-btn p-0 transition-none focus:outline-none bg-gray-50 border-gray-200 text-gray-600 hover:bg-primary/30 hover:border-primary hover:text-primary dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white">
                                  <i className="ri-arrow-up-s-line"></i>
                                </span>
                                <div className="hs-tooltip-content ti-main-tooltip-content !p-0 max-w-xs border-gray-200 text-start rounded-sm hidden" role="tooltip"
                                //  style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(1132px, -490px);" 
                                 data-popper-placement="top">
                                  <span className="pt-3 px-4 block text-lg font-bold text-gray-800 dark:text-white">Overview</span>
                                  <div className="py-2 px-3 text-sm text-gray-600 dark:text-white/70">
                                    <img className="rounded-sm mb-3" src="../../assets/images/media/media-28.jpg" alt="Image Description"/>
                                    <p>This is a popover body with supporting text below as a natural lead-in to additional content.</p>
                                    <dl className="mt-3">
                                      <dt className="font-bold pt-3 first:pt-0 dark:text-white">Assigned to:</dt>
                                      <dd className="m-0 text-gray-600 dark:text-white/70">Mark Welson</dd>
                                      <dt className="font-bold pt-3 first:pt-0 dark:text-white">Due:</dt>
                                      <dd className="m-0 text-gray-600 dark:text-white/70">December 21, 2021</dd>
                                    </dl>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          </Showcode>
                        
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                        <Showcode title="Review popover" customCardClass="" customCardBodyClass="" code={popover10}>
                          <div className="hs-tooltip ti-main-tooltip [--trigger:click]">
                            <div className="hs-tooltip-toggle ti-main-tooltip-toggle">
                              <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-primary hover:text-primary/80 disabled:opacity-50 disabled:pointer-events-none dark:text-primary dark:hover:text-primary/80 dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-primary">
                                Preline review
                                <i className="ri-arrow-up-s-line"></i>
                              </button>
                  
                              <div className="hs-tooltip-content ti-main-tooltip-content max-w-xs w-full hidden" role="tooltip" 
                            //   style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(1433px, -490px);"
                               data-popper-placement="top">
                                <div className="p-4">
                                  <div className="mb-3 flex justify-between items-center gap-x-3">
                                    <div className="flex items-center gap-x-2">
                                      <h4 className="font-semibold text-gray-800 dark:text-white">
                                        5.0
                                      </h4>
                  
                                      <div className="flex">
                                        <i className="ri-star-fill text-lg text-warning dark:text-warning"></i>
                                        <i className="ri-star-fill text-lg text-warning dark:text-warning"></i>
                                        <i className="ri-star-fill text-lg text-warning dark:text-warning"></i>
                                        <i className="ri-star-fill text-lg text-warning dark:text-warning"></i>
                                        <i className="ri-star-fill text-lg text-warning dark:text-warning"></i>
                                      </div>
                                    </div>
                  
                                    <Link className="inline-flex items-center gap-x-1 text-xs text-primary decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-0 dark:focus:shadow-none dark:focus:ring-primary" href="#!" scroll={false}>
                                      See all (4)
                                    </Link>
                                  </div>
                                  <div className="mb-3">
                                    <div className="flex items-center gap-x-3 whitespace-nowrap mb-2">
                                      <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">5 star</span>
                                      </div>
                                      <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-light" role="progressbar" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="flex flex-col justify-center rounded-full overflow-hidden bg-warning text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-yellow-600" 
                                        style={{ width: "78%" }}
                                        ></div>
                                      </div>
                                      <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">78%</span>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-x-3 whitespace-nowrap mb-2">
                                      <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">4 star</span>
                                      </div>
                                      <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-light" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="flex flex-col justify-center rounded-full overflow-hidden bg-warning text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-yellow-600" 
                                        style={{ width: "20%" }}
                                        ></div>
                                      </div>
                                      <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">20%</span>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-x-3 whitespace-nowrap mb-2">
                                      <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">3 star</span>
                                      </div>
                                      <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-light" role="progressbar" aria-valuenow={6} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="flex flex-col justify-center rounded-full overflow-hidden bg-warning text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-yellow-600"
                                         style={{ width: "6%" }}
                                         ></div>
                                      </div>
                                      <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">6%</span>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-x-3 whitespace-nowrap mb-2">
                                      <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">2 star</span>
                                      </div>
                                      <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-light" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="flex flex-col justify-center rounded-full overflow-hidden bg-warning text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-yellow-600" 
                                        style={{ width: "2%" }}
                                        ></div>
                                      </div>
                                      <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">2%</span>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-x-3 whitespace-nowrap mb-2">
                                      <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">1 star</span>
                                      </div>
                                      <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-light" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="flex flex-col justify-center rounded-full overflow-hidden bg-warning text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-yellow-600" 
                                        style={{ width: "0%" }}
                                        ></div>
                                      </div>
                                      <div className="w-10 text-end">
                                        <span className="text-sm text-gray-800 dark:text-white">0%</span>
                                      </div>
                                    </div>
                                  </div>
                  
                                  <Link className="inline-flex items-center gap-x-1 text-xs text-gray-600 decoration-2 hover:underline dark:text-white/70 dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-gray-400" href="#">
                                    How reviews and ratings work
                                    <i className="ri-arrow-right-s-line"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          </Showcode>
                       
                    </div>
                  </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                        <Showcode title="Popover With Hover event" customCardClass="" customCardBodyClass="" code={popover11}>
                          <div className="flex justify-center">
                            <div className="hs-tooltip ti-main-tooltip [--trigger:hover]">
                              <Link className="hs-tooltip-toggle ti-main-tooltip-toggle" href="#!" scroll={false}>
                                <span className="w-10 h-10 ti-btn p-0 transition-none focus:outline-none bg-gray-50 border-gray-200 text-gray-600 hover:bg-primary/30 hover:border-primary hover:text-primary dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white">
                                  <i className="ri-arrow-up-s-line"></i>
                                </span>
                                <div className="hs-tooltip-content ti-main-tooltip-content" role="tooltip" 
                                // style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(427px, -319px);" 
                                data-popper-placement="top">
                                  Hover me
                                </div>
                              </Link>
                            </div>
                          </div>
                          </Showcode>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                        <Showcode title="User popover example" customCardClass="" customCardBodyClass="" code={popover12}>
                          <div className="hs-tooltip inline-block [--trigger:hover] sm:[--placement:right]">
                            <div className="hs-tooltip-toggle max-w-xs p-3 flex items-center gap-x-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-bodybg dark:border-white/10">
                              <img className="inline-block size-9 rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                              
                              <div className="grow">
                                <h4 className="font-semibold text-sm text-gray-800 dark:text-white">
                                  Amanda Harvey
                                </h4>
                                <p className="text-sm text-gray-800 md:text-gray-500 dark:text-white md:dark:text-white/70">
                                  amanda@email.com
                                </p>
                              </div>
                              <div className="hs-tooltip-content overflow-hidden ti-main-tooltip-content !p-0 max-w-xs w-full after:absolute after:top-0 after:-start-4 after:w-4 after:h-full hidden" role="tooltip"
                            //    style="position: fixed; inset: 0px auto auto 0px; margin: 0px; transform: translate(929px, 563px);"
                                data-popper-placement="right">
                               
                                <div className="py-3 px-4 border-b border-gray-200 dark:border-white/10">
                                  <div className="flex items-center gap-x-3">
                                    <img className="flex-shrink-0 inline-block size-10 rounded-full ring-2 ring-white dark:ring-bodybg" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
                                    <div className="grow">
                                      <h4 className="font-semibold text-gray-800 dark:text-white">
                                        Amanda Harvey
                                        <span className="ms-0.5 inline-flex items-center align-middle gap-x-1.5 py-0.5 px-1.5 rounded-md text-[11px] font-medium bg-gray-800 text-white dark:bg-bodybg dark:text-white">
                                          PRO
                                        </span>
                                      </h4>
                                      <p className="text-sm text-gray-500 dark:text-white/70">
                                        Storyteller
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <ul className="py-3 px-4 space-y-1">
                                  <li>
                                    <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-white">
                                      <i className="ri-building-line text-gray-600 dark:text-white/70"></i>
                                      Pixeel Ltd.
                                    </div>
                                  </li>
                                  <li>
                                    <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-white">
                                      <i className="ri-smartphone-line text-gray-600 dark:text-white/70"></i>
                                      (892) 312-5483
                                    </div>
                                  </li>
                                  <li>
                                    <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-white">
                                      <i className="ri-mail-line text-gray-600 dark:text-white/70"></i>
                                      amanda@email.com
                                    </div>
                                  </li>
                                </ul>
                                <div className="py-2 px-4 flex justify-between items-center bg-gray-100 dark:bg-bodybg">
                                  <Link className="inline-flex items-center gap-x-1.5 text-xs text-gray-500 hover:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:text-white dark:focus:outline-none" href="#!" scroll={false}>
                                    <i className="ri-flag-line"></i>
                                    Flag
                                  </Link>
                                  <button type="button" className="py-1.5 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-primary text-white hover:bg-primary/80 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          </Showcode>
                    </div>
                  </div>
        </div>
    )
}

export default Popovers