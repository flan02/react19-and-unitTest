import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { User } from "@/lib/auth";
import { UserInfo } from "./user-info";
import { UserProfileLoader } from "./user-profile-loader";
import { AuthContext, useAuth } from "@/contexts/auth-provider";
import { use } from "react";

// interface UserProfileProps {
//   user: User | null;
//   isLoading: boolean;
// }

// - Conditionally calling use hook
interface UserProfileProps {
  disabled: boolean
}



// export function UserProfile({ user, isLoading }: UserProfileProps) {
// export function UserProfile() {
export function UserProfile({ disabled }: UserProfileProps) {
  // const authContext = use(AuthContext)
  // if (!authContext) return null
  // const { user, isLoading } = authContext

  if (disabled) return <p className="text-muted-foreground text-center">User profile is disabled</p>
  const { user, isLoading } = useAuth()


  if (isLoading) {
    return <UserProfileLoader />;
  }

  if (!user) {
    return (
      <Card className="mx-auto max-w-md">
        <CardContent>
          <p className="text-muted-foreground text-center">
            No user data available
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <UserInfo user={user} /> {/* We validate user is not null*/}
      </CardContent>
    </Card>
  );
}