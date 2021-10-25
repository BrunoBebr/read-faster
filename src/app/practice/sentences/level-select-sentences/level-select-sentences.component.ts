import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { numberLevelsDefinition } from '../../levels_data';
import { letterLevelsDefinition } from '../../levels_data';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ActivatedRoute } from '@angular/router';
import { Params, Router, RouterModule, Routes } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

export interface letterLevelsDefinition {
  id: number;
  time: number;
  digits: number;
  Aa : string;
}

const ELEMENT_DATA = letterLevelsDefinition ;

@Component({
  selector: 'app-level-select-sentences',
  templateUrl: './level-select-sentences.component.html',
  styleUrls: ['./level-select-sentences.component.scss']
})
export class LevelSelectSentencesComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'time','Aa', 'digits'];
  dataSource = new MatTableDataSource<letterLevelsDefinition>(ELEMENT_DATA);

  ngOnInit(){
    window.scroll(0,0);
  }
  

  constructor(private _liveAnnouncer: LiveAnnouncer, private router: Router) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  

  @ViewChild(MatSort)
  
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  clickedRows(level :number){
    this.router.navigate(['practice/letters/classic/level',level]);
  }


  customLevel = new FormGroup({
    time: new FormControl(null, Validators.required),
    length: new FormControl(null, Validators.required),
    Aa: new FormControl(null, Validators.required)
  });

  startCustomLevel(){
    //console.log(this.customLevel.value.time)
    this.router.navigate(['practice/letters/custom-level/' + this.customLevel.value.time +'/'+ this.customLevel.value.length + '/' + this.customLevel.value.Aa]);
  }
}
