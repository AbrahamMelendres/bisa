import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Ahorro } from './ahorro/ahorro';
import { Creditos} from './creditos/creditos';
import { Seguros} from './seguros/seguros';
import { Servicios} from './servicios/servicios';
import { Tarjetas} from './tarjetas/tarjetas';


export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'ahorro', component: Ahorro },
    { path: 'creditos', component: Creditos },
    { path: 'seguros', component: Seguros },
    { path: 'servicios', component: Servicios },
    { path: 'tarjetas', component: Tarjetas },
    { path: '**', redirectTo: '' }
];
