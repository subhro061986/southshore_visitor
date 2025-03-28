import { Link } from 'react-router-dom';
import linkedin_icon_full from '../../assets/images/linkedin_icon_full.png';
import Tooltip from 'react-bootstrap/Tooltip';

export const PersonCard = (person) => {
    const absolutelinkedinurl = person?.linkedinLink?.startsWith('https://') ? person?.linkedinLink : 'https://' + person?.linkedinLink
    return (
        <div class="card person-card">
            <div className='d-flex justify-content-center person-image-div'>
                <img src={person?.imageLink} class="person-image-rounded" alt={`${person?.name}`} />
            </div>
            <div class="person-card-body mt-3">
                <h5 class="card-title">{person?.name}</h5>
                <p class="card-text">{person?.about}</p>
            </div>
            <div className={person?.linkedinLink !== "" ?'d-flex justify-content-center align-items-center': 'd-flex justify-content-center align-items-center mt-5'}>
                {person?.linkedinLink !== "" &&
                    // ? (
                    <Link 
                    // to={person?.linkedinLink}
                    to={absolutelinkedinurl} 
                    target='_blank'
                        style={{
                            marginRight: person?.email ? '10px' : ""
                        }}
                    >
                        <img src={linkedin_icon_full} width={98} height={'auto'} />
                    </Link>
                    // ):(
                    //     <span></span>

                    // )
                }
                {person?.email !== "" && person?.linkedinLink !== "" ? "|" : ""}
                {person?.email !== "" &&
                    <span
                        className='person-email'
                        style={{
                            marginLeft: '10px',
                            width: '150px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            cursor: 'pointer'
                        }}
                        data-bs-toggle="tooltip" data-bs-placement="top" title={person?.email}
                    >
                        {person?.email}
                    </span>
                }
            </div>
        </div>
    )
}