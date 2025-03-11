"use client"
import  * as Piedata from '@/shared/data/charts/apexcharts/piechartdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Piechart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Pie Charts"} />
            <Pageheader currentpage="Apex Pie Charts" activepage="Apex Charts" mainpage="Apex Pie Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="pie-basic">
                                <ReactApexChart options={Piedata.Basicpiechart.options} series={Piedata.Basicpiechart.series} type="pie" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Simple Donut Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="donut-simple">
                                <ReactApexChart options={Piedata.Simpledonut.options} series={Piedata.Simpledonut.series} type="donut" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Updating Donut Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="donut-update">
                                <Piedata.Updatingdonut/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Monochrome Pie Chart</div>
                        </div>
                        <div className="box-body !px-0">
                            <div id="pie-monochrome">
                                <ReactApexChart options={Piedata.Monochrome.options} series={Piedata.Monochrome.series} type="pie" width={"100%"} height={280} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Gradient Donut Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="donut-gradient">
                                <ReactApexChart options={Piedata.Gradientpie.options} series={Piedata.Gradientpie.series} type="donut" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Donut Chart With Patterns</div>
                        </div>
                        <div className="box-body">
                            <div id="donut-pattern">
                                <ReactApexChart options={Piedata.Donutwithpattern.options} series={Piedata.Donutwithpattern.series} type="donut" width={"100%"} height={250} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Image Filled Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="pie-image">
                                <ReactApexChart options={Piedata.Imagefilledpie.options} series={Piedata.Imagefilledpie.series} type="pie" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Piechart