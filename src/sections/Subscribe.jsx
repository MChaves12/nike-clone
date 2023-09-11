import Button from '../components/Button';

const Subscribe = () => {
  return (
    <section className="max-container flex flex-col justify-between items-center
    max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl w-[800px] leading-[68px] font-palanquin font-bold">
        Sign Up from
        <span className="text-coral-red"> updates</span> & Newsletters
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center
      max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe;
