//pages/components/templates/input-field.tsx

import type { NextPage } from "next";
import { useRouter } from 'next/router';
import { useCallback, useState, ChangeEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

const InputField: NextPage = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in both username and password fields.');
      return;
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const data = await res.json();
        const { role } = data;

        switch (selectedOption) {
          case 'dosen':
            if (role === 2) {
              router.push({
                pathname: '/display-dosen',
                query: { username },
              });
            } else {
              alert('Wrong Credentials');
            }
            break;
          case 'mahasiswa':
            if (role === 3) {
              router.push({
                pathname: '/display-mahasiswa',
                query: { username },
              });
            } else {
              alert('Wrong Credentials');
            }
            break;
          case 'kepala_jurusan':
            if (role === 1) {
              router.push({
                pathname: '/display-kajur',
                query: { username },
              });
            } else {
              alert('Wrong Credentials');
            }
            break;
          default:
            alert('Please select a user type.');
            break;
        }
      } else {
        alert('Wrong username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };

  const onForgotPasswordTextClick = useCallback(() => {
    // Handle forgot password action
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <section className="self-stretch flex flex-row items-start justify-center max-w-full">
      <form className="m-0 w-[622px] rounded-21xl bg-white shadow-[5px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start pt-[47px] px-[31px] pb-16 gap-[19px] max-w-full border-[1px] border-solid border-gray-200 mq450:pt-[31px] mq450:pb-[42px] mq450:box-border">
        <div className="w-[622px] h-[439px] relative rounded-21xl bg-white shadow-[5px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-gray-200" />
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[21px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-5xl tracking-[-0.01em] leading-[36px] font-bold font-body-h4 text-black text-center inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[29px]">
            Login
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-8 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
            <select 
              className="border border-black rounded px-2 py-1 self-stretch h-10 relative font-body-h4 text-mini text-gray-100 max-w-full"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Select User Type</option>
              <option value="dosen">Dosen</option>
              <option value="mahasiswa">Mahasiswa</option>
              <option value="kepala_jurusan">Kepala Jurusan</option>
            </select>
            <input 
              type="text" 
              placeholder="Username" 
              className="border border-grey-300 rounded px-2 py-1 self-stretch h-10 relative font-body-h4 text-mini text-gray-100 max-w-full z-[1]"
              value={username}
              onChange={handleUsernameChange}
              onKeyDown={handleKeyDown}
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="border border-grey-300 rounded px-2 py-1 self-stretch h-10 relative font-body-h4 text-mini text-gray-100 max-w-full z-[1]"
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}
            />
            <div className="self-stretch flex flex-row items-start justify-end">
              <div
                className="w-[101px] relative text-xs tracking-[-0.01em] leading-[24px] font-body-h4 text-gray-100 text-left inline-block shrink-0 cursor-pointer z-[1]"
                onClick={onForgotPasswordTextClick}
              >
                Forgot Password
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center">
          <Button
            onClick={handleSubmit}
          >
            Login
          </Button>
        </div>
      </form>
    </section>
  );
};

export default InputField;