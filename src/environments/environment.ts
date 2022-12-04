// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endPointLogin: "https://coffeeapiautenticacao.azurewebsites.net/api/LoginCoffee/",
  endPointCadastro: "https://coffeeapiautenticacao.azurewebsites.net/api/Cadastros/",
  // endPointCadastro: "http://192.168.10.223:30/ApiAutenticacao/api/Cadastros/",
  // endPointLogin: "http://192.168.10.223:30/ApiAutenticacao/api/LoginCoffee/",
  // endPointCadastro: "https://localhost:5001/api/Cadastros/",
  // endPointProdutos: 'https://localhost:5001/api/v1.0/ProdutosCarrinho/',
  // endPointCarregamentoProdutos: 'https://localhost:5001/api/v1.0/Produtos/'
  // endPointProdutos: 'http://192.168.10.223:30/ApiCoffee/api/v1.0/ProdutosCarrinho/',
  // endPointCarregamentoProdutos: 'http://192.168.10.223:30/ApiCoffee/api/v1.0/Produtos/'

  endPointProdutos: 'https://coffeeutilidadesapi.azurewebsites.net/api/v1.0/ProdutosCarrinho/',
  endPointCarregamentoProdutos: 'https://coffeeutilidadesapi.azurewebsites.net/api/v1.0/Produtos/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
