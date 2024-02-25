"use client"
import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto'; // Thêm "auto" để tự động import các module của Chart.js
import { getForecast } from '@/action/get-forevast';

const ChartCom = () => {
    const chartRef = useRef<HTMLCanvasElement>(null); // Sửa kiểu dữ liệu của ref và loại bỏ kiểu "any"
    const date: string[] = [];
    for (let i = 0; i < 6; i++) {
        const today = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000);
        date.push(today.getDate() + '/' + (today.getMonth() + 1));
    }
    const [forecast, setForecast] = useState<number[]>([]);
    useEffect(() => {
        getForecast().then((data) => {
            setForecast(data.list.map((item: any) => item.main.temp));
        });
    }, []);

    useEffect(() => {
        if (chartRef.current) {
            const myChart = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels: [date[0], '', '', '', '', '', '', '',
                    date[1], '', '', '', '', '', '', '',
                    date[2], '', '', '', '', '', '', '',
                    date[3], '', '', '', '', '', '', '',
                    date[4], '', '', '', '', '', date[5], ''],

                    datasets: [{
                        label: 'Dự báo nhiệt độ (°C)',
                        data: forecast,
                        borderWidth: 1,
                        borderColor: ['green', 'green', 'green', 'green', 'green', 'green'],
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                },
            });
            return () => {
                myChart.destroy(); // Hủy biểu đồ khi component unmount
            };
        }
    }, [chartRef , forecast]); // Thêm chartRef vào dependency array của useEffect

    return (
        <div>
            <canvas id="myChart" ref={chartRef}></canvas> {/* Sửa charRef thành chartRef */}
        </div>
    );
};

export default ChartCom;
