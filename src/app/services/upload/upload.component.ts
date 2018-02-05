import { Component, OnInit } from '@angular/core';
import {Media} from '../../interface/media';
import {MediaService} from '../media.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file: File;
  media: Media = {
    title: '',
    description: ''
  };

  constructor(private mediaService: MediaService) { }

  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }
  startUpload() {
    const formData = new FormData();
    formData.append('title', this.media.title);
    formData.append('description', this.media.description);
    formData.append('file', this.file);
    this.mediaService.upload(formData).subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
