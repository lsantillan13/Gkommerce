const Steelseries ='../../../Images/sponsor-steelseries.jpg'
const Hyperx = '../../../Images/sponsor-hyperx.jpg'
const Intel = '../../../Images/sponsor-intel.png'

export default function Hero(){

  const ads = [
    {
      Name: 'Steelseries',
      Image: `${Steelseries}`,
      Id: 1,
    },
    {
      Name: 'Hyperx',
      Image: `${Steelseries}`,
      Id: 2,
    },
    {
      Name: 'Intel',
      Image: `${Steelseries}`,
      Id: 3,
    }
  ]
  return(
    <section className="flex justify-center mt-5">
    <div id="carouselExampleCrossfade" className="carousel slide carousel-fade relative justify-center content-center" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner w-full overflow-hidden">



        { ads.map((e) => {

          if(e.Id === 1){
            return(
              <div className="carousel-item active float-left w-100">
                <img src={Steelseries} className="block w-full" alt="asd"/>
              </div>
            )
          }
          else{
            return(
              <div className="carousel-item float-left w-100" key={e.Id}>
                <img src={e.Image} className="block w-full" alt={e.Image + '-picture'}/>
              </div>
            )
          }
        })}
      </div>
  <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  
  <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="next">
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>
  )
};