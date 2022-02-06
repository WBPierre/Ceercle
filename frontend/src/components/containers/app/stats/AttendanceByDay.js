import { useTranslation } from "react-i18next";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";



function AttendanceByDay(props) {
    const { t } = useTranslation();

    const data = {
        labels: [t('app:date_elements:Mon'), t('app:date_elements:Tue'), t('app:date_elements:Wed'), t('app:date_elements:Thu'), t('app:date_elements:Fri')],
        datasets: [
            {
                label: t('app:statuses:undeclared'),
                data: props.byWeekdayData[0],
                borderColor: '#88888A',
                backgroundColor: '#E3E3E4',
                stack: 'Stack 0'
            },
            {
                label: t('app:statuses:office'),
                data: props.byWeekdayData[1],
                borderColor: '#008946',
                backgroundColor: '#B6FFDB',
                stack: 'Stack 0',
            },
            {
                label: t('app:statuses:home_working'),
                data: props.byWeekdayData[2],
                borderColor: '#0070C0',
                backgroundColor: '#B1DCFB',
                stack: 'Stack 0'
            },
            {
                label: t('app:statuses:on_the_go'),
                data: props.byWeekdayData[3],
                borderColor: "#7030A0",
                backgroundColor: "#DBB2F9",
                stack: 'Stack 0'
            },
            {
                label: t('app:statuses:off'),
                data: props.byWeekdayData[4],
                borderColor: "#FFA800",
                backgroundColor: "#FDE5B6",
                stack: 'Stack 0'
            }
        ],
        hoverOffset: 4
    };

    return (
        <Bar
            data={data}
            options={{
                plugins: {
                    title: {
                        display: true,
                        fontsize: 14,
                        text: t('app:stats:attendance.titleStackedBar')
                    },
                    legend: {
                        display: true,
                        position: 'bottom',

                    },
                    interaction: {
                        intersect: false,
                    },
                    responsive: true,
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true
                        }
                    }
                }
            }}
        />
    );
};

export default AttendanceByDay;