
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';

const menuItems = [
    {
        name: 'HOME',
        url: '/',
        icon: '',
    },
    {
        name: 'EXPERIENCE',
        url: '',
        icon: '',
        submenu:[
            {
                name: 'ACADEMICS',
                url: 'academics',
                icon: SchoolIcon,
            },
            {
                name: 'PROGRAMMING',
                url: 'programming',
                icon: CodeIcon,
            },
            {
                name: 'BOOKS',
                url: 'books',
                icon: LibraryBooksIcon,
            },
            {
                name: 'TRAVEL',
                url: 'travel',
                icon: LocalAirportIcon,
            },
        ]
    },
    {
        name: 'PORTFOLIO',
        url: 'portfolio',
        icon: ''
    },
    {
        name: 'BLOGS',
        url: 'blogs',
        icon: ''
    },
    {
        name: 'CONTACT ME',
        url: 'contactme',
        icon: ''
    }
]

export default menuItems;