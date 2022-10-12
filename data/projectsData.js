const projectsData = [
  {
    title: 'Automated data labelling system',
    description:
      "This is an automated labeling system, the app will label the input images from the user and then correctly label the images by placing them in their category folder and giving the user a zip file, and at the same time user can label images if not satisfied with the result and then retrain the original model, to improve the models' generalization accuracy",
    imgSrc: '/static/images/projects/labelling.svg',
    href: 'https://ashishlotake-active-labelling-system-project-app-14t6bq.streamlitapp.com/',
    github: 'https://github.com/ashishlotake/active-labelling-system-project',
    tech1: 'Labelling System',
    tech2: 'CNN',
    tech3: 'Transfer Learning',
  },
  {
    title: 'General Q&A Conversational ChatBot',
    description:
      "This is a Q&A chatbot, which is capable of answering user questions, the model is implemented using the open-source tool RASA. This can be easily extended to a full fedge Q&A bot, we just need to add a few examples of intent and the underlying NLU model and answer user's questions.",
    imgSrc: '/static/images/projects/messaging.svg',
    href: '',
    github: 'https://github.com/ashishlotake/rasa_chat_bot',
    tech1: 'Chatbot',
    tech2: 'NLU',
    tech3: 'RASA',
  },
  {
    title: 'Resume Filtering System',
    description:
      "You define what skills the applicant should have. Then upload the resume and you will get the applicants who have those skills and who don't.",
    imgSrc: '/static/images/projects/resume.svg',
    github: 'https://github.com/ashishlotake/Resume-Filtering-System',
    href: 'https://ashishlotake-resume-filtering-system-app-38ajgg.streamlitapp.com/',
    tech1: 'Python',
    tech2: 'Streamlit',
    tech3: '',
  },
  {
    title: 'Which Anime to Watch',
    description:
      'I will give you a random anime based on your selected option, 90% of animes have less than 39 episodes, so you can easily finish a series in the weekend.',
    imgSrc: '/static/images/projects/anime.svg',
    github: 'https://github.com/ashishlotake/Which_anime_to_watch',
    href: 'https://share.streamlit.io/ashishlotake/which_anime_to_watch/app.py',
    tech1: 'Python',
    tech2: 'Streamlit',
    tech3: '',
  },
]

export default projectsData
