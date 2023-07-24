'use client';

import { SizeColumn, columns } from './columns';
import { ApiList } from '@/components/ui/api-list';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Billboard } from '@prisma/client';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

interface SizeClientProps {
   data: SizeColumn[];
}
export const SizeClient: React.FC<SizeClientProps> = ({ data }) => {
   const router = useRouter();
   const params = useParams();
   return (
      <>
         <div className="space-y-2">
            <Heading
               title={`Sizes (${data.length})`}
               description="Manage sizes for your store"
            />
            <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
               <Plus className="mr-2 h-4 w-4" />
               Add New
            </Button>
         </div>
         <Separator />
         <DataTable
            columns={columns}
            data={data}
            searchKey="name"
         />
         <Heading
            title="API"
            description="API calls for Sizes"
         />
         <Separator />
         <ApiList
            entityName="sizes"
            entityIdName="sizeId"
         />
      </>
   );
};
