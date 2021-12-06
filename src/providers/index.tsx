import { ReactNode } from "react";

import { UserProvider } from "./UserInfo";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
