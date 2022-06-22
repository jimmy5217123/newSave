<template>
    <v-col class="pa-3">
        <v-row class="pa-0 mx-4">
            <v-col cols='12' class="d-flex pa-1 ma-0 justify-center align-center">
                <p class="pa-0 ma-0 mx-1">顯示起始時間:</p>
                <v-col cols ='2'>
                    <v-menu
                        ref="menu"
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
                    <Highcharts :options="mwChart" />
                </v-card>
            </v-col>
        </v-row>
        <v-row class="pa-0 mx-4">
            <v-col class="pa-0 ma-0">
                <v-card class="pa-5">
                    <Highcharts :options="socChart" />
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script setup lang="ts">
export default {
    data () {
        return {
            date: '',
            deciveBox: ['BES', 'PCS', 'HV Meter'],
            deciveBoxSelect: 'BES',
            mwChart: {
                chart: {
                    type: 'spline',
                    backgroundColor: null,
                    events: {}
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: '功率(MW)'
                },
                xAxis: {
                    categories: []
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: false
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
                    name: '瞬時功率',
                    data: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
                    yAxis: 0,
                    visible: true
                },
                {
                    name: '頻率',
                    data: [-0.4, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
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
            },
            socChart: {
                chart: {
                    type: 'spline',
                    backgroundColor: null,
                    events: {}
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'SOC'
                },
                xAxis: {
                    categories: []
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: false
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
                    name: 'SOC',
                    data: [59],
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
    },
    created (): void {
      this.mwFakeData()
      this.socFakeData()
    },
    methods: {
        mwFakeData (): void {
            let arr = []
            for (let i  = 0; i < 50; i++) {
                arr = arr.concat([0, 0.1, 0.15, 0.2, 0.1, 0, -0.2, -0.15, -0.1, 0])
            }
            this.mwChart.series[0].data = arr
            this.mwChart.series[1].data = arr.map(x => x * -1)
        },
        socFakeData (): void {
            let arr = []
            let num = 69
            while (num > 65) {
                num = num - Math.random() * 0.1
                for (let i = 0; i < 100; i++) {
                    arr.push(num)
                }
            }
            this.socChart.series[0].data = arr
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
