"use client"
import * as Columndata from '@/shared/data/charts/apexcharts/columnchartsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Columncharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Column Charts"} />
            <Pageheader currentpage="Apex Column Charts" activepage="Apex Charts" mainpage="Apex Column Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="column-basic">
                                <ReactApexChart options={Columndata.Basicolumn.options} series={Columndata.Basicolumn.series} type="bar" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Column Chart With Datalabels</div>
                        </div>
                        <div className="box-body">
                            <div id="column-datalabels">
                                <ReactApexChart options={Columndata.Columnwithlabels.options} series={Columndata.Columnwithlabels.series} type="bar" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stacked Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="column-stacked">
                                <ReactApexChart options={Columndata.Stackedcolumn.options} series={Columndata.Stackedcolumn.series} type="bar" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">100% Stacked Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="column-stacked-full">
                                <ReactApexChart options={Columndata.Stacked100column.options} series={Columndata.Stacked100column.series} type="bar" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Column Chart With Markers</div>
                        </div>
                        <div className="box-body">
                            <div id="column-markers">
                                <ReactApexChart options={Columndata.Markers.options} series={Columndata.Markers.series} type="bar" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Column Chart With Rotated Labels</div>
                        </div>
                        <div className="box-body">
                            <div id="column-rotated-labels">
                                <ReactApexChart options={Columndata.Rotated.options} series={Columndata.Rotated.series} type="bar" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Column Chart With Negative Values</div>
                        </div>
                        <div className="box-body">
                            <div id="column-negative">
                                <ReactApexChart options={Columndata.Negativecolumn.options} series={Columndata.Negativecolumn.series} type="bar" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Range Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="column-range">
                                <ReactApexChart options={Columndata.Rangecolumn.options} series={Columndata.Rangecolumn.series} type="bar" width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Dynamic Loaded Chart</div>
                        </div>
                        <div className="box-body">
                            <Columndata.Loaded />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Distributed Columns Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="columns-distributed">
                                <ReactApexChart options={Columndata.Distributed.options} series={Columndata.Distributed.series} type="bar" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Columncharts