"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const AuthFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(6) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const formSchema = AuthFormSchema(type);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        console.log("sign-up", values);
      } else {
        console.log("sign-in", values);
      }
    } catch (error) {
      console.log(error);
      toast.error(`there was an error${error}`);
    }
  }

  const isSignIn = type === "sign-in";

  return (
    <div className="lg:min-w-[566px]">
      <div className="flex flex-col card gap-6 px-10 py-14">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">SpeakWise</h2>
        </div>
        <h3>Practice English Speaking with AI</h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && <p>name</p>}
            <p>email</p>
            <p>password</p>
            <Button className="btn" type="submit">
              {isSignIn ? "Sign in" : "Create an account"}
            </Button>
          </form>
        </Form>
        <p className="text-center">
          {isSignIn ? "No account yet? " : "Have an account already"}
          <Link
            href={!isSignIn ? "/sign-in" : "sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {isSignIn ? "Sign-up" : "Sign-in"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
