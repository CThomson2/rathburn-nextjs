"use client"
import * as Radardata from '@/shared/data/charts/apexcharts/radarchartadat'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Radarchart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Radar Charts"} />
            <Pageheader currentpage="Apex Radar Charts" activepage="Apex Charts" mainpage="Apex Radar Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Radar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="radar-basic">
                                <ReactApexChart options={Radardata.Basicradar.options} series={Radardata.Basicradar.series} type="radar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Radar Chart-Multiple Series</div>
                        </div>
                        <div className="box-body">
                            <div id="radar-multiple">
                                <ReactApexChart options={Radardata.Multipleradar.options} series={Radardata.Multipleradar.series} type="radar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Radar Chart Polygon Fill</div>
                        </div>
                        <div className="box-body">
                            <div id="radar-polygon">
                                <ReactApexChart options={Radardata.Polygonradar.options} series={Radardata.Polygonradar.series} type="radar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Radarchart