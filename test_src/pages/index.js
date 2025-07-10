import { v2 } from './v2'
import { v0 } from './v0'
import { v2Projects } from './v2-projects'
import { v2Contacts } from './v2-contacts'
import { main } from './main'
export default {
  '/v2': v2,
  '/v0': v0,
  '/v2-projects': v2Projects,
  '/v2-contacts': v2Contacts,
  '/': main
}
