"use client"
import * as Polardata from '@/shared/data/charts/apexcharts/polarareachartdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });;
import dynamic from 'next/dynamic';

const Polarareachart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Polararea Charts"} />
            <Pageheader currentpage="Apex Polar Area Charts" activepage="Apex Charts" mainpage="Apex Polar Area Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Polar Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="polararea-basic">
                                <ReactApexChart options={Polardata.Basicpolararea.options} series={Polardata.Basicpolararea.series} type="polarArea" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Polar Area Monochrome Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="polararea-monochrome">
                                <ReactApexChart options={Polardata.Monochromepolar.options} series={Polardata.Monochromepolar.series} type="polarArea" width={"100%"} height={320} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Polarareachart