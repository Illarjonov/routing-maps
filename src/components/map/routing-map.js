import { useEffect } from 'react';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import L from "leaflet"
import { useMap } from 'react-leaflet'

// либа leaflet-routing-machine автоматически подгружает маршрут for OSRM's
export const Routing = ({ selectedCoordinates }) => {
    const map = useMap()

    useEffect(() => {
        if (!map) return

        const routingControl = L.Routing.control({
            waypoints: [ //по этим координатам идет поиск
                L.latLng(selectedCoordinates.fromlat, selectedCoordinates.froming), 
                L.latLng(selectedCoordinates.tolat, selectedCoordinates.toing)
            ], 
            routeWhileDragging: true, 
            fitSelectedRoutes: true, //эта строчка автоматически расстягивает маршрут на всю карту
        }).addTo(map)

        return () => map && map.removeControl(routingControl) //зачистка при смене

    }, [map, selectedCoordinates]);

    return null;
}