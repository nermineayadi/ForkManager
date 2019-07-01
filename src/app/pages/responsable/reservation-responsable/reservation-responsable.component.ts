import { Component, OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {startOfDay,endOfDay,subDays,addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { ShareService } from 'src/app/services/share.service';
import { ActivatedRoute } from '@angular/router';

const colors: any = {
  red: {
    primary: '#ad2121',
  },
  blue: {
    primary: '#1e90ff',
  },
  yellow: {
    primary: '#e3bc08',
  }
};
@Component({
    selector: 'app-reservation-responsable',
    templateUrl: './reservation-responsable.component.html',
   
})
export class ReservationResponsableComponent implements OnInit {

    ngOnInit(): void { }
    @ViewChild('modalContent') modalContent: TemplateRef<any>;

    view: CalendarView = CalendarView.Month;
  
    CalendarView = CalendarView;
  
    viewDate: Date = new Date();
  
    modalData: {
      action: string;
      event: CalendarEvent;
    };
  
    actions: CalendarEventAction[] = [
      {
        label: '<i class="fa fa-fw fa-pencil"></i>',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.handleEvent('Edited', event);
        }
      },
      {
        label: '<i class="fa fa-fw fa-times"></i>',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.events = this.events.filter(iEvent => iEvent !== event);
          this.handleEvent('Deleted', event);
        }
      }
    ];
  
    refresh: Subject<any> = new Subject();
  
    events: CalendarEvent[] = [
      
    ];
  
    activeDayIsOpen: boolean = false;
  
    constructor(private route: ActivatedRoute,private modal: NgbModal , private shareService:ShareService) {
      this.route.data.subscribe((data)=>{
        console.log(data)

        data.reservation.reservations.forEach(element => {
          console.log(element.payload.val())
this.events=[
  ...this.events,...element.payload.val()
]          
        });
      })
    }
  
    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
      if (isSameMonth(date, this.viewDate)) {
        this.viewDate = date;
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true;
        }
      }
    }
  
    eventTimesChanged({
      event,
      newStart,
      newEnd
    }: CalendarEventTimesChangedEvent): void {
      this.events = this.events.map(iEvent => {
        if (iEvent === event) {
          return {
            ...event,
            start: newStart,
            end: newEnd
          };
        }
        return iEvent;
      });
      this.handleEvent('Dropped or resized', event);
    }
  
    handleEvent(action: string, event: CalendarEvent): void {
      this.modalData = { event, action };
      this.modal.open(this.modalContent, { size: 'lg' });
    }
  client : any
  nbpersonnes : number
    addEvent(): void {
      const obj={
        client:this.client,
        nbpersonnes:this.nbpersonnes,
        title: this.client + ' '+this.nbpersonnes+' personnnes',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
      this.events = [
        ...this.events,
        obj
      ];
      this.shareService.addReservation(obj)
    }
  
    deleteEvent(eventToDelete: CalendarEvent) {
      this.events = this.events.filter(event => event !== eventToDelete);
    }
  
    setView(view: CalendarView) {
      this.view = view;
    }
  
    closeOpenMonthViewDay() {
      this.activeDayIsOpen = false;
    }
}
