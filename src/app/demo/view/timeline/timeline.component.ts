import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/eventservice';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  events: any[];

  fullcalendarOptions: any;

  types: SelectItem[];

  selectedType: string = 'site';

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.types = [
      {label: 'Site ', value: 'site'},
      {label: 'Evaluation group', value: 'evaluation'},
      {label: 'Evaluation to connect', value: 'evaluation_to'}
    ];
    this.eventService.getEvents().then(events => {this.events = events; });
    this.fullcalendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2016-01-12'
  };
  }
  

}
