import { MainContent } from '@/components/content/MainContent';
import { MainHeader } from '@/components/headers/MainHeader';
import { MainSidebar } from '@/components/sidebar/MainSidebar';

export default function Home() {
  return (
    <div className="h-full w-full relative">
      <div className="flex flex-col min-h-screen p-6 pb-14 gap-16 lg:p-10">
        <MainHeader />

        <MainContent />
      </div>

      <MainSidebar />
    </div>
  );
}
