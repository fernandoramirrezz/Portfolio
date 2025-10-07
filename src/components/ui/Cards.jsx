'use client';

export default function Cards() {
  return (
    <section id="home" className="">
      <div className="max-w-[900px] gap-4 grid grid-cols-12 grid-rows-1 px-8 mx-auto">
          

        <div className="relative col-span-12 sm:col-span-7 h-[300px] overflow-hidden rounded-xl shadow-md">
          <img
            src="https://images.unsplash.com/photo-1619069991208-c132aa634555?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1hbiUyMGRhcmt8ZW58MHx8MHx8fDA%3D"
            alt="Sleep checklist"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 text-white">
            <p className="text-xs uppercase font-bold text-white/60">Your day your way</p>
            <h4 className="text-xl font-medium text-white/90">Your place to be a Man</h4>
          </div>
          <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm p-4 flex justify-between items-center border-t border-white/10">
            <div className="flex items-center gap-2">
              <img
                src="IMG_1057.JPG"
                alt="App icon"
                className="w-10 h-11 rounded-xl bg-black"
              />
              <div>
                <p className="text-xs text-white/60">Mental Health App</p>
                <p className="text-xs text-white/60">Get heard and seen.</p>
              </div>
            </div>
            <button className="bg-white text-black text-xs px-4 py-1 rounded-full">Get App</button>
          </div>
        </div>

      </div>
    </section>
  );
}
