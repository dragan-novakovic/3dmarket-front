import React from "react";

export default function Banner() {
  return (
    <div class="bg-cover bg-no-repeat bg-center py-36">
      <div class="container">
        <h1 class="text-6xl text-gray-800 font-medium mb-4 capitalize">
          best collection for <br /> home decoration
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
          <br />
          accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
          odio
        </p>
        <div class="mt-12">
          <a
            href="#"
            class="bg-primary border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

function BannerBoxes() {
  return (
    <div class="container py-16">
      <div class="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="assets/images/icons/delivery-van.svg"
            alt="Delivery"
            class="w-12 h-12 object-contain"
          />
          <div>
            <h4 class="font-medium capitalize text-lg">Free Shipping</h4>
            <p class="text-gray-500 text-sm">Order over $200</p>
          </div>
        </div>
        <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="assets/images/icons/money-back.svg"
            alt="Delivery"
            class="w-12 h-12 object-contain"
          />
          <div>
            <h4 class="font-medium capitalize text-lg">Money Rturns</h4>
            <p class="text-gray-500 text-sm">30 days money returs</p>
          </div>
        </div>
        <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="assets/images/icons/service-hours.svg"
            alt="Delivery"
            class="w-12 h-12 object-contain"
          />
          <div>
            <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
            <p class="text-gray-500 text-sm">Customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
