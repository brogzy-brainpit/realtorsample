'use client';

import { useEffect, useState } from 'react';
import ListingsMap from './ListingsMap';
import { Footprints, Locate } from 'lucide-react';
// import ListingsMap from './ListingsMap';

export default function SimplyRetsListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('Houston');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 4;

  useEffect(() => {
    async function fetchListings() {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          city,
          minprice: minPrice,
          maxprice: maxPrice,
          page,
          limit,
        });

        const res = await fetch(`/api/listings?${params}`);
        const data = await res.json();
        setListings(data.listings);
        setTotal(data.total);
      } catch (err) {
        console.error('Failed to load listings:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchListings();
  }, [city, minPrice, maxPrice, page]);

  const totalPages = Math.ceil(total / limit);
const fakeListings = [
  {
    geo: { lat: 29.7604, lng: -95.3698 },
    address: { full: 'Downtown Houston' },
    listPrice: 400000,
  },
];
  return (
    <div id='listings' className="container mx-auto px4 py-20 pt-[150px]">
      {/* Filter UI */}
  <div className='py-6  z-[2] flex items-center justify-center flex-col  '>
    <h4 className='font-custom-condensed text-footer leading-[0.8] text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out capitalize'>recommended </h4>
  <h4  className=' py-2  font-custom text-heading2 leading-[0.9] text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out capitalize'>listings</h4>

  </div>
      <div className=" mb-6 flex justify-center flex-wrap gap-4">
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={() => setPage(1)} // Reset page to 1 on new search
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Apply Filters
        </button>
      </div>
{/* {!loading && listings.length > 0 && <ListingsMap listings={listings} />} */}

<ListingsMap listings={fakeListings} />

      {/* Listings */}
      {loading ? (
        <p>Loading listings...</p>
      ) : (
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {listings.map((home, index) => (
            <div key={index} className="borde rounded-x p4 shadow">
              <img
                src={home.photos?.[0] || '/no-image.jpg'}
                alt="Listing"
                className="rounded-xl w-full h-48 object-cover mb-2"
              />
              <p className="font-semibold font-custom text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out"> {home.address?.full}</p>
           <ul className=" mt-4 flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 sm:gap-y-2.5 text-[13px] font-semibold">
  {/* Guests */}
  <li className="flex gap-1.5 sm:gap-2.5 items-center text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out">
    <span className="w-[16px] sm:w-[18px] -mt-1">
     <Footprints className='text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'/>
    </span>
   {home.property?.area} sqft
  </li>

  {/* Bedrooms */}
  <li className="text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out flex gap-1.5 sm:gap-2.5 items-center">
    <span className="w-[16px] sm:w-[18px] -mt-1">
      <svg  className='fill-brand-text dark:fill-brand-text-dark transition-all duration-500 ease-in-out' xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16">
        <g data-name="Layer 1">
          <path d="M17,16h-3c-.37891,0-.7251-.21387-.89453-.55273l-.72363-1.44727h-6.76367l-.72363,1.44727c-.16943.33887-.51562.55273-.89453.55273H1c-.55225,0-1-.44775-1-1v-6c0-.55225.44775-1,1-1h16c.55225,0,1,.44775,1,1v6c0,.55225-.44775,1-1,1ZM14.61816,14h1.38184v-4H2v4h1.38184l.72363-1.44727c.16943-.33887.51562-.55273.89453-.55273h8c.37891,0,.7251.21387.89453.55273l.72363,1.44727Z"/>
          <path d="M16,10c-.55225,0-1-.44775-1-1V3c0-.55127-.44873-1-1-1H4c-.55127,0-1,.44873-1,1v6c0,.55225-.44775,1-1,1s-1-.44775-1-1V3C1,1.3457,2.3457,0,4,0h10c1.6543,0,3,1.3457,3,3v6c0,.55225-.44775,1-1,1Z"/>
          <path d="M9,10c-.55225,0-1-.44775-1-1v-2h-2v2c0,.55225-.44775,1-1,1s-1-.44775-1-1v-2c0-1.10303.89697-2,2-2h2c1.10303,0,2,.89697,2,2v2c0,.55225-.44775,1-1,1Z"/>
          <path d="M13,10c-.55225,0-1-.44775-1-1v-2h-2v2c0,.55225-.44775,1-1,1s-1-.44775-1-1v-2c0-1.10303.89697-2,2-2h2c1.10303,0,2,.89697,2,2v2c0,.55225-.44775,1-1,1Z"/>
        </g>
      </svg>
    </span>
    {home.property?.bedrooms}  Bedrooms
  </li>

  {/* Bathrooms */}
  <li className="flex gap-1.5 sm:gap-2.5 items-center text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out">
    <span className="w-[16px] sm:w-[18px] -mt-1">
      <svg className='fill-brand-text dark:fill-brand-text-dark transition-all duration-500 ease-in-out'  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <g data-name="Layer 1">
          <path d="M13.14307,17H4.85693c-2.67822,0-4.85693-2.17871-4.85693-4.85693V4c0-.55225.44775-1,1-1s1,.44775,1,1v5h15c.55225,0,1,.44775,1,1v2.14307c0,2.67822-2.17871,4.85693-4.85693,4.85693ZM2,11v1.14307c0,1.5752,1.28174,2.85693,2.85693,2.85693h8.28613c1.5752,0,2.85693-1.28174,2.85693-2.85693v-1.14307H2Z"/>
          <path d="M7,5c-.55225,0-1-.44775-1-1,0-1.10303-.89697-2-2-2s-2,.89697-2,2c0,.55225-.44775,1-1,1s-1-.44775-1-1C0,1.79443,1.79443,0,4,0s4,1.79443,4,4c0,.55225-.44775,1-1,1Z"/>
          <path d="M2,18c-.25586,0-.51172-.09766-.70703-.29297-.39062-.39062-.39062-1.02344,0-1.41406l1-1c.39062-.39062,1.02344-.39062,1.41406,0s.39062,1.02344,0,1.41406l-1,1c-.19531.19531-.45117.29297-.70703.29297Z"/>
          <path d="M16,18c-.25586,0-.51172-.09766-.70703-.29297l-1-1c-.39062-.39062-.39062-1.02344,0-1.41406s1.02344-.39062,1.41406,0l1,1c.39062.39062.39062,1.02344,0,1.41406-.19531.19531-.45117.29297-.70703.29297Z"/>
          <path d="M9,6.8291c-.25586,0-.51172-.09766-.70703-.29297-.69141-.69141-1.89453-.69141-2.58594,0-.39062.39062-1.02344.39062-1.41406,0s-.39062-1.02344,0-1.41406c1.49219-1.49316,3.92188-1.49316,5.41406,0,.39062.39062.39062,1.02344,0,1.41406-.19531.19531-.45117.29297-.70703.29297Z"/>
        </g>
      </svg>
    </span>
   {home.property?.bathsFull} Bathrooms
  </li>
</ul>
<p className='text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out py-4 font-normal text-[14px]'>
  This property is coming directly from an IDX data if you belong to an MLS and you have your credentials, then this listings data will be automatically fetched from your MLS, Private agent remarks will be included in this field for use in the SimplyRETS REST API. 
</p>
  <p className="text-brand-secondaryy dark:text-brand-text-dark transition-all duration-500 ease-in-out font-bold font-custom text-para">${home.listPrice?.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="text-brand-text dark:text-brand-text-dark ease-in-out border border-brand-text dark:border-brand-text-dark transition-all duration-500  font-normal rounded-full  px-4 py-2  isabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-brand-text dark:text-brand-text-dark ease-in-out transition-all duration-500 px-4 py-2 font-custom">{page} of {totalPages}</span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="text-brand-text dark:text-brand-text-dark ease-in-out border border-brand-text dark:border-brand-text-dark transition-all duration-500 font-normal  px-4 py-2 rounded-full disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
