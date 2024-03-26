import { Component } from '@angular/core';
import { DataService } from '../../../../../_services/common-service/data.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.sass'],
})
export class ProjectDetailsComponent {
  dataInProject: any;
  projectName: any;
  usedTechnology: any;
  gitHubLink: any;
  AllData: any = [];
  id: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataInProject = this.dataService.projectData + 1;

    if (this.dataService.projectData === 0) {
      this.id = 1;
      this.projectName = 'Resturant App';
      this.usedTechnology = 'React , Firebase';
      this.gitHubLink = 'https://github.com/GayanPradeep97/resturantapp.git';
    } else if (this.dataService.projectData === 1) {
      this.id = 2;
      this.projectName = 'Hotel Inventory App';
      this.usedTechnology = 'Angular , Firebase , css';
      this.gitHubLink =
        'https://github.com/GayanPradeep97/hotelinventoryapp.git';
    } else if (this.dataService.projectData === 2) {
      this.id = 3;
      this.projectName = 'Portpoli Web Aplication';
      this.usedTechnology = 'Angular , Sass , Html';
      this.gitHubLink =
        'https://github.com/GayanPradeep97/portpolio_website.git';
    }

    this.AllData = [
      {
        id: this.id,
        name: this.projectName,
        technology: this.usedTechnology,
        link: this.gitHubLink,
      },
    ];
  }
}
