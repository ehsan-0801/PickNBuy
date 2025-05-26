import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect } from "react";

interface AuthContextType {
  user:
    | {
        id?: number | string;
        role?: string;
        name?: string | null;
        email?: string | null;
        profilePicture?: string;
      }
    | undefined;
  isAuthenticated: boolean;
  userType: string | undefined;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "loading") return;
    const isAuthPage = pathname ? /^\/auth\//.test(pathname) : false;
    if (!session && !isAuthPage) {
      router.push("/account");
    }
  }, [session, status, pathname, router]);

  if (status === "loading") {
    return <Loading />;
  }

  const value = {
    user: session?.user,
    isAuthenticated: !!session?.user,
    userType: session?.user?.role,
    loading: status === "unauthenticated",
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
