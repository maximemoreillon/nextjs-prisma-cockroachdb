"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { createItemAction } from "@/actions/items";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function NewInput() {
  const [state, dispatch, pending] = useActionState(
    createItemAction,
    undefined
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  return (
    <>
      <h2 className="text-2xl">Create new item</h2>
      <Form {...form}>
        <form action={dispatch} className="space-y-8 my-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="banana" {...field} />
                </FormControl>
                <FormDescription>Name of the item</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={pending} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
