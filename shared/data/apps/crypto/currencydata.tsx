
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

export const CurrencyOptions1 = [
    { value: 'Bitcoin', label: 'Bitcoin' },
    { value: 'Etherium', label: 'Etherium' },
    { value: 'Litecoin', label: 'Litecoin' },
    { value: 'Ripple', label: 'Ripple' },
    { value: 'Cardano', label: 'Cardano' },
    { value: 'Neo', label: 'Neo' },
    { value: 'Stellar', label: 'Stellar' },
    { value: 'EOS', label: 'EOS' },
    { value: 'NEM', label: 'NEM' },
];
export const CurrencyOptions2 = [
    { value: 'USD', label: 'USD' },
    { value: 'Pound', label: 'Pound' },
    { value: 'Rupee', label: 'Rupee' },
    { value: 'Euro', label: 'Euro' },
    { value: 'Won', label: 'Won' },
    { value: 'Dinar', label: 'Dinar' },
    { value: 'Rial', label: 'Rial' }
];

export const CurrencyBTC : spark3= {
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],

  options: {
    chart: {
      type: "area",
      height: 60,
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
        blur: 1,
        color: "#fff",
        opacity: 0.05,
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
    colors: ["rgba(132, 90, 223,0.5)"],
    tooltip: {
      enabled: false,
    },
  }
}
  
  //ETH

export const CurrencyETH : spark3= {
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 60,
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
        blur: 1,
        color: "#fff",
        opacity: 0.05,
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
    colors: ["rgba(35, 183, 229,0.5)"],
    tooltip: {
      enabled: false,
    },
  }
}
  
  //DASH

export const CurrencyDASH : spark3= {
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 60,
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
        blur: 1,
        color: "#fff",
        opacity: 0.05,
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
    colors: ["rgba(38, 191, 148,0.5)"],
    tooltip: {
      enabled: false,
    },
  }
}
  //LTC

export const CurrencyLTC : spark3= {
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
      events: {
        mounted: (chart) => {
          chart.windowResizeHandler();
        }
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1.5,
    },
    fill: {
      gradient: {
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
    colors: ["rgba(245, 184, 73,0.5)"],
    tooltip: {
      enabled: false,
    },
  }
}
  
  //XRS

export const CurrencyXRS : spark3= {
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 60,
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
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1.5,
      // ltcArray: 0,
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
    colors: ["rgba(231, 145, 188,0.5)"],
    tooltip: {
      enabled: false,
    },
  }
}
  
  //GLM


export const CurrencyGLM : spark3= {
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 60,
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
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1.5,
      // ltcArray: 0,
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
    colors: ["rgba(137, 32, 173,0.5)"],
    tooltip: {
      enabled: false,
    },
  }
}
  
  //Monero

export const CurrencyMonero : spark3= {
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
      events: {
        mounted: (chart) => {
          chart.windowResizeHandler();
        }
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1.5,
      // ltcArray: 0,
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
    colors: ["rgba(230, 83, 60,0.5)"],
    tooltip: {
      enabled: false,
    },
  }
}
  
  //EOS

export const CurrencyEOS : spark3= {
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 60,
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
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1.5,
      // ltcArray: 0,
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
    colors: ["rgba(73, 182, 245,0.5)"],
    tooltip: {
      enabled: false,
    },
  }
}