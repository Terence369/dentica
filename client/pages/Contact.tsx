import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Enter a valid phone"),
  message: z.string().min(10, "Tell us a bit more (min 10 chars)"),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    alert(`Thanks, ${values.name}! We will reach you at ${values.email}.`);
  };

  return (
    <div>
      <section className="border-b bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-muted-foreground">
            We'd love to hear from you
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-10 py-12 md:grid-cols-2">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
          >
            <div>
              <label className="mb-1 block text-sm font-medium">Name</label>
              <Input placeholder="Your name" {...register("name")} />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Phone</label>
                <Input placeholder="(555) 000-0000" {...register("phone")} />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Message</label>
              <Textarea
                rows={6}
                placeholder="How can we help?"
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>
            <Button
              disabled={isSubmitting}
              className="rounded-full bg-teal-500 hover:bg-teal-600"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
            {isSubmitSuccessful && (
              <p className="text-sm text-green-600">
                Message sent! We will get back to you shortly.
              </p>
            )}
          </form>
        </div>
        <div className="rounded-3xl bg-muted/50 p-2">
          <iframe
            title="Clinic location"
            width="100%"
            height="420"
            loading="lazy"
            style={{ border: 0, borderRadius: "1.5rem" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631531036!3d-37.81627974202196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2sus!4v1614310791234"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
