import { getActiveUser } from '../helpers/users';


const Avatar = () => {

  
const logo == const { activeuser } = getActiveUser();


  const getIcon = () => {
    if (user.role === 'admin') {
      return 'admin.png';
    } else if (user.role === 'librarian') {
      return 'librarian.png';
    } else {
      return 'customer.png';
    }
  };



  if (activeuser === 'admin') {
    logo = '/avatar_admin.png';
  }
  if (activeuser === 'librarian') {
    logo = 'avatar_librarian.png';
  }
  if (activeuser === 'user') {
    logo = './avatar_user.png';
  }

  return logo;
}





export default Avatar;
