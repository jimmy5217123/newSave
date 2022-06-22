<template>
    <v-col class="pa-3">
        <v-row class="pa-0 mx-4">
            <v-col cols='12' class="d-flex pa-1 ma-0 justify-center align-center">
                <p class="pa-0 ma-0 mx-1">顯示起始時間:</p>
                <v-col cols ='2'>
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        v-model="date"
                        label="Picker in menu"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        no-title
                        scrollable
                    >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="menu = false"
                            >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(date)"
                        >
                        OK
                        </v-btn>
                    </v-date-picker>
                    </v-menu>
                </v-col>
                <v-btn color="primary">指定時間顯示</v-btn>
            </v-col>
        </v-row>
        <v-row class="pa-0 mx-4">
            <v-col class="pa-0 ma-0">
                <v-card class="pa-5">
                    <Highcharts :options="historyChart" />
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
export default {
    data () {
        return {
            date: '',
            deciveBox: ['BES', 'PCS', 'HV Meter'],
            deciveBoxSelect: 'BES',
            historyChart: {
                chart: {
                    backgroundColor: null,
                    events: {}
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: []
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                        enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    floating: false
                },
                yAxis: [
                    {
                        title: {
                            text: ''
                        },
                        opposite: false
                    },
                    {
                        title: {
                            text: ''
                        },
                        opposite: true
                    },
                    {
                        title: {
                            text: ''
                        },
                        opposite: true
                    }
                ],
                tooltip: {
                    shared: true
                },
                series: [
                {
                    name: '電壓',
                    data: [850, 850, 850, 850, 850, 850, 850, 850, 850, 850, 850, 850],
                    yAxis: 0,
                    visible: true
                },
                {
                    name: '電流',
                    data: [759, 759, 759, 759, 759, 759, 759, 759, 759],
                    yAxis: 0,
                    visible: true
                },
                {
                    name: '功率',
                    data: [680, 680, 680, 680, 680, 680, 680, 680, 680, 680, 680, 680],
                    yAxis: 0,
                    visible: true
                },
                {
                    name: '頻率',
                    data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                    yAxis: 0,
                    visible: true
                }],
                responsive: {
                    rules: [
                        {
                            condition: 
                            {
                                maxWidth: 500
                            },
                        chartOptions: 
                        {
                            legend: 
                            {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom',
                                y: 0
                            }
                        }
                    }]
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
