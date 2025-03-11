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

export const CapBitcoin :spark3= {
  series: [
    {
      name: "Value",
      data: [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
        35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24,
        65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
        46,
      ],
    },
  ],
  options: {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      events: {
        mounted: (chart) => {
          chart.windowResizeHandler();
        }
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1.5,
      dashArray: 0,
    },
    fill: {
      gradient: {
        //   enabled: false,
      },
    },
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(230, 83, 60)"],
  }
  
}
  
export const CapEtherium :spark3= {
  series: [
    {
      name: "Value",
      data: [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
        35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
        46,
      ],
    },
  ],
  options: {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      events: {
        mounted: (chart) => {
          chart.windowResizeHandler();
        }
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1.5,
      dashArray: 0,
    },
    fill: {
      gradient: {
        //   enabled: false,
      },
    },
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(38, 191, 148)"],
  }

}
  
export const CapBTC :spark3= {
  series: [{
    name: 'Value',
    data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
  }],
  options: {
    chart: {
      type: 'line',
      height: 40,
      width: 120,
      sparkline: {
        enabled: true
      },
      events: {
        mounted: (chart) => {
          chart.windowResizeHandler();
        }
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
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 0,
    },
    fill: {
      gradient: {
        //   enabled: false
      }
    },
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
      },
    },
    xaxis: {
      axisBorder: {
        show: false
      },
    },
    colors: ['#26bf94'],
  }

}
  
  //ETH
export const CapETH :spark3= {
  series: [{
    name: 'Value',
    data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
  }],
  options: {
    chart: {
      type: 'line',
      height: 40,
      width: 120,
      sparkline: {
        enabled: true
      },
      events: {
        mounted: (chart) => {
          chart.windowResizeHandler();
        }
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
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 0,
    },
    fill: {
      gradient: {
        //   enabled: false
      }
    },
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
      },
    },
    xaxis: {
      axisBorder: {
        show: false
      },
    },
    colors: ['#26bf94'],
  }
}
  //DASH
export const CapDASH :spark3= {
  series: [{
    name: 'Value',
    data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
  }],
  options: {
    chart: {
      type: 'line',
      height: 40,
      width: 120,
      sparkline: {
        enabled: true
      },
      events: {
        mounted: (chart) => {
          chart.windowResizeHandler();
        }
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
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 0,
    },
    fill: {
      gradient: {
        //   enabled: false
      }
    },
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
      },
    },
    xaxis: {
      axisBorder: {
        show: false
      },
    },
    colors: ['#e6533c'],
  }
}