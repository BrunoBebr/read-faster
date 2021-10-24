import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Params, Router, RouterModule, Routes } from '@angular/router';
import { DialogNextLevelComponent } from 'src/app/dialog-next-level/dialog-next-level.component';
import { ActivatedRoute } from '@angular/router';
import { letterLevelsDefinition, numberLevelsDefinition } from '../../levels_data';


@Component({
  selector: 'app-custom-level-letters',
  templateUrl: './custom-level-letters.component.html',
  styleUrls: ['./custom-level-letters.component.scss']
})
export class CustomLevelLettersComponent implements OnInit {
  public time = 100; 
  public length = 3;
  public Aa = 0 ;
  start = true;
  verify = false;
  isVisible = false;
  public letter:any;
  inputLetter: any;
  public answerStreak = 0;

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.time = +params['time'];
        this.length = +params['length'];
        this.Aa = +params['Aa'];
      }
      );
      var text = document.getElementById('number-span');
      text!.innerText = "Ready ?";
  } 

  
  
  

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then();
}



getRandomLetter(length: number, Aa: number) {
  if(Aa == 1){
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }
  else {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  
}

startCourse(){
 
  this.course(this.time, this.length, this.Aa)
}

 public course(time : number, digits : number, Aa : number){
  this.start = false;
  this.isVisible = false;
 
  var text = document.getElementById('number-span');
  text!.innerText = "";
  this.letter = this.getRandomLetter(digits ,Aa);
  this.delay(1000).then(any=>{
    //console.log(this.number);
    var text = document.getElementById('number-span');
    text!.innerText = "" + this.letter;
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
    //console.log("Correct number =>" + this.letter);

    if(this.inputLetter == this.letter){
      var text = document.getElementById('number-span');
      text!.innerText = "Keep it up! 😱";
      this.answerStreak = this.answerStreak + 10;
      //console.log(this.answerStreak);
    }
    if(this.inputLetter != this.letter){
      var text = document.getElementById('number-span');
      text!.innerText = "Sorry, but letters was " + this.letter;
      this.answerStreak = 0;
      
    }
    this.inputLetter= "";
   // this.start = true;


    
        
    


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