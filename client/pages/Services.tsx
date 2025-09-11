import { Link } from "react-router-dom";

export default function Services() {
  const items = [
    [
      "Teeth Checkup",
      "Routine exams and preventive care.",
      "https://images.unsplash.com/photo-1588771930297-620c366b6c16?q=80&w=1080&auto=format&fit=crop",
    ],
    [
      "Teeth Whitening",
      "Brighten your smile safely.",
      "https://images.unsplash.com/photo-1622206151225-20cc4b00a0ff?q=80&w=1080&auto=format&fit=crop",
    ],
    [
      "Dental Braces",
      "Straighten and align teeth.",
      "https://images.unsplash.com/photo-1588773846626-2f9b6fac1b0d?q=80&w=1080&auto=format&fit=crop",
    ],
    [
      "Teeth Implants",
      "Replace missing teeth.",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a8?q=80&w=1080&auto=format&fit=crop",
    ],
    [
      "Dental Filling",
      "Repair damaged teeth.",
      "https://images.unsplash.com/photo-1588774069260-9b0b2e6a2f1a?q=80&w=1080&auto=format&fit=crop",
    ],
    [
      "Cosmetic",
      "Enhance your smile.",
      "https://images.unsplash.com/photo-1581594693700-8900b9f4247f?q=80&w=1080&auto=format&fit=crop",
    ],
  ];
  return (
    <div>
      <section className="border-b bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto py-12" style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F7fd0848718264e05af1f54a4f893b587)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
          <h1 className="text-4xl font-bold">Our Service</h1>
          <p className="mt-2 text-muted-foreground"><span style={{ color: 'rgb(0,0,0)' }}>Keep Your Smile Clean &amp; Shine</span></p>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, desc, src]) => (
            <div
              key={title as string}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={src as string}
                  alt={title as string}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2Faaf60de777874a48be81d292fcd529ca)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{title as string}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {desc as string}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto grid gap-10 py-12 md:grid-cols-2 md:items-center">
        <div className="md:order-2">
          <div className="mx-auto aspect-[3/4] max-w-xs overflow-hidden rounded-[2rem]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F7eb0d38b9b744bef98b5ccd4f565460c"
              alt="Happy client"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="md:order-1">
          <h2 className="text-3xl font-bold">
            "Best dental clinic I've been to."
          </h2>
          <p className="mt-4 text-lg font-semibold">
            Friendly staff, knowledgeable dentists, and the latest technology.
            Highly recommend!
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: 'rgba(20, 184, 166, 0.35)' }} className="py-8">
        <div className="container mx-auto grid gap-4 text-white md:grid-cols-3">
          {[
            ["EMERGENCY CALL", "331-870-6671"],
            ["MAKE AN APPOINTMENT", "331-870-6672"],
            ["SERVICE AREA", "331-870-6673"],
          ].map(([label, phone]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-2xl px-6 py-4"
              style={{ backgroundColor: 'rgba(20, 184, 166, 1)' }}
            >
              <div className="font-medium">{label}</div>
              <div className="text-lg font-semibold">{phone}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
