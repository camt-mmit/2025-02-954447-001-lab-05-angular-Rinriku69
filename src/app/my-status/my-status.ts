import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-status',
  imports: [],
  templateUrl: './my-status.html',
  styleUrl: './my-status.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyStatus {
  date = new Date();
  navigator = window.navigator;
}
