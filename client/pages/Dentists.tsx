export default function Dentists() {
  const team = [
    ["Reza Mahendra", "Dentist", "men", 20],
    ["Merliana Sari", "Dentist", "women", 21],
    ["Daniel Thompson", "Dentist", "men", 22],
    ["James Brown", "Dentist", "men", 23],
    ["David Anderson", "Dentist", "men", 24],
  ];
  return (
    <div>
      <section className="border-b bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto py-12" style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F3d7be5d58c814a05a5ecf6be25fba197)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
          <h1 className="text-4xl font-bold">Dentist</h1>
          <p className="mt-2 text-muted-foreground"><span style={{ color: 'rgb(0,0,0)' }}>Our Expert Team</span></p>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map(([name, role, gender, id]) => (
            <div
              key={name as string}
              className="flex flex-col items-center rounded-3xl bg-sky-50 p-8 text-center ring-1 ring-black/5"
            >
              <div className="mb-4 h-28 w-28 overflow-hidden rounded-full bg-white">
                <img
                  src={
                    gender === 'women' && id === 21
                      ? 'https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F36d78b180201420cba282f5dfb431246'
                      : gender === 'men' && id === 23
                      ? 'https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2Fb12a9ec4c51d408eaab261271bc83b2f'
                      : gender === 'men' && id === 24
                      ? 'https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F8fdbf2d19b014834b741dad63802441b'
                      : `https://randomuser.me/api/portraits/${gender as string}/${id as number}.jpg`
                  }
                  alt={name as string}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="font-semibold">{name as string}</div>
              <div className="text-sm text-muted-foreground">
                {role as string}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: 'rgba(224, 242, 254, 1)' }} className="py-8">
        <div className="container mx-auto grid gap-4 text-white md:grid-cols-3">
          {[
            ["EMERGENCY CALL", "331-870-6671"],
            ["MAKE AN APPOINTMENT", "331-870-6672"],
            ["SERVICE AREA", "331-870-6673"],
          ].map(([label, phone]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-2xl px-6 py-4"
              style={{ backgroundColor: '#14b8a6' }}
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
