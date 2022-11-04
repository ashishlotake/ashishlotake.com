import React from '~/icons/react.svg'
import Git from '~/icons/git.svg'
import Javascript from '~/icons/javascript.svg'
import Typescript from '~/icons/typescript.svg'
import Node from '~/icons/nodejs.svg'
import Bash from '~/icons/bash.svg'
import Liquid from '~/icons/liquid.svg'
import Markdown from '~/icons/markdown.svg'
import AWS from '~/icons/aws.svg'
import Docker from '~/icons/docker.svg'
import Jupyter from '~/icons/jupyter.svg'
import Keras from '~/icons/Keras.svg'
import kubernetes from '~/icons/kubernetes.svg'
import Linux from '~/icons/linux.svg'
import Matplotlib from '~/icons/matplotlib.svg'
import MySQL from '~/icons/mysql.svg'
import Pandas from '~/icons/pandas.svg'
import PowerBI from '~/icons/powerbi.svg'
import Python from '~/icons/python.svg'
import Pytorch from '~/icons/pytorch.svg'
import Seaborn from '~/icons/seaborn.svg'
import Sklearn from '~/icons/scikitlearn.svg'
import Tensorflow from '~/icons/tensorflow.svg'

import Born from '~/icons/born.svg'
import code from '~/icons/code.svg'
import cap from '~/icons/cap.svg'
import graudate from '~/icons/graudate.svg'
import highschool from '~/icons/highschool.svg'
import intern from '~/icons/intern.svg'
import jobsearch from '~/icons/jobsearch.svg'

export let DevIconsMap = {
  React,
  Git,
  Javascript,
  Typescript,
  Node,
  Bash,
  Liquid,
  Markdown,
  Docker,
  Jupyter,
  Keras,
  kubernetes,
  Linux,
  Matplotlib,
  MySQL,
  Pandas,
  PowerBI,
  Python,
  Pytorch,
  Seaborn,
  Sklearn,
  Tensorflow,
  AWS,
  Born,
  code,
  cap,
  graudate,
  highschool,
  intern,
  jobsearch,
}

export function DevIcon({ type, className }) {
  let Icon = DevIconsMap[type]
  if (!Icon) return null

  return <Icon className={className} fill="currentColor" />
}
