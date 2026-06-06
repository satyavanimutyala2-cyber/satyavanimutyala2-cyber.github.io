import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactSection() {
  const { toast } = useToast();
  const submitMutation = useSubmitContact();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitMutation.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast({
            title: "MESSAGE TRANSMITTED",
            description: "Thanks for reaching out. I'll get back to you soon.",
          });
          form.reset();
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "TRANSMISSION FAILED",
            description: "There was a problem sending your message. Please try again.",
          });
        },
      }
    );
  }

  return (
    <section id="contact" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-background">
              Let's <span className="text-primary">Talk</span>
            </h2>
            <p className="font-mono text-lg text-muted/80 mb-8 max-w-md">
              Currently open for new opportunities, freelance projects, and exciting collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6 font-mono">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-background/20 bg-background/5">
                  <span className="text-primary font-bold">@</span>
                </div>
                <div>
                  <div className="text-sm text-muted uppercase font-bold tracking-widest">Email</div>
                  <a href="mailto:hello@satya.dev" className="text-xl hover:text-primary transition-colors">hello@satya.dev</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-background/20 bg-background/5">
                  <span className="text-primary font-bold">IN</span>
                </div>
                <div>
                  <div className="text-sm text-muted uppercase font-bold tracking-widest">Social</div>
                  <a href="#" className="text-xl hover:text-primary transition-colors">linkedin.com/in/satya</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background text-foreground p-8 md:p-12 relative border-4 border-primary">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-background -translate-x-1 -translate-y-1"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-background translate-x-1 -translate-y-1"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-background -translate-x-1 translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-background translate-x-1 translate-y-1"></div>

            <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 border-b-2 border-foreground pb-4">
              Send a Message
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono uppercase font-bold tracking-widest text-xs">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className="rounded-none border-2 border-foreground bg-transparent focus-visible:ring-0 focus-visible:border-primary font-mono"
                        />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono uppercase font-bold tracking-widest text-xs">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          type="email"
                          {...field} 
                          className="rounded-none border-2 border-foreground bg-transparent focus-visible:ring-0 focus-visible:border-primary font-mono"
                        />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono uppercase font-bold tracking-widest text-xs">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we work together?" 
                          className="min-h-[150px] rounded-none border-2 border-foreground bg-transparent focus-visible:ring-0 focus-visible:border-primary font-mono resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={submitMutation.isPending}
                  className="w-full h-14 rounded-none border-2 border-foreground bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-mono uppercase font-bold tracking-widest text-lg transition-colors group"
                >
                  {submitMutation.isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : (
                    <>
                      Transmit <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
