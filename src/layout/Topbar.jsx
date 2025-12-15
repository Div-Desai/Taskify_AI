import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Topbar() {
  return (
    <header className="h-14 border-b bg-white flex items-center justify-between px-4">
      <h1 className="text-lg font-semibold">Taskify AI</h1>

      <Avatar>
        <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg" />
      </Avatar>
    </header>
  );
}
