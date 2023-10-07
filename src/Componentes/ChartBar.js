import { Line } from 'react-chartjs-2';
// import data from '../data.json';
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

// const datosTemperaturaHoy = [
//     { hora: String(data.hourly.time[0] ).slice(-5), temperatura: data.hourly.temperature_2m[0]},
//     { hora: String(data.hourly.time[1] ).slice(-5), temperatura: data.hourly.temperature_2m[1]},
//     { hora: String(data.hourly.time[2] ).slice(-5), temperatura: data.hourly.temperature_2m[2]},
//     { hora: String(data.hourly.time[3] ).slice(-5), temperatura: data.hourly.temperature_2m[3]},
//     { hora: String(data.hourly.time[4] ).slice(-5), temperatura: data.hourly.temperature_2m[4]},
//     { hora: String(data.hourly.time[5] ).slice(-5), temperatura: data.hourly.temperature_2m[5]},
//     { hora: String(data.hourly.time[6] ).slice(-5), temperatura: data.hourly.temperature_2m[6]},
//     { hora: String(data.hourly.time[7] ).slice(-5), temperatura: data.hourly.temperature_2m[7]},
//     { hora: String(data.hourly.time[8] ).slice(-5), temperatura: data.hourly.temperature_2m[8]},
//     { hora: String(data.hourly.time[9] ).slice(-5), temperatura: data.hourly.temperature_2m[9]},
//     { hora: String(data.hourly.time[10]).slice(-5) , temperatura: data.hourly.temperature_2m[10]},
//     { hora: String(data.hourly.time[11]).slice(-5) , temperatura: data.hourly.temperature_2m[11]},
//     { hora: String(data.hourly.time[12]).slice(-5) , temperatura: data.hourly.temperature_2m[12]},
//     { hora: String(data.hourly.time[13]).slice(-5) , temperatura: data.hourly.temperature_2m[13]},
//     { hora: String(data.hourly.time[14]).slice(-5) , temperatura: data.hourly.temperature_2m[14]},
//     { hora: String(data.hourly.time[15]).slice(-5) , temperatura: data.hourly.temperature_2m[15]},
//     { hora: String(data.hourly.time[16]).slice(-5) , temperatura: data.hourly.temperature_2m[16]},
//     { hora: String(data.hourly.time[17]).slice(-5) , temperatura: data.hourly.temperature_2m[17]},
//     { hora: String(data.hourly.time[18]).slice(-5) , temperatura: data.hourly.temperature_2m[18]},
//     { hora: String(data.hourly.time[19]).slice(-5) , temperatura: data.hourly.temperature_2m[19]},
//     { hora: String(data.hourly.time[20]).slice(-5) , temperatura: data.hourly.temperature_2m[20]},
//     { hora: String(data.hourly.time[21]).slice(-5) , temperatura: data.hourly.temperature_2m[21]},
//     { hora: String(data.hourly.time[22]).slice(-5) , temperatura: data.hourly.temperature_2m[22]},
//     { hora: String(data.hourly.time[23]).slice(-5) , temperatura: data.hourly.temperature_2m[23]},
//   ];


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
    return <Line data={midata} options={misoptions} width={850} height={300}/>}