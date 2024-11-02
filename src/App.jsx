import profil from "./assets/images/Foto.png";
import instagram from "./assets/images/instagram.png";
import github from "./assets/images/github.png";
import hr from "./assets/images/HR.png";
import fire from "./assets/images/fire.gif";

function App() {

  return (
    <>
      <header id="home" className="p-6 max-w-full h-screen">
        <div className="flex justify-center">
          <nav className="fixed z-50 flex items-center bg-white h-[80px] w-[1000px] rounded-3xl border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black">
            <div className="ms-8 h-full w-fit flex justify-start items-center">
              <img className="w-16 -mt-6" src={fire} alt="" />
            </div>
            <ul className="flex w-full justify-center flex-row gap-32">
              <li><p className="size-6 font-HelveticaNeueRoman font-bold"><a href="#home">HOME</a></p></li>
              <li><p className="size-6 font-HelveticaNeueRoman font-bold"><a href="#project">PROJECTS</a></p></li>
              <li><p className="size-6 font-HelveticaNeueRoman font-bold"><a href="#skill">SKILLS</a></p></li>
              <li><p className="size-6 font-HelveticaNeueRoman font-bold"><a href="#contact">CONTACT</a></p></li>
            </ul>
          </nav>
        </div>

        <section className="flex w-full mt-24 h-5/6">
          <div className="h-full w-1/2 flex items-center">
            <div className="bg-[#D9BBF8] h-[310px] w-[450px] mt-6 rounded-3xl border-2 border-b-[10px] hover:border-b-2 hover:ease-in-out duration-300 border-black ms-12">
              <div className="flex justify-center relative -inset-y-11">
                <div className="bg-black w-[90px] h-[90px] rounded-full flex justify-center items-center">
                  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" stroke-width="1.5"><path d="M9.5 14.5L3 21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.00007 9.48528L14.1925 18.6777L15.8895 16.9806L15.4974 13.1944L21.0065 8.5211L15.1568 2.67141L10.4834 8.18034L6.69713 7.78823L5.00007 9.48528Z" fill="#ffffff" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
              </div>
              <div className="flex h-1/2 p-4 justify-start items-center flex-col gap-4">
                <p className="text-2xl font-mclaren cursor-default">Heii.. I am</p>
                <h1 className="text-5xl font-luckiest cursor-default">Yoga Sugiono</h1>
              </div>
            </div>

            <div className="bg-[#FCDF78] h-[8rem] w-72 absolute inset-x-[28rem] inset-y-48 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black">
              <div className="flex justify-center relative -inset-y-11">
                <div className="bg-black w-[76px] h-[76px] rounded-full flex justify-center items-center">
                  <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" stroke-width="1.5"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" fill="#ffffff" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
              </div>
              <div className="flex justify-start items-center flex-col -mt-5">
                <p className="text-2xl font-mclaren cursor-default">UIUX Designer</p>
              </div>
            </div>

            <div className="bg-[#857E81] h-40 w-96 absolute inset-x-[20rem] inset-y-[33rem] rounded-3xl border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black">
              <div className="flex justify-center relative -inset-y-11">
                <div className="bg-black w-[76px] h-[76px] rounded-full flex justify-center items-center">
                  <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" stroke-width="1.5"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" fill="#ffffff" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
              </div>
              <div className="flex justify-start items-center flex-col -mt-5">
                <p className="text-2xl font-firaCode text-center text-white cursor-default">Frontend Websites<br/>Developer</p>
              </div>
            </div>
            
          </div>
          <div className="h-full w-1/2 flex items-center justify-end flex-col">
            <div className="flex justify-center">
              <img className="z-10 w-8/12 relative inset-y-7" src={profil} alt="" />
            </div>
            <div className="z-20 flex items-center justify-center bg-white h-16 w-fit px-8 rounded-full border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black">
                <p className="text-lg font-HelveticaNeueRoman text-center cursor-default">Let’s make a masterpieces design and code with me.</p>
            </div>
            <div className="z-0 w-[30rem] h-[30rem] bg-white absolute rounded-full shadow-2xl shadow-white opacity-50"></div>
            <div className="z-20 absolute inset-x-[76.5rem] inset-y-[18rem] flex items-center justify-center bg-white h-14 w-fit px-6 rounded-full border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black">
                <p className="text-l font-firaCode text-center cursor-default">console.log('HAH?')</p>
            </div>

            <div className="z-20 absolute inset-x-[52.5rem] inset-y-[27rem] flex items-center justify-center bg-white h-14 w-fit px-6 rounded-full border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black">
                <p className="text-l font-mclaren text-center cursor-default">Grid?</p>
            </div>
            <a href="#">
              <div className="z-20 absolute inset-x-[84.5rem] inset-y-[26rem] flex items-center justify-center bg-[#FCDF78] h-14 w-16 rounded-full border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black">
                <img className="z-20 w-7" src={github} alt="*" />
              </div>
            </a>
            <a href="https://www.instagram.com/yogaa_lpi/" target="_blank">
              <div className="z-20 absolute inset-x-[57.5rem] inset-y-[18rem] flex items-center justify-center bg-[#D9BBF8] h-14 w-16 rounded-full border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black">
                <img className="z-20 w-7" src={instagram} alt="*" />
              </div>
            </a>
          </div>
        </section>
      </header>

      <main>
        <section id="project" className="h-full pt-40 bg-[#C6E7FF] pb-12">
          <div className="flex h-1/2 px-12">
            <div className="w-1/2 h-full">
              <div className="z-20 flex items-center justify-center bg-white h-16 w-fit px-8 rounded-full border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black ms-6">
                <p className="text-2lx font-HelveticaNeueRoman text-center cursor-default">UIUX PROJECTS</p>
              </div>
              <div className="flex flex-col items-center">
                
              <div className="bg-[#FCDF78] h-[8rem] w-72 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black mt-20">
                <div className="flex justify-center relative -inset-y-11">
                  <div className="bg-black w-[64px] h-[64px] rounded-full flex justify-center items-center">
                    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" stroke-width="1.5"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" fill="#ffffff" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </div>
                <div className="flex justify-start items-center flex-col -mt-5">
                  <p className="text-2lg font-mclaren text-center cursor-default">HR Management System<br />(CV. Blue Star)</p>
                </div>
              </div>

              <div className="bg-white h-56 w-5/6 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black mt-14">
                <div className="h-full flex justify-center items-center p-8">
                  <p className="text-2lg font-HelveticaNeueRoman text-center cursor-default">Projek ini merupakan penelitian dari mata kuliah Desain E-Bisnis, yang mana CV. Blue Star sebagai objek penelitian saya disini, pada kasusnya perusahaan ini mengalami kendala dalam manajemen tenaga kerja yang mereka miliki, oleh karena itu saya mengusulkan rencana sistem manajemen personalia untuk membantu permasalahan tersebut.</p>
                </div>
              </div>
              </div>
            </div>
              
            <div className="w-1/2 flex justify-center items-center">
              <img className="z-10 w-11/12 shadow-xl rounded-3xl" src={hr} alt="img-HR" />
            </div>
          </div>


          <div className="flex h-1/2 px-12 pt-40">
            <div className="w-1/2 flex justify-center items-center">
              <img className="z-10 w-11/12 shadow-xl rounded-3xl" src={hr} alt="img-HR" />
            </div>
            <div className="w-1/2 h-full flex flex-col items-end">
              <div className="z-20 flex items-center justify-center bg-white h-16 w-fit px-8 rounded-full border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black me-6">
                <p className="text-2lx font-HelveticaNeueRoman text-center cursor-default">WEBSITE PROJECTS</p>
              </div>

              <div className="flex flex-col items-center">
              <div className="bg-[#857E81] h-[8rem] w-72 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black mt-20">
                <div className="flex justify-center relative -inset-y-11">
                  <div className="bg-black w-[64px] h-[64px] rounded-full flex justify-center items-center">
                    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" stroke-width="1.5"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" fill="#ffffff" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </div>
                <div className="flex justify-start items-center flex-col -mt-5">
                  <p className="text-2lg font-firaCode text-white text-center cursor-default">ERP System<br />(Batik Ilham)</p>
                </div>
              </div>
              <div className="bg-white h-56 w-5/6 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:ease-in-out duration-300 border-black mt-14">
                <div className="h-full flex justify-center items-center p-8">
                  <p className="text-2lg font-HelveticaNeueRoman text-center cursor-default">Batik Ilham merupakan usaha tekstil berupa pakaian batik yang berlokasi di Jayapura, kasusnya perusahaan ini belum melakukan sistemasi pada pendataan yang ada, untuk itu saya dan tim mengusulkan sebuah ERP untuk membantu persoalan yang mereka hadapi.</p>
                </div>
              </div>
            </div>
            </div>
            </div>
        </section>
        
        <section id="skill" className="h-screen bg-[#] flex justify-center">
          <div className="flex h-full w-1/2 items-center justify-center">
            <div className="flex justify-start flex-col w-full bg-white w-11/12 h-2/3 mt-36 rounded-3xl border-black border-2 hover:border-b-8 ease-in-out duration-300">
              
              <div className="flex justify-center w-full">
                <div className="z-20 flex items-center justify-center h-14 w-fit px-14 rounded-3xl border-2 border-b-8 bg-[#fb4e4e] hover:border-b-2 hover:ease-in-out duration-300 border-black relative -inset-y-7">
                  <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M2 21.4V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V9.4C22 9.73137 21.7314 10 21.4 10H10.6C10.2686 10 10 10.2686 10 10.6V21.4C10 21.7314 9.73137 22 9.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 10V7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 10V7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 16H7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 10H7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <p className="ps-3 text-xl font-HelveticaNeueRoman text-center text-white cursor-default">Technical Skills</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 justify-center items-center h-full py-8 px-12">
                <div className="z-20 flex items-center justify-center bg-white h-14 w-fit px-6 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:bg-[#FFBD73] hover:ease-in-out duration-300 border-black relative">
                  <p className="text-l font-firaCode text-center cursor-default">HTML</p>
                </div>
                <div className="z-20 flex items-center justify-center bg-white h-14 w-fit px-6 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:bg-blue-300 hover:ease-in-out duration-300 border-black relative">
                  <p className="text-l font-firaCode text-center cursor-default">CSS</p>
                </div>
                <div className="z-20 flex items-center justify-center bg-white h-14 w-fit px-6 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:bg-[#FCF596] hover:ease-in-out duration-300 border-black relative">
                  <p className="text-l font-firaCode text-center cursor-default">JS</p>
                </div>
                <div className="z-20 flex items-center justify-center bg-white h-14 w-fit px-6 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:bg-[#5C88C4] hover:ease-in-out duration-300 border-black relative">
                  <p className="text-l font-firaCode text-center cursor-default">PHP</p>
                </div>
                <div className="z-20 flex items-center justify-center bg-white h-14 w-fit px-6 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:bg-[#DBD3D3] hover:ease-in-out duration-300 border-black relative">
                  <p className="text-l font-firaCode text-center cursor-default">Java</p>
                </div>
                <div className="z-20 flex items-center justify-center bg-white h-14 w-fit px-6 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:bg-[#FF6600] hover:ease-in-out duration-300 border-black relative">
                  <p className="text-l font-firaCode text-center cursor-default">CodeIgniter</p>
                </div>
                <div className="z-20 flex items-center justify-center bg-white h-14 w-fit px-6 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:bg-[#FF4545] hover:ease-in-out duration-300 border-black relative">
                  <p className="text-l font-firaCode text-center cursor-default">Laravel</p>
                </div>
                <div className="z-20 flex items-center justify-center bg-white h-14 w-fit px-6 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:bg-blue-500 hover:ease-in-out duration-300 border-black relative">
                  <p className="text-l font-firaCode text-center cursor-default">Tailwind CSS</p>
                </div>
                <div className="z-20 flex items-center justify-center bg-white h-14 w-fit px-6 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:bg-[#AD49E1] hover:ease-in-out duration-300 border-black relative">
                  <p className="text-l font-firaCode text-center cursor-default">Bootstrap</p>
                </div>
                <div className="z-20 flex items-center justify-center bg-white h-14 w-fit px-6 rounded-3xl border-2 border-b-8 hover:border-b-2 hover:bg-[#EC8305] hover:ease-in-out duration-300 border-black relative">
                  <p className="text-l font-firaCode text-center cursor-default">MySQL</p>
                </div>
                <div className="z-20 flex items-center justify-center bg-white h-14 w-fit px-6 rounded-3xl border-2 border-b-8 hover:bg-[#EB3678] hover:border-b-2 hover:ease-in-out duration-300 border-black relative">
                  <p className="text-l font-firaCode text-center cursor-default">Figma</p>
                </div>
                <div className="z-20 flex items-center justify-center bg-white h-14 w-fit px-6 rounded-3xl border-2 border-b-8 hover:bg-[#4271ff] hover:border-b-2 hover:ease-in-out duration-300 border-black relative">
                  <p className="text-l font-firaCode text-center cursor-default">Canva</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="contact" className="h-[91svh] flex items-end">
          <div className="h-5/6 w-1/2 flex justify-center items-center">
            <div className="w-5/6 h-fit py-10 px-20 bg-white rounded-3xl shadow-md border-2 border-black border-b-8 hover:border-2 ease-in-out duration-300">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2 font-HelveticaNeueRoman" htmlFor="nama">
                    Name
                  </label>
                  <input type="text" id="nama" name="nama" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ease-in-out duration-300"/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2 font-HelveticaNeueRoman" htmlFor="nama">
                    Contact
                  </label>
                  <input type="text" id="nama" name="nama" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ease-in-out duration-300"/>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="pesan">
                    Messege
                  </label>
                  <textarea id="pesan" name="pesan" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ease-in-out duration-300" rows="3"></textarea>
                </div>
                <div className="flex w-full justify-center">
                  <button className="flex gap-2 px-6 py-3 bg-yellow-500 text-white text-lg font-HelveticaNeueRoman font-semibold rounded-xl border-2 border-black border-b-[6px] hover:border-2 hover:bg-yellow-600 hover:ease-in-out duration-300 ">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M22.1525 3.55321L11.1772 21.0044L9.50686 12.4078L2.00002 7.89795L22.1525 3.55321Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.45557 12.4436L22.1524 3.55321" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Send to Him
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="h-5/6 w-1/2 flex justify-center items-center flex-col gap-4">
            <div className="w-5/6 h-3/5">
              
              <div className="flex w-full h-2/5">
                <div className="h-full w-1/2 bg-white relative inset-y-10 border-2 border-b-8 hover:border-2 hover:ease-in-out duration-300 border-black rounded-3xl -ms-2">
                  <div className="flex w-full h-1/3 justify-center mt-3">
                    <p className="font-HelveticaNeueRoman text-lg font-bold">Customer</p>
                  </div>
                  <div className="w-full h-1/3 px-8">
                    <p className="font-HelveticaNeueRoman text-l">Ready.. Ga Bang ?<br />Ku mau konsul nich :^</p>
                  </div>
                </div>
              </div>

              <div className="flex w-full h-2/5 justify-end">
                <div className="h-full w-1/2 bg-white relative -inset-y-10 border-2 border-b-8 hover:border-2 hover:ease-in-out duration-300 border-black rounded-3xl -me-2">
                  <div className="flex w-full h-1/3 justify-center mt-3">
                    <p className="font-HelveticaNeueRoman text-lg font-bold">Me</p>
                  </div>
                  <div className="w-full h-1/3 px-8">
                    <p className="font-HelveticaNeueRoman text-l">YES SIRR..! <br /> Gas Bang :D</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="">
              <a href="https://wa.me/+6285325572459" target="_blank">
                <button className="flex gap-2 px-6 py-3 -mt-9 bg-blue-500 text-white text-lg font-HelveticaNeueRoman font-semibold rounded-xl border-2 border-black border-b-[6px] hover:border-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 focus:ease-in-out duration-300">
                  <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M7.5 12L5.49591 14.6721C4.91845 15.4421 4.97127 16.5141 5.6216 17.2236L9.4055 21.3515C9.78431 21.7647 10.3183 22 10.8789 22C11.9651 22 13.7415 22 15.5 22C17.9 22 19.5 20 19.5 18C19.5 18 19.5 18 19.5 18C19.5 18 19.5 11.1429 19.5 9.42859" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 9.99995C16.5 9.99995 16.5 9.87483 16.5 9.42852C16.5 7.1428 19.5 7.1428 19.5 9.42852" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.5 9.99998C13.5 9.99998 13.5 9.17832 13.5 8.2857C13.5 5.99998 16.5 5.99998 16.5 8.2857C16.5 8.50885 16.5 9.2054 16.5 9.42855C16.5 9.87487 16.5 9.99998 16.5 9.99998" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10.0001C10.5 10.0001 10.5 8.61584 10.5 7.50005C10.5 5.21434 13.5 5.21434 13.5 7.50005C13.5 7.50005 13.5 7.50005 13.5 7.50005C13.5 7.50005 13.5 8.06261 13.5 8.28577C13.5 9.17839 13.5 10.0001 13.5 10.0001" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10C10.5 10 10.5 8.61578 10.5 7.5C10.5 6.34156 10.5 4.68968 10.5 3.49899C10.5 2.67056 9.82843 2 9 2V2C8.17157 2 7.5 2.67157 7.5 3.5V12V15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Touch Him
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black h-[9svh] flex justify-center items-center">
        <p className="text-white text-sm font-HelveticaNeueRoman">&copy; {new Date().getFullYear()} Punya-Ku. Kabeh Hak Dilindungi.</p>
      </footer>
    </>
  )
}

export default App