interface IUser {
  name: string;
  surname: string;
  age: number;
  country: string;
  email?: string;
  isLogin: boolean;
}

interface IProfile extends IUser {
  books: string[];
  reviews: string[];
  balance: number;
}

type UploadStatusType = 'loading' | 'success' | 'error';
type TextFormatType = 'uppercase' | 'lowercase' | 'capitalize';

let uploadStatus: UploadStatusType;
let textFormat: TextFormatType;

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(2, 3));

const formatText = (text: string, formatType: TextFormatType): string => {
  if (formatType === 'uppercase') {
    return text.toUpperCase();
  } else if (formatType === 'lowercase') {
    return text.toLowerCase();
  } else {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
};

console.log(formatText('hello!', 'lowercase'));
console.log(formatText('Hello!', 'uppercase'));
console.log(formatText('hello!', 'capitalize'));

const removeChar = (text: string, char: string): string => {
  return text.replaceAll(char, '');
};

console.log(removeChar('Hello!', '!'));

const users: IUser[] = [
  {
    name: 'Иван',
    surname: 'Иванов',
    age: 25,
    country: 'Россия',
    email: 'ivan@example.com',
    isLogin: true,
  },
  {
    name: 'Anna',
    surname: 'Smith',
    age: 17,
    country: 'USA',
    isLogin: false,
  },
  {
    name: 'Дмитрий',
    surname: 'Петров',
    age: 30,
    country: 'Россия',
    email: 'dimon@example.com',
    isLogin: false,
  },
  {
    name: 'John',
    surname: 'Doe',
    age: 42,
    country: 'USA',
    email: 'john.doe@example.com',
    isLogin: true,
  },
];

const authorizedUsers = users.filter((user) => user.isLogin === true);
console.log(authorizedUsers);
