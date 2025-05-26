import { usePathname } from "next/navigation";
import { useAuth } from "./AuthContext";
import Loading from "@/components/Loading";
import { ReactNode } from "react";

export default function ProtectedLayout({
  children,
  requiredRole,
}: {
  children: ReactNode;
  requiredRole?: string;
}) {
  const { isAuthenticated, userType, loading } = useAuth();
  const pathname = usePathname();

  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return null;
  }

  if (requiredRole && userType !== requiredRole) {
    return null;
  }

  return children;
}
