import '../App.css'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>Your feet deserve the best and we are here to help you with our shoes. Your feet deserve the best and we are here to help you with our shoes.</p>
        <div className="button-wrapper">
        <button id='shop-now'>Shop Now</button>
        <button id='category-btn'>Category</button>
        </div>
      </div>
      <div className="hero-right">
        <img src="/images/uptown.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
