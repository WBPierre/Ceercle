import { useTranslation } from "react-i18next";
import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

function AttendancePie(props) {
    const { t } = useTranslation();

    const data = {
        labels: [t('app:statuses:undeclared'), t('app:statuses:office'), t('app:statuses:home_working'), t('app:statuses:on_the_go'), t('app:statuses:off')],
        datasets: [
            {
                label: 'Taux de présence',
                data: props.pieData,
                borderColor: ['#88888A', '#008946', '#0070C0', "#7030A0", "#FFA800"],
                backgroundColor: ['#E3E3E4', '#B6FFDB', '#B1DCFB', "#DBB2F9", "#FDE5B6"]
            }
        ],
        hoverOffset: 4
    };

    return (
        <Doughnut
            data={data}
            options={{
                plugins: {
                    title: {
                        display: true,
                        fontsize: 16,
                        text: t('app:stats:attendance.titlePie')
                    },
                    legend: {
                        display: true,
                        position: 'below',

                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Percentage',
                    },
                    datalabels: {
                        formatter: (value, ctx) => {
                            let sum = 0;
                            let dataArr = ctx.chart.data.datasets[0].data;
                            dataArr.map(data => {
                                sum += data;
                            });
                            let percentage = (value * 100 / sum).toFixed(0) + "%";
                            if (value == 0) {
                                percentage = ""
                            }
                            return percentage;
                        }
                    }
                }
            }
            }
        />
    );
};

export default AttendancePie;