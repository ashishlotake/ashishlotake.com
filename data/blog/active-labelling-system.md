---
title: 'Active Labelling system'
date: '2021-09-09'
tags: [CNN, CV, Deep Learning, Docker, Cloud]
draft: true
summary: 'The article walkthrough the process of how i build an active labeling sytem, from theory to deployment.  '
images: ['/static/images/projects/chatbot.jpg']
layout: PostLayout
---

<TOCInline toc={props.toc} exclude="Overview" />

## Lets understand why we need leballes

Most recent developments in AI, including computer vision, natural language processing, predictive analytics, autonomous systems, and a wide range of applications, are driven by machine learning. We need data so these algorithms can learn from them so can generalize well. Most of the transitional algorithms need label data, to work. When it comes to deep learning, the amount the data requires is humongous, particularly in deep learning neural networks, compared to traditional machine learning algorithms, to build a model that acheive the appropriate levels of accuracy. Therefore, it should go without saying that for the resulting machine-learning models to be accurate, the machine-learning data must be clean, accurate, full, and well-labeled. Whereas it has always been the case that garbage in garbage out, it is especially the case with regard to machine learning data.
Around 80% of AI/ML project time is spent on gathering, organizing, and labeling out in computing.

> We can aquire large amount of unlabelled data,but manually labelling is expensive

I hope now you have a good understanding about the importance of labelled data for our machine learning project.

## What do we need going forward

- The irony here is we need labelled data, the reason is simple the model should know what labeles are before it can label anything, then it should also need to know which label correspond to which image.

  > It's like to multipy money we need money

- We will be using deep leanring, so GPU is must, use Google Colab.

If you have these two things you can follow along can build your own labelling system

## Dataset in hand

