export default function Dentists() {
  const team = [
    ['Reza Mahendra','Dentist','men',20],
    ['Merliana Sari','Dentist','women',21],
    ['Daniel Thompson','Dentist','men',22],
    ['James Brown','Dentist','men',23],
    ['David Anderson','Dentist','men',24],
  ];
  return (
    <div>
      <section className="border-b bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold">Dentist</h1>
          <p className="mt-2 text-muted-foreground">Our Expert Team</p>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map(([name,role,gender,id]) => (
            <div key={name as string} className="flex flex-col items-center rounded-3xl bg-sky-50 p-8 text-center ring-1 ring-black/5">
              <div className="mb-4 h-28 w-28 overflow-hidden rounded-full bg-white">
                <img src={`https://randomuser.me/api/portraits/${gender as string}/${id as number}.jpg`} alt={name as string} className="h-full w-full object-cover"/>
              </div>
              <div className="font-semibold">{name as string}</div>
              <div className="text-sm text-muted-foreground">{role as string}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-purple-900 py-8">
        <div className="container mx-auto grid gap-4 text-white md:grid-cols-3">
          {[
            ['EMERGENCY CALL','331-870-6671'],
            ['MAKE AN APPOINTMENT','331-870-6672'],
            ['SERVICE AREA','331-870-6673'],
          ].map(([label,phone]) => (
            <div key={label} className="flex items-center justify-between rounded-2xl bg-purple-800/70 px-6 py-4">
              <div className="font-medium">{label}</div>
              <div className="text-lg font-semibold">{phone}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
