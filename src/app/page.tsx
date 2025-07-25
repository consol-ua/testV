import { MainHeader } from '@/components/headers/MainHeader';
import { MainSidebar } from '@/components/sidebar/MainSidebar';

export default function Home() {
  return (
    <div className="h-full w-full relative">
      <MainSidebar />

      <div className="flex flex-col min-h-screen p-8 pb-10 gap-16 sm:p-10">
        <MainHeader />

        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          main content
        </main>
      </div>
    </div>
  );
}
