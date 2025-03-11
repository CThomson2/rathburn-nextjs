"use client"
import  * as Bardata from '@/shared/data/charts/apexcharts/barchartsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Barcharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Bar Charts"} />
            <Pageheader currentpage="Apex Bar Charts" activepage="Apex Charts" mainpage="Apex Bar Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-basic">
                                <ReactApexChart options={Bardata.Basicbar.options} series={Bardata.Basicbar.series} type="bar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Grouped Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-group">
                                <ReactApexChart options={Bardata.Grouped.options} series={Bardata.Grouped.series} type="bar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stacked Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-stacked">
                                <ReactApexChart options={Bardata.Stackedbar.options} series={Bardata.Stackedbar.series} type="bar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">100% Stacked Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-full">
                                <ReactApexChart options={Bardata.Stacked100bar.options} series={Bardata.Stacked100bar.series} type="bar" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar Chart With Negative Values</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-negative">
                                <ReactApexChart options={Bardata.Negativebar.options} series={Bardata.Negativebar.series} type="bar" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar Chart With Markers</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-markers">
                                <ReactApexChart options={Bardata.Markerbar.options} series={Bardata.Markerbar.series} type="bar" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Reversed Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-reversed">
                                <ReactApexChart options={Bardata.Reversedbar.options} series={Bardata.Reversedbar.series} type="bar" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar With Categogry DataLabels</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-categories">
                                <ReactApexChart options={Bardata.Categorybar.options} series={Bardata.Categorybar.series} type="bar" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Patterned Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-pattern">
                                <ReactApexChart options={Bardata.Patternbar.options} series={Bardata.Patternbar.series} type="bar" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar With Image Fill</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-image">
                                <ReactApexChart options={Bardata.Imagebar.options} series={Bardata.Imagebar.series} type="bar" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Barcharts