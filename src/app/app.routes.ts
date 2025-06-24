import { Routes } from '@angular/router';
import { Home } from './Home/home';
import { About } from './About/about/about';
import { Projects } from './Projects/projects/projects';
import { Contact } from './Contact/contact/contact';
import { More } from './More/more/more';
import { Skills } from './Skills/skills/skills';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path:"About",
        component:About
    },
    {
        path:"Projects",
        component:Projects
    },
    {
        path:"Contact",
        component:Contact
    },
    {
        path:"More",
        component:More
    },
    {
        path:"Skills",
        component:Skills
    }
    

];
