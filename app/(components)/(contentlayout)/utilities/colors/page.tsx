"use client"
import { Background } from '@/shared/data/utilities/colorsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react'

const Colors = () => {
    return (
        <div>
            <Seo title={"Colors"} />
            <Pageheader currentpage="Colors" activepage="Utilities" mainpage="Colors" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Background Colors
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="grid md:grid-cols-8 grid-cols-1 sm:grid-cols-4  items-center">
                                {Background.map((idx)=>(
                                <div className="p-4 col-span-1" key={Math.random()}>
                                    <div className={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>bg-{idx.color1}</code></p>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Border Colors
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="grid md:grid-cols-8 grid-cols-1 sm:grid-cols-4  items-center">
                                {Background.map((idx)=>(
                                <div className="p-4 col" key={Math.random()}>
                                    <div className={`m-2 border border-${idx.color} mx-auto color-container`}></div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>border-{idx.color1}</code></p>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Background Opacity
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="grid sm:grid-cols-5 items-center">
                                <div className="p-4 col">
                                    <div className="m-2 bg-success  bg-opacity-100 text-white mx-auto color-container">100%</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>bg-opacity</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 bg-success bg-opacity-75 text-white  mx-auto color-container">75%</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>bg-opacity-75</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 bg-success bg-opacity-50 text-black  mx-auto color-container">50%</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>bg-opacity-50</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 bg-success bg-opacity-25 text-black  mx-auto color-container">25%</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>bg-opacity-25</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 bg-success bg-opacity-10 text-black  mx-auto color-container">10%</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>bg-opacity-10</code></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Text Colors
                            </div>
                        </div>
                        <div className="box-body">
                            <div className=" !flex items-center flex-wrap justify-between">
                                <div className="p-4 col">
                                    <div className="m-2 text-primary font-semibold text-[.875rem] text-center">primary</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>text-primary</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-secondary font-semibold text-[.875rem] text-center">secondary</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>text-secondary</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-warning font-semibold text-[.875rem] text-center">warning</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>text-warning</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-info font-semibold text-[.875rem] text-center">info</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>text-info</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-success font-semibold text-[.875rem] text-center">success</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>text-success</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-danger font-semibold text-[.875rem] text-center">danger</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>text-danger</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-light bg-black text-white font-semibold text-[.875rem] text-center">light</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>.text-light</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-dark font-semibold text-[.875rem] text-center">dark</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>text-dark</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-[#8c9097] dark:text-white/50 font-semibold text-[.875rem] text-center">muted</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code>text-muted</code></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Text Opacity
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="grid sm:grid-cols-4 items-center">
                                        <div className="p-4 col">
                                            <div className="m-2 text-primary text-opacity-100 font-semibold text-[.875rem] text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 font-semibold text-center"><code>100% opacity</code></p>
                                        </div>
                                        <div className="p-4 col">
                                            <div className="m-2 text-primary text-opacity-75 font-semibold text-[.875rem] text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 font-semibold text-center"><code>text-opacity-75</code></p>
                                        </div>
                                        <div className="p-4 col">
                                            <div className="m-2 text-primary text-opacity-50 font-semibold text-[.875rem] text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 font-semibold text-center"><code>text-opacity-50</code></p>
                                        </div>
                                        <div className="p-4 col">
                                            <div className="m-2 text-primary text-opacity-25 font-semibold text-[.875rem] text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 font-semibold text-center"><code>text-opacity-25</code></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6 className="mb-4">Other Colors:</h6>
            <div className="grid  gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-bluemain/10 ">blue-100</div>

                            <div className="flex-grow p-4 bg-bluemain/20 ">blue-200</div>

                            <div className="flex-grow p-4 bg-bluemain/30 ">blue-300</div>

                            <div className="flex-grow p-4 bg-bluemain/40 ">blue-400</div>

                            <div className="flex-grow p-4 bg-bluemain/50">blue-500</div>

                            <div className="flex-grow p-4 bg-bluemain/60 text-white">blue-600</div>

                            <div className="flex-grow p-4 bg-bluemain/70 text-white">blue-700</div>

                            <div className="flex-grow p-4 bg-bluemain/80 text-white">blue-800</div>

                            <div className="flex-grow p-4 bg-bluemain/90 text-white">blue-900</div>

                            <div className="flex-grow p-4 bg-bluemain text-white">blue</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-indigomain/10">indigo-100</div>

                            <div className="flex-grow p-4 bg-indigomain/20">indigo-200</div>

                            <div className="flex-grow p-4 bg-indigomain/30">indigo-300</div>

                            <div className="flex-grow p-4 bg-indigomain/40">indigo-400</div>

                            <div className="flex-grow p-4 bg-indigomain/50">indigo-500</div>

                            <div className="flex-grow p-4 bg-indigomain/60 text-white">indigo-600</div>

                            <div className="flex-grow p-4 bg-indigomain/70 text-white">indigo-700</div>

                            <div className="flex-grow p-4 bg-indigomain/80 text-white">indigo-800</div>

                            <div className="flex-grow p-4 bg-indigomain/90 text-white">indigo-900</div>

                            <div className="flex-grow p-4 bg-indigomain text-white">indigo</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-purplemain/10">purple-100</div>

                            <div className="flex-grow p-4 bg-purplemain/20">purple-200</div>

                            <div className="flex-grow p-4 bg-purplemain/30">purple-300</div>

                            <div className="flex-grow p-4 bg-purplemain/40">purple-400</div>

                            <div className="flex-grow p-4 bg-purplemain/50">purple-500</div>

                            <div className="flex-grow p-4 bg-purplemain/60 text-white">purple-600</div>

                            <div className="flex-grow p-4 bg-purplemain/70 text-white">purple-700</div>

                            <div className="flex-grow p-4 bg-purplemain/80 text-white">purple-800</div>

                            <div className="flex-grow p-4 bg-purplemain/90 text-white">purple-900</div>

                            <div className="flex-grow p-4 bg-purplemain text-white">purple</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-pinkmain/10">pink-100</div>

                            <div className="flex-grow p-4 bg-pinkmain/20">pink-200</div>

                            <div className="flex-grow p-4 bg-pinkmain/30">pink-300</div>

                            <div className="flex-grow p-4 bg-pinkmain/40">pink-400</div>

                            <div className="flex-grow p-4 bg-pinkmain/50">pink-500</div>

                            <div className="flex-grow p-4 bg-pinkmain/60 text-white">pink-600</div>

                            <div className="flex-grow p-4 bg-pinkmain/70 text-white">pink-700</div>

                            <div className="flex-grow p-4 bg-pinkmain/80 text-white">pink-800</div>

                            <div className="flex-grow p-4 bg-pinkmain/90 text-white">pink-900</div>

                            <div className="flex-grow p-4 bg-pinkmain text-white">pink</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-redmain/10">red-100</div>

                            <div className="flex-grow p-4 bg-redmain/20">red-200</div>

                            <div className="flex-grow p-4 bg-redmain/30">red-300</div>

                            <div className="flex-grow p-4 bg-redmain/40">red-400</div>

                            <div className="flex-grow p-4 bg-redmain/50">red-500</div>

                            <div className="flex-grow p-4 bg-redmain/60 text-white">red-600</div>

                            <div className="flex-grow p-4 bg-redmain/70 text-white">red-700</div>

                            <div className="flex-grow p-4 bg-redmain/80 text-white">red-800</div>

                            <div className="flex-grow p-4 bg-redmain/90 text-white">red-900</div>

                            <div className="flex-grow p-4 bg-redmain text-white">red</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-orangemain/10">orange-100</div>

                            <div className="flex-grow p-4 bg-orangemain/20">orange-200</div>

                            <div className="flex-grow p-4 bg-orangemain/30">orange-300</div>

                            <div className="flex-grow p-4 bg-orangemain/40">orange-400</div>

                            <div className="flex-grow p-4 bg-orangemain/50">orange-500</div>

                            <div className="flex-grow p-4 bg-orangemain/60 text-white">orange-600</div>

                            <div className="flex-grow p-4 bg-orangemain/70 text-white">orange-700</div>

                            <div className="flex-grow p-4 bg-orangemain/80 text-white">orange-800</div>

                            <div className="flex-grow p-4 bg-orangemain/90 text-white">orange-900</div>

                            <div className="flex-grow p-4 bg-orangemain text-white">orange</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-yellowmain/10">yellow-full</div>

                            <div className="flex-grow p-4 bg-yellowmain/20">yellow-200</div>

                            <div className="flex-grow p-4 bg-yellowmain/30">yellow-300</div>

                            <div className="flex-grow p-4 bg-yellowmain/40">yellow-400</div>

                            <div className="flex-grow p-4 bg-yellowmain/50">yellow-500</div>

                            <div className="flex-grow p-4 bg-yellowmain/60 text-white">yellow-600</div>

                            <div className="flex-grow p-4 bg-yellowmain/70 text-white">yellow-700</div>

                            <div className="flex-grow p-4 bg-yellowmain/80 text-white">yellow-800</div>

                            <div className="flex-grow p-4 bg-yellowmain/90 text-white">yellow-900</div>

                            <div className="flex-grow p-4 bg-yellowmain text-white">yellow</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-greenmain/10">green-100</div>

                            <div className="flex-grow p-4 bg-greenmain/20">green-200</div>

                            <div className="flex-grow p-4 bg-greenmain/30">green-300</div>

                            <div className="flex-grow p-4 bg-greenmain/40">green-400</div>

                            <div className="flex-grow p-4 bg-greenmain/50">green-500</div>

                            <div className="flex-grow p-4 bg-greenmain/60 text-white">green-600</div>

                            <div className="flex-grow p-4 bg-greenmain/70 text-white">green-700</div>

                            <div className="flex-grow p-4 bg-greenmain/80 text-white">green-800</div>

                            <div className="flex-grow p-4 bg-greenmain/90 text-white">green-900</div>

                            <div className="flex-grow p-4 bg-greenmain text-white">green</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-[#12c2c2]/10">teal-100</div>

                            <div className="flex-grow p-4 bg-[#12c2c2]/20">teal-200</div>

                            <div className="flex-grow p-4 bg-[#12c2c2]/30">teal-300</div>

                            <div className="flex-grow p-4 bg-[#12c2c2]/40">teal-400</div>

                            <div className="flex-grow p-4 bg-[#12c2c2]/50">teal-500</div>

                            <div className="flex-grow p-4 bg-[#12c2c2]/60 text-white">teal-600</div>

                            <div className="flex-grow p-4 bg-[#12c2c2]/70 text-white">teal-700</div>

                            <div className="flex-grow p-4 bg-[#12c2c2]/80 text-white">teal-800</div>

                            <div className="flex-grow p-4 bg-[#12c2c2]/90 text-white">teal-900</div>

                            <div className="flex-grow p-4 bg-[#12c2c2] text-white">teal</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-cyanmain/10">cyan-100</div>

                            <div className="flex-grow p-4 bg-cyanmain/20">cyan-200</div>

                            <div className="flex-grow p-4 bg-cyanmain/30">cyan-300</div>

                            <div className="flex-grow p-4 bg-cyanmain/40">cyan-400</div>

                            <div className="flex-grow p-4 bg-cyanmain/50">cyan-500</div>

                            <div className="flex-grow p-4 bg-cyanmain/60 text-white">cyan-600</div>

                            <div className="flex-grow p-4 bg-cyanmain/70 text-white">cyan-700</div>

                            <div className="flex-grow p-4 bg-cyanmain/80 text-white">cyan-800</div>

                            <div className="flex-grow p-4 bg-cyanmain/90 text-white">cyan-900</div>

                            <div className="flex-grow p-4 bg-cyanmain text-white">cyan</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-gray-100 dark:text-black">gray-100</div>

                            <div className="flex-grow p-4 bg-gray-200 dark:text-black">gray-200</div>

                            <div className="flex-grow p-4 bg-gray-300 dark:text-black">gray-300</div>

                            <div className="flex-grow p-4 bg-gray-400 dark:text-black">gray-400</div>

                            <div className="flex-grow p-4 bg-gray-500">gray-500</div>

                            <div className="flex-grow p-4 bg-gray-600 text-white">gray-600</div>

                            <div className="flex-grow p-4 bg-gray-700 text-white">gray-700</div>

                            <div className="flex-grow p-4 bg-gray-800 text-white">gray-800</div>

                            <div className="flex-grow p-4 bg-gray-900 text-white">gray-900</div>

                            <div className="flex-grow p-4 bg-gray-900 text-white">gray</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Colors