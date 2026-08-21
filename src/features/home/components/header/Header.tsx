import React from "react";
import dayjs from "dayjs";
import CustomSelect from "@/components/custom-ui/CustomSelect";
import { Brain, Bell, UserRoundPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const HomeHeader: React.FC = () => {
  // Get current day
  const getCurrentDay = dayjs().format("ddd");

  // Get current date
  const getCurrentDate = dayjs().format("MMMM D");

  // Get current time
  const getCurrentTime = dayjs().format("h:mm A");

  return (
    <main className="flex items-center justify-between mx-3 mt-4">
      <section>
        <CustomSelect
          icons={<Brain />}
          placeHolderName="GPT-5.0"
          items={[
            { label: "GPT 4.0", value: "GPT 4.0" },
            { label: "GPT 3.0", value: "GPT 3.0" },
          ]}
        />
      </section>

      <section className="flex items-center gap-4">
        <ol className="flex gap-2 items-center text-[0.9rem]">
          <li className="text-mist-400">
            {getCurrentDay}, {getCurrentDate}
          </li>
          <li>{getCurrentTime}</li>
        </ol>

        <Badge
          className="h-9 w-9 [&>svg]:size-4! text-[#7C3AED] border-1 border-violet-500 cursor-pointer"
          variant="outline"
        >
          <Bell />
        </Badge>

        <Button className="w-27 h-9 px-16 bg-[#7C3AED] cursor-pointer hover:bg-[#b93aff]">
          <UserRoundPlus />
          Invite Team
        </Button>
      </section>
    </main>
  );
};

export default HomeHeader;
