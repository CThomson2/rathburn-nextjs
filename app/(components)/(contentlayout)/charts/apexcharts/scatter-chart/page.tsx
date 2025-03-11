"use client"
import  * as Scatterdata from '@/shared/data/charts/apexcharts/scatterchartdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Scatterchart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Scatter Charts"} />
            <Pageheader currentpage="Apex Scatter Charts" activepage="Apex Charts" mainpage="Apex Scatter Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="scatter-basic">
                                <ReactApexChart options={Scatterdata.Basicscatter.options} series={Scatterdata.Basicscatter.series} type="scatter" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Datetime Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="scatter-datetime">
                                <ReactApexChart options={Scatterdata.Datetimescatter.options} series={Scatterdata.Datetimescatter.series} type="scatter" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Image Fill Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="scatter-image">
                                <ReactApexChart options={Scatterdata.Imagefillescatter.options} series={Scatterdata.Imagefillescatter.series} type="scatter" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Scatterchart