import React, { useState, FC } from "react";
import Person from "./Person";

interface Props {
  text: string;
  num?: number;
  name?: any;
  age?: any;
  email?: any;
  counter: boolean;
}

const TextField: FC<Props> = ({ text, num, name, age, email, counter }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="text-black dark:text-white ">
      {text} {num}
      {counter && (
        <div className="">
          <div>{count}</div>
          <button
            className="bg-slate-50 px-2 border-2 border-black dark:bg-slate-600"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <button
            className="bg-slate-50 px-2 border-2 border-black  dark:bg-slate-600"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button
            className="bg-slate-50 px-2 border-2 border-black  dark:bg-slate-600"
            onClick={() => setCount(count * 0)}
          >
            reset
          </button>
        </div>
      )}
      <Person name={name} email={email} age={age} />
    </div>
  );
};

export default TextField;
