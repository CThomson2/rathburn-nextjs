"use client"
import * as Boxplotdata from '@/shared/data/charts/apexcharts/boxplotdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Boxplotchart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Boxplot Charts"} />
            <Pageheader currentpage="Apex Boxplot Charts" activepage="Apex Charts" mainpage="Apex Boxplot Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Boxplot Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="boxplot-basic">
                                <ReactApexChart options={Boxplotdata.Basicboxplot.options} series={Boxplotdata.Basicboxplot.series} type="boxPlot" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Boxplot With Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="boxplot-scatter">
                                <ReactApexChart options={Boxplotdata.Boxplotscatter.options} series={Boxplotdata.Boxplotscatter.series} type="boxPlot" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Horizontal Boxplot Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="boxplot-horizontal">
                                <ReactApexChart options={Boxplotdata.Boxplothorizontal.options} series={Boxplotdata.Boxplothorizontal.series} type="boxPlot" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Boxplotchart