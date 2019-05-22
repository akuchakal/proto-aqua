import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SampleDemoComponent} from './demo/view/sampledemo.component';
// import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
// import {FormsDemoComponent} from './demo/view/formsdemo.component';
// import {DataDemoComponent} from './demo/view/datademo.component';
// import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
// import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
// import {MenusDemoComponent} from './demo/view/menusdemo.component';
// import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
// import {MiscDemoComponent} from './demo/view/miscdemo.component';
// import {EmptyDemoComponent} from './demo/view/emptydemo.component';
// import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
// import {FileDemoComponent} from './demo/view/filedemo.component';
// import {UtilsDemoComponent} from './demo/view/utilsdemo.component';
// import {DocumentationComponent} from './demo/view/documentation.component';
import { EvaluationsComponent } from './demo/view/evaluations/evaluations.component';
import { StateComponent } from './demo/view/state/state.component';
import { TimelineComponent } from './demo/view/timeline/timeline.component';
import { ContactComponent } from './demo/view/contact/contact.component';

export const routes: Routes = [
    // {path: '', component: DashboardDemoComponent},
    {
        path: '',
        redirectTo: 'sample/state',
        pathMatch: 'full',
    },
    {
        path: 'sample', 
        component: SampleDemoComponent,
        children: [
            {
                path: 'evaluations',
                component: EvaluationsComponent
            },
            {
                path: 'state',
                component: StateComponent
            },
            {
                path: 'timeline',
                component: TimelineComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            }
        ]
    }
    // {path: 'forms', component: FormsDemoComponent},
    // {path: 'data', component: DataDemoComponent},
    // {path: 'panels', component: PanelsDemoComponent},
    // {path: 'overlays', component: OverlaysDemoComponent},
    // {path: 'menus', component: MenusDemoComponent},
    // {path: 'messages', component: MessagesDemoComponent},
    // {path: 'misc', component: MiscDemoComponent},
    // {path: 'empty', component: EmptyDemoComponent},
    // {path: 'charts', component: ChartsDemoComponent},
    // {path: 'file', component: FileDemoComponent},
    // {path: 'utils', component: UtilsDemoComponent},
    // {path: 'documentation', component: DocumentationComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
