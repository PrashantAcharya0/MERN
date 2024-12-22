export const metadata = {
  title: "Auth",
  description: "Login and register page",
};

const Authlayout = ({ children }) => {
  return (
    <div className={`h-screen w-full flex justify-center items-center`}>
      {children}
    </div>
  );
};

export default Authlayout;
