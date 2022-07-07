import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { IDino } from 'src/app/_models/dino.model';
import { DinoService } from 'src/app/_services/dino.service';

@Component({
  selector: 'app-dino-preview',
  templateUrl: './dino-preview.component.html',
  styleUrls: ['./dino-preview.component.scss']
})
export class DinoPreviewComponent implements OnInit {
  selectedDinoId?: number;
  selectedDino?: IDino;

  constructor(private route: ActivatedRoute,
              private dinoService: DinoService) { }

  ngOnInit(): void {
    this.fetchDinoId();
  }

  fetchDinoId() {
    this.route.queryParamMap.subscribe(params => {
      this.selectedDinoId = +params.get('id')!;
      this.fetchDinoData();
    })
  }
  fetchDinoData() {
    this.selectedDino = this.dinoService.DinoList[this.selectedDinoId! - 1];
  }

}
