import { useState } from "react";
import { useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const SignUp = () => {
  const [data, setData] = useState({
    address: "",
    username: "",
    name: "",
    password: "",
    rePassword: "",
    secretPhrase: "",
    reSecretPhrase: "",
  });
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.password !== data.rePassword) {
      alert("Passowrd doesn't match.");
    } else if (data.secretPhrase !== data.reSecretPhrase) {
      alert("Secret Phrase doesn't match.");
    } else {
      console.log(data);
      history.push("/login");
    }
  };

  return (
    <div className="bg-[#00000080] min-h-screen py-16">
      {/* ----------------React tootip component for sign up--------------  */}
      <ReactTooltip effect="solid" place="right" />

      <div className="bg-white rounded-[30px] md:w-[650px] lg:w-[850px] mx-auto py-8 px-12">
        <h1 className="text-[60px] leading-[75px] font-light text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">
          Sign Up.
        </h1>
        <form onSubmit={submitHandler}>
          <h1 className="md:text-[20px] lg:text-[25px] font-light mb-2">
            Address
          </h1>
          <input
            type="text"
            required
            className="border-2 border-[#000000] rounded-[5px] w-[100%] h-[40px] address-color text-xl"
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />

          <div className="grid grid-cols-2 gap-12 mt-5">
            <div>
              <h1 className="md:text-[20px] lg:text-[25px] font-light mb-2">
                Username{" "}
                <span className="text-red-500" data-tip="hello world">
                  ⓘ
                </span>
              </h1>
              <input
                type="text"
                required
                className="border-2 border-[#000000] rounded-[5px] w-[100%] h-[40px] text-xl"
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
            </div>
            <div>
              <h1 className="md:text-[20px] lg:text-[25px] font-light mb-2">
                Name
              </h1>
              <input
                type="text"
                required
                className="border-2 border-[#000000] rounded-[5px] w-[100%] h-[40px] text-xl"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 mt-5">
            <div>
              <h1 className="md:text-[20px] lg:text-[25px] font-light mb-2">
                Password{" "}
                <span className="text-red-500" data-tip="hello world">
                  ⓘ
                </span>
              </h1>
              <input
                type="password"
                required
                className="border-2 border-[#000000] rounded-[5px] w-[100%] h-[40px] text-xl"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <div>
              <h1 className="md:text-[20px] lg:text-[25px] font-light mb-2">
                Re-enter Password
              </h1>
              <input
                type="password"
                required
                className="border-2 border-[#000000] rounded-[5px] w-[100%] h-[40px] text-xl"
                onChange={(e) =>
                  setData({ ...data, rePassword: e.target.value })
                }
              />
            </div>
          </div>
          <h1 className="md:text-[20px] lg:text-[25px] font-light mb-2 mt-5">
            Secret Phrase{" "}
            <span className="text-red-500" data-tip="hello world">
              ⓘ
            </span>
          </h1>
          <input
            type="text"
            required
            className="border-2 border-[#000000] rounded-[5px] w-[100%] h-[40px] text-xl"
            onChange={(e) => setData({ ...data, secretPhrase: e.target.value })}
          />

          <h1 className="md:text-[20px] lg:text-[25px] font-light mb-2 mt-5">
            Re-enter Secret Phrase
          </h1>
          <input
            type="text"
            required
            className="border-2 border-[#000000] rounded-[5px] w-[100%] h-[40px] text-xl"
            onChange={(e) =>
              setData({ ...data, reSecretPhrase: e.target.value })
            }
          />
          <div className="text-center">
            <button
              type="submit"
              className="text-white font-light text-[36px] bg-lbBg rounded-[10px] w-[280px] h-[70px] mt-8"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
