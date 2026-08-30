import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectDetailSkeleton from '@/components/ProjectDetailSkeleton';

export default function ProjectDetailLoading() {
  return (
    <>
      <Header />
      <main>
        <ProjectDetailSkeleton />
      </main>
      <Footer />
    </>
  );
}
