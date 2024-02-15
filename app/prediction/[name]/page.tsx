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
    <div>
      <h2>{params.name}</h2>
      <div>Age : {age?.age}</div>
      <div>gender : {gender?.gender}</div>
      <div>Country : {country?.country[0].country_id}</div>
    </div>
  );
};

export default Name;
