import { CiEdit } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const avatarImages = [
  {
    src: "https://s3-alpha-sig.figma.com/img/c063/e946/484b5b758f13eb04105a298ceb968092?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pGz6kcJnprnm0WCvrxQKseXCJtqH19C7VdV0bXf6iJamyj1uGX4bZblaZiDNd1~CrUI9QPfP8eyvqyZ7Z7utVkR3ynkonLL3l5ATobgVdWOcyjjB0uVL4bly~7UE3-TKBqQJziABQFm8tXB71WuCw6b-g1~Wcv6U~SjhY9mjekPoGpzB8K9OV8W7NaOdlLv0H3D0YErMDX91f2T4TunMVLjDXw-ZTZuO5q-TDO~wI-giOE6U3iGbDw~16QlrBM7KvNdarLNKF4qDqiflL1f-MXv62kI8i1azrpOoYVpfJqyTn9Vsg5AfRxyKEo4RfZ1tt5pzpy2QXzg~WTVbbQXO1w__",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/0430/4e97/1f429cc0f3282d0310257ed61402bc86?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HQGZvNx0VrMezGLAnhLChMyClRypZH142m2IHwPx525BMomhWx6rbAxODmu~wMVJjnHEEIjWI0EFG9NXE4T443s3JVqqgnZuwiIS705OGuEeRlBrewtLzOj52j9YB6bW5AkF-R7MRajep-ijBq8z8GYKUpJ7mKV938KI3~v2uiFf7C9OnJadl8LB1DG4iJF2Z0w3X01-7aivYeOGxECsmb5a8Sdq2~F9Eo2~47Re7dNe6aLTKfAK8xKh9WaqXPCDpAlHTF4fBLCdBBWoW3ykta7HPCUqjraUJJ1mR4FtT5hsKTo62hzuNoZ8T3NJDJdnxTdjmoa8CGhdZP2DtDxSYg__",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/e87b/8dff/e89700d2a29bed7562c56b6dd1ca3c5f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dFd6P6MTMZhnxGJa5a8s8kr-cx7PNeE-httCN4I4Sy~RTNbYRLr~B1n2wkENLjHy8JxS81yYjipgKBFUfO2IT-0fMqUS-6qH1ylT2cRZIUVRzXasTIvDQZAVtGhxq21C8wWb6ipCYcu4GQDv-Gm2m5DencCA28jqtYSjdcwWBLgi8Ltuvlp8XQoiZl3jS12y1arIKYiUUTvHtvDld5xIiL~5b4sL9H4T~6JcBrFrPpAqzS2y0QF62zmpKBJMYRkS9ACvc1Wvk5Hdm1UNKXg4N2zT2HXcbJOsdUSCkOae5dtdxmraB5ZxhXfdW2d7mw-7O2N9ndSmnBNeetGe5O0lww__",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/07f0/5483/8a4e99808eed4d84c664f26266a95f18?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hQm1hMMz4jBUYt8vej3seyIz~urlQGCyCQ6TU4V0eJYvBe2QVY8CDKu6ZooaA00m-47dCeu43ethK~l69QJ41U9-K-nBJquliPPhB4WSZItbfmZR8W4OoyleYARzp-BXFY3Ot4rNpLw1s3p8CKg3G0P75Fx6oWqnv6To79PjVVsCzqaD~JjxzwplzvnGJXbGwW3LhJSq6JU0X5l~7JiYHmUSX-Ibct5sVbWpF3Lg5l0Wu~rSeNjS4O1VkR2VvWghc~R4lnhXp3HVf0f8Zjj9ZHI6S7NG~31Qm4g~gPDn9N-37XlWd46af-GQG2T-hshBlEfnQB2hFJQsrbFUZ5ryNQ__",
  },
];

function Header() {
  return (
    <section className="flex justify-between items-center w-full h-[13%]">
      <div className="flex h-full w-1/2 justify-start items-center gap-3">
        <h2 className="text-2xl font-sans">Mobile App</h2>
        <span className="mt-1 text-purple-600 text-xl rounded-md bg-purple-200 px-2 py-1 cursor-pointer">
          <CiEdit />
        </span>
        <span className="mt-1 text-purple-600 text-xl rounded-md bg-purple-200 px-2 py-1 cursor-pointer">
          <IoMdLink />
        </span>
      </div>
      <div className="flex h-full flex-row justify-center items-center gap-5">
        <div className="flex items-center cursor-pointer">
          <span className="text-purple-600 bg-purple-200 p-1 rounded-md">
            <FaPlus />
          </span>
          <span className="ml-1">Invite</span>
        </div>
        <div className="flex items-center">
          {avatarImages?.map((img, index) => (
            <img
              key={index}
              src={img?.src}
              alt="logo"
              className="h-8 w-8 rounded-full -ml-2 cursor-pointer"
            />
          ))}
          <div className="h-8 w-8 rounded-full bg-pink-300 -ml-2 flex justify-center items-center cursor-pointer">
            +2
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
