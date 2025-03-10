import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Info } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export function Tourism() {
  const places = [
    {
      name: 'Barragem de Sobradinho',
      description: 'Uma das maiores barragens do Brasil, com vista panorâmica incrível.',
      image: 'https://images.unsplash.com/photo-1504280317859-8d2aa9b1fd3d',
      location: 'Sobradinho, BA',
      coordinates: [-9.4789, -40.8317]
    },
    {
      name: 'Balneário',
      description: 'Área de lazer com piscinas naturais e infraestrutura completa.',
      image: 'https://images.unsplash.com/photo-1595100417477-45b15aa6c8a0',
      location: 'Centro, Sobradinho',
      coordinates: [-9.4581, -40.8149]
    },
    {
      name: 'Parque da Caatinga',
      description: 'Área preservada com trilhas e fauna e flora típicas.',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d',
      location: 'Zona Rural, Sobradinho',
      coordinates: [-9.4456, -40.8225]
    }
  ];

  return (
    <div className="pt-28 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pontos Turísticos
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubra os lugares mais incríveis de Sobradinho e planeje seu roteiro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <MapContainer
              center={[-9.4581, -40.8149]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {places.map((place) => (
                <Marker key={place.name} position={place.coordinates as [number, number]}>
                  <Popup>
                    <div>
                      <h3 className="font-bold">{place.name}</h3>
                      <p className="text-sm">{place.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          <div className="space-y-6">
            {places.map((place, index) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex">
                  <div className="w-1/3">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {place.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{place.description}</p>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{place.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}