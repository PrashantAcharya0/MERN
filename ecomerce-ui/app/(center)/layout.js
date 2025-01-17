import Header from '../../components/Header';
export const metadata = {
  title: 'Add And Edit Product',
  description: 'Login and register page',
};

const CenterLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-12  justify-center items-center">
      <Header />
      {children}
    </div>
  );
};

export default CenterLayout;
