import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var temperatura = [-5, -8, -3, 5, 10, 15, 13, 10, 4];
var horas = ["12:00 AM", "3:00 AM", "6:00 AM", "9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM", "12:00 AM"];

var midata = {
    labels: horas,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Temperatura',
            data: temperatura,
            resposive: true,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
        
    ],
};

var misoptions = {
    scales : {
        y : {
            min : -10,
           
        },
        x: {
            
        }
    },
    plugins: {
        legend: {
            display : false
        }
    }
    
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions}/>}