import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { DateTime } from "luxon";
import "react-calendar/dist/Calendar.css";

interface IUser {
  _id: string;
  userName: string;
  email: string;
  puppy: { name: string; birthDate: string };
}

const SettingsPage = () => {
  const [user, setUser] = useState<IUser>({
    _id: "",
    userName: "",
    email: "",
    puppy: { name: "", birthDate: new Date().toString() },
  });
  let dt = DateTime.now();

  useEffect(() => {
    const getUser = async () => {
      let userResponse = await axios.get("http://localhost:3001/get-user", {
        withCredentials: true,
      });

      setUser(userResponse.data);
    };
    getUser();
  }, []);

  const handleDateChange = (date: string) => {
    setUser({ ...user, puppy: { ...user.puppy, birthDate: date } });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "userName" || "email") {
      setUser({ ...user, [name]: value });
    }
    if (name === "puppyName") {
      setUser({ ...user, puppy: { ...user.puppy, name: value } });
    }
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let editResponse = await axios.put("http://localhost:3001/edit-user", user);
    console.log(editResponse);
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <input
        type='text'
        name='userName'
        required
        minLength={2}
        maxLength={20}
        placeholder='Användarnamn'
        value={user.userName}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='email'
        required
        minLength={2}
        maxLength={20}
        placeholder='Email'
        value={user.email}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='puppyName'
        required
        minLength={2}
        maxLength={20}
        placeholder='Valpens namn'
        value={user.puppy.name}
        onChange={handleInputChange}
      />
      <Calendar
        minDate={dt.minus({ years: 1 }).toJSDate()}
        maxDate={dt.toJSDate()}
        showWeekNumbers={true}
        value={new Date(user.puppy.birthDate)}
        onChange={(date: Date) => {
          handleDateChange(date.toString());
        }}
      />
      <button onClick={handleClick}>Spara</button>
    </>
  );
};

export default SettingsPage;