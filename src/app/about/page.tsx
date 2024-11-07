import Header from '../components/header';
import Footer from '../components/footer';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center p-4">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-center max-w-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, excepturi.
           Laboriosam placeat assumenda, distinctio neque voluptatem repudiandae voluptatibus molestiae eos quisquam non. Non, vero! Maxime tenetur explicabo accusantium ratione eligendi.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
