import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export default function Dashboard() {
  return (
    <div className="flex flex-col max-w-[1250px] lg:ml-0 lg:mr-auto p-6 w-full mx-auto gap-6">
      <div className="relative w-full">
        <Search className="absolute left-3 top-[18px] transform -translate-y-1/2 h-4 w-4 text-(--sidebar-border)" />
        <Input
          type="text"
          placeholder="search..."
          className="pl-10 text-(--sidebar-border) placeholder:text-(--sidebar-border) bg-(--bg-light) w-full border-(--sidebar-border)"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold">Your Capsules</h1>
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2"></div>
      </div>
    </div>
  );
}
