import { Link } from 'react-router-dom';
import linkedin_icon_full from '../../assets/images/linkedin_icon_full.png';

export const PersonCard = (person) => {
    const absolutelinkedinurl = person?.linkedinLink?.startsWith('https://') ? person?.linkedinLink : 'https://' + person?.linkedinLink
    return (
        <div class="card person-card">
            <div className='d-flex justify-content-center person-image-div'>
                <img src={person?.imageLink} class="person-image-rounded" alt={`${person?.name} image`} />
            </div>
            <div class="person-card-body">
                <h5 class="card-title">{person?.name}</h5>
                <p class="card-text">{person?.about}</p>
            </div>
            <div className='d-flex justify-content-center'>
                <Link to={absolutelinkedinurl} target='_blank' >
                    <img src={linkedin_icon_full} width={98} height={'auto'} />
                </Link>
            </div>
        </div>
    )
}