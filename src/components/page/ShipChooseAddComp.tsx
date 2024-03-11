import React from "react";

const shipping = () => {
  //Define custom function here
  const onclick = () => {

  };
  return (
    <>
    <div className="grid grid-rows-2">
      <div className="border rounded-lg inline-block flex flex-row items-start">
        <input id="address1" className="peer/address1"  type="radio" name="status" value="address1"/>
        <label htmlFor="address1" className="peer-checked/address1:border-[#FFA826] peer-checked/address1:bg-[#FFF1DC]&border-2&text-black">
          <p className="font-bold">Rertnarith thertsati</p>
          <p>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ซอย ฉลองกรุง 1<br/>
          แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520 <br/>
          0891231234
          </p>
        </label>
      </div>
      <div>
        <input id="address2" className="peer/draft" type="radio" name="status" value="address2"/>
        <label htmlFor="address2" className="peer-checked/draft:text-sky-500">
          <p className="font-bold">Rertnarith thertsati</p>
          <p>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ซอย ฉลองกรุง 1<br/>
          แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520 <br/>
          0891231234
          </p>
        </label>
      </div>
    </div>
    </>
  );
};

export default shipping;
