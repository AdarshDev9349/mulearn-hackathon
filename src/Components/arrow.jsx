import { Link } from 'react-scroll';
import './App.css';
const ScrollToBottom = () => {
  return (
    <div className="grid ">
      <a
        href="#"
        aria-label="Scroll to next section"
       
        className="absolute w-4 bottom-12  transform translate-x-1/2 scale-125 cursor-pointer animate-pulsee h-2"
      >
        <Link className="contents" to="about" smooth={true} duration={200}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3.5}
            stroke="rgba(255, 255, 255, 1)"
            className="space"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="rgba(255, 255, 255, 0.5)"
            className="spacex"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="rgba(255, 255, 255, 0.25)"
            className="spacey"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
      </a>
    </div>
  );
};

export default ScrollToBottom;
