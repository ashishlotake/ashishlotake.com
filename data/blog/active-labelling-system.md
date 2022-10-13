---
title: 'Active Labelling system'
date: '2022-10-13'
tags: [CNN, CV, Deep Learning, Docker, Cloud]
draft: false
summary: 'The article walks through the process of how I build an active labeling system, from theory to deployment.'
images: ['/static/images/blog/labelling.png']
layout: PostLayout
---

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/webapp.gif"
  />
</p>

<div className="mt-5 mb-5 grid place-items-center">
  <a target="_blank" rel="noopener noreferrer" href="https://ashishlotake-active-labelling-system-project-app-14t6bq.streamlitapp.com/">
    <button aria-label="Scroll To Top" type="button" className="pushable">
      <span className="shadow"></span>
      <span className="edgeblue"></span>
      <span className="frontblue">Check Out Web App</span>
    </button>
  </a>
</div>

<TOCInline toc={props.toc} exclude="Overview" asDisclosure/>

## All Jupyter Notebooks

| Name                           | Colab Link                                                                                                                                                     |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AlexNet Scratch                | [Open In Colab](https://colab.research.google.com/github/ashishlotake/active-labelling-system-project/blob/main/IPYNBfiles/01_BaseLineModel.ipynb)             |
| Hyper-Parameter Tuning         | [Open In Colab](https://colab.research.google.com/github/ashishlotake/active-labelling-system-project/blob/main/IPYNBfiles/02_hyper_parameter_tuninh.ipynb)    |
| Data Augmentation              | [Open In Colab](https://colab.research.google.com/github/ashishlotake/active-labelling-system-project/blob/main/IPYNBfiles/03_DataAugmentation.ipynb)          |
| Over Sampling & Under Sampling | [Open In Colab](https://colab.research.google.com/github/ashishlotake/active-labelling-system-project/blob/main/IPYNBfiles/04_OverSamplingUnderSampling.ipynb) |
| Added New Data Instances       | [Open In Colab](https://colab.research.google.com/github/ashishlotake/active-labelling-system-project/blob/main/IPYNBfiles/05_extendeddataset.ipynb)           |
| Transfer Leaning               | [Open In Colab](https://colab.research.google.com/github/ashishlotake/active-labelling-system-project/blob/main/IPYNBfiles/06_Transfer_learning.ipynb)         |
| Resnet50                       | [Open In Colab](https://colab.research.google.com/github/ashishlotake/active-labelling-system-project/blob/main/IPYNBfiles/07_TransferLearning_ResNet50.ipynb) |

## Let's understand why we need Labels

Most recent developments in AI, including computer vision, natural language processing, predictive analytics, autonomous systems, and a wide range of applications, are driven by machine learning. We need data so these algorithms can learn from them so can generalize well. Most of the transitional algorithms need label data, to work. When it comes to deep learning, the amount the data requires is humongous, particularly in deep learning neural networks, compared to traditional machine learning algorithms, to build a model that achieves the appropriate levels of accuracy. Therefore, it should go without saying that for the resulting machine-learning models to be accurate, the machine-learning data must be clean, accurate, full, and well-labeled. Whereas it has always been the case that garbage is garbage out, it is especially the case with regard to machine learning data.
Around 80% of AI/ML project time is spent on gathering, organizing, and labeling out in computing.

> We can acquire large amount of unlabelled data, but manually labeling is expensive

I hope now you have a good understanding of the importance of labeled data for our machine learning project.

## What do we need going forward

- The irony here is we need labeled data, the reason is simple the model should know what labels are before it can label anything, then it should also need to know which label corresponds to which image.

  > It's like to multiply money we need money

- We will be using deep learning, so GPU is a must, use Google Colab.

If you have these two things you can follow along can build your labeling system

## Dataset in hand

I will be using the [Caltech101](https://data.caltech.edu/records/mzrjq-6wc02) data set, but you can use any other dataset.
Let's briefly go over the Caltech101 dataset

It consists of 9146 images, split unevenly between 101 distinct object categories and a background category. According to the official website, there are about 40 to 800 images per category, additionally, most of the categories have around 50 images in the dataset. Such varying images per category can be a real problem when trying to achieve high accuracy in deep neural network training. The size of each image is roughly 300 x 200 pixels. The format of images is RGB, meaning we have 3 color channels.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/caltech.png"
  />
</p>
Now let's look at the class distribution

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/caltechdisb.png"
  />
</p>

<p align="center">
  <img
    src="https://media.tenor.com/q1mGRe4-LWcAAAAC/shocked-glass.gif"
  />
</p>
We can see that the airplanes and motorbikes categories have the highest number
of images, around 800, and the lowest number of images may be as low as 40 for most
of the labels. With such an imbalanced dataset, it will be difficult to get a good performance from the network if we decided to train from scratch.

# Let's understand the high-level deployment

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/projectlayout.png"
  />
</p>

If think the above layout is self-explanatory. Still, I will explain it in few lines

- Divide the dataset into three parts using stratified Sampling
- Train CNN and then evaluate unseen data
- choose the best model
- Create a stremlit web app
- wrap the stremlit in a container
- deploy that container on the cloud
- ✨ Wola! Your model is now global,
- If the user wants to train the model, take new data and a portion of old data, combine them and retrain.
- Users can then download labeled data.

## Let's dive into the real stuff

We will get our hands dirty, by creating a baseline model and training it from scratch, I know I told if we train the model from scratch getting good performance will be difficult, but it won't hurt us, and I will be implementing Alexnet like architecture from scratch so if we didn't achieve a satisfactory result, we can still say 'I implemented Alexnet from starch!

Btw, in the ImageNet ILSVRC challenge in 2012, it was at this contest that AlexNet showed that deep convolutional neural networks can be used for solving image classification, and this was the beginning of a new era.

> when you look at most of the state of art deep learning model, they were derived by experimental study and most of them even dont have proper mathematical or statistocal explanation like tratidionall machine learning algorithm

### AlexNet

Before creating Alexnet from scratch, let's have a high overview of the Convolutional-Neural Network (CNN), so you know what's going on top of what.

Convolutional Neural Network is formed with the help of different layers stacked on top of one another to perform the image classification task. The architecture of the CNN contains different layers. The whole network itself is divided into two parts:- the **Convolution base** and the **Classifier**. The features are extracted in the convolution base and the classification is done in the classifier.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/basicCNN.png"
  />
</p>

**Layers in Convolution base**:-

- _Input Layer_ - This input layer, accepts raw images and forwarded them to further layers for extracting features
- _Convolution Layer_ -In this layer number of filters are applied to images for finding features from images
- _Pooling Layer_ - This layer captures large images and reduces them, and reduces the parameters to preserve important information. It preserves the maximum value from each
  window

**Layers in Classifier**:-

- _Fully connect Layer_ - This layer takes up high-level filtered
  images and translates them into labels with categories
- _Output layer_ - This layer gives the decimal probabilities
  to each class. Those decimal probabilities are between 0 and 1.

This is the simplest CNN you can build.

**Now you know basics of CNN, let's look at the structure of AlexNet\*\***

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/alexnet1.png"
  />
</p>

That's a lot to take in, so let's briefly go over each unique layer

_Convolutional layer_:- The mathematical term "convolution" refers to the dot
product multiplication of two sets of elements. The convolutional layer's
filters/kernels and an array of image data are affected by the convolution operation
in deep learning. A convolutional layer is therefore just a layer that contains the
convolution operation that takes place between the filters and the images that
are processed by a convolutional neural network.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/convultion.png"
  />
</p>

_ReLU Activation Function_:- A particular activation process that modifies a neuron's value output.
The transformation imposed by ReLU on values from a neuron is represented
by the formula y=max(0,x). Any negative values from the neuron are clamped
down to 0 by the ReLU activation function, while positive values are left
unaltered. Within a neural network, the outcome of this mathematical
transformation is used as the input to the next layer and as the output of the
current layer.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/relu.png"
  />
</p>

_Max Pooling_:- With max pooling, the output is the highest pixel value of pixels
that are contained within a unit's receptive field within a sub-sampling layer. The
max-pooling operation below produces an average of the pixels inside the
kernel's receptive field by sliding across the input data with a 2x2 window.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Max_pooling.png"
  />
</p>

_Batch Normalisation_:- By adding a layer that operates on the inputs
from the previous layer, batch normalization is a technique that reduces the
impact of unstable gradients within a neural network. The operations first
standardize and normalize the input values before scaling and shifting
operations transform the input values.

_Dropout_:- The dropout technique reduces the quantity of interconnecting
neurons in a neural network at random. Each neuron has a chance to be
dropped from the collated contributions from connected neurons at each training
step

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/dropout.png"
  />
</p>

_Flatten layer_:- Takes an input shape and flattens the input image data into a
one-dimensional array.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/flatten.png"
  />
</p>

_Dense Layer_:- A dense layer has an embedded number of arbitrary
units/neurons within. Each neuron is a perceptron

_Softmax Activation Function_:- A specific kind of activation function used to
determine the probability distribution of a group of numbers contained within an
input vector. The result of a softmax activation function is a vector whose set of
values represents the likelihood that a class or event will occur. The vector's
values add up to 1 in total

### Let's write AlexNet Form scratch

Keep this architecture in mind

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/basicCNN.png"
  />
</p>

Load Data

```py
new_base_dir = pathlib.Path("DataSet")

train_dataset = tf.keras.preprocessing.image_dataset_from_directory(
    new_base_dir/ "train",
    color_mode="rgb",
    image_size=(227,227),
    batch_size=32,
)
validation_dataset = tf.keras.preprocessing.image_dataset_from_directory(
    new_base_dir/ "validation",
    color_mode="rgb",
    image_size=(227,227),
    batch_size=32,
)

test_dataset = tf.keras.preprocessing.image_dataset_from_directory(
    new_base_dir/ "test",
    color_mode="rgb",
    image_size=(227,227),
    batch_size=32,
)
```

```py
input = keras.Input(shape=(227,227,3))
x = layers.Rescaling(1./255)(input) # Rescale inputs to the [0, 1] range by dividing them by 255.
# 1st layer
x = layers.Conv2D(filters=90, kernel_size=(11,11), strides=(4,4), activation='relu')(x)
x = layers.MaxPool2D(pool_size=(3,3), strides=(2,2))(x)
x = layers.BatchNormalization()(x)

# 2nd layer
x = layers.Conv2D(filters= 256, kernel_size=(5,5),strides=(1,1),  activation='relu', padding="valid")(x)
x = layers.MaxPool2D(pool_size=(3,3), strides=(2,2))(x)
x = layers.BatchNormalization()(x)

# 3rd layer
x = layers.Conv2D(filters= 384, kernel_size=(3,3),strides=(1,1),  activation='relu', padding='valid')(x)
x = layers.BatchNormalization()(x)

# 4th layer
x = layers.Conv2D(filters= 384, kernel_size=(3,3), strides=(1,1), activation='relu', padding='valid')(x)
x = layers.BatchNormalization()(x)

# 5th layer
x = layers.Conv2D(filters= 256, kernel_size=(3,3),  strides=(1,1), activation='relu', padding='valid')(x)
x = layers.MaxPool2D(pool_size=(3,3), strides=(2,2))(x)
x = layers.BatchNormalization()(x)

# flattening
x = layers.Flatten()(x)

# 1st dense layer
x = layers.Dense(4096, activation='relu')(x)
x = layers.Dropout(0.5)(x)
x = layers.BatchNormalization()(x)

# 2nd dense layer
x = layers.Dense(4096, activation='relu')(x)
x = layers.Dropout(0.5)(x)
x = layers.BatchNormalization()(x)

# output sotfmax layer
output = layers.Dense(101, activation='softmax')(x)

alexnet_scratch = keras.Model(inputs = input, outputs=output)

alexnet_scratch.summmary()
```

```
Output exceeds the size limit. Open the full output data in a text editor
Model: "model_1"
_________________________________________________________________
 Layer (type)                Output Shape              Param #
=================================================================
 input_3 (InputLayer)        [(None, 227, 227, 3)]     0

 rescaling_2 (Rescaling)     (None, 227, 227, 3)       0

 conv2d_5 (Conv2D)           (None, 55, 55, 90)        32760

 max_pooling2d_3 (MaxPooling  (None, 27, 27, 90)       0
 2D)

 batch_normalization_7 (Batc  (None, 27, 27, 90)       360
 hNormalization)

 conv2d_6 (Conv2D)           (None, 23, 23, 256)       576256

 max_pooling2d_4 (MaxPooling  (None, 11, 11, 256)      0
 2D)

 batch_normalization_8 (Batc  (None, 11, 11, 256)      1024
 hNormalization)

 conv2d_7 (Conv2D)           (None, 9, 9, 384)         885120
...
Total params: 25,138,373
Trainable params: 25,119,249
Non-trainable params: 19,124
```

```py
## compiling model
alexnet_scratch = keras.Model(inputs = input, outputs=output)
alexnet_scratch.compile(loss='sparse_categorical_crossentropy',
optimizer='sgd', metrics=['accuracy'])

## fit the model on data

history_001 = alexnet_scratch.fit(
  train_dataset,
  epochs=30,
  validation_data=validation_dataset,
  )

```

First 5 layers are the convolutional base, here the features are extracted, then form 1st dense layer till the output is the classifier which classification is done.

### Performance on training from scratch

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/baseLinemodel01.png"
  />
</p>

It's clear is model is overfitting to our training data,

## HyperParameter Tunning

Deep learning relies heavily on hyperparameter optimization.
The reason for this is that neural networks are extremely difficult to configure and
require a large number of parameters to be set. Furthermore, individual models can be
very slow to train.
We will try to optimize a few of the important hyperparameters for CNN

1. Optimization Algorithm:- Optimizers are techniques that alter the neural network's weights and learning rate to minimize losses.
2. Learning Rate:- The learning rate controls how much to update the weight at the end of each batch.
3. Momentum:- Momentum controls how much to let the previous update of the learning rate influence the current weight update

I tried out three optimizers RMSProp, Adam, and SGD at various learning rates (0.001, 0.005,0.01, 0.05, 0.1), and the best result was obtained by using SGD at a learning rate of 0.01 and 0.05.

### Optimizers and Learning Rate

The result of using SGD as an optimizer at different learning rates.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/sgd_lr_rate1.png"
  />
</p>
<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/sgd_lr_rate2.png"
  />
</p>
The result at learning rates 0.01 and 0.05 looks promising, let's explore more.

| _learning rate_ | Train Acc | Train Loss | Val Acc | Val Loss | Test Acc | Test Loss |
| --------------- | --------- | ---------- | ------- | -------- | -------- | --------- |
| _0.05_          | 0.9818    | 0.08767    | 0.698   | 1.398    | 0.694    | 1.439     |
| _0.01_          | 0.985     | 0.0481     | 0.7199  | 1.737    | 0.707    | 1.780     |

By looking at the plot and table, the learning rate of 0.05 looks very good compared to 0.01, but we need to understand that we need our model to perform well on new/unseen data, even if we don't have a perfect 99-100% score on training data.
Now if we focus on the loss of test data learning rate of 0.01 looks good.

> These results will vary during each run, as we are using SGD, which is stochastic in nature.

We can say both results are very similar at learning rates 0.05 and 0.01, the difference here is due to the stochastic nature of SGD.

### Momentum

Now we will try out this configuration (optimizer =sgd, learning rate =0.01) at various momentum (0,0.3,0.6,0.8,0.9).

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/momentum1.png"
  />
</p>
<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/momentum2.png"
  />
</p>
Let's focus on top 3 momentums:-

| _Momentum_ | Train Acc | Train Loss | Val Acc | Val Loss | Test Acc | Test Loss | Epochs |
| ---------- | --------- | ---------- | ------- | -------- | -------- | --------- | ------ |
| _0_        | 0.9975    | 0.0168     | 0.7282  | 1.316    | 0.707    | 1.440     | 62     |
| _0.3_      | 0.9957    | 0.0225     | 0.7395  | 1.352    | 0.712    | 1.421     | 44     |
| _0.6_      | 0.8553    | 0.5040     | 0.58512 | 0.22     | 0.577423 | 9.4       | 53     |

Momentum = 0.3, seems to be the better choice, as it has achieved a good result in far
fewer epochs as compared when momentum = 0, and models with momentum =0.3
seems to have good generalization compared to other learning rates.

## What is achieved up till now

|                               | Train Acc | Train Loss | Val Acc | Val Loss | Test Acc | Test Loss |
| ----------------------------- | --------- | ---------- | ------- | -------- | -------- | --------- |
| _At start_                    | 0.9818    | 0.0992     | 0.6965  | 1.3532   | 0.691    | 1.434     |
| _After hyperparameter tuning_ | 0.9957    | 0.0225     | 0.7395  | 1.352    | 0.712    | 1.421     |

We can see that we were able to increase the models’ validation and test accuracy by
2%, just by tweaking a few hyperparameters or maybe due to the stochastic nature of SGD.

The various plots we saw above show that training a network from scratch with such
few samples does not result in a good model that learns well from the training set in
addition to being capable of well generalizing on unseen data.

> To summarise, training a network from scratch is a difficult and time-consuming task in the case of small datasets.

## Data Augmentation

Image data augmentation is a method for artificially increasing the size of a training
dataset by producing altered versions of the dataset's images. This is done by applying
domain-specific techniques to examples from the training data that create new and
different training examples.

Augmentation techniques can produce variations of the images, which results in increasing the models' generalization accuracy.

The following Augmentation will be used:

- Horizontal Flip Augmentation
- Random Rotation Augmentation
- Random Zoom Augmentation

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/augmented.png"
  />
</p>

Result after applying data Data Augmentation1

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/DataAugmentation1.png"
  />
</p>
<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/DataAugmentation2.png"
  />
</p>

It looks like applying data augmentation doesn't seem to improve model generalization for our models’ architecture and dataset.

There are many to we can go from here:

1. Oversampling and Undersampling
2. Add new data
3. Transfer Learning

> `Spoiler -> Only transfer learning works`

If you still want to check out how I did Oversampling & Undersampling and how to add new data points check out the [Jupyter notebook](#all-jupyter-notebooks) notebook, the [extended dataset is hosted on Kaggle](https://www.kaggle.com/datasets/ashishlotake/extendedcaltech101)

## Transfer Learning

It's a common and highly effective approach when doing deep learning on a small image dataset is to use a pre-trained model.

Neural networks typically need huge amounts of data to be operationally effective, in this case for classification. To address the issue of low accuracy in training from scratch, it’s possible to use Transfer Learning which uses weights from a pre-trained model on a large dataset, if this original dataset is large enough and general enough, the spatial hierarchy of features learned by the pre-trained model can effectively act as a generic model of the visual world, and hence, its features can prove useful for many different computer vision problems, even though these new problems may involve completely different classes than those of the original task and it's used as starting point for training on our small dataset (i.e. Caltech-101).

There are two ways to use a pre-trained model: feature extraction and fine-tuning. We
will be using feature extraction.
Contents used for image classification comprise two parts: series of convolution and pooling layers, and at the end with a densely connected classifier, the first part is called the convolutional base of the model.

Feature extraction consists of taking the convolutional base of a previously trained
network, running the new data through it, and training a new classifier on top of the
output, because the representations learned by the convolutional base are likely to be
more generic and, therefore, more reusable. Whereas the representations learned by
the classifier will necessarily be specific to the set of classes on which the model was trained.

Before feeding the images to the network we need to preprocess them in the same way the images were preprocessed for the pre-trained model.

We will be testing out 3 model:

- MobileNet
- ResNet50
- InceptionV3

For my scenario, MobileNet seems to be performing worse than the baseline model.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/tansferlearn1.png"
  />
</p>

Both Resnet50 and Inception have achieved Train and Val accuracy of greater than
90% let's focus on loss.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/tansferlearn2.png"
  />
</p>

|               | Val acc | Val Loss | Test Acc | Test Loss |
| ------------- | ------- | -------- | -------- | --------- |
| ResNet        | 0.9307  | 0.288    | 0.94     | 0.239     |
| ResNet Aug    | 0.9232  | 0.2753   | 0.922    | 0.2657    |
| Inception     | 0.9307  | 0.3294   | 0.9240   | 0.3352    |
| Inception Aug | 0.9133  | 0.3129   | 0.918    | 0.3043    |

It looks like Resnet with and without data augmentation seems to be performing well, and the size of the model is around ~100 MB

## Finalising the model

After doing various experiments from hyperparameter tuning, and adding new data to trying out various pre-trained models on ImagenNet with and with data augmentation, we
decided to go with ResNet50 from keras as the results were great, around 20%
improvement from our baseline model on both test and validation set.

As stated earlier, we need to preprocess images based on the pre-trained model we
choose, let's look at preprocessed images from the resnet50 convolutional base:

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/resnetpreprocess.png"
  />
</p>

## Retraining

For retraining the model we will load the model and continue the model training where
it was left, without compiling, so all the weights learned by the classifier will be copied from the previous model and the model will start learning from where it left off.

We will copy a few data points from the original dataset and then copy new images to
that and we will start retraining by combining new and old.

## Models Interpretability

When developing a computer vision application, one of the most fundamental issues is
interpretability: why did your classifier think a particular image contained a guitar when all you see is a spanner?

Deep learning models are frequently referred to as "black boxes" because they learn
representations that are difficult to extract and present in a human-readable format.
Although this is true for some deep learning models, it is not true for convnets.
The representations learned by convnets are highly interpretable.

We will be focusing on Visualising heatmaps of class activation in an image.
It's useful for understanding which parts of a given image led a convnet to its final
classification decision. This is helpful for “debugging” the decision process of a
convnet, particularly in the case of a classification mistake.

Class activation map (CAM) visualization is a broad family of methods that involves
creating heatmaps of class activation over input images.
A class activation heatmap is a 2D grid of scores associated with a specific output
class, computed for every location in any input image, indicating how important each
location is concerning the class under consideration.

Grad-CAM consists of taking the output feature map of a convolution layer, giving an input image, and weighing every channel in that feature map by the gradient of the class concerning the channel. Intuitively, one way to understand this trick is to
imagine that you’re weighting a spatial map of “how intensely the input image activates
different channels” by “how important each channel is about the class,”
resulting in a spatial map of “how intensely the input image activates the class.”^[[Deep Learning with Python](https://www.manning.com/books/deep-learning-with-python)]

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/modelintrep1.png"
  />
</p>

By looking at the above images, we can say that after the model detected a person and wheel nearby, the model decided it was a wheelchair with 99.64%
confidence

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/modelintrep2.png"
  />
</p>

## Building App

The model will be used in a real-world scenario, taking continuous raw input from the
user and then giving them labeled data as output.

In this step, a web application was developed using [Streamlit](streamlit.io). It provides a front-end to the user for uploading multiple images.
[Streamlit](streamlit.io) is an open-source python framework for building web apps for Machine Learning and Data Science. It simply converts simple Python scripts to functional, interactive, and shareable web apps within minutes.

The detailed walkthrough on building an app using [Streamlit](streamlit.io) will be covered in later article.

The code for the file can be found [here](https://github.com/ashishlotake/active-labelling-system-project/blob/main/app.py)

## Dockerizing

Dockerizing is the process of packing, deploying, and running applications using
Docker containers.
Docker is an open-source tool that ships your application as a single package with all the necessary functionalities. Docker allows you to pack your application with everything it
needs to run (such as libraries) and ship it as a single package - a container.
Containers are made up of images that specify their exact contents.

Reason for creating a docker instead of direct deployment:-

- Easy to use:- Docker simplified the way we deploy applications. You do not
  distribute the software as source code - you send the binary image of a part of
  your disk.
- Fast:- Docker containers are just sandboxed environments that run on the
  kernel. You can create and run the containers in seconds
- Able to create a reproducible environment:- Wrapping everything into containers
  means that the application you build runs on other devices without friction.

### Create Dockerfile

Create a Dockerfile in the root directory where you have created the Streamlit app:

```dockerfile:Dockerfile showLineNumbers
FROM python:3.8-slim
EXPOSE 8501
WORKDIR /app
COPY . .
RUN pip3 install -r requirements.txt
ENTRYPOINT ["streamlit", "run", "app.py", "--server.port=8501","--server.address=0.0.0.0"]
```

1. Pull python3.8 slim images from docker hub.
2. Expose port 8501 to access streamlit from the browser.
3. Create a new directory.
4. Copy everything from the root directory to the app folder.
5. Install the project dependencies.
6. Configure a container that will run as an executable.

### Building image

run this command from the project root directory, where Dockerfile is saved

```bash
docker build -t streamlit:v1 .
```

It will take some time in building images

After the images are built, run the following command to check images

```bash
docker images
```

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/dockerimg.png"
  />
</p>

That's it your docker images it created!

### Running image

```bash
docker run -p 8501:8501 streamlit:v1
```

Now we can access the web app by going to localhost:8501

Your streamlit app has been dockerized and now it can be deployed anywhere, and now it can be launched anywhere.

## Deployment

Deployment is the project's final phase, in which we deploy the entire machine-learning pipeline into a production system, in a real-time scenario. In this final stage, we must
deploy this machine learning pipeline to make the research available to end
users.
The model will be used in a real-world scenario, taking continuous raw input from the
user and then giving them labeled data as output.

I have deployed my app on:-

- Streamlit App
- On AWS EC2

We will be covering streamlit deployment here, as it's the fastest and it's free

1. Create a repository on Github.
2. Push all the code from local to the GitHub repository.
3. Now go to [Streamlit](streamlit.io) and create an account.
4. Click on New app
<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/streamlit1.png"
  />
</p>
5. Choose the repository where the app is stored and the main file path, where all streamlit code resides, and then press Deploy!.
<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/streamlit2.png"
  />
</p>

Wola, your app is deployed. Go to the link.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/active-labelling/webapp.gif"
  />
</p>

<div className="mt-16 mb-5 grid place-items-center">
  <a target="_blank" rel="noopener noreferrer" href="https://ashishlotake-active-labelling-system-project-app-14t6bq.streamlitapp.com/">
    <button aria-label="Scroll To Top" type="button" className="pushable">
      <span className="shadow"></span>
      <span className="edgeblue"></span>
      <span className="frontblue">Check Out Web App</span>
    </button>
  </a>
</div>

## Final Thought

We have successfully created an active labeling system, using transfer learning which
can achieve an accuracy of above 90% on unseen data.
Allowing the user to input raw data, label if the model performs poorly and then give the user correctly classified images, by placing them into the correct directory.
