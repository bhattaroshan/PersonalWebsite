
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export default function MusicPage(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const options= {
        chart: {
          id: "basic-bar",
        },
        colors: '#131712',
        xaxis: {
          categories: ['Theory','Playing']
        },
       
      }


    const series = [[{
        name: "Flute",
        data: [50, 60]
    }],

    [{
        name: 'Piano',
        data: [40, 40]
    }],
    [{
        name: 'Guitar',
        data: [30,10]
    }],
]

    return (
        <div className='flex flex-col items-center h-screen w-full my-20 gap-20'>
            {
                series.map((v,i)=>{
                    return (
                        <div className='flex flex-col' key={i}>
                        <p className='pl-6 pb-6 text-2xl font-bold'>{v[0].name}</p>
                        <Chart
                        options={options}
                        series={v}
                        type="bar"
                        width={isMobile?300:500}
                        />
                        </div>
                    );
                })
            }
           
        </div>
    );
}