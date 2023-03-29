import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import Vector from './components/Vector';
import useTheme from './store/Theme';

export default function App() {
  const { theme, updateTheme } = useTheme((state) => state);
  console.log(theme.first);
  return (
    <>
      <SideMenu />
      <div>
        <div>
          <button onClick={updateTheme({ first: 'red', second: '#3d4b92', third: '#a49eff', fourth: '#fff', fifth: '#ff9a66' })}>Change</button>
        </div>
        asdasdasda
      </div>
      <div className={`bg-gradient-to-b  bg-fixed from-[${theme.first}] to-[${theme.second}]`}>
        <Vector />
        <Navbar />
        <main className="ml-24">
          {/* Section 1 */}
          <section className={`min-h-screen text-[${theme.fourth}]`}>
            <div className="flex justify-between items-end relative  ml-20 pt-32">
              <div className="">
                <div className="mb-5">
                  <h4 className={`text-7xl text-[${theme.third}]`}>Front End</h4>
                  <h4 className="text-7xl ">Developer</h4>
                </div>
                <div className="max-w-[300px] mb-2">
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quis iusto dolores illo deserunt accusamus deleniti tempora veniam magni molestias alias dolore eum quos placeat temporibus necessitatibus, culpa corporis
                    voluptatibus laboriosam?
                  </p>
                </div>

                <button className="bg-[#3d4b92] w-56 h-10">Lorem</button>
              </div>
              {/* Pembatas */}
              <div className="relative">
                <div className="flex flex-col w-96 h-80 flex-wrap overflow-x-hidden mb-2">
                  <div className={`h-80 w-56 bg-[${theme.fifth}]`}></div>
                  <div className={`h-80 w-56 bg-[${theme.second}]`}></div>
                  <div className={`h-80 w-56 bg-[${theme.fifth}]`}></div>
                  <div className={`h-80 w-56 bg-[${theme.second}]`}></div>
                </div>
                <div className="mb-2">
                  <h4 className="text-xl mb-2">Hanggitya Raharjo</h4>
                  <p className="w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, consequuntur!</p>
                </div>
                <button className={`bg-[${theme.first}] w-56 h-10 relative group hover:bg-[${theme.fifth}] transition duration-150`}>
                  Lorem
                  <span className={`absolute top-0 right-0 h-10 w-10 bg-[${theme.fifth}] group-hover:bg-[${theme.first}]`}></span>
                </button>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="min-h-screen text-white">
            <div className="ml-20">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia iste accusamus, ratione tempora quae asperiores sunt est officiis illo, corporis quis repudiandae facilis, quisquam molestias nesciunt laboriosam fugiat in!
                Unde quod maxime totam ratione architecto doloremque officiis nobis? Rem ut officiis est distinctio ex qui id nostrum ipsam reiciendis.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="min-h-screen text-white">
            <div className="ml-20">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia iste accusamus, ratione tempora quae asperiores sunt est officiis illo, corporis quis repudiandae facilis, quisquam molestias nesciunt laboriosam fugiat in!
                Unde quod maxime totam ratione architecto doloremque officiis nobis? Rem ut officiis est distinctio ex qui id nostrum ipsam reiciendis.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
