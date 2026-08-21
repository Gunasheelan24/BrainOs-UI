import React from "react";
import { companyLogo } from "@/assets/img";

const Aside: React.FC = () => {
  return (
    <main className="">
      <section className="border-b">
        <img src={companyLogo} alt="company-logo" className="w-45 mb-2" />
      </section>
      <section className="p-2">
        <p className="opacity-50 mb-2">Home</p>
        <ol className="flex flex-col gap-2 [&>li]:p-1 [&>li]:rounded-sm">
          <li className="bg-[#f7efff]">Recent Notes</li>
          <li>Recently Viewed</li>
          <li>Quick Search</li>

          <li>Continue Learning</li>
        </ol>
      </section>
    </main>
  );
};

export default Aside;
