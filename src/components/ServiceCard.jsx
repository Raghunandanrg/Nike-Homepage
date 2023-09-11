
const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] shadow-3xl rounded-[20px] px-10 py-16 hover:bg-coral-red'>
      <div className="flex rounded-full w-11 h-11 justify-center items-center bg-coral-red">
        <img src={imgURL} width={24} height={24}/>
        
      </div>
      <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal ">{label}</h3>
        <p className="mt-5 font-montserrat text-lg leading-normal ">{subtext}</p>
    </div>
  )
}

export default ServiceCard