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





export default function LinesChart({datosClima1}) {

    
    let horarios = datosClima1["hourly"]["time"];
    let temperatura1 = datosClima1["hourly"]["temperature_2m"];
    
  
    const hora = horarios;
    let dia;
    let horas = [];
  
    // para ver como se comporta el grafico de linea le tengo que pasar los datos
    const temperatura = temperatura1;

    function separarDatos (elemento) {
        dia = elemento.slice(11, 16);
        horas.push(dia);
      }
    
      hora.forEach(separarDatos);


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


    return (
    
    
    <Line data={midata} options={misoptions} width={850} height={300}/>
)
}