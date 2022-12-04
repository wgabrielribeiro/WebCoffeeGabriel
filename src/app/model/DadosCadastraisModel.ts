export class DadosCadastraisModel {
  Nome?: string;
  Dt_Nascimento?: Date;
  Usuario?: string;
  DOCUMENTO?: string;
  TELEFONE?: string;
  EMAIL?: string;
  RUA?: string;
  NUMERO?: string;
  COMPLEMENTO?: string;
  CEP?: string;
  BAIRRO?: string;
  CIDADE?: string;
  ESTADO?: string;
  PAIS?: string;

}

class Cadastro{
  DOCUMENTO?: string;
  TELEFONE?: string;
  EMAIL?: string;
  UsuarioCad?: string;
}

class Endereco{
  RUA?: string;
  NUMERO?: string;
  complemento?: string;
  CEP?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  pais?: string;
  UsuarioEnd?: string;
}
