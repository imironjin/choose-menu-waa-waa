import styled from 'styled-components/macro';

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const Spinner = styled.div``;

const StDescription = styled.p`
  font-weight: 700;
  color: var(--primary300);
`;

const LoadingSpinner = () => {
  return (
    <LoadingOverlay>
      <Spinner aria-label="Loading-Spinner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle cx="75" cy="50" fill="#ffa500" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.9166666666666666s"
            ></animate>
            <animate
              attributeName="fill"
              values="#ffa500;#ffa500;#ff7300;#ffa500;#ffa500"
              repeatCount="indefinite"
              dur="1s"
              begin="-0.9166666666666666s"
            ></animate>
          </circle>
          <circle cx="71.65063509461098" cy="62.5" fill="#ffa500" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.8333333333333334s"
            ></animate>
            <animate
              attributeName="fill"
              values="#ffa500;#ffa500;#ff7300;#ffa500;#ffa500"
              repeatCount="indefinite"
              dur="1s"
              begin="-0.8333333333333334s"
            ></animate>
          </circle>
          <circle cx="62.5" cy="71.65063509461096" fill="#ffa500" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.75s"
            ></animate>
            <animate
              attributeName="fill"
              values="#ffa500;#ffa500;#ff7300;#ffa500;#ffa500"
              repeatCount="indefinite"
              dur="1s"
              begin="-0.75s"
            ></animate>
          </circle>
          <circle cx="50" cy="75" fill="#ffa500" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.6666666666666666s"
            ></animate>
            <animate
              attributeName="fill"
              values="#ffa500;#ffa500;#ff7300;#ffa500;#ffa500"
              repeatCount="indefinite"
              dur="1s"
              begin="-0.6666666666666666s"
            ></animate>
          </circle>
          <circle
            cx="37.50000000000001"
            cy="71.65063509461098"
            fill="#ffa500"
            r="5"
          >
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.5833333333333334s"
            ></animate>
            <animate
              attributeName="fill"
              values="#ffa500;#ffa500;#ff7300;#ffa500;#ffa500"
              repeatCount="indefinite"
              dur="1s"
              begin="-0.5833333333333334s"
            ></animate>
          </circle>
          <circle cx="28.34936490538903" cy="62.5" fill="#ffa500" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.5s"
            ></animate>
            <animate
              attributeName="fill"
              values="#ffa500;#ffa500;#ff7300;#ffa500;#ffa500"
              repeatCount="indefinite"
              dur="1s"
              begin="-0.5s"
            ></animate>
          </circle>
          <circle cx="25" cy="50" fill="#ffa500" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.4166666666666667s"
            ></animate>
            <animate
              attributeName="fill"
              values="#ffa500;#ffa500;#ff7300;#ffa500;#ffa500"
              repeatCount="indefinite"
              dur="1s"
              begin="-0.4166666666666667s"
            ></animate>
          </circle>
          <circle
            cx="28.34936490538903"
            cy="37.50000000000001"
            fill="#ffa500"
            r="5"
          >
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.3333333333333333s"
            ></animate>
            <animate
              attributeName="fill"
              values="#ffa500;#ffa500;#ff7300;#ffa500;#ffa500"
              repeatCount="indefinite"
              dur="1s"
              begin="-0.3333333333333333s"
            ></animate>
          </circle>
          <circle
            cx="37.499999999999986"
            cy="28.34936490538904"
            fill="#ffa500"
            r="5"
          >
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.25s"
            ></animate>
            <animate
              attributeName="fill"
              values="#ffa500;#ffa500;#ff7300;#ffa500;#ffa500"
              repeatCount="indefinite"
              dur="1s"
              begin="-0.25s"
            ></animate>
          </circle>
          <circle cx="49.99999999999999" cy="25" fill="#ffa500" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.16666666666666666s"
            ></animate>
            <animate
              attributeName="fill"
              values="#ffa500;#ffa500;#ff7300;#ffa500;#ffa500"
              repeatCount="indefinite"
              dur="1s"
              begin="-0.16666666666666666s"
            ></animate>
          </circle>
          <circle cx="62.5" cy="28.349364905389034" fill="#ffa500" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.08333333333333333s"
            ></animate>
            <animate
              attributeName="fill"
              values="#ffa500;#ffa500;#ff7300;#ffa500;#ffa500"
              repeatCount="indefinite"
              dur="1s"
              begin="-0.08333333333333333s"
            ></animate>
          </circle>
          <circle
            cx="71.65063509461096"
            cy="37.499999999999986"
            fill="#ffa500"
            r="5"
          >
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            ></animate>
            <animate
              attributeName="fill"
              values="#ffa500;#ffa500;#ff7300;#ffa500;#ffa500"
              repeatCount="indefinite"
              dur="1s"
              begin="0s"
            ></animate>
          </circle>
        </svg>
      </Spinner>
      <StDescription>메뉴를 추천중입니다..</StDescription>
    </LoadingOverlay>
  );
};
export default LoadingSpinner;
