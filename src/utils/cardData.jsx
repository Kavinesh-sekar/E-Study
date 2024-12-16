import {
    School as SchoolIcon,
    SupportAgent as SupportIcon,
    Lock as LockIcon,
    Language as LanguageIcon,
  } from '@mui/icons-material';
  
  const cardData = [
    {
      id: 1,
      title: 'Expert Instructor',
      description:
        'Expert Instructor knowledgeable, experienced, and provides quality education and guidance.',
      icon: <SchoolIcon className="icon purple" />,
      color: '#EDE7F6', 
    },
    {
      id: 2,
      title: '24/7 Support Available',
      description:
        'With "24/7 Support Available," help is always accessible for any concerns or questions.',
      icon: <SupportIcon className="icon orange" />,
      color: '#FFF3E0',
    },
    {
      id: 3,
      title: 'Lifetime Access',
      description:
        'With "Lifetime access," users have perpetual and unrestricted use of a product or service.',
      icon: <LockIcon className="icon green" />,
      color: '#E8F5E9', 
    },
    {
      id: 4,
      title: 'Learn Anywhere',
      description:
        'With "Learn Anywhere," education and skill development can happen from any location, anytime.',
      icon: <LanguageIcon className="icon red" />,
      color: '#FFEBEE',
    },
  ];
  
  export default cardData;
  