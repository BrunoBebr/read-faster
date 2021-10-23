import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Params, Router, RouterModule, Routes } from '@angular/router';
import { DialogNextLevelComponent } from 'src/app/dialog-next-level/dialog-next-level.component';
import { ActivatedRoute } from '@angular/router';
import { numberLevelsDefinition } from '../../levels_data';

@Component({
  selector: 'app-custom-level-numbers',
  templateUrl: './custom-level-numbers.component.html',
  styleUrls: ['./custom-level-numbers.component.scss']
})
export class CustomLevelNumbersComponent implements OnInit {
  public time = 100; 
  public min_number = 100;
  public max_number = 999 ;
  start = true;
  verify = false;
  isVisible = false;
  number : number | undefined;
  inputNum: any;
  public answerStreak = 0;

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params
    .subscribe(
      (params: Params) => {
        this.time = +params['time'];
        this.min_number = +params['min_num'];
        this.max_number = +params['max_num'];
      }
      );
     // console.log(this.min_number);
      var text = document.getElementById('number-span');
      text!.innerText = "Ready ?";
  } 

  
  
  

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then();
}

nextLevel(){

  this.answerStreak = 0;
  this.start = true;
  this.verify = false;
  this.isVisible = false;

  
    var text = document.getElementById('number-span');
    text!.innerText = "Ready ?";
  
  
}

getRandomInt(min: number, max: number) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

startCourse(){
 // console.log(this.LevelId + " = " + "LEVEL ID");
  this.course(this.time, this.min_number, this.max_number)
}

 public course(time : number, min_number : number, max_number : number){
  this.start = false;
  this.isVisible = false;
 
  var text = document.getElementById('number-span');
  text!.innerText = "";
  this.number = this.getRandomInt(min_number ,max_number)
  this.delay(1000).then(any=>{
    //console.log(this.number);
    var text = document.getElementById('number-span');
    text!.innerText = "" + this.number;
    this.delay(time).then(any=>{
      //console.log("hide");
      var text = document.getElementById('number-span');
      text!.innerText = "";
      
      this.delay(300).then(any=>{
        
        this.isVisible = true;
        this.verify = true;
    });
  });
});

  }
  
  verifynum(){

    this.isVisible = false;
    this.verify = false;

    //console.log("User input =>" + this.inputNum);
    //console.log("Correct number =>" + this.number);

    if(this.inputNum == this.number){
      var text = document.getElementById('number-span');
      text!.innerText = "Keep it up! 😱";
      this.answerStreak = this.answerStreak + 10;
      //console.log(this.answerStreak);
    }
    if(this.inputNum != this.number){
      var text = document.getElementById('number-span');
      text!.innerText = "Sorry, but number was " + this.number;
      this.answerStreak = 0;
      
    }
    this.inputNum= "";
   // this.start = true;


 /*   if (this.answerStreak >= 100) {
      const dialogRef = this.dialog.open(DialogNextLevelComponent);

      dialogRef.afterClosed().subscribe(result => {
        if (result == true) {
         // console.log(this.LevelId);
          
          //this.router.navigate(['practice/numbers/classic/level',this.LevelId+1]);
          var text = document.getElementById('number-span');
          text!.innerText = "";
          this.nextLevel()  
        }
        else{ 
          this.answerStreak = 0; 
          var text = document.getElementById('number-span');
          text!.innerText = "Ready ?";
          this.start = true;
        }
      });
    }*/
    

        var count = document.getElementById('count');
          count!.innerText = "Continue in 3...";
        this.delay(1000).then(any=>{
          count!.innerText = "Continue in 2...";
        this.delay(1000).then(any=>{
          count!.innerText = "Continue in 1...";
        this.delay(1000).then(any=>{
          count!.innerText = "";
          this.startCourse();
        });
        });
      });
    }
  

  
}