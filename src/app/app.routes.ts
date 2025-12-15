import { Routes } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { MyProfile } from './my-profile/my-profile';
import { MyFriend } from './my-friend/my-friend';
import { MyStatus } from './my-status/my-status';

export const routes: Routes = [
  { path: '', redirectTo: 'my-profile', pathMatch: 'full' },
  {
    path: 'hello-world',
    component: HelloWorld,
  },
  { path: 'my-profile', component: MyProfile },
  { path: 'my-friend', component: MyFriend },
  { path: 'my-status', component: MyStatus },
];
