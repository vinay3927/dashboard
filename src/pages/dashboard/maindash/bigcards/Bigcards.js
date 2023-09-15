import React from 'react'
import './Bigcards.css'
import Bigcard from './bigcard/Bigcard'
import Addcard from './bigcard/addcard/Addcard'

const Bigcards = () => {

  const productsData = [
    [
    {
      title: 'Basic Tees',
      color: '#98D89E',
      percentage: 55,
    },
    {
      title: 'Custom Short Pants',
      percentage: 31,
      color: '#EE8484'
    },
    {
      title: 'Super Hoodies',
      percentage: 14,
      color: '#F6DC7D'
    },
  ]
];

  return (
    <div className='bigcards'>
        {productsData.map((products, index) => (
        <Bigcard key={index} data={products} />
      ))}
      <Addcard />
    </div>
  )
}

export default Bigcards