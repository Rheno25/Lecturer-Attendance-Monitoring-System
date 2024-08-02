import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useState, useEffect } from "react";
import FrameComponent2 from "../components/atoms/frame-component1";
import styles from "./index.module.css";
import FrameComponent, { FrameComponentType } from "../components/atoms/frame-component6";
import axios from "axios";

const DisplayDosen: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const usernameString = typeof username === 'string' ? username : '';

  const onImage2IconClick = useCallback(() => {
    router.push('/');
  }, [router]);

  const [lecturerDetail, setLecturerDetail] = useState('');
  const [lecturerInputVisible, setLecturerInputVisible] = useState(false);

  const [historyDetail, setHistoryDetail] = useState('');
  const [historyInputVisible, setHistoryInputVisible] = useState(false);

  const handleLecturerSubmit = async () => {
    try {
      const response = await axios.post('/api/updateDetailsAPI', {
        username: usernameString,
        details: lecturerDetail
      });
      if (response.status === 200) {
        setLecturerInputVisible(false);
        // Optionally fetch the updated data
      }
    } catch (error) {
      console.error('Error submitting lecturer details:', error);
    }
  };

  const handleHistorySubmit = async () => {
    try {
      const response = await axios.post('/api/historyModifyAPI', {
        username: usernameString,
        details: historyDetail
      });
      if (response.status === 200) {
        setHistoryInputVisible(false);
      }
    } catch (error) {
      console.error('Error submitting history detail:', error);
    }
  };

  const [lecturers, setLecturers] = useState<FrameComponentType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (usernameString) {
          const response = await fetch(`/api/lecturerProfileAPI?username=${usernameString}`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setLecturers(data);
          // Set the lecturer detail if it exists
          setLecturerDetail(data[0].details || '');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [usernameString]);

  return (
    <div className="w-full relative bg-lightblue overflow-hidden flex flex-col items-start justify-start gap-[73px] tracking-[normal] mq450:gap-[18px_73px] mq750:gap-[36px_73px]">
      <FrameComponent2 onImage2IconClick={onImage2IconClick} />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-[69px] pl-[68px] box-border max-w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
        <section className="flex-1 flex flex-col items-end justify-start gap-[68px] max-w-full text-center text-[56px] text-black font-roboto mq450:gap-[17px_68px] mq750:gap-[34px_68px]">
          <FrameComponent username={usernameString} />
          <footer className="self-stretch h-[512px] flex flex-col items-start justify-start py-[30px] px-[67px] box-border relative gap-[165px] text-center text-13xl text-black font-roboto mq450:gap-[82px_165px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="w-full h-full absolute !m-[0] right-[0px] bottom-[-8px] left-[0px] rounded-[10px] [background:linear-gradient(rgba(109,_211,_70,_0.2),_rgba(109,_211,_70,_0.2)),_linear-gradient(rgba(211,_70,_109,_0.2),_rgba(211,_70,_109,_0.2)),_rgba(70,_109,_211,_0.1)] shadow-[10px_4px_4px_rgba(0,_0,_0,_0.25)]" />
            <div className="w-auto text-left relative inline-block z-[1] mq450:text-lgi mq750:text-7xl">
              Lecturer Detail:
              {lecturerDetail && !lecturerInputVisible && (
                <div className="w-full text-left py-0 px-0 inline-block z-[1] mq450:text-lgi mq750:text-7xl">
                  <span className="flex-grow text-left text-lgi">{lecturerDetail}</span>
                  <br></br>
                </div>
              )}
            </div>

            {/* <div className="w-auto text-left relative inline-block z-[1] mq450:text-lgi mq750:text-7xl">
              History:
              {historyDetail && !historyInputVisible && (
                <div className="w-full text-left py-0 px-0 inline-block z-[1] mq450:text-lgi mq750:text-7xl">
                  <span className="flex-grow text-left text-lgi">{historyDetail}</span>
                  <br></br>
                  <center>
                    <button
                      onClick={() => setHistoryInputVisible(true)}
                      className="ml-2 p-1 bg-yellow-500 text-white rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setHistoryDetail('')}
                      className="ml-2 p-1 bg-red text-white rounded"
                    >
                      Remove
                    </button>
                  </center>
                </div>
              )}
              {historyInputVisible && (
                <div className="mt-2">
                  <input
                    type="text"
                    className="mt-2 w-full border border-gray-300 p-2 rounded mq450:text-base"
                    onChange={(e) => setHistoryDetail(e.target.value)}
                    placeholder="Enter history detail"
                  />
                  <button
                    onClick={handleHistorySubmit}
                    className="ml-2 p-1 bg-green-500 text-white rounded"
                  >
                    Submit
                  </button>
                </div>
              )}
              {!historyDetail && !historyInputVisible && (
                <button
                  onClick={() => setHistoryInputVisible(true)}
                  className="mt-2 p-1 bg-blue-500 text-white rounded"
                >
                  Add Detail
                </button>
              )}
            </div> */}
          </footer>
        </section>
      </main>
    </div>
  );
};

export default DisplayDosen;