"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import * as Bubbledata from "@/shared/data/charts/apexcharts/bubblechartdata";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });;
import dynamic from 'next/dynamic';
const Bubblechart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Bubble Charts"} />
            <Pageheader currentpage="Apex Bubble Charts" activepage="Apex Charts" mainpage="Apex Bubble Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Simple Bubble Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bubble-simple">
                                <ReactApexChart options={Bubbledata.Simplebubble.options} series={Bubbledata.Simplebubble.series} type="bubble" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">3D Bubble Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bubble-3d">
                                <ReactApexChart options={Bubbledata.Bubble3D.options} series={Bubbledata.Bubble3D.series} type="bubble" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Bubblechart