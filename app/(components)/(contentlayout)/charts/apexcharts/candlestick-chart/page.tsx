"use client"
import  * as Candledata from '@/shared/data/charts/apexcharts/candlestickdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Candlestickchart = () => {
    return (
        <Fragment>
            <Seo title={"Apex CandleStick Charts"} />
            <Pageheader currentpage="Apex CandleStick Charts" activepage="Apec Charts" mainpage="Apex CandleStick Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Candlestick Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="candlestick-basic">
                                <ReactApexChart options={Candledata.Basiccandlestick.options} series={Candledata.Basiccandlestick.series} type="candlestick" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Candlestick Synced With Brush Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="chart-candlestick">
                            <ReactApexChart options={Candledata.Candlebrush.options} series={Candledata.Candlebrush.series} type="candlestick" width={"100%"} height={215} />
                            </div>
                            <div id="chart-bar">
                            <ReactApexChart options={Candledata.Candlebrush.optionsBar} series={Candledata.Candlebrush.seriesBar} type="bar" width={"100%"} height={120} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Candlestick With Category X-axis</div>
                        </div>
                        <div className="box-body">
                            <div id="candlestick-categoryx">
                                <ReactApexChart options={Candledata.Candlexaxis.options} series={Candledata.Candlexaxis.series} type="candlestick" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Candlestick With Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="candlestick-line">
                                <ReactApexChart options={Candledata.Candleline.options} series={Candledata.Candleline.series} type="candlestick" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Candlestickchart