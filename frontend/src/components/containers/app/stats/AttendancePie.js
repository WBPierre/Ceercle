import { useTranslation } from "react-i18next";
import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";



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
                    formatter: (value, ctx) => {
                        let datasets = ctx.chart.data.datasets;
                        if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                            let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                            let percentage = Math.round((value / sum) * 100) + '%';
                            return percentage;
                        }
                    }
                }
            }}
            redraw={true}
        />
    );
};

export default AttendancePie;