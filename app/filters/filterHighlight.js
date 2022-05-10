export const filterHighlight = angular
  .module('appModule.filters.filterHighlight', [])
  .filter('filterHighlight', ($sce) => (input, filter, className) => {
    return $sce.trustAs(
      'html',
      input.replace(
        new RegExp(`(${filter})`, 'gi'),
        `<span class="${className}">$1</span>`
      )
    );
  });
