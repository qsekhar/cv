import { GoogleAnalytics } from "nextjs-google-analytics";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics />
      {children}
    </>
  );
};

export default App;