// 어떤 key값이 오던간에 받을 수있음
interface PhoneNumberDictionary {
    [phone: string]: {
      num: number;
    };
}
  
interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}
  
enum PhoneType {
    Hoem = 'home', 
    Office = 'office',
    Studio = 'studio'
}

export {Contact, PhoneType}