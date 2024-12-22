export const metadata = {
  title: "Nepal mart:Auth",
  description: "Auth",
};

const Authlayout = ({ children }) => {
  return (
    <div className={`h-screen w-full flex justify-center items-center`}>
      {children}
    </div>
  );
};

export default Authlayout;
