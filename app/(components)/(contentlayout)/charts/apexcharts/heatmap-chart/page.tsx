"use client"
import * as Heatdata from '@/shared/data/charts/apexcharts/heatmapadata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Heatmapchart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Heatmap Charts"} />
            <Pageheader currentpage="Apex Heatmap Charts" activepage="Apex Charts" mainpage="Apex Heatmap Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Heatmap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="heatmap-basic">
                                <ReactApexChart options={Heatdata.Basiheatmap.options} series={Heatdata.Basiheatmap.series} type="heatmap" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multi Series Heatmap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="heatmap-multiseries">
                                <ReactApexChart options={Heatdata.Multiseriesheatmap.options} series={Heatdata.Multiseriesheatmap.series} type="heatmap" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Color Range Heatmap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="heatmap-colorrange">
                                <ReactApexChart options={Heatdata.Colorrange.options} series={Heatdata.Colorrange.series} type="heatmap" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Heatmap Range Without Shades</div>
                        </div>
                        <div className="box-body">
                            <div id="heatmap-range">
                                <ReactApexChart options={Heatdata.Shadesheatmap.options} series={Heatdata.Shadesheatmap.series} type="heatmap" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Heatmapchart