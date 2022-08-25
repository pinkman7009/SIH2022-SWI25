import React, { useState } from "react";

const AdditionalDetails = () => {
  const [curr, setCurr] = useState("SOCIO");
  const [recievingEducation, setRecievingEducation] = useState("false");

  const onClick = (type) => {
    setCurr(type);
  };

  const Button = ({ name, value }) => {
    return (
      <button
        className={`${
          curr === value
            ? "border-b-10 border-b-white border-x-2 border-t-2 border-primary overflow-visible bg-primary text-white"
            : "text-primary border-2 border-b-0 border-solid border-primary"
        } px-8 py-2 text-center font-bold`}
        onClick={() => onClick(value)}
        type="click"
      >
        {name}
      </button>
    );
  };

  const SocioContent = () => {
    return (
      <div className="100vh border-2 border-primary p-10 flex">
        <div className="flex flex-col justify-between gap-6">
          <div>1. Family type of child</div>
          <div>2. Has the family migrated?</div>
          <div>3. Relationships among family members</div>
          <div>4. BPL Card Number:</div>
          <div>5. Ration Card Number: </div>
        </div>
        <div className="flex flex-col justify-evenly gap-6 px-10">
          <select id="family-type" className="py-2 px-8 outline-primary">
            <option value="volvo">Orphan</option>
            <option value="saab">Nuclear</option>
            <option value="opel">Joint</option>
            <option value="audi">Extented</option>
          </select>
          <div className="flex gap-6 px-8">
            <div>
              <input type="radio" value="YES" />
              <label> Yes</label>
            </div>
            <div>
              <input type="radio" value="NO" />
              <label> No</label>
            </div>
          </div>
          <select
            id="relation-family"
            className="py-2 px-8 outline-primary border-2 border-solid"
          >
            <option value="volvo">Cordial</option>
            <option value="saab">Non-cordial</option>
            <option value="opel">Unknown</option>
          </select>
          <input
            type="text"
            className="p-1 px-3 bg-neutral-200 border-1 border-solid border-primary"
            placeholder="Please enter here"
          />
          <input
            type="text"
            className="p-1 px-3 bg-neutral-200 border-1 border-solid border-primary"
            placeholder="Please enter here"
          />
        </div>
      </div>
    );
  };

  const EconomicContent = () => {
    return (
      <div className="100vh border-2 border-primary p-10 flex">
        <div className="flex flex-col justify-between gap-6">
          <div>1. Type of dwelling</div>
          <div>2. Does the family own any land</div>
          <div>3. Does the family own any form of cattle?</div>
          <div>4. Does the family own any vehicles?</div>
          <div>5. Average annual income of the family</div>
        </div>
        <div className="flex flex-col justify-evenly gap-6 px-10">
          <select id="house-type" className="py-2 px-8 outline-primary">
            <option value="volvo">Brick house</option>
            <option value="saab">Kutcha house</option>
            <option value="opel">Tarpaulin shelter</option>
            <option value="audi">Thatched roofing</option>
            <option value="audi">Concreted house</option>
          </select>
          <div className="flex gap-6 px-8">
            <div>
              <input type="radio" value="YES" />
              <label> Yes</label>
            </div>
            <div>
              <input type="radio" value="NO" />
              <label> No</label>
            </div>
          </div>
          <div className="flex gap-6 px-8">
            <div>
              <input type="radio" value="YES" />
              <label> Yes</label>
            </div>
            <div>
              <input type="radio" value="NO" />
              <label> No</label>
            </div>
          </div>
          <div className="flex gap-6 px-8">
            <div>
              <input type="radio" value="YES" />
              <label> Yes</label>
            </div>
            <div>
              <input type="radio" value="NO" />
              <label> No</label>
            </div>
          </div>
          <select
            id="income-family"
            className="py-2 px-8 outline-primary border-2 border-solid"
          >
            <option value="volvo">Less than one lakh</option>
            <option value="saab">One to three lakhs</option>
            <option value="opel">Three to five lakhs</option>
            <option value="opel">More than five lakhs</option>
          </select>
        </div>
      </div>
    );
  };

  const EducationContent = () => {
    return (
      <div className="100vh border-2 border-primary p-10 flex">
        <div className="flex flex-col justify-between gap-6">
          <div>1. Has the child undergone any type of schooling?</div>
          <div>2. What is the last grade the child has attended?</div>
          <div className="flex gap-2">
            <div className="">3. Name of school:</div>
            <input
              type="text"
              className="p-1 px-3 bg-neutral-200 border-1 border-solid border-primary"
              placeholder="Please enter here"
            />
          </div>
          <div>5. Reason for leaving school</div>
          <div>6. Has the child received any kind of vocational training?</div>
          <div>
            7. Is the child interested in receiving vocational training?
          </div>
        </div>
        <div className="flex flex-col justify-evenly gap-6 px-10">
          <div className="flex gap-6 px-8">
            <div>
              <input
                type="radio"
                value={recievingEducation}
                onChange={(e) => {
                  return e.target.value ? setRecievingEducation(true) : null;
                }}
              />
              <label> Yes</label>
            </div>
            <div>
              <input
                type="radio"
                value={recievingEducation}
                onChange={(e) => {
                  return e.target.checked ? setRecievingEducation(false) : null;
                }}
              />
              <label> No</label>
            </div>
          </div>
          <select id="class-type" className="py-2 px-8 outline-primary">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <div className=" flex gap-2">
            <div className="">4. Medium:</div>
            <input
              type="text"
              className="p-1 px-3 bg-neutral-200 border-1 border-solid border-primary"
              placeholder="Please enter here"
            />
          </div>
          <select
            id="reason-for-leaving-education"
            className="py-2 px-8 outline-primary border-2 border-solid"
          >
            <option value="volvo">Lack of interest in education</option>
            <option value="saab">Sudden demise of parents</option>
            <option value="opel">In search of employment</option>
            <option value="opel">Abuse from family</option>
            <option value="saab">Poverty</option>
          </select>
          <div className=" flex gap-2">
            <div>
              <input type="radio" value="YES" />
              <label> Yes</label>
            </div>
            <div>
              <input type="radio" value="NO" />
              <label> No</label>
            </div>
          </div>
          <div className=" flex gap-2">
            <div>
              <input type="radio" value="YES" />
              <label> Yes</label>
            </div>
            <div>
              <input type="radio" value="NO" />
              <label> No</label>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const HealthContent = () => {
    return (
      <div className="100vh border-2 border-primary p-10 flex">
        <div className="flex flex-col justify-between gap-6">
          <div className="flex gap-2">
            <div className="">1. Height:</div>
            <input
              type="text"
              className="p-1 px-3 bg-neutral-200 border-1 border-solid border-primary"
              placeholder="Please enter here"
            />
          </div>
          <div>3. Handicapped/Disability</div>
          <div>4. Physical ailments</div>
          <div>5. Habits</div>
        </div>
        <div className="flex flex-col justify-evenly gap-6 px-10">
          <div className=" flex gap-2">
            <div className="">2. Weight:</div>
            <input
              type="text"
              className="p-1 px-3 bg-neutral-200 border-1 border-solid border-primary"
              placeholder="Please enter here"
            />
          </div>
          <select id="disablity-type" className="py-2 px-8 outline-primary">
            <option value="volvo">Locomotor impairments</option>
            <option value="saab">Dwarfism</option>
            <option value="opel">Blindness</option>
            <option value="audi">Autism spectrum</option>
            <option value="audi">
              Blood-related disorders (Sickle cell, Haemophilia, etc.)
            </option>
          </select>
          <select
            id="income-family"
            className="py-2 px-8 outline-primary border-2 border-solid"
          >
            <option value="volvo">Respiratory disorders</option>
            <option value="saab">Visual/ hearing impairment</option>
            <option value="opel">Skin infections</option>
            <option value="opel">Cardiac diseases</option>
            <option value="saab">Neurological disorders</option>
            <option value="opel">HIV/ sexually transmitted diseases</option>
            <option value="opel">Others</option>
          </select>
          <select
            id="habits-family"
            className="py-2 px-8 outline-primary border-2 border-solid"
          >
            <option value="volvo">Smoking</option>
            <option value="saab">Alcohol</option>
            <option value="opel">Drugs</option>
            <option value="opel">Chewables (Paan, pills, etc.)</option>
          </select>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="flex gap-2">
        <Button name={"Socio"} value={"SOCIO"} />
        <Button name={"Economic"} value={"ECONOMIC"} />
        <Button name={"Education"} value={"EDUCATION"} />
        <Button name={"Health"} value={"HEALTH"} />
      </div>
      {curr === "SOCIO" ? (
        <SocioContent />
      ) : curr === "ECONOMIC" ? (
        <EconomicContent />
      ) : curr === "EDUCATION" ? (
        <EducationContent />
      ) : (
        <HealthContent />
      )}
    </div>
  );
};

export default AdditionalDetails;
