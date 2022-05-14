angular.module("appModule").service("Employees", EmployeesService);

function EmployeesService($http) {
  "ngInject";

  const getEmployees = (params) => {
    const employeesUrl = "https://fe-task.getsandbox.com/employees";

    return $http.get(employeesUrl, { params });
  };

  return {
    getEmployees,
  };
}
