import type { Generated } from 'kysely';

export interface Database {
    table: MyTable
}

export interface MyTable {
    id: Generated<number>
}