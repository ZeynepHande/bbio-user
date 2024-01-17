import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "@/repositories/user_repos";
import { User } from "@/models/User";
import axios from "axios";
export const AddUser = () => {
  const queryClient = useQueryClient();
  const formSchema = z.object({
    name: z
      .string()
      .min(2, { message: "Username must be at least 2 characters." })
      .max(50, { message: "Username must be less than 50 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    gender: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const mutation = useMutation({
    mutationFn: (user: User) => createUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      window.history.back();
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    //mutation.mutate({ ...values, status: "active" });
    console.log(values);
    axios.post("https://gorest.co.in/public-api/users",{...values,status:"active"},{headers:{Authorization:"Bearer ca55474da70e274a79dc469722553046f22ca2d4356e11e644568ce2c8d1496b"}});
  }
  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input placeholder="ahmet" {...field} />
              </FormControl>
              <FormDescription>This is the users name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="ahmet" {...field} />
              </FormControl>
              <FormDescription>Email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Input placeholder="ahmet" {...field} />
              </FormControl>
              <FormDescription>gender.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

// export type User = {
//   id: number;
//   name: string;
//   email: string;
//   gender: string;
//   status: string;
// };
