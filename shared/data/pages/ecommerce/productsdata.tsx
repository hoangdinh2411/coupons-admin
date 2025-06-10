
export const MasterData = [
  {
    id: 1,
    title: "Women's Sling Bag",
    category: "Elite Travel Collection",
    rating: "4.5",
    image: "../../../assets/images/ecommerce/png/1.png",
    originalPrice: "180.00",
    discountPrice: "120.00",
    discountPercentage: "12",
    badgeClass: 'success',
    stock: 'In Stock',
    stockColor: 'success',
    qunatity: '1',
    color: 'Grey',
    size: 'Compact',
    orderId: "#1154632",
    customerName: "Emma Watson",
    customerImg: "../../../assets/images/faces/3.jpg",
    mobile: "(123) 456-7890",
    orderedDate: "10 Feb 2024",
    status: "Delivered",
    paymentMode: "Credit Card",
    statusColor: 'success',
    bgColor: 'secondary',
  },
  {
    id: 2,
    title: "Handcrafted Scented Candles",
    category: "Home Fragrance Essentials",
    rating: "3.0",
    image: "../../../assets/images/ecommerce/png/2.png",
    originalPrice: "50.00",
    discountPrice: "35.00",
    discountPercentage: "15",
    badgeClass: 'info',
    stock: 'In Stock',
    stockColor: 'success',
    qunatity: '1',
    color: 'Blue',
    size: '42',
    orderId: "#1154634",
    customerName: "Michael Smith",
    customerImg: "../../../assets/images/faces/9.jpg",
    mobile: "(321) 654-9876",
    orderedDate: "	22 Feb 2024",
    status: "Processing",
    paymentMode: "PayPal",
    statusColor: 'warning',
    bgColor: 'pink',
  },
  {
    id: 3,
    title: "Designer Summer Top",
    category: "Fashion Forward",
    rating: "3.5",
    image: "../../../assets/images/ecommerce/png/3.png",
    originalPrice: "110.00",
    discountPrice: "80.00",
    discountPercentage: "24",
    badgeClass: 'primary',
    stock: 'Limited Stock',
    stockColor: 'danger',
    qunatity: '0',
    color: 'Red',
    size: 'Large',
    orderId: "#1173652",
    customerName: "Sophia Johnson",
    customerImg: "../../../assets/images/faces/5.jpg",
    mobile: "(987) 654-3210",
    orderedDate: "5 Mar 2024",
    status: "Cancelled",
    paymentMode: "Debit Card",
    statusColor: 'danger',
    bgColor: 'danger',
  },
  {
    id: 4,
    title: "Lightweight Sneakers",
    category: "Urban Sports Gear",
    rating: "3.5",
    image: "../../../assets/images/ecommerce/png/4.png",
    originalPrice: "200.00",
    discountPrice: "130.00",
    discountPercentage: "60",
    badgeClass: 'success',
    stock: 'In Stock',
    stockColor: 'success',
    qunatity: '1',
    color: 'Green',
    size: 'Medium',
    orderId: "#1185634",
    customerName: "Chris Evans",
    customerImg: "../../../assets/images/faces/6.jpg",
    mobile: "(456) 789-0123",
    orderedDate: "15 Mar 2024",
    status: "Shipped",
    paymentMode: "Cash On Delivery",
    statusColor: 'success',
    bgColor: 'primary',
  },
  {
    id: 5,
    title: "Ceramic Flowerpot",
    category: "Floral Decor",
    rating: "5.0",
    image: "../../../assets/images/ecommerce/png/5.png",
    originalPrice: "90.00",
    discountPrice: "60.00",
    discountPercentage: "10",
    badgeClass: 'secondary',
    stock: 'Limited Stock',
    stockColor: 'danger',
    qunatity: '1',
    color: 'Black',
    size: 'M',
    orderId: "#1257842",
    customerName: "David Harper",
    customerImg: "../../../assets/images/faces/12.jpg",
    mobile: "(789) 123-4567",
    orderedDate: "22 Apr 2024",
    status: "Processing",
    paymentMode: "Credit Card",
    statusColor: 'warning',
    bgColor: 'orange',
  },
  {
    id: 6,
    title: "Luxury Watch",
    category: "Precision Timepieces",
    rating: "4.0",
    image: "../../../assets/images/ecommerce/png/6.png",
    originalPrice: "450.00",
    discountPrice: "350.00",
    discountPercentage: "60",
    badgeClass: 'success',
    stock: 'In Stock',
    stockColor: 'success',
    qunatity: '1',
    color: 'Grey',
    size: 'M',
    orderId: "#1257845",
    customerName: "Jessica Parker",
    customerImg: "../../../assets/images/faces/13.jpg",
    mobile: "(567) 234-9876",
    orderedDate: "29 Apr 2024",
    status: "Delivered",
    paymentMode: "PayPal",
    statusColor: 'success',
    bgColor: 'secondary',
  },
  {
    id: 7,
    title: "Vintage Wall Clock",
    category: "Home Decor Collection",
    rating: "4.0",
    image: "../../../assets/images/ecommerce/png/7.png",
    originalPrice: "110.00",
    discountPrice: "75.00",
    discountPercentage: "15",
    badgeClass: 'warning',
    stock: 'In Stock',
    stockColor: 'success',
    qunatity: '1',
    color: 'Orange',
    size: 'Compact',
    orderId: "#1257847",
    customerName: "Michael Johnson",
    customerImg: "../../../assets/images/faces/14.jpg",
    mobile: "(987) 456-7891",
    orderedDate: "2 May 2024",
    status: "Cancelled",
    paymentMode: "Debit Card",
    statusColor: 'danger',
    bgColor: 'secondary',
  },
  {
    id: 8,
    title: "Steel Electric Kettle",
    category: "Kitchen Essentials",
    rating: "4.0",
    image: "../../../assets/images/ecommerce/png/8.png",
    originalPrice: "65.00",
    discountPrice: "45.00",
    discountPercentage: "50",
    badgeClass: 'danger',
    stock: 'In Stock',
    stockColor: 'success',
    qunatity: '1',
    color: 'Green',
    size: 'L',
    orderId: "#1257848",
    customerName: "Pat Cummins",
    customerImg: "../../../assets/images/faces/15.jpg",
    mobile: "(987) 321-7654",
    orderedDate: "05 Apr 2024",
    status: "Processing",
    paymentMode: "Credit Card",
    statusColor: 'warning',
    bgColor: 'secondary',
  }
]

