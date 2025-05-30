import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import { getScopedI18n } from '../../public/locales/server'

export default async function CTA() {

  const t = await getScopedI18n('cta')

  return (
    <div id="home" className='relative max-w-screen-xl mx-auto pt-20 px-6 h-screen'>
      <div>
        <div className='text-[--primaryColorDark] text-2xl md:text-4xl font-semibold pt-20'>{t("title")}</div>
        <h1 className='text-neutral-100 font-extrabold text-6xl md:text-8xl pt-0 py-4 lg:py-10'>Benjamin AUBRON</h1>
        <h2 className='text-neutral-500 text-2xl md:text-5xl font-semibold max-w-screen-lg py-4 lg:py-6'><span className='text-neutral-100'>{t("subtitle")}</span>. {t("description")}</h2>
        <div className='text-neutral-400 text-lg md:text-3xl font-medium py-12'>👩🏻‍💻 {t("currently")}</div>
        <div className="flex flex-wrap items-center justify-start gap-3 md:gap-6 text-neutral-100 text-lg md:text-xl pt-4">
          <a href="https://github.com/benjamin-aubron" target="_blank" className='flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg py-2 px-2.5 md:px-4 font-semibold'>
            <FaGithub className="text-base md:text-lg text-[--primaryColorDark] "/>
            GitHub</a>
          <a href="resume.pdf" target="_blank" className='flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg py-2 px-2.5 md:px-4 font-semibold'>
            <PiReadCvLogoFill className="text-base md:text-xl text-[--primaryColorDark] "/>
            {t("cv")}</a>
          <a href="mailto:benjamin.aubron@outlook.com" className='flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg py-2 px-2.5 md:px-4 font-semibold'>
            <MdEmail className="text-base md:text-xl text-[--primaryColorDark] "/>
             Email</a>
        </div>
      </div>
    </div>
  )
}
