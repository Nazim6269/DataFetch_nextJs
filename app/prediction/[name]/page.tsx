const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredicteGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

const Name = async ({ params }: Params) => {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredicteGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="uppercase font-bold text-purple-700">personal info</h2>
        <div className="font-semibold block mb-2 ">Name: {params.name}</div>
        <div className="font-semibold block mb-2 ">Age: {age?.age}</div>
        <div className="font-semibold block mb-2 ">
          Gender: {gender?.gender}
        </div>
        <div className="font-semibold block">
          Country: {country?.country[0]?.country_id}
        </div>
      </div>
    </div>
  );
};

export default Name;
