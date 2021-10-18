import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, RouterModule, Routes } from '@angular/router';
import { DialogNextLevelComponent } from '../../dialog-next-level/dialog-next-level.component';

@Component({
  selector: 'app-level-two',
  templateUrl: './level-two.component.html',
  styleUrls: ['./level-two.component.scss']
})
export class LevelTwoComponent implements OnInit {

  start = true;
  verify = false;
  isVisible = false;
  number : number | undefined;
  inputNum: any;
  public answerStreak = 0;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then();
}

getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

 public course(){
  this.start = false;
  this.isVisible = false;
 
  var text = document.getElementById('number-span');
  text!.innerText = "";
  this.number = this.getRandomInt(100 ,999)
  this.delay(1000).then(any=>{
    //console.log(this.number);
    var text = document.getElementById('number-span');
    text!.innerText = "" + this.number;
    this.delay(70).then(any=>{
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
     // console.log(this.answerStreak);
    }
    if(this.inputNum != this.number){
      var text = document.getElementById('number-span');
      text!.innerText = "Sorry, but number was " + this.number;
      this.answerStreak = 0;
      
    }
    this.inputNum= "";
   // this.start = true;


    if (this.answerStreak >= 100) {
      const dialogRef = this.dialog.open(DialogNextLevelComponent);

      dialogRef.afterClosed().subscribe(result => {
        if (result == true) {
          this.router.navigate(['practice/classic/level-3']);
        }
        else{ 
          this.answerStreak = 0; 
          var text = document.getElementById('number-span');
          text!.innerText = "Ready ?";
          this.start = true;
        }
      });
    }
    else {

        var count = document.getElementById('count');
          count!.innerText = "Continue in 3...";
        this.delay(1000).then(any=>{
          count!.innerText = "Continue in 2...";
        this.delay(1000).then(any=>{
          count!.innerText = "Continue in 1...";
        this.delay(1000).then(any=>{
          count!.innerText = "";
          this.course();
        });
        });
      });
    }
  }

  
}


