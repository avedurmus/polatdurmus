import { type SchemaTypeDefinition } from 'sanity'
import { practiceArea } from './practiceArea'
import { post } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [practiceArea, post],
}
