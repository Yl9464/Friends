import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, CardGroup, CardLink, CardImg, CardBody, CardTitle, CardSubtitle, Card } from 'react-bootstrap'
import './header.css'
const Header= () => {
    return(
<div className='header'>
<Container className=''>
    <div class="bg-light rounded-3 text-center">
         <div class="m-4 m-lg-5">
            <h1>F<span class="red-dot">·</span>R<span class="blue-dot">·</span>I<span class="yellow-dot">·</span>E<span class="red-dot">·</span>N<span class="yellow-dot">·</span>D<span class="blue-dot">·</span>S</h1>
            <p>React JS app with a list of characters from FRIENDS </p>
            <p>Plot: The show follows the lives of Rachel, Monica, Phoebe, Joey, Chandler, and Ross as they support each other through personal and professional challenges, often comedic and relatable. The series explores themes of friendship, love, career, and family, with storylines that resonate with audiences of all ages.  </p>
         </div>
        </div>
</Container>
</div>
    )
}

export default Header