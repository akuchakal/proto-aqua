import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'pe-step',
  styles: ['.pe-step-container {padding: 45px 25px 45px 25px; margin-bottom: 20px;}'],
  template: `
      <div *ngIf="active" [ngClass]="'ui-widget-content ui-corner-all pe-step-container'" [class]="styleClass">
          <ng-content></ng-content>
      </div>
  `
})
export class StepComponent {
  @Input() styleClass: string;
  @Input() label: string;
  active: boolean = false;
}

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  items: MenuItem[];

  activeIndex: number = 0;
  @Input() disable: boolean;

  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'Datos Compañia',
      command: (event: any) => {
        this.activeIndex = 0;
      }
    },
    {
      label: 'Datos subgrupo',
      command: (event: any) => {
        this.activeIndex = 1;
      }
    },
    {
      label: 'Medio ambiente',
      command: (event: any) => {
        this.activeIndex = 2;
      }
    },
    {
      label: 'Higiene en la vacunación',
      command: (event: any) => {
        this.activeIndex = 3;
      }
    },
    {
      label: 'Vacunación',
      command: (event: any) => {
        this.activeIndex = 4;
      }
    },
    {
      label: 'Vacunas',
      command: (event: any) => {
        this.activeIndex = 5;
      }
    },
    {
      label: 'Vacunas adicionales',
      command: (event: any) => {
        this.activeIndex = 6;
      }
    },
    {
      label: 'Anestesia',
      command: (event: any) => {
        this.activeIndex = 7;
      }
    },
    {
      label: 'Muestreo peces',
      command: (event: any) => {
        this.activeIndex = 8;
      }
    },
    {
      label: 'Resumen & Seguimiento',
      command: (event: any) => {
        this.activeIndex =9;
      }
    },
    ];
  }
}
