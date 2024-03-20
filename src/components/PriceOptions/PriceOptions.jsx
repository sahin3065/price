import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

  const priceOptions =[
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$30",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": "$50",
          "features": [
            "Access to all Basic Membership features",
            "Group fitness classes included",
            "Access to sauna and steam room",
            "Towel service"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": "$80",
          "features": [
            "Access to all Standard Membership features",
            "Personal training sessions included",
            "Nutritional counseling",
            "Access to swimming pool",
            "Discounts on merchandise"
          ]
        } 
  ];

  return (
    <div className="m-12">
        <h2 className="text-5xl">Best Price in the town</h2>
        <div className="grid md:grid-cols-3 gap-3 ">
          {
            priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
          }
        </div>
    </div>
  );
};

export default PriceOptions;