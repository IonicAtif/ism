import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
DivisionsRecord=[];
CategorysRecord=[];
DetailsRecord=[];
  constructor(public http: Http, public storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
	  
	  this.storage.get('Divisions')
            .then((val) => {
				console.log(val);
				if(val!=null){
				this.DivisionsRecord=val;
				}
				
			}); 
	  this.storage.get('Categorys')
            .then((val) => {
				console.log(val);
				if(val!=null){
				this.CategorysRecord=val;
				}
				
			});
	 this.storage.get('Details')
            .then((val) => {
				console.log(val);
				if(val!=null){
				this.DetailsRecord=val;
				}
				
			});
  }
Division_name='';
Category_name='';
content;
  addDivision() {
	  
	  if(this.Division_name=='' || this.Division_name==undefined){
		  alert('please add Division Name');
	  }
	  else{
		  if(this.DivisionsRecord.length==0){
			  this.content={
		id:1,
		name:this.Division_name,
	};
		  }
			  else{
	this.content={
		id:this.DivisionsRecord[this.DivisionsRecord.length-1].id+1,
		name:this.Division_name,
	};
			  }
	this.DivisionsRecord.push(this.content);
	this.storage.set('Divisions',this.DivisionsRecord).then(()=>{
		alert('Division Added Successfully');
	});
	this.Division_name='';
	  console.log(this.DivisionsRecord);
	  }
	/*this.http.post('http://www.alqutabheavytransport.com/demo/public/',content)
            .map(res => res.json())
            .subscribe(data => {
              
            },
            error=>{
				console.log(error);
                
            });
			*/
  }
addDetails(){
	 if(this.name==''  || this.name==undefined){
		  alert('please add Name');
	  }
	  else if(this.phone==''  || this.phone==undefined){
		  alert('please add Phone');
	  }
	  else if(this.division==''  || this.division==undefined){
		  alert('please add Division');
	  }
	  else if(this.category=='' || this.category==undefined){
		  alert('please add Category');
	  }
	  else{
		   if(this.DetailsRecord.length==0){
			  this.content={
		id:1,
		name:this.name,
		phone:this.phone,
		division:this.division,
		category:this.category
	};
		  }
			  else{
	this.content={
		id:this.DetailsRecord[this.DetailsRecord.length-1].id+1,
		name:this.name,
		phone:this.phone,
		division:this.division,
		category:this.category
	};
	  }
	  this.DetailsRecord.push(this.content);
	this.storage.set('Details',this.DetailsRecord).then(()=>{
		alert('Details Added Successfully');
		
this.name='';
this.phone='';
	});
	  }
	  
	  
}
name='';
phone='';
division='';
category='';

  addCategory() {
	  if(this.Category_name=='' || this.Category_name==undefined){
		  alert('please add Category Name');
	  }
	  else{
		  if(this.CategorysRecord.length==0){
			  this.content={
		id:1,
		name:this.Category_name,
	};
		  }
			  else{
	this.content={
		id:this.CategorysRecord[this.CategorysRecord.length-1].id+1,
		name:this.Category_name,
	};
			  }
	this.CategorysRecord.push(this.content);
	this.storage.set('Categorys',this.CategorysRecord).then(()=>{
		alert('Category Added Successfully');
	});
	this.Category_name='';
	  console.log(this.CategorysRecord);}
	/*this.http.post('http://www.alqutabheavytransport.com/demo/public/',content)
            .map(res => res.json())
            .subscribe(data => {
              
            },
            error=>{
				console.log(error);
                
            });
			*/
  }

}
