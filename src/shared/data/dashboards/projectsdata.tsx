"use client"
import { ApexOptions } from "apexcharts";


interface spark3 {
    options?: ApexOptions,
    width?: number;
    height?: string | number,
    series?: ApexOptions['series'],
    label?: XAxisAnnotations
    color?: string | string[] | (string & string[]) | undefined
    endingShape?: string
    enabled?: boolean;
  }
  
//Team Members

export const Team1 : spark3= {
    series: [{
        name: 'Value',
        data: [54, 38, 56, 24, 65]
    }],
    options: {

        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
            type: 'line',
            height: 20,
            width: 80,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {

        },
        series: [{
            name: 'Value',
            data: [54, 38, 56, 24, 65]
        }],
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        colors: ['#09ad95'],
    }
}
export const Team2 : spark3= {
    series: [{
        name: 'Value',
        data: [24, 54, 15, 42, 16]
    }],
    options: {

        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
            type: 'line',
            height: 20,
            width: 80,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {

        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },

        colors: ['#fb6b27'],
    }
}
export const Team3 : spark3= {

    series: [{
        name: 'Value',
        data: [15, 42, 16, 44, 24]
    }],
    options: {

        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
            type: 'line',
            height: 20,
            width: 80,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        colors: ['#1170e4'],
    }

}
export const Team4 : spark3= {
    series: [{
        name: 'Value',
        data: [54, 38, 56, 24, 65]
    }],
    options: {

        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
            type: 'line',
            height: 20,
            width: 80,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {

        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        colors: ['#e82646'],
    }
}
export const Team5 : spark3= {
    series: [{
        name: 'Value',
        data: [15, 42, 16, 44, 24]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
            type: 'line',
            height: 20,
            width: 80,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {

        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        colors: ['#f7b731'],
    }

}

//Project Analaytics

export const ProjectAnalysis : spark3= {
    series: [{
        name: 'Projects',
        type: 'column',
        data: [1.8, 2.5, 2.5, 1.5, 2.5, 2.8, 3.8]
    }, {
        name: 'Tasks',
        type: 'column',
        data: [1.1, 2.2, 3.1, 4, 4.1, 4.9, 6.5]
    }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 35, 44, 43, 50],
    },
    ],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
            toolbar: {
                show: false
            },
            height: 315,
            type: 'line',
            stacked: false,
            fontFamily: 'Poppins, Arial, sans-serif',
        },
        grid: {
            borderColor: '#f5f4f4',
            strokeDashArray: 3
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: undefined,
        },
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
        yaxis: [
            {
                show: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: false,
                    color: '#4eb6d0'
                },
                labels: {
                    style: {
                        colors: '#4eb6d0',
                    }
                },
                title: {
                    text: undefined,
                },
                tooltip: {
                    enabled: false
                }
            },
            {
                seriesName: 'Projects',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: '#00E396',
                    }
                },
                title: {
                    text: undefined,
                },
            },
            {
                seriesName: 'Revenue',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    show: false,
                },
                title: {
                    text: undefined,
                }
            },
        ],
        tooltip: {
            enabled: false,
        },
        legend: {
            show: true,
            position: 'top',
            offsetX: 40,
            fontSize: '13px',
            fontWeight: 'normal',
            labels: {
                colors: '#acb1b1',
            },
            markers: {
                width: 10,
                height: 10,
            },
        },
        stroke: {
            width: [0, 0, 1.5],
            curve: 'straight',
            dashArray: [0, 0, 0],
        },
        plotOptions: {
            bar: {
                columnWidth: "35%",
                borderRadius: 3
            }
        },
        colors: ["rgb(132, 90, 223)", "#ededed", "#23b7e5"]
    }
}