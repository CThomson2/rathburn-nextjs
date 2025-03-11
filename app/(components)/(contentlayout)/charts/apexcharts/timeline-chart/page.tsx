
"use client"
import  * as Timelinedata from '@/shared/data/charts/apexcharts/timelinechartsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Timelinechart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Timeline Charts"} />
            <Pageheader currentpage="Apex Timeline Charts" activepage="Apex Charts" mainpage="Apex Timeline Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic TImeline Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-basic">
                                <ReactApexChart options={Timelinedata.Basictimeline.options} series={Timelinedata.Basictimeline.series} type="rangeBar" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multiple Colored TImeline Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-colors">
                                <ReactApexChart options={Timelinedata.Multiplecolored.options} series={Timelinedata.Multiplecolored.series} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multi Series Timeline Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-multi">
                                <ReactApexChart options={Timelinedata.Timelinemulti.options} series={Timelinedata.Timelinemulti.series} type="rangeBar" height={320} width={"100%"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Advanced Timeline Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-advanced">
                                <ReactApexChart options={Timelinedata.Advancedmultirange1.options} series={Timelinedata.Advancedmultirange1.series} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Timeline-Grouped Rows</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-grouped">
                                <ReactApexChart options={Timelinedata.Timelinegrouped1.options} series={Timelinedata.Timelinegrouped1.series} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Timelinechart