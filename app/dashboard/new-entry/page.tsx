"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { getCombinedISO } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { capsuleSchema, type TCapsuleSchema } from "@/lib/type";
import { useRouter } from "next/navigation";
import { arr } from "@/lib/type";
const NewCapsuleForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(capsuleSchema),
    defaultValues: {
      title: "",
      description: "",
      unlockDate: new Date(),
      unlockTime: "12:00",
    },
  });
  const onSubmit = (data: TCapsuleSchema) => {
    const obj = {
      ...data,
      unlockDate: getCombinedISO(unlockDate, unlockTime),
      unlockTime: null,
    };
    arr.push(obj);
    router.push("/dashboard");
    form.reset();
  };

  const unlockDate = form.watch("unlockDate");
  const unlockTime = form.watch("unlockTime");

  return (
    <div className="flex flex-col max-w-4xl p-8 w-full mx-auto gap-8 h-[100vh]">
      <div className="font-bold text-3xl text-[var(--text-dark)] mb-2">
        Send a message to your future self:
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--text-dark)] font-semibold">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. My future goals"
                    {...field}
                    className="border border-[var(--sidebar-border)] placeholder:text-[var(--text-secondary)] bg-[var(--card-bg)] text-[var(--text-dark)] rounded-lg focus:border-[var(--primary-accent)] focus:ring-2 focus:ring-[var(--primary-accent)]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--text-dark)] font-semibold">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="A description for your time capsule"
                    className="resize-none h-[150px] border border-[var(--sidebar-border)] placeholder:text-[var(--text-secondary)] bg-[var(--card-bg-muted)] text-[var(--text-dark)] rounded-lg focus:border-[var(--primary-accent)] focus:ring-2 focus:ring-[var(--primary-accent)]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col md:flex-row gap-6">
            <FormField
              control={form.control}
              name="unlockDate"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full md:w-1/2">
                  <FormLabel className="text-[var(--text-dark)] font-semibold">
                    Date of unlock
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal border border-[var(--sidebar-border)] bg-[var(--card-bg)] text-[var(--text-dark)] rounded-lg focus:border-[var(--primary-accent)] focus:ring-2 focus:ring-[var(--primary-accent)]",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 outline-none"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        className="text-(--text-secondary) bg-white border-(--text-secondary) border rounded-md"
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription className="text-[var(--text-secondary)]">
                    This date is used to calculate when your message unlocks.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="unlockTime"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full md:w-1/2">
                  <FormLabel className="text-[var(--text-dark)] font-semibold">
                    Time of unlock
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal border border-[var(--sidebar-border)] bg-[var(--card-bg)] text-[var(--text-dark)] rounded-lg focus:border-[var(--primary-accent)] focus:ring-2 focus:ring-[var(--primary-accent)]",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? field.value : <span>Pick a time</span>}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-4 bg-[var(--card-bg)] border border-[var(--sidebar-border)] rounded-lg shadow-md flex items-center justify-center"
                      align="start"
                    >
                      <Input
                        type="time"
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="border border-[var(--sidebar-border)] bg-[var(--card-bg)] text-[var(--text-dark)] rounded-lg px-3 py-2 focus:border-[var(--primary-accent)] focus:ring-2 focus:ring-[var(--primary-accent)] outline-none text-lg"
                        style={{ minWidth: 120 }}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription className="text-[var(--text-secondary)]">
                    Select the time your message will unlock.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="bg-[var(--primary-accent)] hover:bg-[var(--primary-accent-hover)] text-white font-semibold rounded-lg px-6 py-2 shadow-md"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewCapsuleForm;
