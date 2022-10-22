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

import { RiFileExcel2Fill } from 'react-icons/ri'

export default function TechIcons({ className, techs }) {
  return (
    <ul className={clsx(className, 'group flex gap-2')}>
      {techs.map((tech) => {
        if (!techList[tech]) return null

        const current = techList[tech]

        return (
          <li key={current} className="text-xl ">
            <current.icon />
            <span className="absolute z-50 hidden rounded border border-black  bg-white px-2 text-center text-black group-hover:block dark:border-black dark:bg-background-color  dark:text-white">
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
    icon: SiPlotly,
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
}
