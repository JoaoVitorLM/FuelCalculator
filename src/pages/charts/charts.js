import ApexCharts from "react-apexcharts";

export default function Chart() {


    const options = {
      fill: {
        colors: ['#FFFFFF']
      },
      dataLabels: {
        style:{
          colors: ['#FF00E6'],
          fontSize: '14px'
        }
      },
      chart: {
        foreColor: 'White'
      },
      title: {
        text: 'Brasil - Preços da Gasolina - 1Y',
        floating: true,
        offsetY: 274,
        align: 'center',
        style: {
          color: 'white'
        }
      },
      xaxis: {       
        categories: ["Oct", "Nov", "Dec","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
                position: 'top',
                axisBorder: {
                show: false,
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: true
        },
        dataLabels: {
          style: {
            colors: ['#FDFDFD']
          }
        },


      },

      yaxis: {
        tooltip: {enabled: true,
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        
       
      }
    }
    
    const series = [{
      name: 'Inflação',
      data: [0.95, 0.93, 0.94, 0.98, 0.97, 1.1, 1.09, 1.05, 1.12, 1.17,1.21, 1.17]
    }]
    
      

    return(
        <ApexCharts
        options={options}
        series={series}
        type="bar"
        width='100%'
        height='100%'
        
        />
    )
}