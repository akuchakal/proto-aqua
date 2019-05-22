import { Component, OnInit } from '@angular/core';
import { Assessment } from '../../domain/car';
import { MenuItem, OverlayPanel, SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  splitButtonItems: MenuItem[];

  cols: any[];

  assessments: Assessment[];
  selectedAss: Assessment;

  assCols: any[];

  aItems: MenuItem[];

  dActions = false;

  display: boolean = false;

  disable: boolean = true;

  date3: Date;

  types: SelectItem[];

  selectedType: string = 'evaluations';

  showMap = false;

  constructor() { }

  ngOnInit() {

    this.types = [
        {label: 'Evaluations ', value: 'evaluations'},
        {label: 'Events', value: 'events'}
    ];

    this.splitButtonItems = [
        {label: 'Tabular view', icon: 'fa fa-fw fa-table', command: () => {
            this.showMap = false;
        }},
        {label: 'Map view', icon: 'fa fa-fw fa-map', command: () => {
            this.showMap = true;
        }}
    ];

        
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.assCols = [
            { field: 'id', header: 'id' },
            { field: 'date', header: 'Date' },
            { field: 'type', header: 'Type' },
            { field: 'client', header: 'Client' },
            { field: 'site', header: 'Site' },
            { field: 'evaluation', header: 'Evaluation group Id' },
            { field: 'subgroup', header: 'Subgroup' },
            { field: 'agent', header: 'Elanco agent' },
            { field: 'tracing', header: 'Tracing' }
        ];

        this.assessments = [
            {
                id: "2",
                date: "2014-11-20T00:00:00",
                type: "PreVacunación",
                client: "Acuinova Chile S.A.",
                site: "Piscicultura Lican - Acuinova",
                evaluation: "Piscicultura Lican - Acuinova2013Q1",
                subgroup: "095SNAQ13",
                agent: "Claudio Linzmayer",
                tracing: "Recomendado",
            },
            {
                id: "4",
                date: "2014-11-20T00:00:00",
                type: "PreVacunación",
                client: "Acuinova Chile S.A.",
                site: "Piscicultura Lican - Acuinova",
                evaluation: "Piscicultura Lican - Acuinova2013Q4",
                subgroup: "095SNAQ13",
                agent: "Claudio Linzmayer",
                tracing: "Necesario",
            }
        ]

        this.aItems = [
            {label: 'Editar', icon: 'fa fa-fw fa-edit', command: (event) => this.viewAss(this.selectedAss) },
            {label: 'Enviar correo', icon: 'fa fa-fw fa-envelope'},
            {label: 'Reporte', icon: 'fa fa-fw fa-file'},
            {label: 'Ocultar', icon: 'fa fa-fw fa-eye-slash'},
            {label: 'Cerrar', icon: 'fa fa-fw fa-lock'},
            {label: 'Historia', icon: 'fa fa-fw fa-list-ol'},
            {label: 'Borrar', icon: 'fa fa-fw fa-trash'}
        ];

    }

    viewAss(ass: Assessment) {
        this.display = true;
        this.disable = true;
    }


    selectAnAction(event, overlaypanel: OverlayPanel) {
        overlaypanel.toggle(event);
    }

    showDialog() {
        this.display = true;
        this.disable = false;
    }

}
