
export default function BlogsPage(){
    return  <a
        href='https://medium.com/@bhattaroshan/sinusoidal-waveforms-computation-in-c-e489b4b52e8c'
        className='col-span-4 grid grid-cols-4 gap-2'
        target='_blank'
        rel='noopener noreferrer'
        > 
        <div className='flex w-screen justify-center group'>
                <div className='flex w-[90%] md:w-[60%] items-center justify-center'>
            
                <div className='grid grid-cols-4 gap-2 mt-10'>
                    <div className='col-span-4 sm:col-span-1'>
                        <img src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Pns1valeBy78ehiPYw7haA.png' />
                    </div>
                    <div className='col-span-4 sm:col-span-3 group-hover:text-blue-800 mt-4 sm:mt-0'>
                        <p className='font-bold text-xl'>Sinusoidal waveforms computation in c++</p>
                        <p className='font-light'>Sinwaves are floating values that fluctuates between -1.0 and +1.0 Exact value at any given point is given by the equation...</p>
                    </div>
                    <div className='col-span-4 border-b my-2' />
                </div>
                </div>
            </div>
        </a>
}