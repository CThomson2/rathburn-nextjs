"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import * as Rangedata from "@/shared/data/charts/apexcharts/rangechartdata";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });;
import dynamic from 'next/dynamic';
const Rangeareachart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Rangrarea Charts"} />
            <Pageheader currentpage="Apex Range Area Charts" activepage="Apex Charts" mainpage="Apex Range Area Charts" />

            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Range Area Chart
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="rangearea-basic">
                                <ReactApexChart options={Rangedata.Basicrangearea.options} series={Rangedata.Basicrangearea.series} type="rangeArea" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Combo Range Area Chart
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="rangearea-combo">
                                <ReactApexChart options={Rangedata.Comborangearea.options} series={Rangedata.Comborangearea.series} type="rangeArea" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Rangeareachart