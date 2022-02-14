import { useTranslation } from "react-i18next";
import { Line } from "react-chartjs-2";



function AttendanceDetailed(props) {
    const { t } = useTranslation();

    const data = {
        labels: props.businessDaysList,
        datasets: [
            {
                label: t('app:statuses:undeclared'),
                data: props.historicData[0],
                borderColor: '#88888A',
                backgroundColor: '#E3E3E4',
                fill: "-1"
            },
            {
                label: t('app:statuses:office'),
                data: props.historicData[1],
                borderColor: '#008946',
                backgroundColor: '#B6FFDB',
                fill: 0
            },
            {
                label: t('app:statuses:home_working'),
                data: props.historicData[2],
                borderColor: '#0070C0',
                backgroundColor: '#B1DCFB',
                fill: 0
            },
            {
                label: t('app:statuses:on_the_go'),
                data: props.historicData[3],
                borderColor: "#7030A0",
                backgroundColor: "#DBB2F9",
                fill: 0
            },
            {
                label: t('app:statuses:off'),
                data: props.historicData[4],
                borderColor: "#FFA800",
                backgroundColor: "#FDE5B6",
                fill: 0
            }
        ],
        hoverOffset: 4
    };

    return (
        <Line
            data={data}
            options={{
                plugins: {
                    datalabels: {
                        formatter: (value, ctx) => {
                            return "";
                        }
                    },
                    title: {
                        display: true,
                        fontsize: 14,
                        text: t('app:stats:attendance.titleArea')
                    },
                    legend: {
                        display: true,
                        position: 'bottom',

                    },
                    interaction: {
                        intersect: false,
                    },
                    responsive: true,
                    filler: {
                        propagate: false
                    },
                    'samples-filler-analyser': {
                        target: 'chart-analyser'
                    }
                }
            }}

        />
    );
};

export default AttendanceDetailed;