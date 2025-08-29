import { Skeleton } from "@/components/ui/skeleton";
import { AuthContext, useAuth } from "@/contexts/auth-provider";
// import { User } from "@/lib/auth";
import { use } from "react";

// interface GreetingProps {
//   user: User | null;
//   isLoading: boolean;
// }

// export function Greeting({ user, isLoading }: GreetingProps) {
export function Greeting() {
  // const authContext = use(AuthContext)
  // if (!authContext) return null
  // const { user, isLoading } = authContext

  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <Skeleton className="h-6 w-34 bg-gray-200" />;
  }

  return (
    <span className="text-lg font-medium">
      Hello, {user ? `${user.firstName} ${user.lastName}` : "Guest"}!
    </span>
  );
}