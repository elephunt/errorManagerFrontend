import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {ErrorService} from './errorService';
import {Comments, ErrorModel} from './errorModel';
import {MatDialog} from '@angular/material/dialog';
import {AppDialogErrorComponent} from './dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'errorManager';
  errors: ErrorModel[];
  searchQuery: string;
  @ViewChild(MatAccordion) accordion: MatAccordion;


    constructor(private errorService: ErrorService,
                public dialog: MatDialog) { }

  openDialog(): void {
      const dialogRef = this.dialog.open(AppDialogErrorComponent, {
        data :  {
          code: '', comments: [], reason: '', referenceError: '', status: '', traceId: ''
        }
    });
      dialogRef.afterClosed().subscribe((result) => {

        if(result){
          this.errorService.createError(result)
            .subscribe(data => {
              this.clear();
            });
        }
    });
  }

  ngOnInit() {
    this.errorService.sendGetRequest().subscribe(data => {
      console.log(data);
      this.errors = data;
      console.log(this.errors);
    });
  }

  public search( ){
    if ( this.searchQuery && this.searchQuery !== ''){
      this.errorService
        .search(this.searchQuery)
        .subscribe(data => {
          this.errors = data;
        });
    }else{
      this.clear();
    }

  }

  public  clear(){
    this.errorService
      .sendGetRequest()
      .subscribe(data => {
        this.errors = data;
      });
  }





  public vote(comment: Comments, error: ErrorModel, action: string){
    this.errorService
      .vote(comment._id, action)
      .subscribe(data => {
        error.comments = data;
      });
  }


}



