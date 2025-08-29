import { Greeting } from "@/components/greeting";
import { SignOutButton } from "@/components/sign-out-button";
import { User } from "@/lib/auth";

// interface NavbarProps {
//   user: User | null;
//   isLoading: boolean;
//   onSignOut: () => void;
// }

// export function Navbar({ user, isLoading, onSignOut }: NavbarProps) {
export function Navbar() {

  return (
    <nav className="border-b p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* <Greeting user={user} isLoading={isLoading} /> */}
        {/* <SignOutButton user={user} isLoading={isLoading} onSignOut={onSignOut} /> */}
        {/* WITH CONTEXT */}
        <Greeting />
        <SignOutButton />
      </div>
    </nav>
  );
}