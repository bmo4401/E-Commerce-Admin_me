'use client';

import { CellAction } from './cell-action';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type SizeColumn = {
   id: string;
   name: string;
   value: string;
   createdAt: string;
};

export const columns: ColumnDef<SizeColumn>[] = [
   {
      accessorKey: 'name',
      header: 'Name',
   },
   {
      accessorKey: 'value',
      header: 'Value',
   },

   { accessorKey: 'createdAt', header: 'Date' },
   {
      id: 'actions',
      cell: ({ row }) => <CellAction data={row.original} />,
   },
];
