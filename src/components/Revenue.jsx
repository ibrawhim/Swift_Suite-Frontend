/* eslint-disable no-unused-vars */

import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FaCaretDown } from "react-icons/fa";


const Revenue = () => {
    const [state, setState] = useState({
        series: [
            {
                data: [
                    170, 200, 230, 260, 350, 230, 200, 170, 170, 150, 150, 112,
                ],
            },
        ],
    });

    const options = {
        colors: ['#027840'],
        chart: {
            fontFamily: 'Satoshi, sans-serif',
            type: 'bar',
            height: 300,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                // endingShape: "rounded",
                borderRadius: 2,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 4,
            colors: ['transparent'],
        },
        xaxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            fontFamily: 'inter',

            markers: {
                radius: 99,
            },
        },
        // yaxis: {
        //   title: false,
        // },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        fill: {
            opacity: 1,
        },

        tooltip: {
            x: {
                show: false,
            },
        },
    };

    return (
        <div className="col-span-12 rounded-lg border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
            <div className='flex lg:gap-[50%] text-sm gap-[37%] mt-10'>
                <div>
                    <p>Total Revenue</p>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                        $70,000
                    </h3>
                </div>
                <div className='flex bg-green-700 p-1 text-sm px-2 rounded lg:w-[65px] text-white gap-3 h-[33px]'>
                    <p>2024</p>
                    <p className='mt-1'><FaCaretDown/></p>
                </div>
            </div>

            <div className="mb-2">
                <div id="chartFour" className="-ml-5">
                    <ReactApexChart
                        options={options}
                        series={state.series}
                        type="bar"
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
};

export default Revenue;
