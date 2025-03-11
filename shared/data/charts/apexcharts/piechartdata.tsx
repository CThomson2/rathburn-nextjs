import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from 'apexcharts';
import { Component } from 'react';

interface spark3 {
    options?: ApexOptions,
    width?: number;
    height?: string | number,
    series?: ApexOptions['series'],
    [key: string]:any
    label?: XAxisAnnotations
    color?: string | string[] | (string & string[]) | undefined
    endingShape?: string
    enabled?: boolean;
  }
  
//Basic Pie Chart

export const Basicpiechart : spark3= {
    series: [44, 55, 13, 43, 22],
    options: {
        chart: {
            height: 300,
            type: 'pie',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
            position: "bottom"
        },
        dataLabels: {
            dropShadow: {
                enabled: false
            }
        },
    }
}

//Simple Donut Chart

export const Simpledonut : spark3= {
    series: [44, 55, 41, 17, 15],
    options: {
        chart: {
            type: 'donut',
            height: 290,
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        legend: {
            position: 'bottom'
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
        dataLabels: {
            dropShadow: {
                enabled: false
            }
        },
    }

}

//Updating Donut Chart

export class Updatingdonut  extends  Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [44, 55, 13, 33],
            colors: ["#845adf", "#23b7e5", "#f5b849", "#e6533c", "#49b6f5"],
            options: {
                chart: {
                    height: 280,
                    type: 'donut',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                dataLabels: {
                    enabled: false,
                },
                colors: ["#845adf", "#23b7e5", "#f5b849", "#e6533c", "#49b6f5"],
                legend: {
                    position: 'bottom',
                },
            },
        };
    }

    appendData = () => {
        const arr:any = this.state.series ? [...this.state.series] : [];
        arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

        this.setState({
            series: arr,
        });
    }

    removeData = () => {
        if (!this.state.series || this.state.series.length === 1) return;

        const arr = this.state.series.slice();
        arr.pop();

        this.setState({
            series: arr,
        });
    }

    randomize = () => {
        this.setState((prevState) => ({
            series: prevState.series
                ? prevState.series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1)
                : [],
        }));
    }

    reset() {
        this.setState({
            series: [44, 55, 13, 33],
        });
    }

    render() {
        return (

            <div>
                <div>
                    <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={"100%"} height={280} />
                </div>

                <div className="text-center mt-4">
                    <button className="m-1"
                        onClick={() => this.appendData()}
                    >
                        + ADD
                    </button>
                    &nbsp;
                    <button className="m-1"
                        onClick={() => this.removeData()}
                    >
                        - REMOVE
                    </button>
                    &nbsp;
                    <button className="m-1"
                        onClick={() => this.randomize()}
                    >
                        RANDOMIZE
                    </button>
                    &nbsp;
                    <button className="m-1"
                        onClick={() => this.reset()}
                    >
                        RESET
                    </button>
                </div>
            </div>
        );
    }
}

//Monochrome Pie Chart

export const Monochrome : spark3= {
    series: [25, 15, 44, 55, 41, 17],
    options: {
        chart: {
            height: '280',
            type: 'pie',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        theme: {
            monochrome: {
                enabled: true,
                color: "#845adf",
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -5
                }
            }
        },
        title: {
            text: 'Monochrome Pie',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        dataLabels: {
            dropShadow: {
                enabled: false
            }
        },
        legend: {
            show: false
        }
    },
}

//Gradient Donut Chart

export const Gradientpie : spark3= {
    series: [44, 55, 41, 17, 15],
    options: {
        chart: {
            height: 300,
            type: 'donut',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        legend: {
            formatter: function (val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex];
            },
            position: 'bottom'
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
        title: {
            text: 'Gradient Donut with custom Start-angle',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
    },

}

//Donut Chart With Patterns

export const Donutwithpattern : spark3= {
    series: [44, 55, 41, 17, 15],
    options: {
        chart: {
            height: 250,
            type: 'donut',
            dropShadow: {
                enabled: true,
                color: '#111',
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2
            },
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        stroke: {
            width: 0,
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true
                        }
                    }
                }
            }
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
        labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#111']
            },
            background: {
                enabled: true,
                foreColor: '#fff',
                borderWidth: 0
            }
        },
        fill: {
            type: 'pattern',
            opacity: 1,
            pattern: {
                // enabled: true,
                style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
            },
        },
        states: {
            hover: {
                // filter: 'none'
            }
        },
        theme: {
            palette: 'palette2'
        },
        title: {
            text: 'Favourite Movie Type',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },

}

//Image Filled Pie Chart

export const Imagefilledpie : spark3= {
    series: [44, 33, 54, 45],
    options: {
        chart: {
            height: 300,
            type: 'pie',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
        fill: {
            type: 'image',
            opacity: 0.85,
            image: {
                src: ["../../../assets/images/media/media-21.jpg", "../../../assets/images/media/media-21.jpg", "../../../assets/images/media/media-21.jpg", "../../../assets/images/media/media-21.jpg"],
                width: 25
            },
        },
        stroke: {
            width: 4
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#111']
            },
            background: {
                enabled: true,
                foreColor: '#fff',
                borderWidth: 0
            }
        },
        legend: {
            position: 'bottom'
        },
    },
}