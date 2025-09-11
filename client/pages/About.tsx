import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div>
      <section className="border-b bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-muted-foreground">
            We are experienced and internationally certified dentist
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-10 py-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold">
            We are experienced and internationally certified dentist
          </h2>
          <p className="mt-3 text-muted-foreground">
            Our team includes dentists, dental hygienists, and clinical staff
            committed to delivering gentle and effective care.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6">
            {[
              [
                "24 Hours Ready",
                "Always ready for dental emergencies and urgent needs.",
              ],
              [
                "Accurate Diagnostics",
                "Digital x-rays & imaging for accurate treatment.",
              ],
              ["Pay in Installment", "Flexible payment options available."],
              [
                "Online Booking",
                "Schedule visits conveniently from your phone.",
              ],
              [
                "Work from Heart",
                "Compassionate care with attention to detail.",
              ],
              [
                "Regular Checkup",
                "Reminders and plans to maintain oral health.",
              ],
            ].map(([t, d]) => (
              <div
                key={t as string}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
              >
                <div className="h-10 w-10 rounded-xl bg-sky-100" />
                <h3 className="mt-3 font-semibold">{t as string}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {d as string}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="mx-auto max-w-md overflow-hidden rounded-[2rem] bg-muted/50">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2Ff2379660ff2841c6ad58fd53be33e73b"
              alt="Our team"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden h-24 w-24 rounded-3xl bg-sky-200/60 md:block" />
        </div>
      </section>

      <section className="container mx-auto py-12">
        <div className="rounded-3xl bg-purple-900 p-6 text-white md:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["EMERGENCY CALL", "331-870-6671"],
              ["MAKE AN APPOINTMENT", "331-870-6672"],
              ["SERVICE AREA", "331-870-6673"],
            ].map(([label, phone]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl bg-purple-800/70 px-6 py-4"
              >
                <div className="font-medium">{label}</div>
                <div className="text-lg font-semibold">{phone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-10 py-12 md:grid-cols-2 md:items-center">
        <div className="md:order-2">
          <div className="mx-auto aspect-[3/4] max-w-xs overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?q=80&w=1200&auto=format&fit=crop"
              alt="Happy client"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="md:order-1">
          <h2 className="text-3xl font-bold">What They Say About Us</h2>
          <p className="mt-4 text-lg font-semibold">
            Best dental clinic I've been to. Friendly staff, knowledgeable
            dentists, and the latest technology. Highly recommend!
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            Jessica William
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h3 className="text-xl font-semibold">Ready to visit?</h3>
          <p className="mt-2 text-muted-foreground">
            Choose a time that works for you. We are open 7 days a week.
          </p>
          <Button className="mt-4 rounded-full bg-teal-500 hover:bg-teal-600">
            Make an Appointment
          </Button>
        </div>
      </section>
    </div>
  );
}
