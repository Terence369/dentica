import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const qas = [
    [
      "What are some common dental services?",
      "Cleanings, fillings, crowns, orthodontics, bridges, implants.",
    ],
    [
      "What should I do if I have a dental emergency?",
      "Contact us immediately. We offer same-day emergency appointments.",
    ],
    [
      "How can I improve my oral health?",
      "Brush twice daily, floss, limit sugar, and visit the dentist regularly.",
    ],
    [
      "Are dental procedures painful?",
      "We use modern anesthesia and techniques to keep you comfortable.",
    ],
  ];
  return (
    <div>
      <section className="border-b bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold">FAQ</h1>
          <p className="mt-2 text-muted-foreground">
            Question with a "Yes" response!
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-10 py-12 md:grid-cols-2">
        <div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-xl font-semibold">Common Questions</h2>
            <Accordion type="single" collapsible className="mt-4 divide-y">
              {qas.map(([q, a], i) => (
                <AccordionItem key={i} value={`q${i}`}>
                  <AccordionTrigger className="text-left">{q}</AccordionTrigger>
                  <AccordionContent>{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="rounded-3xl bg-purple-900 p-6 text-white">
          <h3 className="text-lg font-semibold">
            Get online access to ask the doctor 24/7.
          </h3>
          <p className="mt-2 text-white/80">
            Have a health concern? Chat with a doctor and get the answers you
            need, anywhere.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["EMERGENCY CALL", "331-870-6671"],
              ["MAKE AN APPOINTMENT", "331-870-6672"],
              ["SERVICE AREA", "331-870-6673"],
              ["ONLINE BOOKING", "331-870-6674"],
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
    </div>
  );
}
