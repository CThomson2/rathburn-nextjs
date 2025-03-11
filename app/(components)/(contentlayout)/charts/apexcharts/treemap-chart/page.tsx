"use client"
import  * as Treedata from '@/shared/data/charts/apexcharts/treemapdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Treemapchart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Treemap Charts"} />
            <Pageheader currentpage="Apex Treemap Charts" activepage="Apex Charts" mainpage="Apex Treemap Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Treemap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="treemap-basic">
                                <ReactApexChart options={Treedata.Basictreemap.options} series={Treedata.Basictreemap.series} type="treemap" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multi Dimensional Treemap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="treemap-multi">
                                <ReactApexChart options={Treedata.Multidimensional.options} series={Treedata.Multidimensional.series} type="treemap" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Distributed Treemap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="treemap-distributed">
                                <ReactApexChart options={Treedata.Distributedtree.options} series={Treedata.Distributedtree.series} type="treemap" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Treemap with color ranges</div>
                        </div>
                        <div className="box-body">
                            <div id="treemap-colorranges">
                                <ReactApexChart options={Treedata.Colorrangetree.options} series={Treedata.Colorrangetree.series} type="treemap" width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Treemapchart