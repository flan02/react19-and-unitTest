import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AuthContext, useAuth } from "@/contexts/auth-provider";
import { User } from "@/lib/auth";
import { use } from "react";

// interface SignOutButtonProps {
//   user: User | null;
//   isLoading: boolean;
//   onSignOut: () => void;
// }

// export function SignOutButton({user,isLoading,onSignOut}: SignOutButtonProps) {
export function SignOutButton() {
  // const authContext = use(AuthContext)
  // if (!authContext) return null
  // const { user, isLoading, signOut } = authContext
  const { user, isLoading, signOut } = useAuth();

  if (isLoading) {
    return <Skeleton className="h-9 w-23 bg-gray-200" />;
  }

  if (!user) {
    return null;
  }

  return (
    <Button onClick={signOut} variant="outline">
      Sign Out
    </Button>
  );
}