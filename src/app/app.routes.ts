import { Routes } from '@angular/router';
import { Route } from 'react-router-dom';
import { ConvertComponent } from './component/convert/convert.component';
import { PersonajeComponent } from './component/personaje/personaje.component';

export const routes: Routes = [
    {path: "convert", component:ConvertComponent},
    {path: "personaje", component:PersonajeComponent}

];
