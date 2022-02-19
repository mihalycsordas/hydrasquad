import {Component} from '@angular/core';
import {IncomingEvents} from '../services/events/model/incoming-events';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent {

    incomingEvents: Array<IncomingEvents> = [
        {
            id: '1',
            name: 'Terminator Salvation',
            location: 'Hatvan-Nagygombos',
            eventTime: '2022 Március 26-27.',
            caption: 'Terminator Salvation',
            media_url: '../assets/img/events/terminator_savation_event.jpeg',
            eventLink: 'https://www.facebook.com/events/597004918070612?ref=newsfeed',
        },
        {
            id: '2',
            name: 'ORW - Lone Survivor',
            location: 'Bogács',
            eventTime: '2022 Május 7-8',
            caption: 'ORW 2022 MilSim',
            media_url: '../assets/img/events/ORW.png',
            eventLink: '',
        },
        {
            id: '3',
            name: 'A leghosszabb nap 2.',
            location: 'Tázlár-Dél-Alföld',
            eventTime: '2022 Június 24-26',
            caption: 'A leghosszabb nap 2.',
            media_url: '../assets/img/events/leghosszabb_nap.jpeg',
            eventLink: 'https://www.easybaseairsoft.hu/3day/',
        },
        {
            id: '4',
            name: '3day V. BIST HAZARI',
            location: 'Molnaszecsőd',
            eventTime: '2022 Július 13-17',
            caption: 'ORW 2022 MilSim',
            media_url: '../assets/img/events/3day_mosahi.png',
            eventLink: 'https://www.easybaseairsoft.hu/3day/',
        },
        {
            id: '5',
            name: '10. ZONA Maraton',
            location: 'Hatvan-Nagygombos',
            eventTime: '2020 Július 8-17',
            caption: '10. ZONA Maraton',
            media_url: '../assets/img/events/zona-maraton.png',
            eventLink: 'https://ease.hu/stalker/',
        },
        {
            id: '6',
            name: 'Border War 14',
            location: 'Béla Pod Bezdezem, Csehország',
            eventTime: '2022 Augusztus 26-28',
            caption: 'Border War 14',
            media_url: '../assets/img/events/border-war_14.png',
            eventLink: 'https://www.borderwar.cz/sites/',
        },
        {
            id: '7',
            name: '13 Hours',
            location: 'Hatvan-Nagygombos',
            eventTime: '2022 Szeptember 3-4',
            caption: '13 Hours',
            media_url: '../assets/img/events/13-hours.png',
            eventLink: '',
        },
        {
            id: '8',
            name: 'Operation Thunder 2',
            location: 'Ópusztaszer',
            eventTime: '2022 Szeptember',
            caption: 'Operation Thunder 2',
            media_url: '../assets/img/events/operation-thunder.png',
            eventLink: '',
        }
    ];

}
