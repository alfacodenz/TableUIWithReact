export const Pagination = ({
  totalEmployees,
  employeesPerPage,
  changePage,
}) => {
  const numbers = [];

  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    numbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {numbers.map((number) => (
          <li className="page-item" key={number}>
            <a
              href="#"
              className="page-link"
              onClick={() => changePage(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
