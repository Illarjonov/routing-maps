// import '../../App.css'; 
import { MapContainer, ZoomControl } from 'react-leaflet'

import { useSelector } from 'react-redux';
import { Routing } from './routing-map';
import { Layers } from './styles-map';

export const MapPage = ({ children }) => {
    const selectedCoordinates = useSelector((state) => state.someReducer.selectedCoordinates)

    return <MapContainer
        center={[55.7558, 37.6173]} // moscow by default 
        zoom={13}
        zoomControl={false}
    >

        <> {/* Маршрут */}
            {selectedCoordinates &&
                <Routing selectedCoordinates={selectedCoordinates} />}
        </>

        <>{/* Отображение объектов на карте(дома и пр) */}
            <Layers />
        </>

        <>{/* +- зума */}
            <ZoomControl position='bottomright' />
        </>
    </MapContainer>
}
