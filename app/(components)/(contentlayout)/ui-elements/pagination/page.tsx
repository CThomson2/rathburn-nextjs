"use client"
import { page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19 } from '@/shared/data/prism/uielementsprism'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React from 'react';
import Showcode from '@/shared/layout-components/showcode/showcode';

const Pagination = () => {
    return (
        <div>
            <Seo title={"Pagination"} />
            <Pageheader currentpage="Pagination" activepage="Ui Elements" mainpage="Pagination" />
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                            <Showcode title="Basic Pagination" customCardclassName="" code={page1}>
                                <nav aria-label="Page navigation">
                                    <ul className="ti-pagination  mb-0">
                                        <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>Previous</Link></li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>1</Link></li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>2</Link></li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>Next</Link></li>
                                    </ul>
                                </nav>
                                </Showcode>
                    </div>
                    <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                            <Showcode title=" Pagination With Icons" customCardclassName="!flex" code={page2}>
                                <nav aria-label="Page navigation">
                                    <ul className="ti-pagination mb-0">
                                        <li className="page-item">
                                            <Link className="page-link px-3 py-[0.375rem]" href="#!" scroll={false}
                                                aria-label="Previous">
                                                <span aria-hidden="true"><i
                                                        className="rtl:rotate-180 bx bx-chevron-left"></i></span>
                                            </Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>1</Link></li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>2</Link></li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>3</Link></li>
                                        <li className="page-item"> 
                                            <Link className="page-link  px-3 py-[0.375rem]" href="#!" scroll={false}
                                                aria-label="Next">
                                                <span aria-hidden="true"><i
                                                        className="rtl:rotate-180 bx bx-chevron-right"></i></span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                            <Showcode title=" Pagination With Icons" customCardclassName="" customCardBodyClass="!flex flex-wrap justify-between gap-2" code={page3}>
                                <nav aria-label="...">
                                    <ul className="ti-pagination pagination-sm mb-0">
                                        <li className="page-item " aria-current="page">
                                            <span className="page-link  active px-3 py-[0.375rem]">1</span>
                                        </li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>2</Link></li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>3</Link></li>
                                    </ul>
                                </nav>
                                <nav aria-label="...">
                                    <ul className="ti-pagination mb-0">
                                        <li className="page-item " aria-current="page">
                                            <span className="page-link  active px-3 py-[0.375rem]">1</span>
                                        </li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>2</Link></li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>3</Link></li>
                                    </ul>
                                </nav>
                                <nav aria-label="...">
                                    <ul className="ti-pagination pagination-lg mb-0">
                                        <li className="page-item " aria-current="page">
                                            <span className="page-link active px-3 py-[0.375rem]">1</span>
                                        </li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>2</Link></li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>3</Link></li>
                                    </ul>
                                </nav>
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Center &amp; Right Aligned Pagination" customCardclassName="" customCardBodyClass="" code={page4}>
                                <nav aria-label="Page navigation" className="mb-4">
                                    <ul className="ti-pagination justify-center">
                                        <li className="page-item disabled">
                                            <Link className="page-link px-3 py-[0.375rem]" href="#!" scroll={false}>Previous</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>1</Link></li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>2</Link></li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link px-3 py-[0.375rem]" href="#!" scroll={false}>Next</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <nav aria-label="Page navigation">
                                    <ul className="ti-pagination sm:justify-end justify-center mb-0">
                                        <li className="page-item disabled">
                                            <Link className="page-link px-3 py-[0.375rem]" href="#!" scroll={false}>Previous</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>1</Link></li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>2</Link></li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link px-3 py-[0.375rem]" href="#!" scroll={false}>Next</Link>
                                        </li>
                                    </ul>
                                </nav>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Active and disabled states" customCardclassName="" customCardBodyClass="!flex flex-wrap" code={page5}>
                                <nav aria-label="..." className="me-4">
                                    <ul className="ti-pagination">
                                        <li className="page-item disabled">
                                            <Link className="page-link px-3 py-[0.375rem]" href="#!" scroll={false}> Previous</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>1</Link></li>
                                        <li className="page-item " aria-current="page">
                                            <Link className="page-link active px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>2</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link px-3 py-[0.375rem]" href="#!" scroll={false}>Next</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <nav aria-label="...">
                                    <ul className="ti-pagination">
                                        <li className="page-item disabled">
                                            <span className="page-link px-3 py-[0.375rem]">Previous</span>
                                        </li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem]"
                                                href="#!" scroll={false}>1</Link></li>
                                        <li className="page-item " aria-current="page">
                                            <span className="page-link px-3 active py-[0.375rem]">2</span>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link px-3 py-[0.375rem]" href="#!" scroll={false}>Next</Link>
                                        </li>
                                    </ul>
                                </nav>
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Pagination Style-1" customCardclassName="" customCardBodyClass="" code={page6}>
                                <nav aria-label="Page navigation" className="pagination-style-1">
                                    <ul className="ti-pagination mb-0">
                                        <li className="page-item disabled rtl:rotate-180">
                                            <Link aria-label="anchor" className="page-link" href="#!" scroll={false}>
                                                <i className="ri-arrow-left-s-line align-middle"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                        <li className="page-item "><Link className="page-link active"
                                                href="#!" scroll={false}>2</Link></li>
                                        <li className="page-item">
                                            <Link aria-label="anchor" className="page-link" href="#!" scroll={false}>
                                                <i className="bi bi-three-dots"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>21</Link>
                                        </li>
                                        <li className="page-item rtl:rotate-180">
                                            <Link aria-label="anchor" className="page-link" href="#!" scroll={false}>
                                                <i className="ri-arrow-right-s-line align-middle"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Pagination Style-2" customCardclassName="" customCardBodyClass="" code={page7}>
                                <nav aria-label="Page navigation" className="pagination-style-2">
                                    <ul className="ti-pagination mb-0 flex-wrap">
                                        <li className="page-item disabled">
                                            <Link className="page-link px-3 py-[0.375rem] !border-0"
                                                href="#!" scroll={false}>
                                                Prev
                                            </Link>
                                        </li>
                                        <li className="page-item active"><Link className="page-link px-3 py-[0.375rem] !border-0"
                                                href="#!" scroll={false}>1</Link></li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem] !border-0"
                                                href="#!" scroll={false}>2</Link></li>
                                        <li className="page-item">
                                            <Link aria-label="anchor" className="page-link px-3 py-[0.375rem] !border-0"
                                                href="#!" scroll={false}>
                                                <i className="bi bi-three-dots"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link px-3 py-[0.375rem] !border-0"
                                                href="#!" scroll={false}>17</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link px-3 py-[0.375rem] !text-primary !border-0"
                                                href="#!" scroll={false}>
                                                next
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Pagination Style-3" customCardclassName="" customCardBodyClass="" code={page8}>
                                <nav aria-label="Page navigation" className="pagination-style-3">
                                    <ul className="ti-pagination mb-0 flex-wrap">
                                        <li className="page-item disabled">
                                            <Link className="page-link" href="#!" scroll={false}>
                                                Prev
                                            </Link>
                                        </li>
                                        <li className="page-item "><Link className="page-link active"
                                                href="#!" scroll={false}>1</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                        <li className="page-item">
                                            <Link aria-label="anchor" className="page-link" href="#!" scroll={false}>
                                                <i className="bi bi-three-dots"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>16</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link !text-primary" href="#!" scroll={false}>
                                                next
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Pagination Style-4" customCardclassName="" customCardBodyClass="" code={page9}>
                                <nav aria-label="Page navigation" className="pagination-style-4">
                                    <ul className="ti-pagination mb-0 flex-wrap">
                                        <li className="page-item disabled">
                                            <Link className="page-link" href="#!" scroll={false}>
                                                Prev
                                            </Link>
                                        </li>
                                        <li className="page-item "><Link className="page-link active"
                                                href="#!" scroll={false}>1</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                        <li className="page-item">
                                            <Link aria-label="anchor" className="page-link" href="#!" scroll={false}>
                                                <i className="bi bi-three-dots"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>16</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link !text-primary" href="#!" scroll={false}>
                                                next
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:!col-span-6 md:col-span-6 col-span-12">
                            <Showcode title="Pagination Style 5" customCardclassName="" customCardBodyClass="space-y-5" code={page10}>
                                <nav className="flex items-center gap-x-1">
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                        <span aria-hidden="true" className="sr-only">Previous</span>
                                    </button>
                                    <div className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-primary text-white py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:text-white dark:focus:bg-gray-500"
                                            aria-current="page">1</button>
                                        <div className="hs-tooltip ti-main-tooltip">
                                            <button type="button"
                                                className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                <span className="group-hover:hidden text-xs">•••</span>
                                                <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m6 17 5-5-5-5" />
                                                    <path d="m13 17 5-5-5-5" />
                                                </svg>
                                                <span
                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                    role="tooltip">
                                                    Next 4 pages
                                                </span>
                                            </button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                    </div>
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <span aria-hidden="true" className="sr-only">Next</span>
                                        <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                    </button>
                                </nav>
                                <nav className="flex items-center gap-x-1">
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-md border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                        <span aria-hidden="true" className="sr-only">Previous</span>
                                    </button>
                                    <div className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-primary text-primary py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-primary dark:text-primary dark:focus:bg-white/10"
                                            aria-current="page">1</button>
                                        <div className="hs-tooltip ti-main-tooltip">
                                            <button type="button"
                                                className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                <span className="group-hover:hidden text-xs">•••</span>
                                                <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m6 17 5-5-5-5" />
                                                    <path d="m13 17 5-5-5-5" />
                                                </svg>
                                                <span
                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                    role="tooltip">
                                                    Next 4 pages
                                                </span>
                                            </button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                    </div>
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-md border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <span aria-hidden="true" className="sr-only">Next</span>
                                        <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                    </button>
                                </nav>
                                <nav className="flex items-center -space-x-px">
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-md last:rounded-e-md border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                        <span aria-hidden="true" className="sr-only">Previous</span>
                                    </button>
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-primary text-white border border-gray-200 py-2 px-3 text-sm first:rounded-s-md last:rounded-e-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-white/10 dark:text-white dark:focus:bg-gray-500"
                                        aria-current="page">1</button>
                                    <div className="hs-tooltip ti-main-tooltip border border-gray-200 dark:border-white/10">
                                        <button type="button"
                                            className="hs-tooltip-toggle group min-h-[36px] min-w-[36px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                            <span className="group-hover:hidden text-xs">•••</span>
                                            <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="m6 17 5-5-5-5" />
                                                <path d="m13 17 5-5-5-5" />
                                            </svg>
                                            <span
                                                className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                role="tooltip">
                                                Next 4 pages
                                            </span>
                                        </button>
                                    </div>
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-md last:rounded-e-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-md last:rounded-e-md border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <span aria-hidden="true" className="sr-only">Next</span>
                                        <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                    </button>
                                </nav>
                                </Showcode>
                    </div>
                    <div className="xxl:!col-span-6 md:col-span-6 col-span-12">
                            <Showcode title="Pagination Style 6" customCardclassName="" customCardBodyClass="space-y-5" code={page11}>
                                <div className="grid justify-center sm:flex sm:justify-between sm:items-center gap-1">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-primary text-white py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:text-white dark:focus:bg-gray-500"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>

                                    
                                    <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                        <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                            Go to
                                        </span>
                                        <input type="number"
                                            className="min-h-[38px] py-2 px-2.5 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary
                                             [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 
                                             disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                        <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                            page
                                        </span>
                                    </div>
                                    
                                </div>                                                                
                                <div className="grid justify-center sm:flex sm:justify-between sm:items-center gap-1">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-md border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-primary text-primary py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-primary dark:text-primary dark:focus:bg-white/10"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-md border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>

                                    
                                    <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                        <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                            Go to
                                        </span>
                                        <input type="number"
                                            className="min-h-[38px] py-2 px-2.5 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary 
                                            [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none
                                             dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                        <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                            page
                                        </span>
                                    </div>
                                    
                                </div>                                                                
                                <div className="grid justify-center sm:flex sm:justify-between sm:items-center gap-1">
                                    
                                    <nav className="flex items-center -space-x-px">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-md last:rounded-e-md border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-primary text-white border border-gray-200 py-2 px-3 text-sm first:rounded-s-md last:rounded-e-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-white/10 dark:text-white dark:focus:bg-gray-500"
                                            aria-current="page">1</button>
                                        <div
                                            className="hs-tooltip ti-main-tooltip border border-gray-200 dark:border-white/10">
                                            <button type="button"
                                                className="hs-tooltip-toggle group min-h-[36px] min-w-[36px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                <span className="group-hover:hidden text-xs">•••</span>
                                                <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m6 17 5-5-5-5" />
                                                    <path d="m13 17 5-5-5-5" />
                                                </svg>
                                                <span
                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                    role="tooltip">
                                                    Next 4 pages
                                                </span>
                                            </button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-md last:rounded-e-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-md last:rounded-e-md border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>

                                    
                                    <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                        <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                            Go to
                                        </span>
                                        <input type="number"
                                            className="min-h-[38px] py-2 px-2.5 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary 
                                            focus:ring-primary [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 
                                            disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                        <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                            page
                                        </span>
                                    </div>
                                    
                                </div>
                                </Showcode>
                    </div>
                    <div className="xxl:!col-span-6 md:col-span-6 col-span-12">
                            <Showcode title="Pagination Style 7" customCardclassName="" customCardBodyClass="space-y-5" code={page12}>
                                <div className="grid justify-center sm:flex sm:justify-between sm:items-center gap-1">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-primary text-white py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:text-white dark:focus:bg-gray-500"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                        <button id="hs-pagination-dropdown" type="button"
                                            className="hs-dropdown-toggle !py-1.5 !px-2 ti-dropdown-toggle">
                                            5 page
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                            aria-labelledby="hs-pagination-dropdown">
                                            <button type="button" className="ti-dropdown-item w-full justify-between">
                                                5 page
                                                <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                            </button>
                                            <button type="button" className="ti-dropdown-item w-full">
                                                8 page
                                            </button>
                                            <button type="button" className="ti-dropdown-item w-full">
                                                10 page
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>                                                                
                                <div className="grid justify-center sm:flex sm:justify-between sm:items-center gap-1">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-md border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-primary text-primary py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-primary dark:text-primary dark:focus:bg-white/10"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-md border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                        <button id="hs-pagination-dropdown2" type="button"
                                            className="hs-dropdown-toggle !py-1.5 !px-2 ti-dropdown-toggle">
                                            5 page
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                            aria-labelledby="hs-pagination-dropdown2">
                                            <button type="button" className="ti-dropdown-item w-full justify-between">
                                                5 page
                                                <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                            </button>
                                            <button type="button" className="ti-dropdown-item w-full">
                                                8 page
                                            </button>
                                            <button type="button" className="ti-dropdown-item w-full">
                                                10 page
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>                                                               
                                <div className="grid justify-center sm:flex sm:justify-between sm:items-center gap-1">
                                   
                                    <nav className="flex items-center -space-x-px">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-md last:rounded-e-md border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-primary text-white border border-gray-200 py-2 px-3 text-sm first:rounded-s-md last:rounded-e-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-white/10 dark:text-white dark:focus:bg-gray-500"
                                            aria-current="page">1</button>
                                        <div
                                            className="hs-tooltip ti-main-tooltip border border-gray-200 dark:border-white/10">
                                            <button type="button"
                                                className="hs-tooltip-toggle group min-h-[36px] min-w-[36px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                <span className="group-hover:hidden text-xs">•••</span>
                                                <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m6 17 5-5-5-5" />
                                                    <path d="m13 17 5-5-5-5" />
                                                </svg>
                                                <span
                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                    role="tooltip">
                                                    Next 4 pages
                                                </span>
                                            </button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-md last:rounded-e-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-md last:rounded-e-md border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                        <button id="hs-pagination-dropdown3" type="button"
                                            className="hs-dropdown-toggle !py-1.5 !px-2 ti-dropdown-toggle">
                                            5 page
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                            aria-labelledby="hs-pagination-dropdown3">
                                            <button type="button" className="ti-dropdown-item w-full justify-between">
                                                5 page
                                                <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                            </button>
                                            <button type="button" className="ti-dropdown-item w-full">
                                                8 page
                                            </button>
                                            <button type="button" className="ti-dropdown-item w-full">
                                                10 page
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                                </Showcode>
                    </div>
                    <div className="xxl:!col-span-6 md:col-span-6 col-span-12">
                            <Showcode title="Pagination Style 8" customCardclassName="" customCardBodyClass="space-y-5" code={page13}>
                                <nav className="flex justify-between items-center gap-x-1">
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                        <span aria-hidden="true" className="hidden sm:block">Previous</span>
                                    </button>
                                    <div className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-primary text-white py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:text-white dark:focus:bg-gray-500"
                                            aria-current="page">1</button>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">2</button>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">3</button>
                                    </div>
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <span aria-hidden="true" className="hidden sm:block">Next</span>
                                        <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                    </button>
                                </nav>
                                <nav className="flex justify-between items-center gap-x-1">
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-md border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                        <span aria-hidden="true" className="hidden sm:block">Previous</span>
                                    </button>
                                    <div className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-primary text-primary py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-primary dark:text-primary dark:focus:bg-white/10"
                                            aria-current="page">1</button>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">2</button>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">3</button>
                                    </div>
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-md border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <span aria-hidden="true" className="hidden sm:block">Next</span>
                                        <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                    </button>
                                </nav>
                                <nav className="flex justify-between items-center gap-x-1">
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                        <span aria-hidden="true" className="hidden sm:block">Previous</span>
                                    </button>
                                    <div className="flex items-center gap-x-1">
                                        <span
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-primary text-primary py-2 px-3 text-sm rounded-md focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-primary dark:text-primary dark:focus:bg-white/10">1</span>
                                        <span
                                            className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-white">of</span>
                                        <span
                                            className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-white">3</span>
                                    </div>
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <span aria-hidden="true" className="hidden sm:block">Next</span>
                                        <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                    </button>
                                </nav>
                                </Showcode>
                    </div>
                    <div className="xxl:!col-span-6 col-span-12">
                            <Showcode title="Pagination Style 9" customCardclassName="" customCardBodyClass="space-y-5" code={page14}>
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[32px] min-w-8 py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[32px] min-w-8 flex justify-center items-center bg-primary text-white py-1 px-2.5 text-sm rounded-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:text-white dark:focus:bg-gray-500"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[32px] min-w-8 flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[32px] min-w-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[32px] min-w-8 py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-basic" type="button"
                                                className="hs-dropdown-toggle !py-1 !px-2.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-basic">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        

                                        
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[32px] py-1 px-2.5  block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary 
                                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none
                                                 dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                        
                                    </div>

                                </div>                                
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-primary text-white py-1 px-2.5 text-sm rounded-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:text-white dark:focus:bg-gray-500"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-basic1" type="button"
                                                className="hs-dropdown-toggle !py-2 !px-2.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-basic1">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        

                                        
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[38px] py-2 px-2.5 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary 
                                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none 
                                                dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                        
                                    </div>

                                </div>                                                            
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[46px] min-w-[46px] py-2 px-2.5  jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[46px] min-w-[46px] flex justify-center items-center bg-primary text-white py-1 px-2.5 text-sm rounded-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:text-white dark:focus:bg-gray-500"
                                                aria-current="page">1</button>

                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[46px] min-w-[46px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[46px] min-w-[46px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[46px] min-w-[46px] py-2 px-2.5  jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-basic2" type="button"
                                                className="hs-dropdown-toggle !py-3 !px-3.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-basic2">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        

                                        
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[46px] p-3 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary 
                                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none
                                                 dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                        
                                    </div>

                                </div>
                                
                                </Showcode>
                    </div>
                    <div className="xxl:!col-span-6 col-span-12">
                            <Showcode title="Pagination Style 10" customCardclassName="" customCardBodyClass="space-y-5" code={page15}>
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[32px] min-w-8 py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[32px] min-w-8 flex justify-center items-center bg-primary text-white py-1 px-2.5 text-sm rounded-full focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:text-white dark:focus:bg-gray-500"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[32px] min-w-8 flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[32px] min-w-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[32px] min-w-8 py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-rounded" type="button"
                                                className="hs-dropdown-toggle !py-1 !px-2.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-rounded">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        

                                        
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[32px] py-1 px-2.5  block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary 
                                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none 
                                                dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>                                                           
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-primary text-white py-1 px-2.5 text-sm rounded-full focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:text-white dark:focus:bg-gray-500"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-rounded1" type="button"
                                                className="hs-dropdown-toggle !py-2 !px-2.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-rounded1">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        

                                        
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[38px] py-2 px-2.5 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary 
                                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none 
                                                dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>                                                              
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[46px] min-w-[46px] py-2 px-2.5  jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[46px] min-w-[46px] flex justify-center items-center bg-primary text-white py-1 px-2.5 text-sm rounded-full focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:text-white dark:focus:bg-gray-500"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[46px] min-w-[46px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[46px] min-w-[46px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[46px] min-w-[46px] py-2 px-2.5  jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-rounded2" type="button"
                                                className="hs-dropdown-toggle !py-3 !px-3.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-rounded2">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        

                                        
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[46px] p-3 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary 
                                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none 
                                                dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                </Showcode>
                    </div>
                    <div className="xxl:!col-span-6 col-span-12">
                            <Showcode title="Pagination Style 11" customCardclassName="" customCardBodyClass="space-y-5" code={page16}>
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[32px] min-w-8 py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[32px] min-w-8 flex justify-center items-center border border-primary text-primary py-1 px-2.5 text-sm rounded-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:border-primary dark:text-primary dark:focus:bg-gray-500"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[32px] min-w-8 flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[32px] min-w-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[32px] min-w-8 py-2 px-2.5 jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-bordered" type="button"
                                                className="hs-dropdown-toggle !py-1 !px-2.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-bordered">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        

                                        
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[32px] py-1 px-2.5  block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary 
                                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none
                                                 dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>                                                            
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-primary text-primary py-1 px-2.5 text-sm rounded-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:border-primary dark:text-primary dark:focus:bg-gray-500"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-bordered1" type="button"
                                                className="hs-dropdown-toggle !py-2 !px-2.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-bordered1">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        

                                        
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[38px] py-2 px-2.5 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary
                                                 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none 
                                                 dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>                                                            
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[46px] min-w-[46px] py-2 px-2.5 jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[46px] min-w-[46px] flex justify-center items-center border border-primary text-primary py-1 px-2.5 text-sm rounded-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:border-primary dark:text-primary dark:focus:bg-gray-500"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[46px] min-w-[46px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[46px] min-w-[46px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[46px] min-w-[46px] py-2 px-2.5  jusify-center items-center gap-x-2 text-sm rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-bordered2" type="button"
                                                className="hs-dropdown-toggle !py-3 !px-3.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-bordered2">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        

                                        
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[46px] p-3 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary 
                                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none 
                                                dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                </Showcode>
                    </div>
                    <div className="xxl:!col-span-6 col-span-12">
                            <Showcode title="Pagination Style 12" customCardclassName="" customCardBodyClass="space-y-5" code={page17}>
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[32px] min-w-8 py-2 px-2.5  jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[32px] min-w-8 flex justify-center items-center border border-primary text-primary py-1 px-2.5 text-sm rounded-full focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:border-primary dark:text-primary dark:focus:bg-gray-500"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[32px] min-w-8 flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[32px] min-w-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[32px] min-w-8 py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-bordered-round" type="button"
                                                className="hs-dropdown-toggle !py-1 !px-2.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-bordered-round">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        

                                        
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[32px] py-1 px-2.5  block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary 
                                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none 
                                                dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>                                                       
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-primary text-primary py-1 px-2.5 text-sm rounded-full focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:border-primary dark:text-primary dark:focus:bg-gray-500"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-bordered-round1" type="button"
                                                className="hs-dropdown-toggle !py-2 !px-2.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-bordered-round1">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        

                                        
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[38px] py-2 px-2.5 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary 
                                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none
                                                 dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>                                                               
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center gap-x-1">
                                        <button type="button"
                                            className="min-h-[46px] min-w-[46px] py-2 px-2.5  jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <div className="flex items-center gap-x-1">
                                            <button type="button"
                                                className="min-h-[46px] min-w-[46px] flex justify-center items-center border border-primary text-primary py-1 px-2.5 text-sm rounded-full focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:border-primary dark:text-primary dark:focus:bg-gray-500"
                                                aria-current="page">1</button>
                                            <div className="hs-tooltip ti-main-tooltip">
                                                <button type="button"
                                                    className="hs-tooltip-toggle group min-h-[46px] min-w-[46px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                    <span className="group-hover:hidden text-xs">•••</span>
                                                    <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 17 5-5-5-5" />
                                                        <path d="m13 17 5-5-5-5" />
                                                    </svg>
                                                    <span
                                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                        role="tooltip">
                                                        Next 4 pages
                                                    </span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                className="min-h-[46px] min-w-[46px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[46px] min-w-[46px] py-2 px-2.5  jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-bordered-round2" type="button"
                                                className="hs-dropdown-toggle !py-3 !px-3.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-bordered-round2">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        

                                        
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[46px] p-3 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary 
                                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none 
                                                dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                </Showcode>
                    </div>
                    <div className="xxl:!col-span-6 col-span-12">
                            <Showcode title="Pagination Style 13" customCardclassName="" customCardBodyClass="space-y-5" code={page18}>
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center -space-x-px">
                                        <button type="button"
                                            className="min-h-[32px] min-w-8  inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-md last:rounded-e-md border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <button type="button"
                                            className="min-h-[32px] min-w-8 flex justify-center items-center bg-primary text-white border border-gray-200 py-1 px-2.5 text-sm first:rounded-s-md last:rounded-e-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-white/10 dark:text-white dark:focus:bg-gray-500"
                                            aria-current="page">1</button>
                                        <div
                                            className="hs-tooltip ti-main-tooltip border border-gray-200 dark:border-white/10">
                                            <button type="button"
                                                className="hs-tooltip-toggle group min-h-[30px] min-w-8 flex justify-center items-center text-gray-400 hover:text-primary py-1 px-2.5 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                <span className="group-hover:hidden text-xs">•••</span>
                                                <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m6 17 5-5-5-5" />
                                                    <path d="m13 17 5-5-5-5" />
                                                </svg>
                                                <span
                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                    role="tooltip">
                                                    Next 4 pages
                                                </span>
                                            </button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[32px] min-w-8 flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm first:rounded-s-md last:rounded-e-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        <button type="button"
                                            className="min-h-[32px] min-w-8 py-1 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-md last:rounded-e-md border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                        
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-bordered-group" type="button"
                                                className="hs-dropdown-toggle !py-1 !px-2.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-bordered-group">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        

                                        
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[32px] py-1 px-2.5  block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary 
                                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 
                                                disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>                   
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                    
                                    <nav className="flex items-center -space-x-px">
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-md last:rounded-e-md border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-primary text-white border border-gray-200 py-2 px-3 text-sm first:rounded-s-md last:rounded-e-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-white/10 dark:text-white dark:focus:bg-gray-500"
                                            aria-current="page">1</button>
                                        <div
                                            className="hs-tooltip ti-main-tooltip border border-gray-200 dark:border-white/10">
                                            <button type="button"
                                                className="hs-tooltip-toggle group min-h-[36px] min-w-[36px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                <span className="group-hover:hidden text-xs">•••</span>
                                                <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m6 17 5-5-5-5" />
                                                    <path d="m13 17 5-5-5-5" />
                                                </svg>
                                                <span
                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                    role="tooltip">
                                                    Next 4 pages
                                                </span>
                                            </button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-md last:rounded-e-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        <button type="button"
                                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-md last:rounded-e-md border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                      
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-bordered-group1" type="button"
                                                className="hs-dropdown-toggle !py-2 !px-2.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-bordered-group1">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[32px] py-2 px-2.5 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary 
                                                focus:ring-primary [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 
                                                disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div
                                    className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                   
                                    <nav className="flex items-center -space-x-px">
                                        <button type="button"
                                            className="min-h-[46px] min-w-[46px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-md last:rounded-e-md border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                            <span aria-hidden="true" className="sr-only">Previous</span>
                                        </button>
                                        <button type="button"
                                            className="min-h-[46px] min-w-[46px] flex justify-center items-center bg-primary text-white border border-gray-200 py-2 px-3 text-sm first:rounded-s-md last:rounded-e-md focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-white/10 dark:text-white dark:focus:bg-gray-500"
                                            aria-current="page">1</button>
                                        <div
                                            className="hs-tooltip ti-main-tooltip border border-gray-200 dark:border-white/10">
                                            <button type="button"
                                                className="hs-tooltip-toggle group min-h-[44px] min-w-[46px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                                <span className="group-hover:hidden text-xs">•••</span>
                                                <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m6 17 5-5-5-5" />
                                                    <path d="m13 17 5-5-5-5" />
                                                </svg>
                                                <span
                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                    role="tooltip">
                                                    Next 4 pages
                                                </span>
                                            </button>
                                        </div>
                                        <button type="button"
                                            className="min-h-[46px] min-w-[46px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-md last:rounded-e-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                        <button type="button"
                                            className="min-h-[46px] min-w-[46px]py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-md last:rounded-e-md border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                            <span aria-hidden="true" className="sr-only">Next</span>
                                            <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                        </button>
                                    </nav>
                                    <div className="flex justify-center items-center gap-x-5">
                                      
                                        <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                            <button id="hs-pagination-dropdown-bordered-group2" type="button"
                                                className="hs-dropdown-toggle !py-3 !px-3.5 ti-dropdown-toggle">
                                                5 page
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="hs-pagination-dropdown-bordered-group2">
                                                <button type="button" className="ti-dropdown-item w-full justify-between">
                                                    5 page
                                                    <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    8 page
                                                </button>
                                                <button type="button" className="ti-dropdown-item w-full">
                                                    10 page
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                Go to
                                            </span>
                                            <input type="number"
                                                className="min-h-[46px] p-3 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary
                                                 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 
                                                 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                                page
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                </Showcode>
                    </div>
                    <div className="xxl:!col-span-6 col-span-12">
                        <Showcode title="Pagination Style 14" customCardclassName="" customCardBodyClass="space-y-5" code={page19}>
                            <div
                                className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                
                                <nav className="flex items-center -space-x-px">
                                    <button type="button"
                                        className="min-h-[32px] min-w-8 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-full last:rounded-e-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                        <span aria-hidden="true" className="sr-only">Previous</span>
                                    </button>
                                    <button type="button"
                                        className="min-h-[32px] min-w-8 flex justify-center items-center bg-primary text-white border border-gray-200 py-1 px-2.5 text-sm first:rounded-s-full last:rounded-e-full focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-white/10 dark:text-white dark:focus:bg-gray-500"
                                        aria-current="page">1</button>
                                    <div
                                        className="hs-tooltip ti-main-tooltip border border-gray-200 dark:border-white/10">
                                        <button type="button"
                                            className="hs-tooltip-toggle group min-h-[30px] min-w-8 flex justify-center items-center text-gray-400 hover:text-primary py-1 px-2.5 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                            <span className="group-hover:hidden text-xs">•••</span>
                                            <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="m6 17 5-5-5-5" />
                                                <path d="m13 17 5-5-5-5" />
                                            </svg>
                                            <span
                                                className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                role="tooltip">
                                                Next 4 pages
                                            </span>
                                        </button>
                                    </div>
                                    <button type="button"
                                        className="min-h-[32px] min-w-8 flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-1 px-2.5 text-sm first:rounded-s-full last:rounded-e-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                    <button type="button"
                                        className="min-h-[32px] min-w-8 py-1 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-full last:rounded-e-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <span aria-hidden="true" className="sr-only">Next</span>
                                        <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                    </button>
                                </nav>
                                <div className="flex justify-center items-center gap-x-5">
                                    
                                    <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                        <button id="hs-pagination-dropdown-bordered-group-round" type="button"
                                            className="hs-dropdown-toggle !py-1 !px-2.5 ti-dropdown-toggle">
                                            5 page
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                            aria-labelledby="hs-pagination-dropdown-bordered-group-round">
                                            <button type="button" className="ti-dropdown-item w-full justify-between">
                                                5 page
                                                <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                            </button>
                                            <button type="button" className="ti-dropdown-item w-full">
                                                8 page
                                            </button>
                                            <button type="button" className="ti-dropdown-item w-full">
                                                10 page
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                        <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                            Go to
                                        </span>
                                        <input type="number"
                                            className="min-h-[32px] py-1 px-2.5  block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary
                                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 
                                                disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                        <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                            page
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                
                                <nav className="flex items-center -space-x-px">
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-full last:rounded-e-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                        <span aria-hidden="true" className="sr-only">Previous</span>
                                    </button>
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-primary text-white border border-gray-200 py-2 px-3 text-sm first:rounded-s-full last:rounded-e-full focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-white/10 dark:text-white dark:focus:bg-gray-500"
                                        aria-current="page">1</button>
                                    <div
                                        className="hs-tooltip ti-main-tooltip border border-gray-200 dark:border-white/10">
                                        <button type="button"
                                            className="hs-tooltip-toggle group min-h-[36px] min-w-[36px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                            <span className="group-hover:hidden text-xs">•••</span>
                                            <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="m6 17 5-5-5-5" />
                                                <path d="m13 17 5-5-5-5" />
                                            </svg>
                                            <span
                                                className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                role="tooltip">
                                                Next 4 pages
                                            </span>
                                        </button>
                                    </div>
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-full last:rounded-e-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                    <button type="button"
                                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-full last:rounded-e-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <span aria-hidden="true" className="sr-only">Next</span>
                                        <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                    </button>
                                </nav>
                                <div className="flex justify-center items-center gap-x-5">
                                    
                                    <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                        <button id="hs-pagination-dropdown-bordered-group-round1" type="button"
                                            className="hs-dropdown-toggle !py-2 !px-2.5 ti-dropdown-toggle">
                                            5 page
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                            aria-labelledby="hs-pagination-dropdown-bordered-group-round1">
                                            <button type="button" className="ti-dropdown-item w-full justify-between">
                                                5 page
                                                <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                            </button>
                                            <button type="button" className="ti-dropdown-item w-full">
                                                8 page
                                            </button>
                                            <button type="button" className="ti-dropdown-item w-full">
                                                10 page
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                        <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                            Go to
                                        </span>
                                        <input type="number"
                                            className="min-h-[32px] py-2 px-2.5 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary 
                                            focus:ring-primary [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 
                                            disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                        <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                            page
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div
                                className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2 flex-wrap">
                                
                                <nav className="flex items-center -space-x-px">
                                    <button type="button"
                                        className="min-h-[46px] min-w-[46px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-full last:rounded-e-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <i className="ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                        <span aria-hidden="true" className="sr-only">Previous</span>
                                    </button>
                                    <button type="button"
                                        className="min-h-[46px] min-w-[46px] flex justify-center items-center bg-primary text-white border border-gray-200 py-2 px-3 text-sm first:rounded-s-full last:rounded-e-full focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-white/10 dark:text-white dark:focus:bg-gray-500"
                                        aria-current="page">1</button>
                                    <div
                                        className="hs-tooltip ti-main-tooltip border border-gray-200 dark:border-white/10">
                                        <button type="button"
                                            className="hs-tooltip-toggle group min-h-[44px] min-w-[46px] flex justify-center items-center text-gray-400 hover:text-primary p-2 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-primary dark:focus:bg-white/10">
                                            <span className="group-hover:hidden text-xs">•••</span>
                                            <svg className="group-hover:block hidden flex-shrink-0 size-5"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="m6 17 5-5-5-5" />
                                                <path d="m13 17 5-5-5-5" />
                                            </svg>
                                            <span
                                                className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-bodybg"
                                                role="tooltip">
                                                Next 4 pages
                                            </span>
                                        </button>
                                    </div>
                                    <button type="button"
                                        className="min-h-[46px] min-w-[46px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-full last:rounded-e-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                                    <button type="button"
                                        className="min-h-[46px] min-w-[46px]py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-full last:rounded-e-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                        <span aria-hidden="true" className="sr-only">Next</span>
                                        <i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                    </button>
                                </nav>
                                <div className="flex justify-center items-center gap-x-5">
                                    
                                    <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                        <button id="hs-pagination-dropdown-bordered-group-round2" type="button"
                                            className="hs-dropdown-toggle !py-3 !px-3.5 ti-dropdown-toggle">
                                            5 page
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu hidden"
                                            aria-labelledby="hs-pagination-dropdown-bordered-group-round2">
                                            <button type="button" className="ti-dropdown-item w-full justify-between">
                                                5 page
                                                <i className="ri-check-line text-primary flex-shrink-0 size-4"></i>
                                            </button>
                                            <button type="button" className="ti-dropdown-item w-full">
                                                8 page
                                            </button>
                                            <button type="button" className="ti-dropdown-item w-full">
                                                10 page
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center sm:justify-start items-center gap-x-2">
                                        <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                            Go to
                                        </span>
                                        <input type="number"
                                            className="min-h-[46px] p-3 block w-12 border-gray-200 rounded-md text-sm text-center focus:border-primary focus:ring-primary [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:ring-gray-600"/>
                                        <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
                                            page
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            </Showcode>
                    </div>
                </div>
        </div>
    )
}

export default Pagination