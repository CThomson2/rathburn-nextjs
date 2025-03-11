"use client"
import * as  Radialdata from '@/shared/data/charts/apexcharts/radialchartdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Radialbarchart = () => {
    return (
        <Fragment>
            <Seo title={"Apex radialbar Charts"} />
            <Pageheader currentpage="Apex radialbar Charts" activepage="Apex Charts" mainpage="Apex radialbar Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="radialbar-basic">
                                <ReactApexChart options={Radialdata.Basicradialbar.options} series={Radialdata.Basicradialbar.series} type="radialBar" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multiple Radialbar Chart</div>
                        </div>
                        <div className="box-body !px-0">
                            <div id="radialbar-multiple">
                                <ReactApexChart options={Radialdata.Multipleradial.options} series={Radialdata.Multipleradial.series} type="radialBar" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Circle Chart - Custom Angle</div>
                        </div>
                        <div className="box-body !sm:p-3 !p-2">
                            <div id="circle-custom">
                                <ReactApexChart options={Radialdata.Circlechart.options} series={Radialdata.Circlechart.series} type="radialBar"  width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Gradient Circle Chart</div>
                        </div>
                        <div className="box-body !sm:p-3 !p-2">
                            <div id="gradient-circle">
                                <ReactApexChart options={Radialdata.Gradientcircle.options} series={Radialdata.Gradientcircle.series} type="radialBar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stroked Circular Gauge</div>
                        </div>
                        <div className="box-body">
                            <div id="circular-stroked">
                                <ReactApexChart options={Radialdata.Circlegauge.options} series={Radialdata.Circlegauge.series} type="radialBar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Circle Chart With Image</div>
                        </div>
                        <div className="box-body !sm:p-3 !p-2">
                            <div id="circle-image">
                                <ReactApexChart options={Radialdata.Circlewithimage.options} series={Radialdata.Circlewithimage.series} type="radialBar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Semi Circular Gauge</div>
                        </div>
                        <div className="box-body">
                            <div id="circular-semi">
                                <ReactApexChart options={Radialdata.Semicirclegauge.options} series={Radialdata.Semicirclegauge.series} type="radialBar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Radialbarchart