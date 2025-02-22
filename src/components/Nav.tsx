import { LuAlignJustify } from "react-icons/lu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,

} from "@/components/shadcn/sheet"

export default function Nav() {
  return (
    <div className='fixed z-20 left-1/2 transform -translate-x-1/2 max-w-screen-xl w-full flex items-center justify-between text-white bg-black/80 backdrop-blur border-b-[1px] border-[#1E2029] py-6 px-4'>
      <a href="#home" className='flex text-4xl font-semibold'>
        <span className='text-[#8F9094]'>&#123; </span>
        <span className='hidden lg:flex'>Benjamin</span>
        <span className='flex lg:hidden'>B</span>
        <span className='text-[#8F9094]'> &#125;</span>
      </a>
      <div className='hidden md:flex items-center text-lg'>
        <a href="#project" className="hover:bg-neutral-800 rounded-md py-2 px-4">Projets</a>
        <a href="#skills" className="hover:bg-neutral-800 rounded-md py-2 px-4">Compétences</a>
        <a href="#stack" className="hover:bg-neutral-800 rounded-md py-2 px-4">Stack favorite</a>
        <a href="#timeline" className="hover:bg-neutral-800 rounded-md py-2 px-4">Chronologie</a>
        <a href="#about" className="hover:bg-neutral-800 rounded-md py-2 px-4">A propos</a>
      </div>
      <div className="flex md:hidden text-4xl">
        <Sheet>
          <SheetTrigger><LuAlignJustify/></SheetTrigger>
          <SheetContent>
            <SheetTitle></SheetTitle>
            <div className="flex flex-col gap-1 justify-start text-xl text-neutral-200">
              <SheetClose><a href="#project" className="block w-full h-full hover:bg-neutral-800 rounded-md py-2 px-4 text-left">Projets</a></SheetClose>
              <SheetClose><a href="#skills" className="block w-full h-full hover:bg-neutral-800 rounded-md py-2 px-4 text-left">Compétences</a></SheetClose>
              <SheetClose><a href="#stack" className="block w-full h-full hover:bg-neutral-800 rounded-md py-2 px-4 text-left">Stack favorite</a></SheetClose>
              <SheetClose><a href="#timeline" className="block w-full h-full hover:bg-neutral-800 rounded-md py-2 px-4 text-left">Chronologie</a></SheetClose>
              <SheetClose><a href="#about" className="block w-full h-full hover:bg-neutral-800 rounded-md py-2 px-4 text-left">A propos</a></SheetClose>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </div>
  )
}
