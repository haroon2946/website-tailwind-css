import Header from '../components/header'
import Footer from '../components/footer';


const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-center max-w-md">
          Feel free to contact no 1234567.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
