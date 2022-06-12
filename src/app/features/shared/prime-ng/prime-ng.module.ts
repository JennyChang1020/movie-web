import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';

// 這個檔案裡放入primeNG使用到的component

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports:[
    MenubarModule,
  ]
})
export class PrimeNGModule { }
