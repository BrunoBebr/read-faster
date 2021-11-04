import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Params, Router, RouterModule, Routes } from '@angular/router';
import { DialogNextLevelComponent } from 'src/app/dialog-next-level/dialog-next-level.component';
import { ActivatedRoute } from '@angular/router';
import { sentencesList} from '../sentences';
import { sentencesLevelsDefinition } from '../../levels_data';

@Component({
  selector: 'app-classic-level-sentences',
  templateUrl: './classic-level-sentences.component.html',
  styleUrls: ['./classic-level-sentences.component.scss']
})
export class ClassicLevelSentencesComponent implements OnInit {

 
  public LevelId = 1; 
  start = true;
  verify = false;
  isVisible = false;
  public letter: any;
  inputSentence: any;
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

getRandomSentence(length : Number) {
  var value = "ERROR";
  
  for (let i = 0; i < 100000; i++){
   

    var valueToUse = sentencesList[Math.floor(Math.random() * sentencesList.length)];
    if (valueToUse.length == length) {
        i = 999999999;
        value = valueToUse;    
    }
  }  
  
    return value;
} 


startCourse(){
  // console.log(this.LevelId + " = " + "LEVEL ID");
    var meme = 1;
var def = sentencesLevelsDefinition.find(x => x.id == this.LevelId);
 
 
 if(def){
   var time = def.time ;
 var digits = def.lenght;

 }else{
   var time = 200;
   var digits = 3;
   
 }
 
 
   this.course(time, digits)
 }
 
  public course(time : number, digits : number){
   this.start = false;
   this.isVisible = false;
  
   var text = document.getElementById('number-span');
   text!.innerText = "";
   this.letter = this.getRandomSentence(digits);
   
   this.delay(1000).then(any=>{
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
 
     if(this.inputSentence == this.letter){
       var text = document.getElementById('number-span');
       text!.innerText = "Keep it up! 😱";
       this.answerStreak = this.answerStreak + 10;
       //console.log(this.answerStreak);
     }
     if(this.inputSentence != this.letter){
       var text = document.getElementById('number-span');
       text!.innerText = "Sorry, but it was " + this.letter;
       this.answerStreak = 0;
       
     }
     this.inputSentence= "";
    // this.start = true;
 
 
     if (this.answerStreak >= 100) {
       const dialogRef = this.dialog.open(DialogNextLevelComponent);
 
       dialogRef.afterClosed().subscribe(result => {
         if (result == true) {
          // console.log(this.LevelId);
           
           this.router.navigate(['practice/sentences/classic/level',this.LevelId+1]);
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