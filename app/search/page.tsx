import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const page: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-10">
      <Input className="w-50" placeholder="Найдите пользователей" />
      <Button className="bg-gray-500 hover:bg-white hover:text-black cursor-pointer text-white transition-all">Search</Button>
    </div>
  );
};

export default page;
