import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Params, Router, RouterModule, Routes } from '@angular/router';
import { DialogNextLevelComponent } from 'src/app/dialog-next-level/dialog-next-level.component';
import { ActivatedRoute } from '@angular/router';
import { letterLevelsDefinition, numberLevelsDefinition } from '../../levels_data';

declare var require: any

@Component({
  selector: 'app-classic-level-letters',
  templateUrl: './classic-level-letters.component.html',
  styleUrls: ['./classic-level-letters.component.scss']
})
export class ClassicLevelLettersComponent implements OnInit {
  public LevelId = 1; 
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
        this.LevelId = +params['id'];
        
      }
      );
      var text = document.getElementById('number-span');
      text!.innerText = "Ready for level "+ this.LevelId +" ?";
  } 

  
  
  

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then();
}

nextLevel(){

  this.answerStreak = 0;
  this.start = true;
  this.verify = false;
  this.isVisible = false;

  this.LevelId = this.LevelId+1 
    var text = document.getElementById('number-span');
    text!.innerText = "Ready for level "+ this.LevelId +" ?";
  
  
}

getRandomLetter(lenghtnum: number, Aa: string) {
 console.log("randomletter init")  ;
  var randomstring = require("randomstring");
  console.log("randomletter require")  ;

if (Aa == "aa") {
  randomstring.generate({
    lenght : lenghtnum,
    charset: 'alphabetic',
    lowercase: true
    });
}else{
  randomstring.generate({
    lenght : lenghtnum,
    charset: 'alphabetic',
    });
}

console.log("randomletter end")  ;

  
}

startCourse(){
 // console.log(this.LevelId + " = " + "LEVEL ID");
   var meme = 1;
var def = letterLevelsDefinition.find(x => x.id == this.LevelId);


if(def){
  var time = def.time ;
var digits = def.digits;
var Aa = def.Aa;
}else{
  var time = 100;
  var digits = 3;
  var Aa = "aa";
}


  this.course(time, digits, Aa)
}

 public course(time : number, digits : number, Aa : string){
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
      text!.innerText = "Sorry, but number was " + this.letter;
      this.answerStreak = 0;
      
    }
    this.inputLetter= "";
   // this.start = true;


    if (this.answerStreak >= 100) {
      const dialogRef = this.dialog.open(DialogNextLevelComponent);

      dialogRef.afterClosed().subscribe(result => {
        if (result == true) {
         // console.log(this.LevelId);
          
          this.router.navigate(['practice/numbers/classic/level',this.LevelId+1]);
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
          this.startCourse();
        });
        });
      });
    }
  }

  
}