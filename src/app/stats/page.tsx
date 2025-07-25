import { StatsContent } from '@/components/content/StatsContent';
import { MainHeader } from '@/components/headers/MainHeader';
import { MainSidebar } from '@/components/sidebar/MainSidebar';

export default function Stats() {
  return (
    <div className="h-full w-full relative">
      <div className="flex flex-col min-h-screen p-6 pb-10 gap-16 sm:p-10">
        <MainHeader />

        <StatsContent />
      </div>

      <MainSidebar />
    </div>
  );
}
