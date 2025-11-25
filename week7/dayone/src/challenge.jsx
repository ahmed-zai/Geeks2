import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Challenge = () => {
    return (
        <div className="overflow-hidden h-150 w-full relative bg-cyan-100">
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            <div className="... ">
          <img src="https://www.state.gov/wp-content/uploads/2019/04/Hong-Kong-2127x1406.jpg" alt="Hong Kong" className="w-full h-full object-cover" />
          <p className="legend">Hong Kong</p>
        </div>
        
        <div>
          <img src="https://www.travelandleisure.com/thmb/2E1Sx5nRvNQS8-lQ6cSpxuPZWqc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/macao-CHINATOWN0222-ec02ee826d1340a3aa6953c08bfce8b4.jpg" alt="Macao" className="w-full h-full object-cover" />
          <p className="legend">Macao</p>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c" alt="Japan" className="w-full h-full object-cover" />
          <p className="legend">Japan</p>
        </div>

        <div>
          <img src="https://www.nationsonline.org/gallery/USA/Las-Vegas-Strip.jpg" alt="Las Vegas" className="w-full h-full object-cover" />
          <p className="legend">Las Vegas</p>
        </div>

            </Carousel>
        </div>
    )
};

export default Challenge;