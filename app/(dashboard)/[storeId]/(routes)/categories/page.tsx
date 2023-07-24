import { CategoryClient } from './components/client';
import { CategoryColumn } from './components/columns';
import prismadb from '@/lib/prismadb';
import { format } from 'date-fns';

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
   const categories = await prismadb.category.findMany({
      where: {
         storeId: params.storeId,
      },
      include: {
         billboard: true,
         _count: {
            select: {
               products: true,
            },
         },
      },
      orderBy: {
         createdAt: 'desc',
      },
   });
   console.log('🚀 ~ categories:', categories);

   const formattedCategories: CategoryColumn[] = categories.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item._count.products,
      billboardLabel: item.billboard.label,
      createdAt: format(item.createdAt, 'MMMM do, yyyy'),
   }));
   return (
      <div className="flex-col">
         <div className="flex-1 space-y-4 p-8 pt-6">
            <CategoryClient data={formattedCategories} />
         </div>
      </div>
   );
};
export default CategoriesPage;
