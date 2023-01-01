const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.linkedin.com/in/r-gethushan/',
  title: 'RG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gethushan',
  role: 'FullStack Developer',
  description:
    'Start small with side projects. It doesn’t matter how large or small they are at first, the feeling of solving a difficult problem with software is what matters.',
  resume: 'https://drive.google.com/file/d/1Ad5zuSLTW-9py3gJ1OtPlF0-uNlL33pV/view?usp=share_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/r-gethushan/',
    github: 'https://github.com/gethushan',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Signup-and-SignIn-Form',
    description:
      'MERN Authentication and Validation',
    stack: ['MongoDB', 'CSS', 'React'],
    sourceCode: 'https://github.com/gethushan/Signup-and-SignIn-Form',
    livePreview: 'https://github.com',
  },
  {
    name: 'Basic TODO List',
    description:
      'Mern Fullstack TODO List',
    stack: ['MongoDB', 'CSS', 'React'],
    sourceCode: 'https://github.com/gethushan/Mern_Fullstac_Development',
    livePreview: 'https://github.com',
  },
  {
    name: 'Christmas Card',
    description:
      'Basic HTML and CSS Project',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/gethushan/Christmas-Card',
    livePreview: 'https://christmas-cards.glitch.me/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'MongoDB',
  'React',
  'Redux',
  'Build API',
  'Git',
  'Networking',
  'Digital Marketing',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gethushan@gmail.com',
}

export { header, about, projects, skills, contact }
