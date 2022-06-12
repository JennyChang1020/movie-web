import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: any;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: '電影',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: '熱門',
            icon: 'pi pi-fw pi-plus'
          },
          {
            separator: true
          },
          {
            label: '上映中',
            icon: 'pi pi-fw pi-trash'
          },
          {
            label: '即將上映',
            icon: 'pi pi-fw pi-external-link'
          },
          {
            label: '評分最高',
            icon: 'pi pi-fw pi-trash'
          },
        ]
      }
    ];
  }

}
