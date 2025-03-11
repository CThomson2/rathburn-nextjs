"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Navbar = () => {
  return (
    <Fragment>
      <Seo title={"Navbar"} />
      <Pageheader currentpage="Navbar" activepage=" Advanced Ui" mainpage="Navbar" />
      <div className="grid grid-cols-12 gap-x-5">
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Basic Mega Menu</h5>
              </div>
              <div className="box-body">
                <header
                  className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-transparent text-sm py-4 sm:py-0">
                  <nav className=" w-full mx-auto px-4" aria-label="Global">
                    <div className="relative sm:flex sm:items-center">
                      <div className="flex items-center justify-between">
                        <Link href="/dashboards/crm/" className="header-logo">
                          <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block"/>
                          <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block"/>
                        </Link>
                        <div className="sm:hidden">
                          <button type="button"
                            className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                            data-hs-collapse="#navbar-basic-usage" aria-controls="navbar-basic-usage"
                            aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="3" x2="21" y1="6" y2="6" />
                              <line x1="3" x2="21" y1="12" y2="12" />
                              <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div id="navbar-basic-usage"
                        className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div
                          className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                          <Link className="font-medium text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                            href="#!" scroll={false} aria-current="page">Active</Link>
                          <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none]">
                            <button type="button"
                              className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary">
                              Mega Menu
                              <svg className="ms-2 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </button>
                            <div
                              className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full start-0 min-w-60 bg-white sm:shadow-md rounded-lg py-2 sm:px-2 dark:bg-bodybg sm:dark:border dark:border-white/10 dark:divide-white/10 before:absolute">
                              <div className="sm:grid sm:grid-cols-3">
                                <div className="flex flex-col">
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    About
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Services
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Customer Story
                                  </Link>
                                </div>
                                <div className="flex flex-col">
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Careers
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Careers: Overview
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Careers: Apply
                                  </Link>
                                </div>
                                <div className="flex flex-col">
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Log In
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Sign Up
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                            href="#!" scroll={false}>Project</Link>
                        </div>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Mega Menu With Hover Event</h5>
              </div>
              <div className="box-body">
                <header
                  className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm dark:bg-bodybg">
                  <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                      <Link href="/dashboards/crm" className="header-logo">
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block"/>
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block"/>
                      </Link>
                      <div className="sm:hidden">
                        <button type="button"
                          className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-transparent transition-all text-sm dark:bg-bodybg dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-collapse-basic1" aria-controls="navbar-collapse-basic1"
                          aria-label="Toggle navigation">
                          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div id="navbar-collapse-basic1" className="hidden basis-full grow sm:block">
                      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <Link className="font-medium text-primary" href="#!" scroll={false} aria-current="page">Active</Link>

                        <div
                          className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                          <button id="hs-mega-menu-basic-dr3" type="button"
                            className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70 ">
                            Dropdown
                            <svg className="ms-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16"
                              viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                            </svg>
                          </button>

                          <div
                            className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-sm p-2 dark:bg-bodybg sm:dark:border dark:border-white/10 dark:divide-white/10 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                              href="#!" scroll={false}>
                              About
                            </Link>
                            <div
                              className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                              <button type="button"
                                className="w-full flex justify-between items-center text-sm text-gray-800 rounded-sm py-2 px-3 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300">
                                Sub Menu
                                <svg
                                  className="sm:-rotate-90 ms-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70 rtl:rotate-90"
                                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                </svg>
                              </button>

                              <div
                                className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-sm p-2 dark:bg-bodybg sm:dark:border dark:border-white/10 dark:divide-white/10 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  About
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Downloads
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Team Account
                                </Link>
                              </div>
                            </div>

                            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                              href="#!" scroll={false}>
                              Downloads
                            </Link>
                            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                              href="#!" scroll={false}>
                              Team Account
                            </Link>
                          </div>
                        </div>

                        <div
                          className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                          <button type="button"
                            className="flex items-center w-full text-gray-600  hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70">
                            Mega Menu
                            <svg className="ms-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16"
                              viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                            </svg>
                          </button>

                          <div
                            className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full start-0 min-w-[15rem] bg-white sm:shadow-md rounded-sm p-2 dark:bg-bodybg sm:dark:border dark:border-white/10 dark:divide-white/10 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                            <div className="sm:grid sm:grid-cols-3">
                              <div className="flex flex-col">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  About
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Services
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Customer Story
                                </Link>
                              </div>

                              <div className="flex flex-col">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Careers
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Careers: Overview
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Careers: Apply
                                </Link>
                              </div>

                              <div className="flex flex-col">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Log In
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Sign Up
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-white/70"
                          href="#!" scroll={false}>Link</Link>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Mega Menu Slide Up Animation</h5>
              </div>
              <div className="box-body">
                <header
                  className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm dark:bg-bodybg">
                  <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                      <Link href="/dashboards/crm" className="header-logo">
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block"/>
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block"/>
                      </Link>
                      <div className="sm:hidden">
                        <button type="button"
                          className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-transparent transition-all text-sm dark:bg-bodybg dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-collapse-basic2" aria-controls="navbar-collapse-basic2"
                          aria-label="Toggle navigation">
                          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div id="navbar-collapse-basic2" className="hidden basis-full grow sm:block">
                      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <Link className="font-medium text-primary" href="#!" scroll={false} aria-current="page">Active</Link>

                        <div
                          className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                          <button id="hs-mega-menu-basic-dr" type="button"
                            className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70 ">
                            Dropdown
                            <svg className="ms-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16"
                              viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                            </svg>
                          </button>

                          <div
                            className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-3 bg-white sm:shadow-md rounded-sm p-2 dark:bg-bodybg sm:dark:border dark:border-white/10 dark:divide-white/10 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                              href="#!" scroll={false}>
                              About
                            </Link>
                            <div
                              className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                              <button type="button"
                                className="w-full flex justify-between items-center text-sm text-gray-800 rounded-sm py-2 px-3 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300">
                                Sub Menu
                                <svg
                                  className="sm:-rotate-90 ms-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70 rtl:rotate-90"
                                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                </svg>
                              </button>

                              <div
                                className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-3 bg-white sm:shadow-md rounded-sm p-2 dark:bg-bodybg sm:dark:border dark:border-white/10 dark:divide-white/10 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  About
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Downloads
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Team Account
                                </Link>
                              </div>
                            </div>

                            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                              href="#!" scroll={false}>
                              Downloads
                            </Link>
                            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                              href="#!" scroll={false}>
                              Team Account
                            </Link>
                          </div>
                        </div>

                        <div
                          className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                          <button type="button"
                            className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70">
                            Mega Menu
                            <svg className="ms-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16"
                              viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                            </svg>
                          </button>

                          <div
                            className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 sm:mt-3 top-full start-0 min-w-[15rem] bg-white sm:shadow-md rounded-sm p-2 dark:bg-bodybg sm:dark:border dark:border-white/10 dark:divide-white/10 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                            <div className="sm:grid sm:grid-cols-3">
                              <div className="flex flex-col">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  About
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Services
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Customer Story
                                </Link>
                              </div>

                              <div className="flex flex-col">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Careers
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Careers: Overview
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Careers: Apply
                                </Link>
                              </div>

                              <div className="flex flex-col">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Log In
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300"
                                  href="#!" scroll={false}>
                                  Sign Up
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-white/70"
                          href="#!" scroll={false}>Link</Link>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Mega Menu With Auto Close Behavior</h5>
              </div>
              <div className="box-body">
                <header
                  className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 sm:py-0 dark:bg-bodybg">
                  <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                      <Link href="/dashboards/crm" className="header-logo">
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block"/>
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block"/>
                      </Link>
                      <div className="sm:hidden">
                        <button type="button"
                          className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          data-hs-collapse="#navbar-auto-close-behavior" aria-controls="navbar-auto-close-behavior"
                          aria-label="Toggle navigation">
                          <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                          </svg>
                          <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-auto-close-behavior"
                      className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block">
                      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <Link className="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600"
                          href="#!" scroll={false} aria-current="page">Active</Link>

                        <div
                          className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] [--auto-close:false]">
                          <button type="button"
                            className="sm:py-4 flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none">
                            Mega Menu
                            <svg className="ms-2 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round">
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </button>

                          <div
                            className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 sm:mt-3 top-full start-0 min-w-60 bg-white sm:shadow-md rounded-lg py-2 sm:px-2 dark:bg-bodybg sm:dark:border dark:border-white/10 before:absolute">
                            <div className="sm:grid sm:grid-cols-3">
                              <div className="flex flex-col">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  href="#!" scroll={false}>
                                  About
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  href="#!" scroll={false}>
                                  Services
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  href="#!" scroll={false}>
                                  Customer Story
                                </Link>
                              </div>

                              <div className="flex flex-col">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  href="#!" scroll={false}>
                                  Careers
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  href="#!" scroll={false}>
                                  Careers: Overview
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  href="#!" scroll={false}>
                                  Careers: Apply
                                </Link>
                              </div>

                              <div className="flex flex-col">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  href="#!" scroll={false}>
                                  Log In
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  href="#!" scroll={false}>
                                  Sign Up
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600"
                          href="#!" scroll={false}>Project</Link>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Mega Menu With Columns</h5>
              </div>
              <div className="box-body">
                <header
                  className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-transparent text-sm py-4 sm:py-0">
                  <nav className="w-full mx-auto px-4" aria-label="Global">
                    <div className="relative sm:flex sm:items-center">
                      <div className="flex items-center justify-between">
                        <Link href="/dashboards/crm" className="header-logo">
                          <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block"/>
                          <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block"/>
                        </Link>
                        <div className="sm:hidden">
                          <button type="button"
                            className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                            data-hs-collapse="#navbar-collapse-columns-1" aria-controls="navbar-collapse-columns-1"
                            aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="3" x2="21" y1="6" y2="6" />
                              <line x1="3" x2="21" y1="12" y2="12" />
                              <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div id="navbar-collapse-columns-1"
                        className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div
                          className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                          <div
                            className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                            <button type="button"
                              className="sm:py-3 flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary">
                              1 Col
                              <svg className="ms-1 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </button>

                            <div
                              className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-full sm:w-48 bg-white sm:shadow-md rounded-lg py-2 sm:px-2 dark:bg-bodybg sm:dark:border dark:border-white/10 dark:divide-white/10">
                              <div className="flex flex-col">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                  href="#!" scroll={false}>
                                  About
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                  href="#!" scroll={false}>
                                  Services
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                  href="#!" scroll={false}>
                                  Customer Story
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div
                            className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                            <button type="button"
                              className="sm:py-3 flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary">
                              2 Cols
                              <svg className="ms-1 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </button>

                            <div
                              className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-full end-0 sm:w-96 bg-white sm:shadow-md rounded-lg py-2 sm:px-2 dark:bg-bodybg sm:dark:border dark:border-white/10 dark:divide-white/10">
                              <div className="sm:grid sm:grid-cols-2">
                                <div className="flex flex-col">
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    About
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Services
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Customer Story
                                  </Link>
                                </div>

                                <div className="flex flex-col">
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Careers
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Careers: Overview
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Careers: Apply
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                            <button type="button"
                              className="sm:py-3 flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary">
                              3 Cols
                              <svg className="ms-1 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </button>

                            <div
                              className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-full end-0 sm:w-[30rem] bg-white sm:shadow-md rounded-lg py-2 sm:px-2 dark:bg-bodybg sm:dark:border dark:border-white/10 dark:divide-white/10">
                              <div className="sm:grid sm:grid-cols-3">
                                <div className="flex flex-col">
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    About
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Services
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Customer Story
                                  </Link>
                                </div>

                                <div className="flex flex-col">
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Careers
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Careers: Overview
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Careers: Apply
                                  </Link>
                                </div>

                                <div className="flex flex-col">
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Log In
                                  </Link>
                                  <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary"
                                    href="#!" scroll={false}>
                                    Sign Up
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Basic Navbar</h5>
              </div>
              <div className="box-body">
                <header
                  className="flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bodybg">
                  <nav className=" w-full mx-auto sm:px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <Link href="#!" scroll={false} className="header-logo">
                      <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block"/>
                      <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block"/>
                    </Link>
                    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
                      <Link className="font-medium text-primary" href="#!" scroll={false} aria-current="page">Landing</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!" scroll={false}>Account</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!" scroll={false}>Work</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!" scroll={false}>Blog</Link>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Navbar With horizontal scroll</h5>
              </div>
              <div className="box-body">
                <header
                  className="flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bodybg">
                  <nav className="w-full mx-auto px-4 xxl:flex xxl:items-center xxl:justify-between" aria-label="Global">
                    <Link href="#!" scroll={false} className="header-logo">
                      <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block"/>
                      <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block"/>
                    </Link>
                    <div
                      className="flex flex-row items-center gap-5 mt-5 pb-2 overflow-x-auto xxl:justify-end xxl:mt-0 sm:ps-5 xxl:pb-0 xxl:overflow-x-visible">
                      <Link className="font-medium text-primary" href="#!" scroll={false} aria-current="page">Dashboard</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!" scroll={false}>Widgets</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!" scroll={false}>Components</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!" scroll={false}>Advanced Ui</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!" scroll={false}>Basic Ui</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!" scroll={false}>Elements</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!" scroll={false}>Forms</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!" scroll={false}>Pages</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!" scroll={false}>Authentication</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!" scroll={false}>Maps</Link>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Navbar With collapse</h5>
              </div>
              <div className="box-body">
                <header
                  className="flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bodybg">
                  <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                      <Link href="#!" scroll={false} className="header-logo">
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block"/>
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block"/>
                      </Link>
                      <div className="sm:hidden">
                        <button type="button"
                          className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bodybg dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse"
                          aria-label="Toggle navigation">
                          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-with-collapse" className="hidden basis-full grow sm:block">
                      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <Link className="font-medium text-primary" href="#!" scroll={false} aria-current="page">Landing</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Account</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Work</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Blog</Link>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Navbar Collapse with animation</h5>
              </div>
              <div className="box-body">
                <header
                  className="flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bodybg">
                  <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                      <Link href="#!" scroll={false} className="header-logo">
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block"/>
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block"/>
                      </Link>
                      <div className="sm:hidden">
                        <button type="button"
                          className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bodybg dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-collapse-with-animation"
                          aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-collapse-with-animation"
                      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <Link className="font-medium text-primary" href="#!" scroll={false} aria-current="page">Landing</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Account</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Work</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Blog</Link>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Navbar with Image</h5>
              </div>
              <div className="box-body">
                <header
                  className="flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bodybg">
                  <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                      <Link href="#!" scroll={false} className="header-logo">
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block"/>
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block"/>
                      </Link>
                      <div className="sm:hidden">
                        <button type="button"
                          className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bodybg dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-image-2" aria-controls="navbar-image-2"
                          aria-label="Toggle navigation">
                          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-image-2"
                      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <Link className="font-medium text-primary" href="#!" scroll={false} aria-current="page">Landing</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Account</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Work</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Blog</Link>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Navbar with Alignment</h5>
              </div>
              <div className="box-body">
                <header
                  className="flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bodybg">
                  <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                      <Link href="#!" scroll={false} className="header-logo">
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block"/>
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block"/>
                      </Link>
                      <div className="sm:hidden">
                        <button type="button"
                          className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bodybg dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment"
                          aria-label="Toggle navigation">
                          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-alignment"
                      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
                        <Link className="font-medium text-primary" href="#!" scroll={false} aria-current="page">Landing</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Account</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Work</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Blog</Link>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Navbar with MegaMenu</h5>
              </div>
              <div className="box-body">
                <header
                  className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bodybg">
                  <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                      <Link href="#!" scroll={false} className="header-logo">
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block"/>
                        <img src="../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block"/>
                      </Link>
                      <div className="sm:hidden">
                        <button type="button"
                          className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bodybg dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-with-mega-menu" aria-controls="navbar-with-mega-menu"
                          aria-label="Toggle navigation">
                          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-with-mega-menu"
                      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <Link className="font-medium text-primary" href="#!" scroll={false} aria-current="page">Landing</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Account</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Work</Link>
                        <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                          href="#!" scroll={false}>Blog</Link>
                        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
                          <button id="hs-mega-menu-basic-dr1" type="button" className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-gray-500">
                            Dropdown
                            <svg className="ms-1 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                          </button>
                
                          <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden" 
                          // style=""
                          >
                            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!" scroll={false}>
                              About
                            </Link>
                            <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none]">
                              <button type="button" className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                Sub Menu
                                <svg className="sm:-rotate-90 ms-2 flex-shrink-0 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                              </button>
                
                              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full mt-[4px] !mx-[10px]">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!" scroll={false}>
                                  About
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!" scroll={false}>
                                  Downloads
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!" scroll={false}>
                                  Team Account
                                </Link>
                              </div>
                            </div>
                
                            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!" scroll={false}>
                              Downloads
                            </Link>
                            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!" scroll={false}>
                              Team Account
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Navbar with Color variants</h5>
              </div>
              <div className="box-body space-y-4">
                <header
                  className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-primary text-sm py-4 rounded-sm">
                  <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                      <Link href="#!" scroll={false} className="header-logo">
                        <img src="../../assets/images/brand-logos/toggle-white.png" alt="logo" className="block"/>
                      </Link>
                      <div className="sm:hidden">
                        <button type="button"
                          className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border border-white/[.25] font-medium bg-primary text-white shadow-sm align-middle hover:bg-primary focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white/10 focus:ring-primary transition-all text-sm dark:bg-transparent dark:hover:bg-primary dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-primary" aria-controls="navbar-primary"
                          aria-label="Toggle navigation">
                          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-primary"
                      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <Link className="font-medium text-white" href="#!" scroll={false} aria-current="page">Landing</Link>
                        <Link className="font-medium text-gray-300 hover:text-white" href="#!" scroll={false}>Account</Link>
                        <Link className="font-medium text-gray-300 hover:text-white" href="#!" scroll={false}>Work</Link>
                        <Link className="font-medium text-gray-300 hover:text-white" href="#!" scroll={false}>Blog</Link>
                      </div>
                    </div>
                  </nav>
                </header>
                <header
                  className="flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-secondary text-sm py-4 rounded-sm">
                  <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                      <Link href="#!" scroll={false} className="header-logo">
                        <img src="../../assets/images/brand-logos/toggle-white.png" alt="logo" className="block"/>
                      </Link>
                      <div className="sm:hidden">
                        <button type="button"
                          className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border border-white/[.25] font-medium bg-secondary text-white shadow-sm align-middle hover:bg-white/[.15] focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-secondary focus:ring-white transition-all text-sm"
                          data-hs-collapse="#navbar-secondary" aria-controls="navbar-secondary"
                          aria-label="Toggle navigation">
                          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-secondary"
                      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <Link className="font-medium text-white" href="#!" scroll={false} aria-current="page">Landing</Link>
                        <Link className="font-medium text-gray-300 hover:text-white" href="#!" scroll={false}>Account</Link>
                        <Link className="font-medium text-gray-300 hover:text-white" href="#!" scroll={false}>Work</Link>
                        <Link className="font-medium text-gray-300 hover:text-white" href="#!" scroll={false}>Blog</Link>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
        </div>

    </Fragment>

  )
}
export default Navbar