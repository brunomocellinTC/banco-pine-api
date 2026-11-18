import { expect, test } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import {GET_ROUTES} from '../Models/swagger-get-routes';
import {MUTATION_ROUTES} from '../Models/swagger-mutations';

test('Catálogos GET e mutações estão alinhados ao Swagger atualizado', () => {
 const swagger = JSON.parse(fs.readFileSync(path.resolve(process.cwd(),'swagger.json'),'utf8'));
 const getPaths = Object.entries(swagger.paths as Record<string,Record<string,unknown>>)
   .filter(([,methods])=>'get' in methods).map(([route])=>route).sort();
 expect(Object.keys(GET_ROUTES).sort()).toEqual(getPaths);
 const muts = Object.entries(swagger.paths as Record<string,Record<string,unknown>>)
   .flatMap(([route,methods])=>Object.keys(methods).filter(m=>['post','put','patch','delete'].includes(m))
     .map(m=>`${m.toUpperCase()} ${route}`)).sort();
 expect(MUTATION_ROUTES.map(m=>`${m.method} ${m.route}`).sort()).toEqual(muts);
 expect(getPaths).toHaveLength(108);
 expect(muts).toHaveLength(85);
});
