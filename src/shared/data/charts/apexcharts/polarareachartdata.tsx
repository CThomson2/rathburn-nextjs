

import { ApexOptions } from 'apexcharts';

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
  
//Basic Polar Area Chart

export const Basicpolararea :spark3= {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
        chart: {
            type: 'polarArea',
            height: 300,
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        stroke: {
            colors: ['#fff']
        },
        fill: {
            opacity: 0.8
        },
        legend: {
            position: 'bottom'
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c", "#26bf94", "#a65e76", "#49b6f5", "#5b67c7"],
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
    }
      
}

//Polar Area Monochrome Chart

export const Monochromepolar :spark3= {
    series: [42, 47, 52, 58, 65],
    options: {
        chart: {
            height: 300,
            type: 'polarArea',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6,
                color: "#845adf",
            }
        }
    }
}