I will be using [Caltech101](https://data.caltech.edu/records/mzrjq-6wc02) data set, but you can use any other dataset.
Lets breifly go over Caltech101 dataset

It consists of 9146 images, split unevenly between 101 distinct object categories and a background category. According to the official website, there are about 40 to 800 images per category, additionally most of the categories have around 50 images in the dataset. Such varying images per category can be a real problem when trying to achieve high accuracy in deep neural network training. The size of each image is roughly 300 x 200 pixels. The format of images areRGB, meaning we have 3 colour channels.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/caltech.png"
  />
</p>

Now lets look at the class dstribution

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/caltechdisb.png"
  />
</p>

<p align="center">
  <img
    src="https://media.tenor.com/q1mGRe4-LWcAAAAC/shocked-glass.gif"
  />
</p>

We can clearly see that airplanes and motorbikes categories have the highest number
of images, around 800, and the lowest number of images may be as low as 40 for most
of the labels. Such an imbalanced dataset, it will be difficult to get a good performance from the network if we decided to trained from scratch.

## Lets understand the high level deployment

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/projectlayout.svg"
  />
</p>

If think the above layout is self explanotry. Still i will explain it in fews lines

- Divide dataset into three parts using stratified Sampling
- Train CNN and then evaluate on unseen data
- choose the best mdoel
- Create a stremlit web app
- wrap the stremlit in container
- deploy that container on cloud
- ✨ Wola! Your model is now global,
- if user want to train model, take new data and portion of old data, combine them and retrain.
- User can then downlaod lablled data.

## Lets dive into real stuff

We will get our hands dirty, by creating a baseline model and training it from stratch, I know i told if we train model from scratch getting good performance will be difficult, but it wont hurt us, and i will be implemting alexnet like architecture from scratch so if we didint acheive satisfactory result, we can still say 'I implemeted alexnet from startch'!

Btw, ImageNet ILSVRC challenge in 2012, it was at this contest that AlexNet showed that deep convolutional neural networks can be used for solving image classification, and this was the beginning of new era.

> when you look at most of the state of art deep learning model, they were derived by experimental study and most of them even dont have proper mathematical or statistocal explanation like tratidionall machine learning algorithm

### AlexNet

Before creating alexnet from scratch, lets have high overview of Convolutional-Neural Network (CNN), so you know whats going on top of what.

Convolutional Neural Network is formed with the help of different layers stack ontop of one another to perform the image classification task. The architecture of the CNN contains different layers. The whole network itself is divided into two parts :- **Convolution base** and the **Classifier**. The features are extracted in the convolution base and the classification is done in the classifier.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/basicCNN.png"
  />
</p>

**Layers in Convolution base** :-

- _Input Layer_ - This input layer, accepts raw images, and forwarded to further layers for extracting features
- _Convolution Layer_ -In this layer number of filters is applied on images for finding features from images
- _Pooling Layer_ - This layer captures large images and reduces them, and reduces the parameters to preserve important information. It preserves maximum value from each
  window

**Layers in Classifier**:-

- _Fully connect Layer_ - This layer takes up high level filtered
  images and translates them into labels with categorie
- _Output layer_ - This layer gives the decimal probabilities
  to each class. Those decimal probabilities are in
  between 0 and

This is simplest CNN you can build.

**Now you know basic of CNN, lets look at structure of AlexNet**

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/alexnet1.png"
  />
</p>

Thats lot to take in, so lets breifly go over each unique layer

_Convolutional layer_ :- The mathematical term "convolution" refers to the dot
product multiplication of two sets of elements. The convolutional layer's
filters/kernels and array of image data are affected by the convolution operation
in deep learning. A convolutional layer is therefore just a layer that contains the
convolution operation that takes place between the filters and the images that
are processed by a convolutional neural network.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/convultion.png"
  />
</p>

_ReLU Activation Function_ :- A particular activation process that modifies a neuron's value output.
The transformation imposed by ReLU on values from a neuron is represented
by the formula y=max(0,x). Any negative values from the neuron are clamped
down to 0 by the ReLU activation function, while positive values are left
unaltered. Within a neural network, the outcome of this mathematical
transformation is used as the input to the next layer and as the output of the
current layer.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/relu.png"
  />
</p>

_Max Pooling_ :- With max pooling, the output is the highest pixel value of pixels
that are contained within a unit's receptive field within a sub-sampling layer. The
max-pooling operation below produces an average of the pixels inside the
kernel's receptive field by sliding across the input data with a 2x2 window.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Max_pooling.png"
  />
</p>

_Batch Normalisation_ :- By adding an additional layer that operates on the inputs
from the previous layer, batch normalisation is a technique that reduces the
impact of unstable gradients within a neural network. The operations first
standardise and normalise the input values before scaling and shifting
operations transform the input values.

_Dropout_ :- The dropout technique reduces the quantity of interconnecting
neurons in a neural network at random. Each neuron has a chance to be
dropped from the collated contributions from connected neurons at each training
step

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/dropout.png"
  />
</p>

_Flatten layer_:- Takes an input shape and flattens the input image data into a
one-dimensional array.

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/flatten.png"
  />
</p>

_Dense Layer_ :- A dense layer has an embedded number of arbitrary
units/neurons within. Each neuron is a perceptron

_Softmax Activation Function_ :- A specific kind of activation function used to
determine the probability distribution of a group of numbers contained within an
input vector. The result of a softmax activation function is a vector whose set of
values represents the likelihood that a class or event will occur. The vector's
values add up to 1 in total

### Let's write AlexNet Form scratch

Keep this archeticture in mind

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/basicCNN.png"
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

First 5 layers are the convolutional base, here the features are extracted, then form 1st dense layer till output are the classifier which clasification is done.

### Performance on training from scratch

<p align="center">
  <img
    className="rounded-lg bg-white"
    src="/static/images/blog/baseLinemodel01.png"
  />
</p>

its clearn is model is overfitting to our training data,

## HyperParameter Tunning

Deep learning relies heavily on hyperparameter optimization.
The reason for this is that neural networks are extremely difficult to configure and
require a large number of parameters to be set. Furthermore, individual models can be
very slow to train.
We will try to optimise few of the important hyperparameters for CNN

1. Optimization Algorithm
2. Learning Rate
3. Number of Epochs
4. Momentum
