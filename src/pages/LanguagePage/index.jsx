
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

export default function LanguagePage(){
    
    const options= {
        chart: {
          id: "basic-bar",
        },
        colors: '#131712',
        xaxis: {
          categories: ['Reading','Writing','Speaking','Listening']
        },
      
      }

    const series = [[{
        name: "Nepali (Native)",
        data: [100, 100, 100, 100]
    }],

    [{
        name: 'English',
        data: [60, 40, 85, 90]
    }],
    [{
        name: 'Hindi',
        data: [30,10,70,100]
    }],
    [{
        name: 'Japanese',
        data: [5,5,15,15]
    }]
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
                        />
                        </div>
                    );
                })
            }
           
        </div>
    );
}