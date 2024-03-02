import React from "react";

const shipping = () => {
  //Define custom function here
  const onclick = () => {
    
  };
  return (
    <>
    <div className="h-screen mt-5 p-10 justify-center mt-3 ml-[70px] mr-[50px] border border-2">
      <div className="border-b-2 mb-4 w-6/12 pl-2 ml-[-10px]">
        <p className="text-2xl font-bold inline-block">Shipping address</p>
        <p className="text-sm text-[#AAAAAA] inline-block ml-3">Select your address</p>
      </div>

      
      <div className="grid grid-cols-[600px_auto]">

        {/* first row */}
        <div className="border border-indigo-700">

          {/* Add new address */}
          <div className="border-b-[1px] border-black pl-2 pb-5 ml-[-10px] flex ">
            <div className="border rounded-lg inline-block flex flex-row items-start">
              <input id="choose" className="peer/draft" type="radio" name="status" value="choose"/>
              <label for="choose" class="peer-checked/draft:text-sky-500">
                <p>Choose your address</p>
                <p>Select your previosly saved address.</p>
                <p className="font-bold">You don't have any address now.</p>
              </label>
            </div>
            <div className="border rounded-lg inline-block">
              <input id="select" className="peer/draft" type="radio" name="status" value="select"/>
              <label for="select" class="peer-checked/draft:text-sky-500">
                <p>Add new address</p>
                <p>Fill out the address form and can <br/>save your information to use for <br/>the next time</p>
              </label>
            </div>
          </div>

          {/* information group */}
          <div>
            <form className="table w-full">
              <label className="inline-block mx-1 my-2">
                <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 w-[285px]" placeholder="Name"/>
                {/* <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.x
                </p> */}
              </label>
              <label className="inline-block mx-1 my-2">
                <input type="tel" className="peer border border-[#8C8C8C] pl-4 py-1 w-[285px]" placeholder="Phone"/>
              </label>
              <label className="block mx-1 my-2">
                <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 h w-[100%]" placeholder="Address"/>
              </label>
              <select id="province" className="peer border border-[#8C8C8C] pl-4 py-1 h w-[100%]">
                <option selected>Select province</option>
                <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                <option value="กระบี่">กระบี่ </option>
                <option value="กาญจนบุรี">กาญจนบุรี </option>
                <option value="กาฬสินธุ์">กาฬสินธุ์ </option>
                <option value="กำแพงเพชร">กำแพงเพชร </option>
                <option value="ขอนแก่น">ขอนแก่น</option>
                <option value="จันทบุรี">จันทบุรี</option>
                <option value="ฉะเชิงเทรา">ฉะเชิงเทรา </option>
                <option value="ชัยนาท">ชัยนาท </option>
                <option value="ชัยภูมิ">ชัยภูมิ </option>
                <option value="ชุมพร">ชุมพร </option>
                <option value="ชลบุรี">ชลบุรี </option>
                <option value="เชียงใหม่">เชียงใหม่ </option>
                <option value="เชียงราย">เชียงราย </option>
                <option value="ตรัง">ตรัง </option>
                <option value="ตราด">ตราด </option>
                <option value="ตาก">ตาก </option>
                <option value="นครนายก">นครนายก </option>
                <option value="นครปฐม">นครปฐม </option>
                <option value="นครพนม">นครพนม </option>
                <option value="นครราชสีมา">นครราชสีมา </option>
                <option value="นครศรีธรรมราช">นครศรีธรรมราช </option>
                <option value="นครสวรรค์">นครสวรรค์ </option>
                <option value="นราธิวาส">นราธิวาส </option>
                <option value="น่าน">น่าน </option>
                <option value="นนทบุรี">นนทบุรี </option>
                <option value="บึงกาฬ">บึงกาฬ</option>
                <option value="บุรีรัมย์">บุรีรัมย์</option>
                <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์ </option>
                <option value="ปทุมธานี">ปทุมธานี </option>
                <option value="ปราจีนบุรี">ปราจีนบุรี </option>
                <option value="ปัตตานี">ปัตตานี </option>
                <option value="พะเยา">พะเยา </option>
                <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา </option>
                <option value="พังงา">พังงา </option>
                <option value="พิจิตร">พิจิตร </option>
                <option value="พิษณุโลก">พิษณุโลก </option>
                <option value="เพชรบุรี">เพชรบุรี </option>
                <option value="เพชรบูรณ์">เพชรบูรณ์ </option>
                <option value="แพร่">แพร่ </option>
                <option value="พัทลุง">พัทลุง </option>
                <option value="ภูเก็ต">ภูเก็ต </option>
                <option value="มหาสารคาม">มหาสารคาม </option>
                <option value="มุกดาหาร">มุกดาหาร </option>
                <option value="แม่ฮ่องสอน">แม่ฮ่องสอน </option>
                <option value="ยโสธร">ยโสธร </option>
                <option value="ยะลา">ยะลา </option>
                <option value="ร้อยเอ็ด">ร้อยเอ็ด </option>
                <option value="ระนอง">ระนอง </option>
                <option value="ระยอง">ระยอง </option>
                <option value="ราชบุรี">ราชบุรี</option>
                <option value="ลพบุรี">ลพบุรี </option>
                <option value="ลำปาง">ลำปาง </option>
                <option value="ลำพูน">ลำพูน </option>
                <option value="เลย">เลย </option>
                <option value="ศรีสะเกษ">ศรีสะเกษ</option>
                <option value="สกลนคร">สกลนคร</option>
                <option value="สงขลา">สงขลา </option>
                <option value="สมุทรสาคร">สมุทรสาคร </option>
                <option value="สมุทรปราการ">สมุทรปราการ </option>
                <option value="สมุทรสงคราม">สมุทรสงคราม </option>
                <option value="สระแก้ว">สระแก้ว </option>
                <option value="สระบุรี">สระบุรี </option>
                <option value="สิงห์บุรี">สิงห์บุรี </option>
                <option value="สุโขทัย">สุโขทัย </option>
                <option value="สุพรรณบุรี">สุพรรณบุรี </option>
                <option value="สุราษฎร์ธานี">สุราษฎร์ธานี </option>
                <option value="สุรินทร์">สุรินทร์ </option>
                <option value="สตูล">สตูล </option>
                <option value="หนองคาย">หนองคาย </option>
                <option value="หนองบัวลำภู">หนองบัวลำภู </option>
                <option value="อำนาจเจริญ">อำนาจเจริญ </option>
                <option value="อุดรธานี">อุดรธานี </option>
                <option value="อุตรดิตถ์">อุตรดิตถ์ </option>
                <option value="อุทัยธานี">อุทัยธานี </option>
                <option value="อุบลราชธานี">อุบลราชธานี</option>
                <option value="อ่างทอง">อ่างทอง </option>
                <option value="อื่นๆ">อื่นๆ</option>
              </select>
              <label className="inline-block mx-1 my-2">
                <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 h" placeholder="District"/>
              </label>
              <label className="inline-block mx-1 my-2">
                <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 h" placeholder="Sub district"/>
              </label>
              <label className="inline-block mx-1 my-2">
                <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 h" placeholder="Postal code"/>
              </label>
              
            </form>
            <div className="flex justify-end mt-6">
              <button className="rounded-md bg-[#F9BC60] text-[#FFFFFF] px-10 py-2">Add new address +</button>
            </div>
          </div>

        </div>

        {/* second row */}
        <div className="border border-indigo-700">
          {/* Add new address */}
          <div className="border-b-[1px] border-black ml-8 pb-4">
            <div className="inline-block font-bold border border-2 flex flex-row">
              <img className="rounded-2 w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
              <div className="ml-6 flex flex-col justify-center border border-2 border-lime-400">
                <p className="text-2xl font-bold">Dummy Book - Chapter 1</p>
                <p className="text-base text-[#A8A8A8] font-normal">New Book</p>
                <p className="text-base text-[#A8A8A8] font-normal">By vendor's name</p>
              </div>
            </div>
            <div className="inline-block font-bold border border-2 flex flex-row">
              <img className="rounded-2 w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
              <div className="ml-6 flex flex-col justify-center border border-2 border-lime-400">
                <p className="text-2xl font-bold">Dummy Book - Chapter 1</p>
                <p className="text-base text-[#A8A8A8] font-normal">New Book</p>
                <p className="text-base text-[#A8A8A8] font-normal">By vendor's name</p>
              </div>
            </div>
          </div>
          <div className="ml-8 mt-6">
            <div className="block flex flex-row justify-between">
              <p className="">Subtotal</p>
              <p className="">150.00 ฿</p>
            </div>
            <div className="block flex flex-row justify-between">
              <p>Shipping</p>
              <p>Calculate at next step</p>
            </div>
            <div className="flex justify-end mt-6">
              <button className="rounded-md bg-[#F9BC60] text-[#FFFFFF] px-10 py-2">Next &#8594;</button>
            </div>
          </div>
        </div>
      </div>
    </div>;
    </>
  );
};

export default shipping;
