import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-primary-50">
            Practice Your English speaking with Ai powered Mock-interviewer!
          </h2>
          <p className="text-lg text-white">
            Improve speaking skills like your talking to real person!{" "}
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Practice interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot"
          width={400}
          height={400}
          className="max-sm:hidden"
        ></Image>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your interviews</h2>
        <div className="interviews-section">
          <p>you haven't taken any interviews yet!</p>
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an interview</h2>
        <div className="interviews-section">
          <p>There are no interviews available!</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
