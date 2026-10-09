import '../styles/ConditionalStyling.css';

function ConditionalStyling()
{
   const isActive=false;

   return(
    <button className={isActive ? 'active' : 'inactive'}>
        Click Me
    </button>
   )
}

export default ConditionalStyling;