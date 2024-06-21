import { FC } from "react";
import Images from "./Images";

type AppProps = {};

const App: FC<AppProps> = () => {
  return (
    <div className="m-4 text-center">
      <div className="flex items-center justify-between">
        <span className="">Logo</span>
        <span className="text-sm">DAKSH CATERING SERVICES</span>
        <span className="w-8"></span>
      </div>
      <div className="my-4 space-y-4">
        <div>Offerings</div>
        <div>
          <Images src="/images/Catering.jpg" alt="Wedding Catering Picture" />
          <span>Wedding Catering</span>
        </div>
        <div>
          <Images src="/images/Catering.jpg" alt="Wedding Catering Picture" />
          <span>Dinner Party</span>
        </div>
        <div>
          <Images src="/images/Catering.jpg" alt="Wedding Catering Picture" />
          <span>Bhandhara</span>
        </div>
      </div>
      <div className="my-4 space-y-4">
        <span>Events</span>
        <div>
          <Images src="/images/Catering.jpg" alt="Wedding Catering Picture" />
          <span>Wedding Event</span>
        </div>
        <div>
          <Images src="/images/Catering.jpg" alt="Wedding Catering Picture" />
          <span>Mundan</span>
        </div>
        <div>
          <Images src="/images/Catering.jpg" alt="Wedding Catering Picture" />
          <span>Bhandhara</span>
        </div>
        <div>
          <Images src="/images/Catering.jpg" alt="Wedding Catering Picture" />
          <span>Reception</span>
        </div>
      </div>
      <div className="my-4 space-y-4">
        <span>Staff Members</span>
        <div>
          <Images src="/images/Staff.jpg" alt="Wedding Catering Picture" />
          <span>name</span>
        </div>
        <div>
          <Images src="/images/Staff.jpg" alt="Wedding Catering Picture" />
          <span>name</span>
        </div>
        <div>
          <Images src="/images/Staff.jpg" alt="Wedding Catering Picture" />
          <span>name</span>
        </div>
        <div>
          <Images src="/images/Staff.jpg" alt="Wedding Catering Picture" />
          <span>name</span>
        </div>
        <div>
          <Images src="/images/Staff.jpg" alt="Wedding Catering Picture" />
          <span>name</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span>Contact Us</span>
        <span>Phone No</span>
        <span>Email</span>
        <span>Office Address</span>
        <span>Instagram</span>
      </div>
    </div>
  );
};

export default App;
