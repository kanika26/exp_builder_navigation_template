import { LightningElement, api, track } from 'lwc';

export default class ReportsAndDashboards extends LightningElement {
// @api imageUrl 
@api imageHeight
@api select
 get backgroundStyle() {
  console.log(this.select);
  //var fileform = base64ToBlob(this.select,'image/jpeg')
 // this.imgUrl = fileform;
  var s = "data:image/png;base64,"+this.select
  //console.log(s);
 // return `position:relative; background-size:cover;background-position:center; height:${this.imageHeight}px;width:100%;background-repeat:no-repeat;background-image:${fileform}`;
    return `position:relative; background-size:cover;background-position:center; height:${this.imageHeight}px;width:100%;background-repeat:no-repeat;background-image:url(${s})`;
}

 
}