import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";



function AttendancePie(props) {

    const data = {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
            {
                label: 'Taux de présence',
                data: [12, 19, 3, 5, 2],
                backgroundColor: ['#008946', '#0070C0', "#7030A0", "#FFA800"]
            }
        ]
    };

    return (
        <Doughnut
            data={data}
            options={{
                plugins: {
                    title: {
                        display: true,
                        fontsize: 14,
                        text: 'Répartition moyenne sur la période'
                    },
                    legend: {
                        display: true,
                        position: 'bottom',

                    }
                }
            }}
        />
    );
};

export default AttendancePie;