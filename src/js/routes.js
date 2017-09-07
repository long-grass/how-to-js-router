import { MaltonComponent } from './components/malton'
import { GlossopComponent } from './components/glossop'
import { KendalComponent } from './components/kendal'
import { HerefordComponent } from './components/hereford'
import { DefaultComponent } from './components/default'



export const routes = {
    glossop: GlossopComponent,
    kendal:  KendalComponent,
    hereford:  HerefordComponent,
    malton:   MaltonComponent,
    '' : DefaultComponent
}