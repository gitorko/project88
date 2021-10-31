import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ChartDataSets } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Router } from '@angular/router';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {

    pieData: ChartDataSets[] = [];
    pieLabel: Label[] = [];
    pieOptions: any;

    barData: ChartDataSets[] = [];
    barLabel: Label[] = [];
    barOptions: any;

    lineData: ChartDataSets[] = [];
    lineLabel: Label[] = [];
    lineOptions: any;

    columnData: ChartDataSets[] = [];
    columnLabel: Label[] = [];
    columnOptions: any;

    constructor(private restService: RestService, private router: Router) {
        monkeyPatchChartJsTooltip();
        monkeyPatchChartJsLegend();
    }

    ngOnInit(): void {
        const backgroundColors = [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ];
        const borderColors = [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ];

        this.pieOptions = {
            title: {
                display: true,
                text: 'Pie Chart'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };

        this.barOptions = {
            title: {
                display: true,
                text: 'Bar Chart'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };

        this.lineOptions = {
            title: {
                display: true,
                text: 'Line Chart'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };

        this.columnOptions = {
            title: {
                display: true,
                text: 'Column Chart'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        };

        this.restService.getPieData().subscribe(data => {
            this.pieData = [
                { data: data[1], label: 'Pie Chart', backgroundColor: backgroundColors, borderColor: borderColors, borderWidth: 1 },
            ];
            this.pieLabel = data[0];
        });

        this.restService.getPieData().subscribe(data => {
            this.barData = [
                { data: data[1], label: 'Bar Chart', backgroundColor: backgroundColors, borderColor: borderColors, borderWidth: 1 },
            ];
            this.barLabel = data[0];
        });

        this.restService.getPieData().subscribe(data => {
            this.lineData = [
                { data: data[1], label: 'Line Chart', backgroundColor: backgroundColors, borderColor: borderColors, borderWidth: 1 },
            ];
            this.lineLabel = data[0];
        });

        this.restService.getColumnData().subscribe(data => {
            this.columnData = [
                {
                    data: data[1].data,
                    label: data[1].name,
                    backgroundColor: backgroundColors[0],
                    borderColor: borderColors[0],
                    borderWidth: 1,
                    fill: false
                },
                {
                    data: data[2].data,
                    label: data[2].name,
                    backgroundColor: backgroundColors[1],
                    borderColor: borderColors[1],
                    borderWidth: 1,
                    fill: false
                },
                {
                    data: data[3].data,
                    label: data[3].name,
                    backgroundColor: backgroundColors[2],
                    borderColor: borderColors[2],
                    borderWidth: 1,
                    fill: false
                }
            ];
            this.columnLabel = data[0].data;
        });
    }

}
