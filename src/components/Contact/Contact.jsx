import React from 'react'

const Contact = () => {
    const inputStyles = `mb-5 w-full rounded-lg font-gothic bg-red-200 px-5 py-3 placeholder-red-300 font-bold text-red-400`;

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24 font-gothic">
      <div>
        {/* <div className="mb-20 ml-10 font-bold text-2xl flex justify-center w-full">
          <div>CONTACT US</div>
        </div> */}
        <div className="mt-10 flex-row-reverse justify-between gap-14 md:flex">
          <div className="mt-10 basis-3/5 md:mt-0">
            <form>
              <input className={inputStyles} type="text" placeholder="NAME" />
              {/* {errors.name && (
                <p className="mt-1 text-white">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )} */}
              <input className={inputStyles} type="text" placeholder="EMAIL" />
              {/* {errors.email && (
                <p className="mt-1 text-white">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )} */}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
              />
              {/* {errors.message && (
                <p className="mt-1 text-white">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )} */}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-red-200 px-20 py-3 font-bold text-red-400 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div className="basis-2/5">
            <div className="w-full ">
              <div className="h-full w-full rounded-xl border-4 border-red-300 bg-red-200 p-4 text-lg md:p-8 ">
                <div className="my-2 font-voga text-4xl md:my-4">
                  <p className="font-bold text-red-400">SAKHI</p>
                </div>
                <div className='text-start m-4 mt-8'>
                  <div className="my-2 md:my-4">
                    <p>Phone no. - 421-213-234</p>
                  </div>
                  <div className="my-2 md:my-4">
                    <p>Email - sakhiofficial@gmail.com</p>
                  </div>
                  <div className="my-2 md:my-4">
                    <p>Address - vidya nagar, hubli, KA.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact