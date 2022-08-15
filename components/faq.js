function Faq() {
  return (
    <div className="flex relative flex-col items-center min-w-screen pt-10 faq bg-rm_green">
      {/* <h1 className="text-white font-angkor text-4xl mt-16">FAQs</h1> */}
      <p className="font-Rancho justify-center text-center text-4xl 2xl:text-6xl text-rm_blue mt-12">
        FAQs
      </p>
      <div className="flex min-w-screen relative flex-col py-10 bg-darkpurple px-10">
        {/* FAQ1 */}
        <div className=" border-r-purple border-r-8 border-b-purple border-b-8 shadow-md md:w-[900px] 2xl:w-[1400px]">
          <div className="tab w-full overflow-hidden border border-1 border-purple py-3 ">
            <input
              className="absolute opacity-0 "
              id="tab-multi-one"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer text-white font-bold text-xl md:text-2xl"
              htmlFor="tab-multi-one"
            >
              1. How many Real Monsters are there
            </label>
            <div className="tab-content overflow-hidden   leading-normal">
              <p className="p-5 font-Thasadith text-white text-lg">
                There are total of 1000 unique Real Monsters in our collection.
              </p>
            </div>
          </div>
        </div>
        {/* FAQ1 */}

        {/* FAQ2 */}
        <div className=" border-r-purple border-r-8 border-b-purple border-b-8 shadow-md md:w-[900px] 2xl:w-[1400px]">
          <div className="tab w-full overflow-hidden border border-1 border-purple">
            <input
              className="absolute opacity-0 "
              id="tab-multi-two"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer text-white font-bold text-xl md:text-2xl"
              htmlFor="tab-multi-two"
            >
              2. What are NFTs
            </label>
            <div className="tab-content overflow-hidden   leading-normal">
              <p className="p-5 font-Thasadith text-white text-lg">
                NFT stands for(non-fungible token) which are unique digital
                items that are stored and encrypted on the blockchain that
                people can buy, own, and trade. They can get you access to the
                things like websites, merchandise, and more.
              </p>
            </div>
          </div>
        </div>
        {/* FAQ2 */}

        {/* FAQ3 */}
        <div className=" border-r-purple border-r-8 border-b-purple border-b-8 shadow-md md:w-[900px] 2xl:w-[1400px]">
          <div className="tab w-full overflow-hidden border border-1 border-purple">
            <input
              className="absolute opacity-0 "
              id="tab-multi-three"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer text-white font-bold text-xl md:text-2xl"
              htmlFor="tab-multi-three"
            >
              3. How do I buy a Real Monster
            </label>
            <div className="tab-content overflow-hidden   leading-normal">
              <p className="p-5 font-Thasadith text-white text-lg">
                All of the NFTs will be available for purchase on our website
                through an initial sale. You will need to connect your Metamask
                wallet on the Ethereum network to mint.
              </p>
            </div>
          </div>
        </div>
        {/* FAQ3 */}

        {/* FAQ4 */}
        <div className=" border-r-purple border-r-8 border-b-purple border-b-8 shadow-md md:w-[900px] 2xl:w-[1400px]">
          <div className="tab w-full overflow-hidden border border-1 border-purple">
            <input
              className="absolute opacity-0 "
              id="tab-multi-four"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer text-white font-bold text-xl md:text-2xl"
              htmlFor="tab-multi-four"
            >
              4. How will I claim my Real Monster toy?
            </label>
            <div className="tab-content overflow-hidden   leading-normal">
              <p className="p-5 font-Thasadith text-white text-lg">
                Once the initial sale of the NFTs has been completed we will
                provide a link on the website where you can go and claim your
                Real Monster Toy and arange delivery to your house
              </p>
            </div>
          </div>
        </div>
        {/* FAQ4 */}

        {/* FAQ5 */}
        <div className=" border-r-purple border-r-8 border-b-purple border-b-8 shadow-md md:w-[900px] 2xl:w-[1400px]">
          <div className="tab w-full overflow-hidden border border-1 border-purple">
            <input
              className="absolute opacity-0 "
              id="tab-multi-five"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer text-white font-bold text-xl md:text-2xl"
              htmlFor="tab-multi-five"
            >
              5. How much will one Real Monster Cost
            </label>
            <div className="tab-content overflow-hidden   leading-normal">
              <p className="p-5 font-Thasadith text-white text-lg">
                One Real Monster will cost you 0.5 ETH. This includes the
                delivery and manufaturing of your own one of a kind hand made
                toy
              </p>
            </div>
          </div>
        </div>
        {/* FAQ5 */}

        {/* FAQ6 */}
        <div className=" border-r-purple border-r-8 border-b-purple border-b-8 shadow-md md:w-[900px] 2xl:w-[1400px]">
          <div className="tab w-full overflow-hidden border border-1 border-purple">
            <input
              className="absolute opacity-0 "
              id="tab-multi-six"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer text-white font-bold text-xl md:text-2xl"
              htmlFor="tab-multi-six"
            >
              6. How many NFTs can I mint
            </label>
            <div className="tab-content overflow-hidden   leading-normal">
              <p className="p-5 font-Thasadith text-white text-lg">
                We are limiting the NFTs to 10 per wallet to make sure everyone
                gets a chance to own 1 of 1000 custom Real Monsters by Katie
                Eary, but you can have as many wallets as you want
              </p>
            </div>
          </div>
        </div>
        {/* FAQ6 */}
        {/* FAQ7*/}
        <div className=" border-r-purple border-r-8 border-b-purple border-b-8 shadow-md md:w-[900px] 2xl:w-[1400px]">
          <div className="tab w-full overflow-hidden border border-1 border-purple">
            <input
              className="absolute opacity-0 "
              id="tab-multi-seven"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer text-white font-bold text-xl md:text-2xl"
              htmlFor="tab-multi-seven"
            >
              7. When will The Real Monsters go on Sale
            </label>
            <div className="tab-content overflow-hidden   leading-normal">
              <p className="p-5 font-Thasadith text-white text-lg">TBA</p>
            </div>
          </div>
        </div>
        {/* FAQ7 */}
      </div>
    </div>
  );
}

export default Faq;
