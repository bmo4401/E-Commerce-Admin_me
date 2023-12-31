import { SettingsForm } from './components/settings-form';
import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}
const SettingsPage: React.FC<SettingsPageProps> = async ({ params }) => {
  const userId = 'user_2SWjMgKpl1DFk3Srh9QIgpmRvfp';
  if (!userId) redirect('/sign-in');
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,

      userId,
    },
  });
  /* users can enter whatever they want */
  if (!store) redirect('/');
  return (
    <div className="flex-col h-screen pb-20 scrollbar-hidden overflow-y-auto">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};
export default SettingsPage;
