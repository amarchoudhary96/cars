import { v4 as uuidv4 } from 'uuid';

export const cars = [
  {
    id: uuidv4(),
    company: "suzuki",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/2560px-Suzuki_logo_2.svg.png",
    model: [
      {
        id: uuidv4(),
        name: "swift",
        modelimg: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-profile-shots/swift-launch-2021/fireredmidnightblack.webp",
      },
      {
        id: uuidv4(),
        name: "alto",
        modelimg: "https://imgd-ct.aeplcdn.com/600x600/cw/ec/39013/Maruti-Suzuki-Alto-Right-Front-Three-Quarter-154833.jpg?wm=0&q=75",
      },
      {
        id: uuidv4(),
        name: "ciaz",
        modelimg:"https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-2.jpeg?q=75",
      },
    ],
  },
  {
    id: uuidv4(),
    company: "Hyundai",
    img: "https://logos-world.net/wp-content/uploads/2021/03/Hyundai-Logo.png",
    model: [
      {
        id: uuidv4(),
        name: "i20",
        modelimg: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202011/Grey_1200x768.png?size=1200:675",
      },
      {
        id: uuidv4(),
        name: "creta",
        modelimg: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
      },
      {
        id: uuidv4(),
        name: "i10",
        modelimg: "https://www.wheels97.com/tr:w-1200,dpr-1/images/car-color-images/hyundai/hyundai-grand-i10-nios/typhoon-white_CoRAiR1ZV.jpg",
      },
    ],
  },
  {
    id: uuidv4(),
    company: "Mahindra",
    img: "https://etimg.etb2bimg.com/photo/85170691.cms",
    model: [
      {
        id: uuidv4(),
        name: "scorpio",
        modelimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IFVCSUWEIK-zCXHRwvIMtm1LMOdvdzmy5w&usqp=CAU",
      },
      {
        id: uuidv4(),
        name: "scorio n",
        modelimg: "https://www.drivespark.com/images/2022-06/mahindra-scorpio-n-101.jpg",
      },
      {
        id: uuidv4(),
        name: "xuv 700",
        modelimg: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20211029022429_XUV700_2.jpg",
      },
    ],
  },
  {
    id: uuidv4(),
    company: "TATA",
    img: "https://logos-world.net/wp-content/uploads/2021/10/Tata-Symbol.png",
    model: [
      {
        id: uuidv4(),
        name: "altroz",
        modelimg: "https://imgd-ct.aeplcdn.com/1056x660/n/qdeom4a_1526945.jpg?q=75",
      },
      {
        id: uuidv4(),
        name: "harrior",
        modelimg: "https://imgd.aeplcdn.com/642x336/n/cw/ec/142739/harrier-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75",
      },
      {
        id: uuidv4(),
        name: "safari",
        modelimg: "https://gaadiwaadi.com/wp-content/uploads/2021/09/tata-safari--676x500.jpg",
      },
    ],
  },
];
