
const initialState = {
  courses: [
    {
      id: 1,
      name: 'Front End Developer',
      instructor: 'Jhon Due',
      description: 'This is course 1 description',
      price: '$20',  
      thumbnail: 'images/course-1.svg',
      enrollmentStatus: 'Open',
      duration: '4 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
        },
        {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
        },
      ],
    },
    {
        id: 2,
        name: 'Back End Developer',
        instructor: 'Alex Harry',
        description: 'This is course 2 description',
        price: '$30',  
        thumbnail: 'images/course-2.svg',
        enrollmentStatus: 'Open',
        duration: '8 weeks',
        schedule: 'Mon, Wed, Fri',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
        },
        {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
        },
      ],
      },
      {
        id: 3,
        name: 'React JS Developer',
        instructor: 'Jhon Due',
        description: 'This is course 3 description',
        price: '$40',  
        thumbnail: 'images/course-3.svg',
        enrollmentStatus: 'Open',
        duration: '4 weeks',
        schedule: 'Mon, Wed, Fri',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
        },
        {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
        },
      ],
      },
      {
        id: 4,
        name: 'React native Developer',
        instructor: 'Bob Smith',
        description: 'This is course 1 description',
        price: '$40',  
        thumbnail: 'images/course-4.svg',
        enrollmentStatus: 'Open',
        duration: '8 weeks',
        schedule: 'Mon, Wed, Fri',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
        },
        {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
        },
      ],
      },
      {
        id: 5,
        name: 'Angular Developer',
        instructor: 'Smith Jhonson',
        price: '$50',  
        thumbnail: 'images/course-5.svg',
        description: 'This is course 1 description',
        enrollmentStatus: 'Open',
        duration: '8 weeks',
        schedule: 'Mon, Wed, Fri',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
        },
        {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
        },
      ],
      },
  ],
  selectedCourse: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COURSES':
      return { ...state, courses: action.payload };
    case 'SELECT_COURSE':
      return { ...state, selectedCourse: action.payload };
    default:
      return state;
  }
};

export default courseReducer;

  