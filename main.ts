import { z } from 'npm:@hono/zod-openapi'

const mySchema = z.string().openapi('hello')
