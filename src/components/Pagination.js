import { useState } from "react";

export const Pagination = ({
  totalEmployees,
  employeesPerPage,
  changePage,
}) => {
  const numbers = [];

  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    numbers.push(i);
  }

  const [isBig, setIsBig] = useState(false);

  const handleButtonBig = () => {
    setIsBig(true);
  };

  const handleButtonSmall = () => {
    setIsBig(false);
  };

  return (
    <nav>
      <ul className="pagination">
        {numbers.map((number) => (
          <li className="page-item" key={number}>
            <a
              href="#"
              className={`page-link ${isBig ? "big" : "small"} `}
              onClick={() => changePage(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
      <div className="container my-5">
        <span>Choose Pagination size</span>
        <button
          className="btn btn-primary small mx-2"
          onClick={handleButtonSmall}>
          Small
        </button>
        <button className="btn btn-primary" onClick={handleButtonBig}>
          Big
        </button>
      </div>
    </nav>
  );
};
