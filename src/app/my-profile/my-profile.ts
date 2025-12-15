import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  imports: [],
  templateUrl: './my-profile.html',
  styleUrl: './my-profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyProfile {

}
