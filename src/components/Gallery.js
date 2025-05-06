import Avatar from './Avatar';
import './Gallery.css';

export function Profile() {
    return (
        <div>
            <Avatar 
                size={100}
                person={{
                    name: 'Katherine Johnson',
                    imageId:'0S9jJQe'
                }}
            />
            <Avatar
                size={100}
                person={{
                    name: 'Hedy Lamarr',
                    imageId:'kE3yLpF'
                }}
            />
            <Avatar
                size={100}
                person={{
                    name: 'Lin Lanying',
                    imageId:'QDJPcez'
                }}
            />
        </div>
    );
}

export default function Gallery() {
    return (
        <section className='gallery'>
            <h1>Amazing scientists</h1>
            <Profile />
        </section>
    );
}