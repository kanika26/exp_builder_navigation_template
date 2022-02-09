import { LightningElement, api, track  } from 'lwc';

export default class CutomNavigationMenu extends LightningElement {
  @api Item0;
  @api Item1 ;
  @api Item2 ;
  @api Item3 ;
  @api Item4 ;
  @api Item5 ;
  @api logo;
  @api image1;
  @api id1;
  @api SubItem1;
  @api SubItem2;
  @api SubItem3;
  @api SubItem4;
  @api SubItem5;
  @api SubItem6;
  @api SubItem7;
  @api SubItem8;

  @api clickedLabel;
  boolVisible1 = false;
  boolVisible2 = false;
  boolVisible3 = false;
  boolVisible4 = false;
  boolVisible5 = false;
    
   handleclick1(event){
      const iteml = event.target.name;
      console.log(iteml);
      if (iteml === 'list1' ){
        this.boolVisible1 = true;
        this.boolVisible2 = false;
        this.boolVisible3 = false;
        this.boolVisible4 = false;
        this.boolVisible5 = false;
       
      }
      else if (iteml === 'list1'){
        console.log(iteml);
        this.boolVisible1 = false;
      }
    }

    handleclick2(event){
      console.log("hello world");
      const itemq = event.target.name;
      console.log(itemq);

      if(itemq === 'list2'){
        console.log("this is working");
        this.boolVisible1 = false;
        this.boolVisible2 = true;
        this.boolVisible3 = false;
        this.boolVisible4 = false;
        this.boolVisible5 = false;
      }
      else{
        this.boolVisible2 = false;
      }

    }

    handleclick3(event){
      const iteml = event.target.name;
      console.log(iteml);
      if (iteml === 'list3' ){
        this.boolVisible1 = false;
        this.boolVisible2 = false;
        this.boolVisible3 = true;
        this.boolVisible4 = false;
        this.boolVisible5 = false;
       
      }
      else if (iteml === 'list3'){
        console.log(iteml);
        this.boolVisible1 = false;
      }
    }

    handleclick4(event){
      const iteml = event.target.name;
      console.log(iteml);
      if (iteml === 'list4' ){
        this.boolVisible1 = false;
        this.boolVisible2 = false;
        this.boolVisible3 = false;
        this.boolVisible4 = true;
        this.boolVisible5 = false;
       
      }
      else if (iteml === 'list4'){
        console.log(iteml);
        this.boolVisible1 = false;
      }
    }

    handleclick5(event){
      const iteml = event.target.name;
      console.log(iteml);
      if (iteml === 'list5' ){
        this.boolVisible1 = false;
        this.boolVisible2 = false;
        this.boolVisible3 = false;
        this.boolVisible4 = false;
        this.boolVisible5 = true;
       
      }
      else if (iteml === 'list5'){
        console.log(iteml);
        this.boolVisible1 = false;
      }
    }
}