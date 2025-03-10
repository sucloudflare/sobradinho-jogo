import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useOrderTracking } from '../hooks/useOrderTracking';
import { OrderStatus } from '../components/OrderStatus';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -23.550520,
  lng: -46.633308
};

export function OrderTracking() {
  const { order, deliveryLocation } = useOrderTracking();

  return (
    <div className="pt-28 min-h-screen bg-zinc-950">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">
          Rastreamento do Pedido
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-zinc-900 rounded-2xl p-6">
            <OrderStatus status={order.status} />
          </div>

          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={deliveryLocation} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
}