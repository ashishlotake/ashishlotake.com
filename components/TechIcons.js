import clsx from 'clsx'
import * as React from 'react'
import { IoLogoVercel } from 'react-icons/io5'
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiPlotly,
  SiPowerbi,
  SiMysql,
  SiKubernetes,
  SiDocker,
  SiLinux,
  SiNumpy,
  SiAmazonaws,
  SiGit,
  SiMarkdown,
  SiKeras,
} from 'react-icons/si'

import { AiOutlineTwitter, AiTwotoneMail, AiOutlineBarChart } from 'react-icons/ai'

import { RiFileExcel2Fill, RiLinkedinBoxFill, RiPhoneFill } from 'react-icons/ri'

export default function TechIcons({ className, techs, techsize }) {
  return (
    <ul className={clsx(className, ' group flex gap-2')}>
      {techs.map((tech) => {
        if (!techList[tech]) return null

        const current = techList[tech]

        return (
          <li key={current} className="text-xl">
            {techsize ? <current.icon size={techsize} /> : <current.icon size={20} />}

            <span className="absolute z-50 hidden rounded border border-white border-opacity-20 bg-[#000]  bg-opacity-[85%] p-2 text-center text-xs text-white group-hover:block md:text-[17px]">
              {current.name}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

const techList = {
  python: {
    icon: SiPython,
    name: 'Python',
  },
  tensorflow: {
    icon: SiTensorflow,
    name: 'Tensorflow',
  },
  pytorch: {
    icon: SiPytorch,
    name: 'Pytorch',
  },
  sklearn: {
    icon: SiScikitlearn,
    name: 'Scikitlearn',
  },
  pandas: {
    icon: SiPandas,
    name: 'Pandas',
  },
  plotly: {
    icon: SiPlotly,
    name: 'Plotly',
  },
  matplotlib: {
    icon: AiOutlineBarChart,
    name: 'Matplotlib',
  },
  mysql: {
    icon: SiMysql,
    name: 'Mysql',
  },
  excel: {
    icon: RiFileExcel2Fill,
    name: 'Excel',
  },
  kubernetes: {
    icon: SiKubernetes,
    name: 'Kubernetes',
  },
  docker: {
    icon: SiDocker,
    name: 'Docker',
  },
  linux: {
    icon: SiLinux,
    name: 'Linux',
  },
  numpy: {
    icon: SiNumpy,
    name: 'Numpy',
  },
  aws: {
    icon: SiAmazonaws,
    name: 'Amazon AWS Cloud',
  },
  mdx: {
    icon: SiMarkdown,
    name: 'MDX',
  },
  git: {
    icon: SiGit,
    name: 'Git',
  },
  keras: {
    icon: SiKeras,
    name: 'Keras',
  },
  powerbi: {
    icon: SiPowerbi,
    name: 'Power BI',
  },
  socialgit: {
    icon: SiGit,
    name: 'See my code',
  },
  socialtwitter: {
    icon: AiOutlineTwitter,
    name: 'Say Hallo!',
  },
  sociallinkedin: {
    icon: RiLinkedinBoxFill,
    name: 'See my Professional Profile',
  },
  socialmail: {
    icon: AiTwotoneMail,
    name: 'Mail Me',
  },
  socialphone: {
    icon: RiPhoneFill,
    name: 'Call Me',
  },
}
