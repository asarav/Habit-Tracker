import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.less']
})
export class ProfileViewComponent implements OnInit {
  private imageMessage;
  private imagePath;
  imgURL;
  edit = false;
  formInvalid = false;

  constructor() { }

  ngOnInit() {
  }

  imageUploaded(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.imageMessage = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  toggleEdit() {
    if(this.edit && this.validateForm()) {
      //Show error if invalid on edit
      this.formInvalid = true;
    } else{
      this.formInvalid = false;
      this.edit = !this.edit;
      if(!this.edit) {
        this.saveData();
      }
    }
  }

  validateForm() {
    //TODO
    return false;
  }

  saveData() {
    //TODO
  }

}