import { Fragment, useState } from "react";
import { Range, getTrackBackground } from "react-range";

const LabeledTwoThumbs1 = ({ rtl }: any) => {
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;

  const [values, setValues] = useState([20, 40]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(newValues) => setValues(newValues)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              className="rangeslider-thumb"
              ref={props.ref}
              style={{
                backgroundColor: 'rgba(var(--primary-rgb),1)',
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['var(--black-1)', 'rgba(var(--primary-rgb),1)', 'var(--black-1)'],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <Fragment key={index}>
            <div
              {...props}

              key={index}

              style={{
                ...props.style,
                top: "14px",
                height: '20px',
                width: '24px',
                borderRadius: '4px',
                backgroundColor: 'rgba(var(--primary-rgb),1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'rgba(170, 170, 170, 0.3) 0px 2px 6px'
              }}

            >
              <Fragment key={index}>
                <div
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
                    padding: '4px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(var(--primary-rgb),1)',
                  }}
                >
                  {values[index].toFixed(1)}
                </div>
                <div
                  style={{
                    height: '16px',
                    width: '5px',
                    backgroundColor: isDragged ? '#548BF4' : '#fff',
                  }}
                />
              </Fragment>
            </div>
          </Fragment>
        )}
      />
    </div>
  );
};

export default LabeledTwoThumbs1;


