import React, { ChangeEvent, useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
}

const Person = ({ name, email, age }: Props) => {
  const [country, setCountry] = useState<string | null>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>{age}</h3>
      <input
        placeholder="country"
        onChange={handleChange}
        className="border-2 border-red-600"
      />
      <h3>{country}</h3>
    </div>
  );
};

export default Person;
