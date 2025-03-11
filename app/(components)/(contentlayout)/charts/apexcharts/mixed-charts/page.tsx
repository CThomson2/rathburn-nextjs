"use client"
import  * as Mixedata from '@/shared/data/charts/apexcharts/mixedchartsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Mixedcharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Mixed Charts"} />
            <Pageheader currentpage="Apex Mixed Charts" activepage="Apex Charts" mainpage="Apex Mixed Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line &amp; Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="mixed-linecolumn">
                                <ReactApexChart options={Mixedata.Mixedlinecolumn.options} series={Mixedata.Mixedlinecolumn.series} type="line" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multiple Y-Axis Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="mixed-multiple-y">
                                <ReactApexChart options={Mixedata.MultipleYaxis.options} series={Mixedata.MultipleYaxis.series} type="line" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line &amp; Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="mixed-linearea">
                                <ReactApexChart options={Mixedata.Linearea.options} series={Mixedata.Linearea.series} type="line" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line,Column &amp; Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="mixed-all">
                                <ReactApexChart options={Mixedata.Linecolumnarea.options} series={Mixedata.Linecolumnarea.series} type="line" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Mixedcharts