import Header from './components/header';
import Footer from './components/footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-center max-w-md">
          This is the Home page. Explore our About and Contact pages to learn more.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
