import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trainer } from '../Trainer';
import { TrainerService } from '../../trainer/trainer.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  @Input() trainerDetail!: Trainer;
  constructor(private route: ActivatedRoute,
    private trainerService: TrainerService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
      if (id) {
      this.trainerService.getTrainerDetail(+id).subscribe(
        (data) => (this.trainerDetail = data));
  }
}
}
