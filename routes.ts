import { Router } from 'https://deno.land/x/oak/mod.ts'
import { index, show, create, update, destroy } from './controllers/products.ts'

const router = new Router()

router.get('/api/v1/products', index)
    .get('/api/v1/products/:id', show)
    .post('/api/v1/products', create)
    .put('/api/v1/products/:id', update)
    .delete('/api/v1/products/:id', destroy)

export default router