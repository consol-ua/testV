import { MainHeader } from '@/components/headers/MainHeader';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <MainHeader />

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
    </div>
  );
}
