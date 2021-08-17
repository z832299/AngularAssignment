import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {delay} from 'rxjs/operators';
import {MatSidenav} from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myDashboard';
  options: FormGroup;
  
  searchedKeyword: string = '';
  @ViewChild(MatSidenav) sidenav! : MatSidenav;
  membersArray :{ title: string; subtitle: string; content: string; }[] = [];
  constructor(fb: FormBuilder,private observer: BreakpointObserver) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
    
  }
  ngAfterViewInit(){
    this.observer.observe(['(max-width: 720px)']).pipe(delay(1)).subscribe((res) =>{
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
       
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
        
      }
    });
  }


  menus = [
        {id:1, name: 'All'},
        {id:2, name: 'Finance'},
        {id:3, name: 'Technical'},
        {id:4, name: 'Marketing'},
        {id:5, name: 'Human Resource'}

        ];

  members: {title: string, subtitle: string, content: string}[] = [
      {title: 'Technical', subtitle: 'Subtitle', content: 'Terminal instructables' },
      {title: 'Finance', subtitle: 'Subtitle', content: 'Customer Onboarding'},
      {title: 'Human Resource', subtitle: 'Subtitle', content: 'Career oppertunities'},
      {title: 'Technical', subtitle: 'Subtitle', content: 'installation Guide'},
      {title: 'Marketing', subtitle: 'Subtitle', content: 'Printing Guidence'},
      {title: 'Human Resource', subtitle: 'Subtitle', content: 'Training'},
      {title: 'Marketing', subtitle: 'Subtitle', content: 'Oulet Branding'},
      {title: 'Technical', subtitle: 'Subtitle', content: 'Technical Support'},
      {title: 'Finance', subtitle: 'Subtitle', content: 'Accounting Proceedures'}     
    ];

    public showInfo(link:string) {
      
      if(link !== "All"){
       this.searchedKeyword = link;
       
      }
      else {
      this.searchedKeyword = "";
      }
    }
     
    
}
