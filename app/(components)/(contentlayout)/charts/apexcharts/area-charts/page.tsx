"use client"
import  * as Areadata from '@/shared/data/charts/apexcharts/areachartdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Areacharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Area Charts"} />
            <Pageheader currentpage="Apex Area Charts" activepage="Apex Charts" mainpage="Apex Area Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="area-basic">
                                <ReactApexChart options={Areadata.Basicarea.options} series={Areadata.Basicarea.series} type="area" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Spline Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="area-spline">
                                <ReactApexChart options={Areadata.Spiline.options} series={Areadata.Spiline.series} type="area" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Area Chart With Negative Values</div>
                        </div>
                        <div className="box-body">
                            <div id="area-negative">
                                <ReactApexChart options={Areadata.Negative.options} series={Areadata.Negative.series} type="area" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Selection-Github Style Chart</div>
                        </div>
                        <div className="box-body">


                            <div id="chart-years">
                                <Areadata.Githubdata />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stacked Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="area-stacked">
                                <ReactApexChart options={Areadata.Stacked.options} series={Areadata.Stacked.series} type="area" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Area Chart With Null Values</div>
                        </div>
                        <div className="box-body">
                            <div id="area-null">
                                <ReactApexChart options={Areadata.Nullarea.options} series={Areadata.Nullarea.series} type="area" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <Areadata.Datetimexaxis />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Areacharts;
