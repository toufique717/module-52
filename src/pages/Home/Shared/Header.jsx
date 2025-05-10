import logo from '../../../assets/logo.png'
import moment from 'moment';

 
 const Header = () => {
    return (
        <div>
            <h1 className='text-3xl'></h1>
            <div className=' flex flex-col items-center'>
            <img className='bg-white'src={logo} alt="Imported photo" />
            <p>Journalism without Fair and favour</p> 
            
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            
        </div>
    );
 };
 
 export default Header;