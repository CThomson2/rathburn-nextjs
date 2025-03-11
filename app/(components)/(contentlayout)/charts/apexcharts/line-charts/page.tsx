"use client"
import * as Linedata  from '@/shared/data/charts/apexcharts/linechartsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Linecharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Line Charts"} />
            <Pageheader currentpage="Apex Line Charts" activepage="Apex Charts" mainpage="Apex Line Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="line-chart">
                                <ReactApexChart options={Linedata.Basicline.options} series={Linedata.Basicline.series} type="line" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line Chart With Data Labels</div>
                        </div>
                        <div className="box-body">
                            <div id="line-chart-datalabels">
                                <ReactApexChart options={Linedata.Linechartwithlabels.options} series={Linedata.Linechartwithlabels.series} type="line" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Zoomable Time Series</div>
                        </div>
                        <div className="box-body">
                            <div id="zoom-chart">
                                <ReactApexChart options={Linedata.Zoomabletime.options} series={Linedata.Zoomabletime.series} type="area" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line With Annotations</div>
                        </div>
                        <div className="box-body">
                            <div id="annotation-chart">
                                <ReactApexChart options={Linedata.Annotations.options} series={Linedata.Annotations.series} type="area"  width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Brush Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="brush-chart1">
                                <Linedata.Brushchart/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">StepLine Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="stepline-chart">
                                <ReactApexChart options={Linedata.Stepline.options} series={Linedata.Stepline.series} type="line" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Gradient Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="gradient-chart">
                                <ReactApexChart options={Linedata.Gradientline.options} series={Linedata.Gradientline.series} type="line" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Missing/Null Values Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="null-chart">
                                <ReactApexChart options={Linedata.Missingnullvalues.options} series={Linedata.Missingnullvalues.series} type="line" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Dashed Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="dashed-chart">
                                <ReactApexChart options={Linedata.Dashed.options} series={Linedata.Dashed.series} type="line" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Syncing Charts</div>
                        </div>
                        <div className="box-body">
                            <div id="chart-line">
                            <ReactApexChart options={Linedata.Syncing.options} series={Linedata.Syncing.series} type="line" width={"100%"} height={160} />

                            </div>
                            <div id="chart-line2">
                            <ReactApexChart options={Linedata.Syncing.optionsLine2} series={Linedata.Syncing.seriesLine2} type="line" width={"100%"} height={160} />
                            </div>
                            <div id="chart-area">
                            <ReactApexChart options={Linedata.Syncing.optionsArea} series={Linedata.Syncing.seriesArea} type="area" width={"100%"} height={160} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Linecharts