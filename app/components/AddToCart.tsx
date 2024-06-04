'use client';

const AddToCart = () => {
  return (
    <div>
      <button
        className=' mt-5 bg-teal-950 text-gray-50 px-6 py-2 rounded '
        onClick={() => {
          console.log('Added to cart!');
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
